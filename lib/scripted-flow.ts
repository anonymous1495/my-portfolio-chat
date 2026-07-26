import flow from './scripted-flow.json';

export type Suggestion = { label: string; nodeId?: string };

type ScriptedNode = {
  question: string;
  answer: string;
  followUps: string[];
};

const nodes: Record<string, ScriptedNode> = flow.nodes;

export const STARTER_SUGGESTIONS: Suggestion[] = flow.starters
  .filter(id => id in nodes)
  .map(id => ({ label: nodes[id].question, nodeId: id }));

export function getNode(id: string): ScriptedNode | undefined {
  return nodes[id];
}

/** Follow-up chips for a node, minus anything already answered this conversation. */
export function getFollowUps(id: string, visited: Set<string>): Suggestion[] {
  const node = nodes[id];
  if (!node) return [];

  return node.followUps
    .filter(followUpId => followUpId in nodes && !visited.has(followUpId))
    .map(followUpId => ({ label: nodes[followUpId].question, nodeId: followUpId }));
}

function normalise(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const idsByQuestion = new Map(
  Object.entries(nodes).map(([id, node]) => [normalise(node.question), id]),
);

/** Match a typed question against the script, so common phrasings stay free too. */
export function matchQuestion(text: string): string | undefined {
  return idsByQuestion.get(normalise(text));
}
