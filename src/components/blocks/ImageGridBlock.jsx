import useReveal from '../../hooks/useReveal';
import Placeholder from '../shared/Placeholder';
import NotchedBtn from '../shared/NotchedBtn';

/**
 * ImageGridBlock — image grid with multiple layout variants.
 *
 * className modifiers:
 *   bg-ivory | bg-champagne | bg-charcoal | bg-dark
 *   block--sm | block--lg
 *
 * layout variants (controls how many images are used):
 *   mosaic        — 5 imgs: 3-col asymmetric with one tall column  (like Visual Gallery)
 *   top-row       — 3 imgs: wide image on top, 2 equal below       (like The Experience)
 *   equal-3       — 3 imgs: three equal columns
 *   feature-left  — 3 imgs: one tall image left, 2 stacked right
 *   feature-right — 3 imgs: 2 stacked left, one tall image right
 *   2x2           — 4 imgs: 2×2 equal grid
 *   panoramic     — 4 imgs: wide image on top, 3 equal below
 *
 * @param {string}          className  modifier classes
 * @param {string}          eyebrow
 * @param {node}            headline
 * @param {string}          align      '' (left, default) | 'center'
 * @param {object}          cta        { label, href } — optional button
 * @param {string}          layout     one of the variants above (default: mosaic)
 * @param {array}           images     placeholder label strings — sliced to the right count
 * @param {array}           srcs       optional image URLs parallel to images array
 */

const LAYOUT_COUNT = {
  mosaic:          5,
  'top-row':       3,
  'equal-3':       3,
  'feature-left':  3,
  'feature-right': 3,
  '2x2':           4,
  panoramic:       4,
};

export default function ImageGridBlock({
  className = '',
  eyebrow,
  headline,
  align = '',
  cta,
  layout = 'mosaic',
  images = [],
  srcs = [],
}) {
  const [ref, vis] = useReveal();
  const isCenter = align === 'center';
  const count = LAYOUT_COUNT[layout] ?? images.length;
  const displayImages = images.slice(0, count);

  return (
    <section className={`block block-img-grid ${className}`}>
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

          <div className={`img-grid img-grid--${layout}`}>
            {displayImages.map((label, i) => (
              <div
                key={i}
                className={`img-grid__item reveal reveal--scale${vis ? ' is-visible' : ''}`}
                style={{ '--delay': `${i * 0.08}s` }}
              >
                <Placeholder label={label} src={srcs[i]} className="img-grid__img" />
                <div className="img-grid__overlay" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
