import useReveal from '../../hooks/useReveal';
import NotchedBtn from '../shared/NotchedBtn';
import Placeholder from '../shared/Placeholder';

/**
 * CardGridBlock — header + grid of icon/title/body cards.
 *
 * className modifiers:
 *   bg-ivory | bg-champagne | bg-charcoal | bg-dark
 *   cols-2 | cols-3 | cols-4
 *   block--sm | block--lg
 *
 * @param {string}  className   modifier classes
 * @param {string}  eyebrow     small caps label above headline
 * @param {node}    headline    section heading
 * @param {string}  align       '' (left, default) | 'center'
 * @param {object}  cta         { label, href } — filled-gold gold NotchedBtn; right of headline (left) or below (center)
 * @param {array}   cards       [{ icon?, image?, imageSrc?, title, body }] — image/imageSrc takes priority over icon
 * @param {boolean} hover       enable hover lift/colour effect (default true)
 */
export default function CardGridBlock({
  className = 'bg-ivory cols-3',
  eyebrow,
  headline,
  align = '',
  cta,
  cards = [],
  hover = true,
}) {
  const [ref, vis] = useReveal();
  const isCenter = align === 'center';

  return (
    <section className={`block block-cards ${className}`}>
      <div className="container">
        <div ref={ref}>

          {(eyebrow || headline || cta) && (
            <div className={`block-hd${isCenter ? ' block-hd--center' : ''} reveal${vis ? ' is-visible' : ''}`}>
              {eyebrow && <div className="eyebrow">{eyebrow}</div>}
              {isCenter ? (
                <>
                  {headline && <h2 className="block-hd__headline">{headline}</h2>}
                  {cta && (
                    <div className="btns">
                      <NotchedBtn href={cta.href} variant="filled-gold">{cta.label}</NotchedBtn>
                    </div>
                  )}
                </>
              ) : (
                <div className="block-hd__row">
                  {headline && <h2 className="block-hd__headline">{headline}</h2>}
                  {cta && <NotchedBtn href={cta.href} variant="filled-gold">{cta.label}</NotchedBtn>}
                </div>
              )}
            </div>
          )}

          <div className="cards__grid">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`card${card.image ? ' card--image' : ''}${hover ? ' card--interactive' : ''} reveal reveal--quick${vis ? ' is-visible' : ''}`}
                style={{ '--delay': `${i * 0.1}s` }}
              >
                {card.image && (
                  <Placeholder label={card.image} src={card.imageSrc} className="card__img" />
                )}
                <div className="card__content">
                  {!card.image && card.icon && <div className="card__icon">{card.icon}</div>}
                  <h3 className="card__title">{card.title}</h3>
                  <div className="card__rule" />
                  <p className="card__body body-md">{card.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
