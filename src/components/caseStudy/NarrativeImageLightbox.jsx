import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const ZOOM_MIN = 1
const ZOOM_MAX = 5
const ZOOM_STEP = 0.25

function clampZoom(z) {
  return Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, Math.round(z / ZOOM_STEP) * ZOOM_STEP))
}

export default function NarrativeImageLightbox({
  src,
  alt,
  caption,
  lightboxSrc,
  diagramFigure = false,
}) {
  const enlargedSrc = lightboxSrc ?? src
  const [open, setOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [naturalW, setNaturalW] = useState(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    if (!open) {
      setZoom(1)
      setNaturalW(null)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const el = wrapRef.current
    if (!el) return
    const wheelZoom = (e) => {
      if (!(e.ctrlKey || e.metaKey)) return
      e.preventDefault()
      const delta = e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP
      setZoom((z) => clampZoom(z + delta))
    }
    el.addEventListener('wheel', wheelZoom, { passive: false })
    return () => el.removeEventListener('wheel', wheelZoom)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === '+' || e.key === '=') {
        e.preventDefault()
        setZoom((z) => clampZoom(z + ZOOM_STEP))
      }
      if (e.key === '-' || e.key === '_') {
        e.preventDefault()
        setZoom((z) => clampZoom(z - ZOOM_STEP))
      }
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  const onLightboxImgLoad = useCallback((e) => {
    setNaturalW(e.currentTarget.naturalWidth)
  }, [])

  const overlay =
    open &&
    createPortal(
      <div
        className="case-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={alt}
      >
        <button
          type="button"
          className="case-lightbox__backdrop"
          aria-label="Close enlarged image"
          onClick={() => setOpen(false)}
        />
        <div className="case-lightbox__panel">
          <div
            className="case-lightbox__img-wrap"
            ref={wrapRef}
          >
            <button
              type="button"
              className="case-lightbox__close"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <img
              key={enlargedSrc}
              src={enlargedSrc}
              alt={alt}
              className={
                diagramFigure
                  ? 'case-lightbox__img case-lightbox__img--diagram'
                  : 'case-lightbox__img'
              }
              loading="eager"
              decoding="async"
              onLoad={onLightboxImgLoad}
              style={
                naturalW
                  ? { width: naturalW * zoom, maxWidth: 'none' }
                  : undefined
              }
            />
            <div
              className="case-lightbox__zoom-bar"
              role="toolbar"
              aria-label="Zoom controls"
            >
              <button
                type="button"
                className="case-lightbox__zoom-btn"
                aria-label="Zoom out"
                disabled={zoom <= ZOOM_MIN}
                onClick={() => setZoom((z) => clampZoom(z - ZOOM_STEP))}
              >
                −
              </button>
              <span className="case-lightbox__zoom-readout" aria-live="polite">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                className="case-lightbox__zoom-btn"
                aria-label="Zoom in"
                disabled={zoom >= ZOOM_MAX}
                onClick={() => setZoom((z) => clampZoom(z + ZOOM_STEP))}
              >
                +
              </button>
            </div>
          </div>
          <p className="case-lightbox__zoom-hint">
            Scroll to pan · + / − keys · Ctrl or ⌘ + scroll to zoom
          </p>
        </div>
      </div>,
      document.body,
    )

  return (
    <figure className="case-narrative-figure">
      <button
        type="button"
        className="case-narrative-thumb"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={`View larger: ${alt}`}
      >
        <img
          src={src}
          alt=""
          className={
            diagramFigure
              ? 'case-narrative-thumb__img case-narrative-thumb__img--diagram'
              : 'case-narrative-thumb__img'
          }
          loading="eager"
          decoding="async"
        />
        <span className="case-narrative-thumb__hint">Click to enlarge</span>
      </button>
      {caption ? (
        <figcaption className="case-narrative-figure__caption">{caption}</figcaption>
      ) : null}
      {overlay}
    </figure>
  )
}
