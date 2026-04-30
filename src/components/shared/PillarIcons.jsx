const PROPS = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
};

/** Clock — Punctual & Reliable */
export function ClockIcon() {
  return (
    <svg {...PROPS}>
      {/* Face */}
      <circle cx="12" cy="12" r="9.5" />
      {/* Hour markers at 12, 3, 6, 9 */}
      <line x1="12" y1="2.5"  x2="12" y2="5"   />
      <line x1="21.5" y1="12" x2="19"  y2="12"  />
      <line x1="12" y1="21.5" x2="12"  y2="19"  />
      <line x1="2.5"  y1="12" x2="5"   y2="12"  />
      {/* Hour hand ~10 o'clock */}
      <line x1="12" y1="12" x2="7.5" y2="9.5" strokeWidth="1.4" />
      {/* Minute hand ~2 o'clock (10:10 position) */}
      <line x1="12" y1="12" x2="18"  y2="8.5" />
      {/* Centre pivot */}
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Transit Van — Luxury Transit Vans */
export function VanIcon() {
  return (
    <svg {...PROPS}>
      {/* Body — rounded rear, angled windshield at front */}
      <path d="M 1.5 14.5 L 1.5 9 Q 1.5 7 3.5 7 L 20 7 L 22.5 10 L 22.5 14.5 Z" />
      {/* Cab divider */}
      <line x1="16" y1="7" x2="16" y2="14.5" />
      {/* Passenger windows */}
      <rect x="3.5"  y="8"  width="3.5" height="3.5" rx="0.5" />
      <rect x="8"    y="8"  width="3.5" height="3.5" rx="0.5" />
      <rect x="12.5" y="8"  width="3"   height="3.5" rx="0.5" />
      {/* Cab window */}
      <rect x="17"   y="8"  width="3"   height="3.5" rx="0.5" />
      {/* Belt line */}
      <line x1="1.5" y1="12" x2="22.5" y2="12" />
      {/* Wheels */}
      <circle cx="6"  cy="16.5" r="2.2" />
      <circle cx="19" cy="16.5" r="2.2" />
      {/* Wheel inner hubs */}
      <circle cx="6"  cy="16.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="19" cy="16.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Interlocking Rings — Wedding Specialists */
export function RingsIcon() {
  return (
    <svg {...PROPS}>
      {/* Left band */}
      <circle cx="8.5"  cy="13.5" r="5.5" />
      {/* Right band (engagement ring) */}
      <circle cx="15.5" cy="13.5" r="5.5" />
      {/* Diamond stone on right ring */}
      <path d="M 15.5 5.5 L 17.8 8.2 L 15.5 11 L 13.2 8.2 Z" />
      {/* Diamond girdle (horizontal facet) */}
      <line x1="13.2" y1="8.2" x2="17.8" y2="8.2" />
      {/* Upper facets from crown */}
      <line x1="15.5" y1="5.5" x2="14.5" y2="8.2" />
      <line x1="15.5" y1="5.5" x2="16.5" y2="8.2" />
    </svg>
  );
}

/** Champagne Flute — Celebrations / Toast */
export function ChampagneIcon() {
  return (
    <svg {...PROPS}>
      {/* Bowl — narrows toward base */}
      <path d="M 9.5 3 L 8.5 14 L 15.5 14 L 14.5 3 Z" />
      {/* Stem */}
      <line x1="12" y1="14" x2="12" y2="19.5" />
      {/* Base */}
      <line x1="9" y1="19.5" x2="15" y2="19.5" />
      {/* Bubbles */}
      <circle cx="12"  cy="11.5" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="10.8" cy="9"   r="0.55" fill="currentColor" stroke="none" />
      <circle cx="13.2" cy="7"   r="0.55" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Star — Ratings / Excellence */
export function StarIcon() {
  return (
    <svg {...PROPS}>
      <polygon points="12,2.5 14.4,9.1 21.4,9.5 16.1,14.1 18,21 12,17.2 6,21 7.9,14.1 2.6,9.5 9.6,9.1" />
    </svg>
  );
}

/** Shield with Checkmark — Safety / Trust */
export function ShieldCheckIcon() {
  return (
    <svg {...PROPS}>
      <path d="M 12 2.5 L 20.5 6 L 20.5 12.5 C 20.5 17.2 16.8 21.2 12 22.5 C 7.2 21.2 3.5 17.2 3.5 12.5 L 3.5 6 Z" />
      <polyline points="8.5,12.5 11,15.2 15.5,9.8" />
    </svg>
  );
}

/** Calendar — Scheduling / Booking */
export function CalendarIcon() {
  return (
    <svg {...PROPS}>
      <rect x="3" y="5" width="18" height="16" rx="1.5" />
      <line x1="3"  y1="9.5" x2="21" y2="9.5" />
      <line x1="8"  y1="3"   x2="8"  y2="7"   />
      <line x1="16" y1="3"   x2="16" y2="7"   />
      {/* Two date rows */}
      <line x1="7.5" y1="13.5" x2="11"  y2="13.5" />
      <line x1="13"  y1="13.5" x2="16.5" y2="13.5" />
      <line x1="7.5" y1="17"   x2="11"  y2="17"   />
      <line x1="13"  y1="17"   x2="16.5" y2="17"   />
    </svg>
  );
}

/** Group of People — Guest Capacity / Shuttles */
export function GroupIcon() {
  return (
    <svg {...PROPS}>
      {/* Back person (right) */}
      <circle cx="17" cy="8.5" r="2.5" />
      <path d="M 21.5 19.5 C 21.5 16.5 19.5 14 17 14 C 15.6 14 14.4 14.7 13.6 15.8" />
      {/* Front person (left) */}
      <circle cx="9" cy="8.5" r="2.5" />
      <path d="M 2.5 19.5 C 2.5 16.5 5.5 14 9 14 C 12.5 14 15.5 16.5 15.5 19.5" />
    </svg>
  );
}

/** Phone — Day-of Support / Coordination */
export function PhoneIcon() {
  return (
    <svg {...PROPS}>
      <path d="M 5.5 3 H 8.5 C 9.2 3 9.5 3.6 10 4.6 L 11 7 C 11.3 7.8 11 8.5 10.4 9.1 L 9.2 10.3 C 10.3 12.4 13 15 15.2 16.1 L 16.4 14.9 C 17 14.3 17.7 14 18.5 14.3 L 20.9 15.3 C 21.9 15.8 22 16.4 22 17.2 L 22 19.5 C 22 20.6 21.1 21.5 20 21.5 C 11.2 21.5 2.5 12.8 2.5 4 C 2.5 3.4 3.4 3 4.2 3 Z" />
    </svg>
  );
}

/** Heart — Personal Touch / Love */
export function HeartIcon() {
  return (
    <svg {...PROPS}>
      <path d="M 12 20.5 C 12 20.5 2.5 14 2.5 8.2 C 2.5 5.3 5.1 3 8 3 C 10 3 11.4 4.3 12 5.4 C 12.6 4.3 14 3 16 3 C 18.9 3 21.5 5.3 21.5 8.2 C 21.5 14 12 20.5 12 20.5 Z" />
    </svg>
  );
}

/** Wine Glass — Winery Tours */
export function WineGlassIcon() {
  return (
    <svg {...PROPS}>
      {/* Bowl */}
      <path d="M 7.5 3 C 7.5 3 6.2 10.5 9 13 Q 10.4 14.5 12 14.5 Q 13.6 14.5 15 13 C 17.8 10.5 16.5 3 16.5 3 Z" />
      {/* Wine fill level */}
      <path d="M 8 8.5 Q 10 9.5 12 9 Q 14 8.5 16 8.5" />
      {/* Stem */}
      <line x1="12" y1="14.5" x2="12" y2="20" />
      {/* Base */}
      <line x1="8.5" y1="20" x2="15.5" y2="20" />
    </svg>
  );
}

/** Winding Route — Custom Routing */
export function RouteIcon() {
  return (
    <svg {...PROPS}>
      {/* Origin */}
      <circle cx="5" cy="6"  r="2.5" />
      {/* Destination */}
      <circle cx="19" cy="18" r="2.5" />
      {/* Path */}
      <path d="M 5 8.5 L 5 13 Q 5 16.5 9 16.5 L 15 16.5 Q 19 16.5 19 13 L 19 8 Q 19 5 15.5 5 L 9 5" />
    </svg>
  );
}

/** Sparkle — Luxury / Premium */
export function SparkleIcon() {
  return (
    <svg {...PROPS}>
      {/* Large sparkle */}
      <path d="M 12 2 L 13.6 9 L 20.5 10.5 L 13.6 12 L 12 19 L 10.4 12 L 3.5 10.5 L 10.4 9 Z" />
      {/* Small sparkle */}
      <path d="M 19.5 3.5 L 20.2 5.8 L 22.5 6.5 L 20.2 7.2 L 19.5 9.5 L 18.8 7.2 L 16.5 6.5 L 18.8 5.8 Z" />
    </svg>
  );
}

/** Chauffeur Driver — Professional Driver */
export function DriverIcon() {
  return (
    <svg {...PROPS}>
      {/* Head */}
      <circle cx="12" cy="12" r="3" />
      {/* Cap sides and flat crown */}
      <path d="M 9 9.5 L 9 7.5 L 15 7.5 L 15 9.5" />
      {/* Cap brim — wider than crown */}
      <line x1="7.5" y1="9.5" x2="16.5" y2="9.5" />
      {/* Shoulders */}
      <path d="M 5 22 C 5 18 8 15.5 12 15.5 C 16 15.5 19 18 19 22" />
      {/* Jacket lapels */}
      <line x1="10.5" y1="15.5" x2="10"  y2="19" />
      <line x1="13.5" y1="15.5" x2="14"  y2="19" />
    </svg>
  );
}

/** Folded Map — Local Expertise */
export function MapIcon() {
  return (
    <svg {...PROPS}>
      {/* 3-panel folded map — zigzag top and bottom */}
      <polygon points="3,7 9,4 15,7 21,4 21,20 15,17 9,20 3,17" />
      {/* Fold lines */}
      <line x1="9"  y1="4"  x2="9"  y2="20" />
      <line x1="15" y1="7"  x2="15" y2="17" />
      {/* Location pin on centre panel */}
      <path d="M 12 14 C 9.8 11.8 9.8 10.2 9.8 9.5 C 9.8 8 10.8 7 12 7 C 13.2 7 14.2 8 14.2 9.5 C 14.2 10.2 14.2 11.8 12 14 Z" />
      <circle cx="12" cy="9.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
