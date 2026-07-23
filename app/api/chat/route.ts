import { createGroq } from '@ai-sdk/groq';
import { streamText } from 'ai';
import { KNOWLEDGE, INSTRUCTIONS } from '@/lib/knowledge';

const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: groq('llama-3.3-70b-versatile'),
    system: `You are MrunaliLLM, a friendly assistant on Mrunali Bhangale's portfolio website.

${INSTRUCTIONS}

Here is everything you know about Mrunali:

${KNOWLEDGE}`,
    messages,
  });

  return result.toTextStreamResponse();
}