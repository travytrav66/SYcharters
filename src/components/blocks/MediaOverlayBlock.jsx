import useReveal from '../../hooks/useReveal';
import Placeholder from '../shared/Placeholder';
import ArrowBtn from '../shared/ArrowBtn';
import NotchedBtn from '../shared/NotchedBtn';

/**
 * MediaOverlayBlock — full-section background image with overlay text.
 * Always uses a dark overlay so text is always ivory; bg-* class ignored for text.
 *
 * className modifiers:
 *   align-center  — content centered horizontally
 *   (default)     — content aligned left
 *   block--sm | block--lg
 *   block-media--sm | block-media--lg | block-media--screen  — height
 *
 * @param {string}  className     modifier classes
 * @param {string}  image         placeholder label (used when imageSrc is not provided)
 * @param {string}  imageSrc      real image path/URL — renders an <img> instead of placeholder
 * @param {string}  imageAlt      alt text for real image
 * @param {string}  overlayStrength  CSS gradient string (optional override)
 * @param {string}  eyebrow       small caps label
 * @param {node}    headline      main heading
 * @param {string}  body          paragraph
 * @param {object|object[]}  cta   { label, href, variant? } or array of same
 */
export default function MediaOverlayBlock({
  className = '',
  image = 'background image placeholder',
  imageSrc,
  imageAlt = '',
  overlayStrength,
  eyebrow,
  headline,
  body,
  cta,
}) {
  const [ref, vis] = useReveal();
  const ctas = cta ? (Array.isArray(cta) ? cta : [cta]) : [];

  const overlay = overlayStrength
    ?? 'linear-gradient(160deg, rgba(34,30,24,0.75) 0%, rgba(34,30,24,0.45) 60%, rgba(34,30,24,0.65) 100%)';

  return (
    <section className={`block block-media ${className}`}>

      {/* Background */}
      {imageSrc
        ? <img src={imageSrc} alt={imageAlt} className="media__bg" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        : <Placeholder label={image} className="media__bg" />
      }

      {/* Overlay */}
      <div className="media__overlay" style={{ '--overlay': overlay }} />

      {/* Content */}
      <div className="container media__container">
        <div
          ref={ref}
          className={`media__content reveal${vis ? ' is-visible' : ''}`}
        >
          {eyebrow && <div className="media__eyebrow">{eyebrow}</div>}

          <h2 className="media__headline">{headline}</h2>

          {body && <p className="media__body body-lg">{body}</p>}

          {ctas.length > 0 && (
            <div className="btns">
              {ctas.map((c, i) =>
                i === 0
                  ? <NotchedBtn key={i} href={c.href} variant={c.variant ?? 'filled-ivory'}>{c.label}</NotchedBtn>
                  : <ArrowBtn key={i} href={c.href} variant={c.variant ?? 'ivory'}>{c.label}</ArrowBtn>
              )}
            </div>
          )}
        </div>
      </div>

    </section>
  );
}
