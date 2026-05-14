import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import MobileMenu from '../components/MobileMenu.jsx'

const MobileNavContext = createContext(null)

export function useMobileNav() {
  const ctx = useContext(MobileNavContext)
  if (!ctx) {
    throw new Error('useMobileNav must be used within MobileNavProvider')
  }
  return ctx
}

export function MobileNavProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const openMenu = useCallback(() => setMenuOpen(true), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const value = useMemo(
    () => ({ menuOpen, openMenu, closeMenu }),
    [menuOpen, openMenu, closeMenu],
  )

  return (
    <MobileNavContext.Provider value={value}>
      {children}
      <MobileMenu />
    </MobileNavContext.Provider>
  )
}
