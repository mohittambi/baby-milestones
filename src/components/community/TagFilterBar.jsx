import { interact } from '../../utils/haptics';

/**
 * @param {{
 *   options: Array<{ id: string, label: string, count?: number }>,
 *   selected: string,
 *   onSelect: (id: string) => void,
 *   label: string,
 *   className?: string,
 * }} props
 */
function TagFilterBar({ options, selected, onSelect, label, className = '' }) {
  if (options.length <= 1) return null;

  const handleSelect = (id) => {
    interact('tap', 'selection');
    onSelect(id);
  };

  return (
    <div
      className={`community-filters tag-filter-bar${className ? ` ${className}` : ''}`}
      role="tablist"
      aria-label={label}
    >
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          role="tab"
          aria-selected={selected === opt.id}
          className={`tag-filter-btn${selected === opt.id ? ' active' : ''}`}
          onClick={() => handleSelect(opt.id)}
        >
          {opt.id !== 'all' && <span className="tag-filter-hash" aria-hidden="true">#</span>}
          {opt.label}
          {opt.count != null && opt.id !== 'all' && (
            <span className="tag-filter-count">{opt.count}</span>
          )}
        </button>
      ))}
    </div>
  );
}

export default TagFilterBar;
