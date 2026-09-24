import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// BrowserRouter keeps the scroll position across navigations, so without this
// a footer link to /terms would land the visitor mid-page.
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
