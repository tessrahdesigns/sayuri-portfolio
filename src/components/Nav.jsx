import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useMobileNav } from '../context/MobileNavContext.jsx'

function NavOpenToWorkBadge() {
  return (
    <span className="nav-open-work">
      Open to work
    </span>
  )
}

function CaseStudyNav({ menuToggle }) {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(typeof window !== 'undefined' ? window.scrollY : 0)
  const ticking = useRef(false)

  useEffect(() => {
    lastY.current = window.scrollY
    setHidden(false)

    const mq = window.matchMedia('(min-width: 769px)')

    const flush = () => {
      ticking.current = false
      if (!mq.matches) {
        setHidden(false)
        lastY.current = window.scrollY
        return
      }

      const y = window.scrollY
      const delta = y - lastY.current
      lastY.current = y

      if (y < 64) {
        setHidden(false)
      } else if (delta > 8) {
        setHidden(true)
      } else if (delta < -8) {
        setHidden(false)
      }
    }

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true
        requestAnimationFrame(flush)
      }
    }

    const onMqChange = () => {
      if (!mq.matches) setHidden(false)
    }

    mq.addEventListener('change', onMqChange)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      mq.removeEventListener('change', onMqChange)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <nav
      className={
        hidden
          ? 'nav--case-study nav--case-study--scroll-hidden'
          : 'nav--case-study'
      }
    >
      <Link to="/" className="logo">
        Tessrah.
      </Link>
      <div className="nav-links nav-links--desktop">
        <Link to="/projects">[ 01 ] PROJECTS</Link>
        <Link to="/about">[ 02 ] ABOUT</Link>
        <Link to="/contact">[ 03 ] CONTACT</Link>
        <NavOpenToWorkBadge />
      </div>
      {menuToggle}
    </nav>
  )
}

export default function Nav({ variant = 'home' }) {
  const { openMenu } = useMobileNav()

  const menuToggle = (
    <button
      type="button"
      className="close-btn nav-menu-toggle"
      onClick={openMenu}
      aria-label="Open menu"
    >
      [ MENU ]
    </button>
  )

  if (variant === 'caseStudy') {
    return <CaseStudyNav menuToggle={menuToggle} />
  }

  const navClass =
    variant === 'projects'
      ? 'nav--projects'
      : variant === 'about'
        ? 'nav--about'
        : undefined

  return (
    <nav className={navClass}>
      <Link to="/" className="logo">
        Tessrah.
      </Link>
      <div className="nav-links nav-links--desktop">
        <NavLink to="/projects" className={navLinkClass}>
          [ 01 ] PROJECTS
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          [ 02 ] ABOUT
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          [ 03 ] CONTACT
        </NavLink>
        <NavOpenToWorkBadge />
      </div>
      {menuToggle}
    </nav>
  )
}

function navLinkClass({ isActive }) {
  return isActive ? 'active' : undefined
}
