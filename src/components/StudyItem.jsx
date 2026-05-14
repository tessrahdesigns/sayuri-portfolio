import { Link } from 'react-router-dom'
import { publicUrl } from '../utils/publicUrl.js'

export default function StudyItem({ study, imgRef }) {
  const projectPath = `/projects/${study.slug}`

  return (
    <article className="study-item">
      <span className="study-num">{study.caseId}</span>
      <h3 className="study-title">
        <Link to={projectPath} className="study-title-link">
          {study.title}
        </Link>
      </h3>
      <p className="study-excerpt">{study.excerpt}</p>
      <div className="study-tags">
        {study.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="study-media">
        <Link
          to={projectPath}
          className="study-media-link"
          aria-label={`Open case study: ${study.title}`}
        >
          <img ref={imgRef} src={publicUrl(study.image)} alt={study.alt} />
        </Link>
      </div>
    </article>
  )
}
