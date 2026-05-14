import { Link } from 'react-router-dom'
import { TIMELINE_ITEMS } from '../../data/timeline.js'
import { publicUrl } from '../../utils/publicUrl.js'

const RESUME_PDF = '/Tessrah_Mahalingam_-_Senior_Product_Designer_2026.pdf'

export default function Timeline() {
  return (
    <section className="timeline-section">
      <h2 className="section-label">Experience</h2>
      <div className="timeline-grid">
        {TIMELINE_ITEMS.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-dot" />
            <span className="timeline-year">{item.year}</span>
            <h3 className="timeline-event">
              {item.titleHref ? (
                <a href={item.titleHref} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h3>
            <p className="timeline-desc">
              {item.descParts
                ? item.descParts.map((part, i) =>
                    part.type === 'link' ? (
                      <Link
                        key={i}
                        to={part.to}
                        className="timeline-desc-link"
                      >
                        {part.text}
                      </Link>
                    ) : (
                      <span key={i}>{part.text}</span>
                    ),
                  )
                : item.desc}
            </p>
            {item.id === 'present' ? (
              <div className="timeline-cv-inline">
                <a
                  href={publicUrl(RESUME_PDF)}
                  target="_blank"
                  rel="noreferrer"
                  className="timeline-cv-pill"
                >
                  Resume / CV (PDF)
                </a>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
