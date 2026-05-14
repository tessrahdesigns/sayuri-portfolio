import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { TESTIMONIALS } from '../../data/testimonials.js'

export default function TestimonialsCarousel() {
  const headingId = useId()
  const regionRef = useRef(null)
  const [index, setIndex] = useState(0)
  const n = TESTIMONIALS.length
  const current = n > 0 ? TESTIMONIALS[index] : null

  const go = useCallback(
    (delta) => {
      if (n === 0) return
      setIndex((i) => (i + delta + n) % n)
    },
    [n],
  )

  useEffect(() => {
    const el = regionRef.current
    if (!el) return
    const onKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        go(-1)
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        go(1)
      }
    }
    el.addEventListener('keydown', onKeyDown)
    return () => el.removeEventListener('keydown', onKeyDown)
  }, [go])

  useEffect(() => {
    if (n <= 1) return
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const id = window.setInterval(() => go(1), 10000)
    return () => window.clearInterval(id)
  }, [index, n, go])

  if (!current) return null

  return (
    <section
      className="testimonials-section"
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="section-label testimonials-section__label">
        Testimonials
      </h2>
      <div
        ref={regionRef}
        className="testimonials-carousel"
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Client and colleague testimonials"
      >
        <blockquote
          key={current.id}
          className="testimonial-quote"
        >
          <p className="testimonial-quote__text">&ldquo;{current.quote}&rdquo;</p>
          <footer className="testimonial-quote__footer">
            <span className="testimonial-quote__name">{current.name}</span>
            <span className="testimonial-quote__role">{current.role}</span>
          </footer>
        </blockquote>

        <div className="testimonials-carousel__controls">
          <button
            type="button"
            className="testimonials-carousel__btn"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
          >
            Prev
          </button>
          <div
            className="testimonials-carousel__dots"
            aria-label="Testimonial slides"
          >
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                aria-label={`Testimonial ${i + 1} of ${n}`}
                aria-current={i === index ? 'true' : undefined}
                className={
                  i === index
                    ? 'testimonials-carousel__dot testimonials-carousel__dot--active'
                    : 'testimonials-carousel__dot'
                }
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="testimonials-carousel__btn"
            onClick={() => go(1)}
            aria-label="Next testimonial"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}
