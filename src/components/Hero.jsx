import { useEffect, useMemo, useRef, useState } from 'react'
import { publicUrl } from '../utils/publicUrl.js'

const RESUME_PDF = '/Tessrah_Mahalingam_-_Senior_Product_Designer_2026.pdf'
const LINKEDIN_URL = 'https://www.linkedin.com/in/tessrah/'

/** Plain + accent fragments; typing walks characters in visual order */
const TITLE_SEGMENTS = [
  { text: "Hello, I'm ", accent: false },
  { text: 'Tessrah', accent: true },
  {
    text: ', a senior product designer specializing in enterprise UX and scalable design systems — based in ',
    accent: false,
  },
  { text: 'Toronto', accent: true },
  { text: ', open globally.', accent: false },
]

const HERO_TITLE_ARIA_LABEL = TITLE_SEGMENTS.map((s) => s.text).join('')

const MS_PER_CHAR = 38

export default function Hero() {
  const totalChars = useMemo(
    () => TITLE_SEGMENTS.reduce((sum, s) => sum + s.text.length, 0),
    [],
  )

  const [revealedChars, setRevealedChars] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    const clearTyping = () => {
      if (intervalRef.current != null) {
        window.clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    let cancelled = false

    const sync = () => {
      clearTyping()
      const instant = mq.matches || totalChars === 0
      setRevealedChars(instant ? totalChars : 0)

      if (instant || cancelled) return

      intervalRef.current = window.setInterval(() => {
        setRevealedChars((n) => {
          const next = Math.min(totalChars, n + 1)
          if (next >= totalChars) clearTyping()
          return next
        })
      }, MS_PER_CHAR)
    }

    sync()
    mq.addEventListener('change', sync)

    return () => {
      cancelled = true
      mq.removeEventListener('change', sync)
      clearTyping()
    }
  }, [totalChars])

  const titleNodes = TITLE_SEGMENTS.map((seg, i) => {
    const offsetBefore = TITLE_SEGMENTS.slice(0, i).reduce(
      (acc, prev) => acc + prev.text.length,
      0,
    )
    const take = Math.min(
      seg.text.length,
      Math.max(0, revealedChars - offsetBefore),
    )
    const slice = seg.text.slice(0, take)
    if (!slice) return null
    return (
      <span key={`seg-${i}`} className={seg.accent ? 'hero-title-accent' : undefined}>
        {slice}
      </span>
    )
  })

  const typingComplete = revealedChars >= totalChars

  return (
    <header className="hero-header">
      <div className="hero-meta">EST. 2012 / TORONTO</div>
      <h1 className="hero-title" aria-label={HERO_TITLE_ARIA_LABEL}>
        <span aria-hidden="true">
          {titleNodes}
          <span
            className={
              typingComplete ? 'hero-type-caret' : 'hero-type-caret hero-type-caret--typing'
            }
          />
        </span>
      </h1>
      <div className="hero-actions">
        <a
          href={publicUrl(RESUME_PDF)}
          target="_blank"
          rel="noreferrer"
          className="action-link"
        >
          Resume / CV ↓
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="action-link"
        >
          LinkedIn ↗
        </a>
      </div>
    </header>
  )
}
