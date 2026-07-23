import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';

const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  const { messages } = await req.json();

  const transcript = messages
    .slice(-4)
    .map((m: { role: string; content: string }) => `${m.role}: ${m.content}`)
    .join('\n');

  const result = await generateText({
    model: groq('llama-3.3-70b-versatile'),
    prompt: `Based on this conversation on Mrunali's portfolio site, suggest 3 short follow-up questions a visitor might naturally ask next.

Conversation:
${transcript}

Rules:
- Each question under 8 words
- Written from the visitor's point of view
- Don't repeat what was already asked
- Return ONLY a JSON array of 3 strings, nothing else

Example format: ["Question one?", "Question two?", "Question three?"]`,
  });

  try {
    const cleaned = result.text.replace(/```json|```/g, '').trim();
    const questions = JSON.parse(cleaned);
    return Response.json({ questions: questions.slice(0, 3) });
  } catch {
    return Response.json({ questions: [] });
  }
}