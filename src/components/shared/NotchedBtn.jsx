import { useRef, useState, useEffect } from 'react';

/**
 * NotchedBtn — rectangle with top-left and bottom-right corners angled (chamfered).
 *
 * Filled variants clip the element directly and use a solid background.
 * Outline variants wrap in a <span> so the SVG border sits outside the
 * button's clip-path (preventing the SVG stroke from being clipped), while
 * the button's own clip-path still correctly masks the hover sweep.
 *
 * variants:
 *   'filled-gold'         — gold fill, charcoal text
 *   'filled-dark'    — charcoal fill, ivory text
 *   'filled-ivory'   — ivory fill, charcoal text
 *   'outline-gold'        — gold border, transparent bg, gold sweep on hover
 *   'outline-dark'   — charcoal border, transparent bg, dark sweep on hover
 *   'outline-ivory'  — ivory border, transparent bg, ivory sweep on hover
 *
 * Pass `href` for an <a>, omit for a <button>.
 */

const NOTCH = 10; // px — must match --notch in CSS

function pts(w, h) {
  if (!w || !h) return '';
  const n = NOTCH;
  return `${n},0 ${w},0 ${w},${h - n} ${w - n},${h} 0,${h} 0,${n}`;
}

const STROKE = {
  'outline-gold':       'var(--gold)',
  'outline-ivory': 'var(--ivory)',
  'outline-dark':  'var(--charcoal)',
};

export default function NotchedBtn({
  href,
  onClick,
  type = 'button',
  variant = 'filled-gold',
  children,
}) {
  const isOutline = variant.startsWith('outline');
  const btnRef = useRef(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!isOutline) return;
    const el = btnRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const b = el.getBoundingClientRect();
      setSize({ w: b.width, h: b.height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [isOutline]);

  const cls = `notched-btn notched-btn--${variant}`;

  if (isOutline) {
    const inner = <span className="notched-btn__text">{children}</span>;
    const btn = href
      ? <a href={href} ref={btnRef} className={cls}>{inner}</a>
      : <button type={type} onClick={onClick} ref={btnRef} className={cls}>{inner}</button>;

    return (
      <span className="notched-btn-wrap">
        {btn}
        {size.w > 0 && (
          <svg
            className="notched-btn__svg"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <polygon
              points={pts(size.w, size.h)}
              fill="none"
              stroke={STROKE[variant] ?? 'currentColor'}
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        )}
      </span>
    );
  }

  const inner = ['filled-gold', 'filled-dark', 'filled-ivory'].includes(variant)
    ? <span className="notched-btn__text">{children}</span>
    : children;

  return href
    ? <a href={href} className={cls}>{inner}</a>
    : <button type={type} onClick={onClick} className={cls}>{inner}</button>;
}
