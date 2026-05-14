import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import CaseStudyShell from '../components/caseStudy/CaseStudyShell.jsx'
import {
  CASE_STUDY_BY_SLUG,
  getNextCaseStudy,
} from '../data/caseStudyDetail.js'

export default function CaseStudyPage() {
  const { slug } = useParams()
  const data = slug ? CASE_STUDY_BY_SLUG[slug] : undefined

  useEffect(() => {
    if (data?.docTitle) {
      document.title = data.docTitle
    }
  }, [data])

  if (!slug || !data) {
    return <Navigate to="/projects" replace />
  }

  const next = getNextCaseStudy(slug)

  return (
    <CaseStudyShell
      data={data}
      nextSlug={next.slug}
      nextTitle={next.title}
    />
  )
}
