import useReveal from '../../hooks/useReveal';

/**
 * PillarBlock — icon + title + rule + body grid of trust pillars.
 *
 * className modifiers:
 *   bg-ivory | bg-champagne | bg-charcoal | bg-dark
 *   cols-2 | cols-3 | cols-4
 *   pillars--inline  — icon sits left of the text instead of above
 *   block--sm
 *
 * @param {string}  className  modifier classes
 * @param {array}   pillars    [{ icon, title, body }]
 */
export default function PillarBlock({
  className = 'bg-charcoal cols-4',
  pillars = [],
  align = 'left',
}) {
  const [ref, vis] = useReveal();

  return (
    <section className={`block block-pillars ${className}${align === 'center' ? ' pillars--center' : ''}`}>
      <div className="container">
        <div ref={ref} className="pillars__grid">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`pillar reveal reveal--quick${vis ? ' is-visible' : ''}`}
              style={{ '--delay': `${i * 0.12}s` }}
            >
              <div className="pillar__icon">{p.icon}</div>
              <div className="pillar__text">
                <h3 className="pillar__title">{p.title}</h3>
                <div className="pillar__rule" />
                <p className="pillar__body body-md">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
