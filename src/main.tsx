import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Count taps on any element marked data-track="<id>" (see functions/api/click.js).
document.addEventListener(
  'click',
  (e) => {
    const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-track]')
    const id = el?.dataset.track
    if (!id) return
    const url = `/api/click?c=${encodeURIComponent(id)}`
    try {
      if (!navigator.sendBeacon?.(url)) fetch(url, { method: 'POST', keepalive: true }).catch(() => {})
    } catch {
      /* never block navigation */
    }
  },
  { capture: true },
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
