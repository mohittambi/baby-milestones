/**
 * Shared select — see docs/ui-design.md
 */
function Select({
  id,
  label,
  value,
  onChange,
  options,
  disabled = false,
  className = '',
  'aria-label': ariaLabel,
}) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <label className={`coral-select ${className}`.trim()} htmlFor={id}>
      {label ? <span className="coral-select-label">{label}</span> : null}
      <span className="coral-select-wrap">
        <select
          id={id}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          aria-label={ariaLabel || label || undefined}
          className="coral-select-native"
        >
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              disabled={opt.disabled}
            >
              {opt.label}
            </option>
          ))}
        </select>
        <span className="coral-select-chevron" aria-hidden="true">
          ▾
        </span>
      </span>
    </label>
  );
}

export default Select;
