export default function Crest({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg" aria-label="Maximum crest" className={className}>
      <defs>
        <linearGradient id="crestGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E0C88E" />
          <stop offset="1" stopColor="#A9854B" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#crestGold)" strokeWidth="2">
        <path d="M48 14 L54 22 L60 12 L66 22 L72 14 L70 28 L50 28 Z" fill="url(#crestGold)" stroke="none" />
        <circle cx="60" cy="9" r="3" fill="url(#crestGold)" stroke="none" />
        <path d="M30 34 H90 V70 Q90 96 60 112 Q30 96 30 70 Z" strokeWidth="2.4" />
        <path d="M37 41 H83 V69 Q83 90 60 103 Q37 90 37 69 Z" strokeWidth="1" />
        <rect x="54" y="50" width="12" height="34" rx="1.5" fill="url(#crestGold)" stroke="none" opacity=".9" />
        <line x1="60" y1="50" x2="60" y2="84" stroke="#0F2E2A" strokeWidth="1" />
        <path d="M40 58 Q30 70 38 86" strokeWidth="1.6" />
        <path d="M80 58 Q90 70 82 86" strokeWidth="1.6" />
        <path d="M40 62 q-5 2 -7 7 M40 70 q-5 2 -7 7 M40 78 q-5 2 -7 7" strokeWidth="1.4" />
        <path d="M80 62 q5 2 7 7 M80 70 q5 2 7 7 M80 78 q5 2 7 7" strokeWidth="1.4" />
        <path d="M48 90 Q60 84 72 90 Q60 100 48 90 Z" fill="url(#crestGold)" stroke="none" opacity=".95" />
      </g>
    </svg>
  )
}
