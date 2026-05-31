import { resolveIconSrc } from '../utils/iconRegistry';

/**
 * Renders a PNG icon from /public/images/emojis/ (no native emoji).
 * @param {{ name: string, size?: number, className?: string, label?: string }} props
 */
function Icon({ name, size = 20, className = '', label }) {
  const src = resolveIconSrc(name);
  if (!src) return null;

  return (
    <img
      src={src}
      alt={label ?? ''}
      aria-hidden={label ? undefined : true}
      className={`app-icon${className ? ` ${className}` : ''}`}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  );
}

export default Icon;
