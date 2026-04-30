import GoldLine from '../shared/GoldLine';

const SERVICES = [
  'Wedding Guest Transportation',
  'Venue Shuttle Service',
  'Winery Tours',
  'Private Estate Events',
];

const CONTACT = [
  ['hello@syprivatecharters.com', 'mailto:hello@syprivatecharters.com'],
  ['(805) 555-0182', 'tel:8055550182'],
  ['Instagram', '#'],
  ['Facebook', '#'],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer__grid">
          {/* Brand */}
          <div>
            <div className="footer__brand-name">SY Private Charters</div>
            <div className="footer__brand-tagline">Santa Ynez Valley, California</div>
            <p className="footer__brand-desc">
              Luxury wedding and event transportation serving Santa Ynez Valley,
              Solvang, Los Olivos, Buellton, and the greater wine country corridor.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="footer__col-label">Services</div>
            {SERVICES.map(s => (
              <a key={s} href="#services" className="footer-link">{s}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="footer__col-label">Contact</div>
            {CONTACT.map(([label, href]) => (
              <a key={label} href={href} className="footer-link">{label}</a>
            ))}
          </div>
        </div>

        <GoldLine />

        <div className="footer__legal">
          <div className="footer__legal-text">
            © 2025 SY Private Charters. All rights reserved.
          </div>
          <div className="footer__legal-text">Santa Ynez Valley, CA</div>
        </div>

      </div>
    </footer>
  );
}
