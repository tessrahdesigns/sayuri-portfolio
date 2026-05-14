import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * BrowserRouter does not reset scroll on navigation; preserve that behavior
 * across routes so deep-linked scroll position from the previous page does not
 * carry over (e.g. home scrolled far down → case study opens mid-page).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}
