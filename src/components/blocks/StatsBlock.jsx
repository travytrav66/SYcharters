import useReveal from '../../hooks/useReveal';

/**
 * StatsBlock — a row of large stat numbers with labels.
 *
 * className modifiers:
 *   bg-ivory | bg-champagne | bg-charcoal | bg-dark
 *   cols-2 | cols-3 | cols-4
 *   block--sm | block--lg
 *
 * @param {string}  className   modifier classes
 * @param {string}  eyebrow     small caps label (optional)
 * @param {node}    headline    section heading (optional)
 * @param {array}   stats       [{ value, label, detail? }]
 */
export default function StatsBlock({
  className = 'bg-charcoal cols-3',
  eyebrow,
  headline,
  stats = [],
}) {
  const [ref, vis] = useReveal();

  return (
    <section className={`block block-stats ${className}`}>
      <div className="container">
        <div ref={ref}>

          {(eyebrow || headline) && (
            <div className={`stats-hd reveal reveal--fade${vis ? ' is-visible' : ''}`}>
              {eyebrow && <div className="eyebrow">{eyebrow}</div>}
              {headline && <h2 className="block-hd__headline">{headline}</h2>}
            </div>
          )}

          <div className="stats__grid">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`stat reveal reveal--quick${vis ? ' is-visible' : ''}`}
                style={{ '--delay': `${i * 0.12}s` }}
              >
                <div className="stat__value">{s.value}</div>
                <div className="stat__rule" />
                <div className="stat__label">{s.label}</div>
                {s.detail && <div className="stat__detail">{s.detail}</div>}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
