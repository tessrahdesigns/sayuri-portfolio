import { Link } from 'react-router-dom'
import { PROJECT_ITEMS } from '../../data/archive.js'
import { getNextCaseStudy } from '../../data/caseStudyDetail.js'
import { publicUrl } from '../../utils/publicUrl.js'

export default function CaseStudyMoreProjects({ currentSlug }) {
  const { slug: nextSlug } = getNextCaseStudy(currentSlug)
  const item = PROJECT_ITEMS.find((p) => p.slug === nextSlug)

  if (!item || item.slug === currentSlug) return null

  return (
    <nav className="case-more-projects" aria-labelledby="case-next-project-heading">
      <h2 id="case-next-project-heading" className="case-more-projects__title">
        Next project
      </h2>
      <ul className="case-more-projects__list">
        <li className="case-more-projects__item">
          <Link to={`/projects/${item.slug}`} className="case-more-projects__link">
            <span className="case-more-projects__project-title">{item.title}</span>
            <div className="case-more-projects__media">
              <img src={publicUrl(item.image)} alt="" loading="lazy" decoding="async" />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
