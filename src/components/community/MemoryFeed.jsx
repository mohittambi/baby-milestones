import { useMemo, useState } from 'react';
import MemoryCard from './MemoryCard';
import TagFilterBar from './TagFilterBar';
import Icon from '../Icon';
import { buildTagOptions } from '../../utils/tagFilters';
import { MEMORY_TYPE_FILTERS, filterMemory } from '../../utils/memoryFilters';

function MemoryFeed({ memories, onReact, onAddComment }) {
  const [typeFilter, setTypeFilter] = useState('all');
  const [tagFilter, setTagFilter] = useState('all');

  const tagOptions = useMemo(
    () => buildTagOptions(memories, (m) => m.tags, { allLabel: 'All tags' }),
    [memories]
  );

  const filtered = useMemo(() => {
    const sorted = [...memories].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    return sorted.filter((m) => filterMemory(m, { type: typeFilter, tag: tagFilter }));
  }, [memories, typeFilter, tagFilter]);

  const hasFilters = typeFilter !== 'all' || tagFilter !== 'all';

  if (memories.length === 0) {
    return (
      <div className="community-empty">
        <Icon name="speech-bubble" size={48} className="community-empty-icon" />
        <h3>Be the first to share!</h3>
        <p>Tap <strong>+ Create</strong> to post a memory, tip, or milestone moment.</p>
      </div>
    );
  }

  return (
    <div className="memory-feed">
      <div className="community-section-filters">
        <p className="community-filter-count">
          {filtered.length === memories.length
            ? `${memories.length} posts`
            : `${filtered.length} of ${memories.length} posts`}
        </p>

        <div className="community-filters" role="tablist" aria-label="Post type">
          {MEMORY_TYPE_FILTERS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={typeFilter === t.id}
              className={`community-filter-btn${typeFilter === t.id ? ' active' : ''}`}
              onClick={() => setTypeFilter(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <TagFilterBar
          options={tagOptions}
          selected={tagFilter}
          onSelect={setTagFilter}
          label="Memory tags"
        />

        {hasFilters && (
          <button
            type="button"
            className="community-clear-filters"
            onClick={() => {
              setTypeFilter('all');
              setTagFilter('all');
            }}
          >
            Clear filters
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="community-empty community-empty-inline">
          <p>No posts match these filters — try another type or tag.</p>
        </div>
      ) : (
        filtered.map((memory) => (
          <MemoryCard
            key={memory.id}
            memory={memory}
            onReact={onReact}
            onAddComment={onAddComment}
          />
        ))
      )}
    </div>
  );
}

export default MemoryFeed;
