import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';

const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });

type ChatMessage = { role: string; content: string };

// The model sees the whole conversation, but bounded so a long chat can't blow
// through Groq's tokens-per-minute limit. Raise these if suggestions feel short-sighted.
const MAX_MESSAGES = 24;
const MAX_CHARS_PER_MESSAGE = 400;

function buildTranscript(messages: ChatMessage[]) {
  return messages
    .slice(-MAX_MESSAGES)
    .map(m => ({
      role: m.role,
      content: m.content
        .replace(/\[\[image:[^\]]+\]\]/g, '') // image markers are noise here
        .replace(/\s+/g, ' ')
        .trim(),
    }))
    .filter(m => m.content.length > 0)
    .map(m => {
      const clipped =
        m.content.length > MAX_CHARS_PER_MESSAGE
          ? `${m.content.slice(0, MAX_CHARS_PER_MESSAGE)}…`
          : m.content;
      return `${m.role}: ${clipped}`;
    })
    .join('\n');
}

/**
 * The model usually returns a clean JSON array, but sometimes wraps it in prose
 * or a code fence. Scan for the first bracket group that parses into strings,
 * then fall back to pulling quoted questions out of the prose.
 */
function parseQuestions(raw: string): string[] {
  for (const candidate of raw.match(/\[[^[\]]*\]/g) ?? []) {
    try {
      const parsed: unknown = JSON.parse(candidate);
      if (!Array.isArray(parsed)) continue;

      const questions = parsed
        .filter((q): q is string => typeof q === 'string')
        .map(q => q.trim())
        .filter(Boolean);

      if (questions.length > 0) return questions;
    } catch {
      // Not JSON — keep looking.
    }
  }

  return (raw.match(/"([^"\n]{5,90}\?)"/g) ?? []).map(q => q.slice(1, -1).trim());
}

export async function POST(req: Request) {
  const { messages } = await req.json();
  const transcript = buildTranscript(Array.isArray(messages) ? messages : []);

  if (!transcript) return Response.json({ questions: [] });

  try {
    const result = await generateText({
      model: groq('llama-3.3-70b-versatile'),
      prompt: `Based on this conversation on Mrunali's portfolio site, suggest 3 short follow-up questions a visitor might naturally ask next.

Conversation so far:
${transcript}

Rules:
- Each question under 8 words
- Written from the visitor's point of view, about Mrunali
- Must not repeat anything already asked or already answered above
- Build on what the conversation has covered so far

Respond with ONLY a JSON array of 3 strings and nothing else.
Example: ["Question one?", "Question two?", "Question three?"]`,
    });

    return Response.json({ questions: parseQuestions(result.text).slice(0, 3) });
  } catch (error) {
    console.error('[suggestions] generation failed:', error);
    return Response.json({ questions: [] });
  }
}
