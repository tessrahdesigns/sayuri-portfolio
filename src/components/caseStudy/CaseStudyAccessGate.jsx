import { useState } from 'react'
import { Link } from 'react-router-dom'
import HalftoneBackground from '../HalftoneBackground.jsx'
import Vignette from '../Vignette.jsx'
import Nav from '../Nav.jsx'
import VerticalRail from '../VerticalRail.jsx'
import { passwordMatchesCaseGate } from '../../auth/caseStudyAccess.js'
import { useProjectsIndexPath } from '../../hooks/useMobileViewport.js'

export default function CaseStudyAccessGate({ data, onSuccess }) {
  const projectsIndexPath = useProjectsIndexPath()
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (passwordMatchesCaseGate(value)) {
      setError(false)
      onSuccess()
      return
    }
    setError(true)
  }

  return (
    <>
      <HalftoneBackground />
      <Vignette />
      <Nav variant="caseStudy" />
      <VerticalRail label={data.railId} />
      <main className="case-access-gate">
        <p className="case-access-gate__label">Restricted case study</p>
        <h1 className="case-access-gate__title">{data.heroTitleLine1}</h1>
        <p className="case-access-gate__lead">
          Enter the password to view this project. After you unlock it once on this
          browser, you can open this project again without re-entering the password
          (until you clear site data).
        </p>
        <form className="case-access-gate__form" onSubmit={onSubmit} noValidate>
          <div className="case-access-gate__field">
            <label htmlFor="case-access-password" className="case-access-gate__field-label">
              Password
            </label>
            <input
              id="case-access-password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
                setError(false)
              }}
              className="case-access-gate__input"
              aria-invalid={error}
              aria-describedby={error ? 'case-access-error' : undefined}
            />
          </div>
          {error ? (
            <p id="case-access-error" className="case-access-gate__error" role="alert">
              Incorrect password. Try again.
            </p>
          ) : null}
          <button type="submit" className="case-access-gate__submit">
            View project
          </button>
        </form>
        <Link to={projectsIndexPath} className="case-access-gate__back">
          ← {projectsIndexPath === '/' ? 'Back to home' : 'Back to projects'}
        </Link>
      </main>
    </>
  )
}
