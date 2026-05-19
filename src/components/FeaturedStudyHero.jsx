import { Link } from 'react-router-dom'
import { publicUrl } from '../utils/publicUrl.js'

export default function FeaturedStudyHero({ study, loading = 'lazy' }) {
  const projectPath = `/projects/${study.slug}`

  return (
    <section className="featured-study" aria-labelledby={`featured-${study.id}-title`}>
      <div className="featured-study__content">
        <h3 className="featured-study__title" id={`featured-${study.id}-title`}>
          <Link to={projectPath} className="featured-study__title-link">
            {study.title}
          </Link>
        </h3>
        <p className="featured-study__lead">{study.lead}</p>
        {study.problem?.length ? (
          <div className="featured-study__problem">
            {study.problem.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ) : null}
        <p className="featured-study__role">
          <span className="featured-study__meta-label">Role</span>
          {study.role}
        </p>
        <Link to={projectPath} className="featured-study__cta">
          View case study <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="featured-study__media">
        <Link to={projectPath} className="featured-study__media-link">
          <img
            src={publicUrl(study.image)}
            alt={study.imageAlt}
            loading={loading}
            decoding="async"
          />
        </Link>
      </div>
    </section>
  )
}
