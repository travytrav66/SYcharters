/**
 * Placeholder — striped dev stand-in, or a real image when `src` is provided.
 *
 * @param {string}  label  alt text / dev label
 * @param {string}  src    optional image URL — renders <img> instead of stripes
 * @param {object}  style  inline styles forwarded to the wrapper
 * @param {string}  className  extra classes on the wrapper
 */
export default function Placeholder({ label, src, style = {}, className = '' }) {
  if (src) {
    return (
      <div className={`img-placeholder ${className}`} style={style}>
        <img src={src} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
    );
  }

  const id = `stripe-${label.slice(0, 4).replace(/\s/g, '')}`;
  return (
    <div className={`img-placeholder ${className}`} style={style}>
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id={id} patternUnits="userSpaceOnUse" width="14" height="14" patternTransform="rotate(45)">
            <rect width="14" height="14" fill="var(--warm-mid)" />
            <rect width="1" height="14" fill="var(--charcoal)" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      <span>{label}</span>
    </div>
  );
}
