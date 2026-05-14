export default function Footer({ variant = 'home' }) {
  const isProjectsPage = variant === 'projects'

  return (
    <footer className={isProjectsPage ? 'footer--projects' : undefined}>
      <div className="footer-grid">
        <div className="footer-cta">
          {isProjectsPage ? (
            <>
              Design that
              <br />
              scales.
            </>
          ) : (
            <>
              Let&apos;s build
              <br />
              something iconic.
            </>
          )}
        </div>
        <div>
          <p className="footer-subhead">Find Me Here</p>
          <ul className="footer-links">
            <li><a href="https://www.linkedin.com/in/tessrah/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/tessrahdesigns" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-subhead">Coordinates</p>
          <ul className="footer-links">
            <li>Toronto</li>
            <li>Remote Always</li>
            <li>GMT-4</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>©2026 TESSRAH DESIGN STUDIO. ALL RIGHTS RESERVED.</span>
        <span>
          {isProjectsPage
            ? 'PROJECTS UPDATED: MAY 2026'
            : 'Built with intention in Toronto'}
        </span>
      </div>
    </footer>
  )
}
