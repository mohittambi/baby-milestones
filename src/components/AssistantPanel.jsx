import { useState } from 'react';
import { matchAssistantQuery } from '../utils/assistantMatch';
import { interact } from '../utils/haptics';

function AssistantPanel({ currentMonth, selectedMonth }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);

  const contextMonth = selectedMonth ?? currentMonth ?? null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    interact('tap', 'light');
    const result = matchAssistantQuery(query, { currentMonth, selectedMonth });
    setResponse(result);
  };

  const handleToggle = () => {
    interact('tap', 'light');
    setOpen((o) => !o);
  };

  return (
    <>
      <button
        type="button"
        className="assistant-fab"
        onClick={handleToggle}
        aria-expanded={open}
        aria-label={open ? 'Close parenting assistant' : 'Open parenting assistant'}
      >
        {open ? '✕' : '💬'}
      </button>

      {open && (
        <div className="assistant-panel" role="dialog" aria-label="Parenting assistant">
          <div className="assistant-panel-header">
            <h3>Parenting Assistant</h3>
            <p className="assistant-panel-sub">
              Keyword-based tips — not a substitute for medical advice.
            </p>
            {contextMonth != null && (
              <p className="assistant-context">Answering for Month {contextMonth}</p>
            )}
          </div>

          <form className="assistant-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. not taking feed, teething, sleep regression…"
              aria-label="Ask the assistant"
            />
            <button type="submit">Ask</button>
          </form>

          {response && (
            <div className="assistant-response">
              <h4>{response.title}</h4>
              {response.monthUsed != null && (
                <p className="assistant-context">Customized for Month {response.monthUsed}</p>
              )}
              {response.body.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default AssistantPanel;
