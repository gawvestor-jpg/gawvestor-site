type IconProps = { className?: string }

export function TikTokIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 2h2.7c.2 1.6 1.4 3 3.1 3.3v2.7c-1.4 0-2.7-.4-3.8-1.2v6.6c0 3-2.5 5.4-5.5 5.4S4.5 15.4 4.5 12.4c0-2.8 2.1-5.1 4.8-5.4v2.8a2.7 2.7 0 1 0 1.9 2.6V2h2.3z" />
    </svg>
  )
}

export function InstagramIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function YouTubeIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 9v6l5-3z" fill="currentColor" />
    </svg>
  )
}
