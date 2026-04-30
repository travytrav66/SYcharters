import { useState } from 'react';
import useReveal from '../../hooks/useReveal';
import Placeholder from '../shared/Placeholder';
import ArrowBtn from '../shared/ArrowBtn';

/**
 * CtaBlock — full-width background image with overlay, headline, and contact form.
 *
 * className modifiers:
 *   block--sm
 *
 * @param {string}  className   modifier classes
 * @param {string}  image       background placeholder label
 * @param {string}  imageSrc    optional URL for the background image
 * @param {string}  eyebrow     small caps label
 * @param {node}    headline    section heading
 * @param {string}  body        intro paragraph above form
 */
export default function CtaBlock({
  className = '',
  image = 'private estate driveway — evening light, luxury van arriving',
  imageSrc,
  eyebrow,
  headline,
  body,
}) {
  const [ref, vis] = useReveal();

  return (
    <section id="contact" className={`block block-cta ${className}`}>
      <Placeholder label={image} src={imageSrc} className="media__bg" />
      <div className="cta__overlay" />

      <div className="container block-cta__container">
        <div ref={ref} className={`cta__content reveal${vis ? ' is-visible' : ''}`}>
          {eyebrow  && <div className="cta__eyebrow">{eyebrow}</div>}
          {headline && <h2 className="cta__headline">{headline}</h2>}
          {body     && <p className="cta__body body-lg">{body}</p>}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', date: '', guests: '', message: '' });
  const [sent, setSent] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const handleSubmit = e => { e.preventDefault(); setSent(true); };

  if (sent) {
    return (
      <div className="contact-form__thanks">
        <div className="contact-form__thanks-headline">
          Thank you, {form.name.split(' ')[0]}.
        </div>
        <p className="contact-form__thanks-body body-md">
          We'll be in touch within one business day with your custom quote.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-form__grid">
        {[
          ['name',   'Your Name',        'text'],
          ['email',  'Email Address',    'email'],
          ['date',   'Wedding Date',     'text'],
          ['guests', 'Estimated Guests', 'number'],
        ].map(([k, ph, type]) => (
          <div key={k} className="contact-form__field">
            <input
              type={type}
              placeholder={ph}
              value={form[k]}
              onChange={e => set(k, e.target.value)}
              className="contact-form__input"
            />
          </div>
        ))}
      </div>
      <textarea
        placeholder="Tell us about your event & transportation needs"
        value={form.message}
        onChange={e => set('message', e.target.value)}
        rows={3}
        className="contact-form__textarea"
      />
      <ArrowBtn type="submit" variant="gold">Get a Custom Quote</ArrowBtn>
    </form>
  );
}
