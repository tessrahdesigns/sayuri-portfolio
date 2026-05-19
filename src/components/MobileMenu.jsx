import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMobileNav } from '../context/MobileNavContext.jsx'
import { publicUrl } from '../utils/publicUrl.js'

const RESUME_PDF = '/Tessrah_Mahalingam_-_Senior_Product_Designer_2026.pdf'

const MENU_LINKS = [
  { to: '/projects', num: '01', label: 'Projects' },
  { to: '/about', num: '02', label: 'About' },
  { to: '/contact', num: '03', label: 'Contact' },
]

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/tessrah/', label: 'LinkedIn' },
  { href: 'https://github.com/tessrahdesigns', label: 'GitHub' },
  {
    href: publicUrl(RESUME_PDF),
    label: 'Resume/CV',
    resume: true,
  },
]

function formatTorontoTime() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'America/Toronto',
  }).formatToParts(new Date())
  const h = parts.find((p) => p.type === 'hour')?.value ?? '00'
  const m = parts.find((p) => p.type === 'minute')?.value ?? '00'
  return `${h}:${m}`
}

export default function MobileMenu() {
  const { menuOpen, closeMenu } = useMobileNav()
  const [localTime, setLocalTime] = useState(formatTorontoTime)
  const titleRef = useRef(typeof document !== 'undefined' ? document.title : '')

  useEffect(() => {
    if (!menuOpen) return
    titleRef.current = document.title
    document.title = 'TESSRAH — Menu'
    return () => {
      document.title = titleRef.current
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const t = setInterval(() => setLocalTime(formatTorontoTime()), 30_000)
    return () => clearInterval(t)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const prevBody = document.body.style.overflow
    const prevHtml = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevBody
      document.documentElement.style.overflow = prevHtml
    }
  }, [menuOpen])

  if (!menuOpen) return null

  return (
    <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Site menu">
      <div className="gradient-wash" aria-hidden />

      <nav className="menu-overlay-nav">
        <div className="menu-overlay-nav-start">
          <Link to="/" className="logo" onClick={closeMenu}>
            Tessrah.
          </Link>
          <span className="nav-open-work">Open to work</span>
        </div>
        <button type="button" className="close-btn" onClick={closeMenu}>
          [ CLOSE ]
        </button>
      </nav>

      <div className="menu-content">
        <div className="menu-links">
          {MENU_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="menu-item"
              onClick={closeMenu}
            >
              <span className="num">{item.num}</span>
              <span className="label">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="menu-footer">
        <div className="social-row">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className={
                s.resume ? 'social-link social-link--resume' : 'social-link'
              }
              target="_blank"
              rel="noreferrer"
            >
              {s.label}
            </a>
          ))}
        </div>
        <div className="meta-stamp">
          VERSION_2.0.4
          <br />
          LOCAL_TIME_{localTime}_GMT-4
        </div>
      </div>
    </div>
  )
}
