const CANDLES = [
  { x: 40, wickTop: 88, wickBottom: 132, bodyTop: 100, bodyBottom: 124, up: true },
  { x: 130, wickTop: 70, wickBottom: 118, bodyTop: 78, bodyBottom: 108, up: true },
  { x: 220, wickTop: 96, wickBottom: 150, bodyTop: 104, bodyBottom: 140, up: false },
  { x: 310, wickTop: 60, wickBottom: 104, bodyTop: 66, bodyBottom: 96, up: true },
  { x: 400, wickTop: 44, wickBottom: 92, bodyTop: 50, bodyBottom: 80, up: true },
  { x: 490, wickTop: 66, wickBottom: 112, bodyTop: 74, bodyBottom: 104, up: false },
  { x: 580, wickTop: 30, wickBottom: 76, bodyTop: 36, bodyBottom: 64, up: true },
] as const

// Abstract market chart motif for the Hero background — decorative only.
export function MarketGraphic({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 220"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <line x1="0" y1="180" x2="640" y2="180" className="stroke-navy-900/[0.06]" strokeWidth="1" />
      <line x1="0" y1="120" x2="640" y2="120" className="stroke-navy-900/[0.06]" strokeWidth="1" />
      <line x1="0" y1="60" x2="640" y2="60" className="stroke-navy-900/[0.06]" strokeWidth="1" />

      {CANDLES.map((c) => (
        <g key={c.x}>
          <line
            x1={c.x}
            y1={c.wickTop}
            x2={c.x}
            y2={c.wickBottom}
            className="stroke-navy-900/[0.08]"
            strokeWidth="1.5"
          />
          <rect
            x={c.x - 6}
            y={c.bodyTop}
            width="12"
            height={c.bodyBottom - c.bodyTop}
            className={c.up ? 'fill-gold-400/[0.14]' : 'fill-navy-900/[0.06]'}
          />
        </g>
      ))}

      <path
        d="M0 168 L90 140 L180 152 L270 96 L360 74 L450 108 L540 58 L640 40"
        className="stroke-gold-500/30"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
