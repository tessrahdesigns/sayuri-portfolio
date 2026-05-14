import { Link } from 'react-router-dom'

export default function CaseStudyFooter({ nextSlug, nextTitle }) {
  const label = `NEXT PROJECT: ${nextTitle.toUpperCase()} →`

  return (
    <footer className="footer--case-study">
      <div className="footer-bottom">
        <span>©2026 TESSRAH DESIGN STUDIO. ALL RIGHTS RESERVED.</span>
        <Link to={`/projects/${nextSlug}`} className="case-study-footer-next">
          {label}
        </Link>
      </div>
    </footer>
  )
}
