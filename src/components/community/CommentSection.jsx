import { useState } from 'react';
import { interact } from '../../utils/haptics';
import { formatRelativeTime } from '../../utils/communityHelpers';

function CommentSection({ comments, onAddComment }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    interact('tap', 'light');
    onAddComment(trimmed);
    setText('');
  };

  return (
    <div className="comment-section">
      {comments.length > 0 && (
        <ul className="comment-list">
          {comments.map((c) => (
            <li key={c.id} className="comment-item">
              <div className="comment-meta">
                <span className="comment-author">{c.author}</span>
                <span className="comment-time">{formatRelativeTime(c.timestamp)}</span>
              </div>
              <p className="comment-text">{c.text}</p>
            </li>
          ))}
        </ul>
      )}
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="comment-input"
          placeholder="Add a comment…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="Comment"
        />
        <button type="submit" className="comment-submit" disabled={!text.trim()}>
          Post
        </button>
      </form>
    </div>
  );
}

export default CommentSection;
