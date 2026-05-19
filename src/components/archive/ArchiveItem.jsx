import { Link } from 'react-router-dom'
import { publicUrl } from '../../utils/publicUrl.js'

export default function ArchiveItem({ item }) {
  return (
    <Link to={`/projects/${item.slug}`} className="projects-item">
      <div className="projects-item-content">
        <div>
          <div className="projects-item-meta-row">
            <span className="projects-item-meta">{item.meta}</span>
            <span className="projects-item-meta-sep" aria-hidden="true">
              ·
            </span>
            <span className="projects-item-year">{item.year}</span>
          </div>
          <h3 className="projects-item-title">{item.title}</h3>
        </div>
        <div className="projects-item-tags">{item.tagsLine}</div>
      </div>
      <div className="projects-item-media">
        <img src={publicUrl(item.image)} alt={item.alt} />
      </div>
    </Link>
  )
}
