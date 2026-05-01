import useReveal from '../../hooks/useReveal';
import Placeholder from '../shared/Placeholder';
import GoldLine from '../shared/GoldLine';
import ArrowBtn from '../shared/ArrowBtn';
import NotchedBtn from '../shared/NotchedBtn';

/**
 * SplitBlock — two-column text + image layout.
 *
 * className modifiers:
 *   bg-ivory | bg-champagne | bg-charcoal | bg-dark
 *   flip        — image moves to the right, text to the left
 *   block--sm   — reduced vertical padding
 *   block--lg   — increased vertical padding
 *
 * @param {string}  className   modifier classes stacked on the base
 * @param {string}  eyebrow     small caps label above headline
 * @param {node}    headline    main heading — accepts JSX (e.g. <em> for italics)
 * @param {string}  body        paragraph text
 * @param {object|object[]}  cta  { label, href, variant? } or array of same — omit to hide
 * @param {string}  image       single placeholder label — used when mosaic is not set
 * @param {string}  imageSrc    optional URL for the single image — renders a real <img>
 * @param {string}  mosaic      img-grid layout variant: 'feature-right' | 'feature-left' |
 *                              '2x2' | 'top-row' | 'equal-3' | 'mosaic' | 'panoramic'
 *                              Omit (or pass null) for a single-image media column.
 * @param {string[]} images     placeholder labels for each mosaic cell — sliced to fit layout
 * @param {array}   points      optional list of { title, body } bullet points
 */

const MOSAIC_COUNT = {
  'mosaic':          5,
  'top-row':         3,
  'equal-3':         3,
  'feature-left':    3,
  'feature-right':   3,
  '2x2':             4,
  'panoramic':       4,
};

export default function SplitBlock({
  className = 'bg-ivory',
  eyebrow,
  headline,
  body,
  cta,
  image = 'image placeholder',
  imageSrc,
  mosaic,
  images = [],
  srcs = [],
  points,
}) {
  const [ref, vis] = useReveal();
  const isDark = className.includes('bg-charcoal') || className.includes('bg-dark');
  const btnVariant = isDark ? 'gold' : 'dark';
  const ctas = cta ? (Array.isArray(cta) ? cta : [cta]) : [];

  return (
    <section className={`block block-split ${className}`}>
      <div className="container">
        <div ref={ref} className="split__inner">

          {/* ── Text column ─────────────────────────────────── */}
          <div className={`split__text reveal reveal--left${vis ? ' is-visible' : ''}`}>
            {eyebrow && <div className="eyebrow">{eyebrow}</div>}

            <h2 className="split__headline">{headline}</h2>

            <GoldLine />

            {body && (
              <p className={`split__body body-lg${!points && cta ? ' split__body--last' : ''}`}>
                {body}
              </p>
            )}

            {points && (
              <div className="split__points">
                {points.map((p, i) => (
                  <div key={i} className="split__point">
                    <h4 className="split__point-title">{p.title}</h4>
                    <p className="split__point-body body-md">{p.body}</p>
                  </div>
                ))}
              </div>
            )}

            {ctas.length > 0 && (
              <div className="btns">
                {ctas.map((c, i) =>
                  i === 0
                    ? <NotchedBtn key={i} href={c.href} variant={c.variant ?? 'filled-gold'}>{c.label}</NotchedBtn>
                    : <ArrowBtn key={i} href={c.href} variant={c.variant ?? btnVariant}>{c.label}</ArrowBtn>
                )}
              </div>
            )}
          </div>

          {/* ── Media column ────────────────────────────────── */}
          {(() => {
            const isSingle = !mosaic || mosaic === 'single-short';
            const imgH = mosaic === 'single-short' ? '460px' : '700px';
            return (
              <div
                className={`split__media reveal reveal--right${vis ? ' is-visible' : ''}`}
                style={{ '--delay': '0.15s', ...(isSingle ? { '--split-img-h': imgH } : {}) }}
              >
                {isSingle ? (
                  <Placeholder label={image} src={imageSrc} />
                ) : (
                  <div className={`img-grid img-grid--${mosaic}`}>
                    {images.slice(0, MOSAIC_COUNT[mosaic] ?? images.length).map((label, i) => (
                      <div
                        key={i}
                        className={`img-grid__item reveal reveal--scale${vis ? ' is-visible' : ''}`}
                        style={{ '--delay': `${0.15 + i * 0.08}s` }}
                      >
                        <Placeholder label={label} src={srcs[i]} className="img-grid__img" />
                        <div className="img-grid__overlay" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })()}

        </div>
      </div>
    </section>
  );
}
