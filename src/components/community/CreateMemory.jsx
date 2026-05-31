import { useState, useCallback } from 'react';
import { interact } from '../../utils/haptics';
import { MEMORY_TYPES } from '../../utils/communityHelpers';
import { formatTagLabel } from '../../utils/tagFilters';
import Icon from '../Icon';

const SUGGESTED_TAGS = [
  'milestone',
  'teething',
  'sleep',
  'feeding',
  'solids',
  'first-foods',
  'recipe-win',
  'real-talk',
  'smile',
  'weaning',
];

function CreateMemory({ onSubmit, defaultBabyAge }) {
  const [type, setType] = useState('moment');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [babyAge, setBabyAge] = useState(defaultBabyAge || '');
  const [selectedTags, setSelectedTags] = useState([]);
  const [error, setError] = useState('');

  const toggleTag = useCallback((tagId) => {
    interact('tap', 'selection');
    setSelectedTags((prev) =>
      prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError('Title and story are required.');
      return;
    }
    interact('celebrate', 'success');
    onSubmit({
      type,
      title: title.trim(),
      content: content.trim(),
      babyAge: babyAge.trim() || undefined,
      tags: selectedTags,
    });
    setTitle('');
    setContent('');
    setSelectedTags([]);
    setError('');
  };

  return (
    <form className="create-memory-form" onSubmit={handleSubmit}>
      <fieldset className="memory-type-fieldset">
        <legend className="sr-only">Memory type</legend>
        <div className="memory-type-grid">
          {MEMORY_TYPES.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`memory-type-option${type === t.id ? ' active' : ''}`}
              onClick={() => {
                interact('tap', 'selection');
                setType(t.id);
              }}
            >
              <Icon name={t.icon} size={20} />
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <label className="community-field">
        <span>Title</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="First tooth, sleep win, recipe they loved…"
          required
        />
      </label>

      <label className="community-field">
        <span>Your story</span>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share what happened, what helped, or what you wish you'd known…"
          rows={5}
          required
        />
      </label>

      <label className="community-field">
        <span>Baby age (optional)</span>
        <input
          type="text"
          value={babyAge}
          onChange={(e) => setBabyAge(e.target.value)}
          placeholder="e.g. 6 months"
        />
      </label>

      <div className="community-field">
        <span>Tags</span>
        <p className="community-field-hint">Tap tags that fit your post — they help other moms find it in the feed.</p>
        <div className="community-filters tag-filter-bar create-tag-picker" role="group" aria-label="Suggested tags">
          {SUGGESTED_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`tag-filter-btn${selectedTags.includes(tag) ? ' active' : ''}`}
              aria-pressed={selectedTags.includes(tag)}
              onClick={() => toggleTag(tag)}
            >
              <span className="tag-filter-hash" aria-hidden="true">#</span>
              {formatTagLabel(tag)}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="community-form-error" role="alert">{error}</p>}

      <button type="submit" className="community-submit-btn">
        Share with moms
      </button>
    </form>
  );
}

export default CreateMemory;
