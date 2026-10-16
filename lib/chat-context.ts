import { KNOWLEDGE } from './knowledge';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

const STOP_WORDS = new Set('a an and are about can do does for has her how i in is it me mr unali mrunali of on or she that the their this to was what when where which who with work would you'.split(' '));
const MAX_KNOWLEDGE_CHARS = 14000;
const MAX_HISTORY_CHARS = 5000;

function words(text: string) {
  return text.toLowerCase().match(/[a-z0-9]+/g)?.filter(word => word.length > 2 && !STOP_WORDS.has(word)) ?? [];
}

// Bound history as well as knowledge so longer conversations still fit the
// provider's input limit. Keep the latest question and most recent context.
export function getChatMessages(messages: ChatMessage[]): ChatMessage[] {
  const selected: ChatMessage[] = [];
  let remaining = MAX_HISTORY_CHARS;

  for (const message of messages.slice(-10).reverse()) {
    const content = message.content.trim().slice(0, Math.min(2000, remaining));
    if (content) {
      selected.unshift({ role: message.role, content });
      remaining -= content.length;
    }
    if (!remaining) break;
  }

  return selected;
}

export function getRelevantKnowledge(messages: ChatMessage[]): string {
  const [profile, projects = ''] = KNOWLEDGE.split('## PORTFOLIO PROJECTS');
  const [projectDetails, other = ''] = projects.split('## Other Information:');
  const essentials = `${profile}\n## Other Information:\n${other}`.trim();
  const terms = new Set(words(messages.slice(-3).map(message => message.content).join(' ')));
  let project = '';

  const chunks = projectDetails.split(/\n\s*\n/).flatMap((paragraph, index) => {
    if (paragraph.startsWith('### ')) {
      project = paragraph;
      return [];
    }
    if (!paragraph.trim()) return [];

    const bodyWords = new Set(words(paragraph));
    const titleWords = new Set(words(project));
    let score = 0;
    for (const term of terms) {
      if (bodyWords.has(term)) score += 1;
      if (titleWords.has(term)) score += 2;
    }
    // Include useful project overviews when there is no specific topic match.
    if (/\*\*(Project Summary|Results|Impact|Role)\*\*/.test(paragraph)) score += 0.5;
    return [{ index, score, text: `${project}\n${paragraph.trim()}` }];
  });

  let remaining = MAX_KNOWLEDGE_CHARS - essentials.length;
  const selected: typeof chunks = [];
  for (const chunk of chunks.sort((a, b) => b.score - a.score || a.index - b.index)) {
    if (chunk.text.length + 2 > remaining) continue;
    selected.push(chunk);
    remaining -= chunk.text.length + 2;
  }

  return [essentials, ...selected.sort((a, b) => a.index - b.index).map(chunk => chunk.text)].join('\n\n');
}
