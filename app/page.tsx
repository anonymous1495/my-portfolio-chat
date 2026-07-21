'use client';
import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div style={{ maxWidth: 640, margin: '0 auto', padding: 24 }}>
      <div style={{ minHeight: 400, marginBottom: 16 }}>
        {messages.map(m => (
          <div key={m.id} style={{ marginBottom: 12 }}>
            <strong>{m.role === 'user' ? 'You' : 'Assistant'}</strong>
            <p>{m.content}</p>
          </div>
        ))}
        {isLoading && <p style={{ opacity: 0.5 }}>Thinking...</p>}
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask me anything..."
          style={{ flex: 1, padding: '8px 12px', borderRadius: 8, border: '1px solid #ccc' }}
        />
        <button type="submit" disabled={isLoading}>Send</button>
      </form>
    </div>
  );
}