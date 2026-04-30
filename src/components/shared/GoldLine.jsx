/** Decorative horizontal rule: line — diamond — line, in gold. */
export default function GoldLine() {
  return (
    <div className="gold-line">
      <div className="gold-line__bar" />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="var(--gold)" opacity="0.7">
        <polygon points="5,0 10,5 5,10 0,5" />
      </svg>
      <div className="gold-line__bar" />
    </div>
  );
}
