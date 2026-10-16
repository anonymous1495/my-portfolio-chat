import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';
import { INSTRUCTIONS, IMAGES } from '@/lib/knowledge';
import { getChatMessages, getRelevantKnowledge } from '@/lib/chat-context';

const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages) || !messages.length || messages.some(message =>
      !message || !['user', 'assistant'].includes(message.role) || typeof message.content !== 'string'
    )) {
      return Response.json({ error: 'Please send a question.' }, { status: 400 });
    }
    const conversation = getChatMessages(messages);

    // The client reads the complete reply, so await generation here to catch
    // provider failures before sending a successful response.
    const { text } = await generateText({
      model: groq('qwen/qwen3.8-27b'),
      system: `You are MrunaliLLM, a friendly assistant on Mrunali Bhangale's portfolio website.

${INSTRUCTIONS}

${IMAGES}

Here is relevant information about Mrunali:

${getRelevantKnowledge(conversation)}`,
      messages: conversation,
    });

    if (!text.trim()) throw new Error('The model returned an empty reply.');

    return new Response(text, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } catch (error) {
    console.error('[chat] generation failed:', error instanceof Error ? error.message : 'Unknown error');
    return Response.json(
      { error: 'Sorry, I couldn’t answer that right now. Please try again in a moment.' },
      { status: 502 },
    );
  }
}
