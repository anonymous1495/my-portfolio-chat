'use client';
import { useRef, useState } from 'react';
import {
  STARTER_SUGGESTIONS,
  getFollowUps,
  getNode,
  matchQuestion,
  type Suggestion,
} from '@/lib/scripted-flow';

type Message = { role: 'user' | 'assistant'; content: string };

// Scripted answers are instant, so hold them briefly behind "Thinking…" to
// match the pace of a real reply.
const SCRIPTED_REPLY_DELAY_MS = 1000;

const VALID_IMAGES = [
  '/projects/watercolour_face_art.png',
  '/projects/oil_pastels_face_art.png',
  '/projects/pencil_sketch_face_art.png',
];

function MessageContent({ text }: { text: string }) {
  const parts = text.split(/(\[\[image:[^\]]+\]\])/g);

  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\[\[image:([^\]]+)\]\]$/);
        if (!match) {
          return part ? <span key={i}>{part}</span> : null;
        }

        const src = match[1].trim();
        if (!VALID_IMAGES.includes(src)) return null;

        return (
          <img
            key={i}
            src={src}
            alt=""
            style={{
              display: 'block',
              width: '100%',
              borderRadius: 12,
              margin: '10px 0',
              border: '1px solid #eee',
            }}
          />
        );
      })}
    </>
  );
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const visitedNodes = useRef(new Set<string>());

  const fetchSuggestions = async (convo: Message[]) => {
    try {
      const res = await fetch('/api/suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: convo }),
      });
      const data = await res.json();
      setSuggestions((data.questions ?? []).map((label: string) => ({ label })));
    } catch {
      setSuggestions([]);
    }
  };

  const sendMessage = async (text?: string, nodeId?: string) => {
    const content = (text ?? inputValue).trim();
    if (!content || isLoading) return;

    const updatedMessages = [...messages, { role: 'user' as const, content }];
    setMessages(updatedMessages);
    setInputValue('');
    setSuggestions([]);
    setIsLoading(true);

    // Scripted path: answer straight from lib/scripted-flow.json, no model call.
    const scriptedId = nodeId ?? matchQuestion(content);
    const scriptedNode = scriptedId ? getNode(scriptedId) : undefined;

    if (scriptedId && scriptedNode) {
      visitedNodes.current.add(scriptedId);
      await new Promise(resolve => setTimeout(resolve, SCRIPTED_REPLY_DELAY_MS));

      const withReply: Message[] = [
        ...updatedMessages,
        { role: 'assistant', content: scriptedNode.answer },
      ];
      setMessages(withReply);
      setIsLoading(false);

      const followUps = getFollowUps(scriptedId, visitedNodes.current);
      if (followUps.length > 0) {
        setSuggestions(followUps);
      } else {
        // End of the scripted branch — hand the conversation back to the model.
        fetchSuggestions(withReply);
      }
      return;
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      if (!response.ok) throw new Error(`Chat request failed (${response.status}).`);

      const reply = (await response.text()).trim();
      if (!reply) throw new Error('The chatbot returned an empty reply.');
      const withReply: Message[] = [...updatedMessages, { role: 'assistant', content: reply }];
      setMessages(withReply);
      fetchSuggestions(withReply);
    } catch (error) {
      console.error('Error:', error);
      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const chipStyle = {
    padding: '8px 14px',
    borderRadius: 20,
    border: '1px solid #ddd',
    background: 'transparent',
    fontSize: 14,
    cursor: 'pointer',
    textAlign: 'left' as const,
    color: '#444',
  };

  return (
    <main
      style={{
        maxWidth: 640,
        margin: '0 auto',
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 16 }}>
        {messages.length === 0 && (
          <div style={{ paddingTop: 40 }}>
            <h1 style={{ fontSize: 24, fontWeight: 500, margin: '0 0 24px' }}>
              Hey there, I&apos;m MrunaliLLM.
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
              {STARTER_SUGGESTIONS.map(s => (
                <button key={s.nodeId} onClick={() => sendMessage(s.label, s.nodeId)} style={chipStyle}>
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: 12,
            }}
          >
            <div
              style={{
                maxWidth: '80%',
                padding: '10px 14px',
                borderRadius: 16,
                background: m.role === 'user' ? '#111' : '#f4f4f4',
                color: m.role === 'user' ? '#fff' : '#111',
                fontSize: 15,
                lineHeight: 1.5,
                whiteSpace: 'pre-wrap',
              }}
            >
              <MessageContent text={m.content} />
            </div>
          </div>
        ))}

        {isLoading && (
          <div style={{ color: '#888', fontSize: 14, padding: '4px 2px' }}>Thinking…</div>
        )}

        {!isLoading && suggestions.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
            {suggestions.map(s => (
              <button
                key={s.nodeId ?? s.label}
                onClick={() => sendMessage(s.label, s.nodeId)}
                style={{ ...chipStyle, fontSize: 13 }}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: 8, paddingTop: 12, borderTop: '1px solid #eee' }}>
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') sendMessage(); }}
          placeholder="Ask about Mrunali..."
          style={{
            flex: 1,
            padding: '10px 14px',
            borderRadius: 12,
            border: '1px solid #ddd',
            fontSize: 15,
            outline: 'none',
          }}
        />
        <button
          onClick={() => sendMessage()}
          disabled={isLoading}
          style={{
            padding: '10px 18px',
            borderRadius: 12,
            border: 'none',
            background: '#111',
            color: '#fff',
            fontSize: 15,
            cursor: isLoading ? 'default' : 'pointer',
            opacity: isLoading ? 0.5 : 1,
          }}
        >
          Send
        </button>
      </div>
    </main>
  );
}
