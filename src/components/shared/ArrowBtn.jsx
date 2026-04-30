/**
 * ArrowBtn — text label + sliding gold arrow, gold underline.
 *
 * variants:
 *   'gold'   — gold text                        (any background)
 *   'ivory'  — ivory text                       (dark backgrounds)
 *   'dark'   — charcoal text, gold underline    (light backgrounds)
 *
 * Pass `href` for an <a>, omit for a <button>.
 */
export default function ArrowBtn({
  href,
  onClick,
  type = 'button',
  variant = 'gold',
  children,
}) {
  const inner = (
    <>
      <span className="btn__label">{children}</span>
      <span className="btn__arrow">→</span>
    </>
  );

  const cls = `btn btn--${variant}`;

  return href ? (
    <a href={href} className={cls}>{inner}</a>
  ) : (
    <button type={type} onClick={onClick} className={cls}>{inner}</button>
  );
}
