import useReveal from '../../hooks/useReveal';
import GoldLine from '../shared/GoldLine';
import ArrowBtn from '../shared/ArrowBtn';

/**
 * CenteredBlock — full-width centered headline + body + optional CTA.
 *
 * className modifiers:
 *   bg-ivory | bg-champagne | bg-gold | bg-charcoal | bg-dark
 *   narrow      — max-width 560px
 *   wide        — max-width 960px
 *   block--sm   — reduced vertical padding
 *   block--lg   — increased vertical padding
 *
 * @param {string}  className   modifier classes
 * @param {string}  eyebrow     small caps label above headline
 * @param {node}    headline    main heading
 * @param {string}  body        paragraph text
 * @param {object|object[]}  cta  { label, href, variant? } or array of same — omit to hide
 * @param {boolean} divider     show gold divider line (default true)
 */
export default function CenteredBlock({
  className = 'bg-ivory',
  eyebrow,
  headline,
  body,
  cta,
  divider = true,
}) {
  const [ref, vis] = useReveal();
  const isDark = className.includes('bg-charcoal') || className.includes('bg-dark');
  const btnVariant = isDark ? 'gold' : 'dark';
  const ctas = cta ? (Array.isArray(cta) ? cta : [cta]) : [];

  return (
    <section className={`block block-centered ${className}`}>
      <div className="container">
        <div
          ref={ref}
          className={`centered__inner reveal${vis ? ' is-visible' : ''}`}
        >
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}

          <h2 className="centered__headline">{headline}</h2>

          {divider && <GoldLine />}

          {body && (
            <p className="centered__body body-lg">{body}</p>
          )}

          {ctas.length > 0 && (
            <div className="btns">
              {ctas.map((c, i) => (
                <ArrowBtn key={i} href={c.href} variant={c.variant ?? btnVariant}>{c.label}</ArrowBtn>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
