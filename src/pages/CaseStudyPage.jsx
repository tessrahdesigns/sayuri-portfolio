import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
  hasCaseSlugUnlocked,
  isProtectedCaseSlug,
  storageKeyForCaseSlug,
  unlockCaseSlug,
} from '../auth/caseStudyAccess.js'
import CaseStudyAccessGate from '../components/caseStudy/CaseStudyAccessGate.jsx'
import CaseStudyShell from '../components/caseStudy/CaseStudyShell.jsx'
import {
  CASE_STUDY_BY_SLUG,
  getNextCaseStudy,
} from '../data/caseStudyDetail.js'
import { useProjectsIndexPath } from '../hooks/useMobileViewport.js'

export default function CaseStudyPage() {
  const projectsIndexPath = useProjectsIndexPath()
  const { slug } = useParams()
  const data = slug ? CASE_STUDY_BY_SLUG[slug] : undefined
  const [gateOpen, setGateOpen] = useState(() =>
    slug ? !isProtectedCaseSlug(slug) || hasCaseSlugUnlocked(slug) : true,
  )

  useEffect(() => {
    if (!slug) return
    setGateOpen(!isProtectedCaseSlug(slug) || hasCaseSlugUnlocked(slug))
  }, [slug])

  useEffect(() => {
    if (!slug || !isProtectedCaseSlug(slug)) return
    const key = storageKeyForCaseSlug(slug)
    const onStorage = (e) => {
      if (e.key === key && e.newValue === '1') setGateOpen(true)
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [slug])

  useEffect(() => {
    if (data?.docTitle && !(isProtectedCaseSlug(slug) && !gateOpen)) {
      document.title = data.docTitle
    } else if (isProtectedCaseSlug(slug) && !gateOpen && data?.heroTitleLine1) {
      document.title = `${data.heroTitleLine1} · Access`
    }
  }, [data, slug, gateOpen])

  if (!slug || !data) {
    return <Navigate to={projectsIndexPath} replace />
  }

  const needsGate = isProtectedCaseSlug(slug) && !gateOpen

  if (needsGate) {
    return (
      <CaseStudyAccessGate
        data={data}
        onSuccess={() => {
          unlockCaseSlug(slug)
          setGateOpen(true)
        }}
      />
    )
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
