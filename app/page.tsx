'use client';
import { useState } from 'react';

type Message = { role: 'user' | 'assistant'; content: string };

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: inputValue };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const text = await response.text();
      setMessages([...updatedMessages, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: 640, margin: '60px auto', padding: '0 24px' }}>
      <div style={{ marginBottom: 24, minHeight: 200 }}>
        {messages.length === 0 && (
          <p style={{ color: '#888' }}>No messages yet. Say hello!</p>
        )}
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 16 }}>
            <strong>{m.role === 'user' ? 'You' : 'Assistant'}:</strong>
            <p style={{ margin: '4px 0 0' }}>{m.content}</p>
          </div>
        ))}
        {isLoading && <p style={{ color: '#888' }}>Thinking...</p>}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') sendMessage(); }}
          placeholder="Ask me anything..."
          style={{ flex: 1, padding: '8px 12px', borderRadius: 8, border: '1px solid #ccc', fontSize: 15 }}
        />
        <button onClick={sendMessage} disabled={isLoading}>
          Send
        </button>
      </div>
    </main>
  );
}