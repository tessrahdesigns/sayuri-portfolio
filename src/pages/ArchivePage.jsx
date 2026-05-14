import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import Archive from '../components/archive/Archive.jsx'
import { useMobileViewport } from '../hooks/useMobileViewport.js'

export default function ArchivePage() {
  const isMobile = useMobileViewport()

  useEffect(() => {
    if (!isMobile) document.title = 'TESSRAH — Projects'
  }, [isMobile])

  if (isMobile) {
    return <Navigate to="/" replace />
  }

  return (
    <Layout
      navVariant="projects"
      railLabel="CATALOGUE_V.06 // TOTAL_RECORDS: 05"
      footerVariant="projects"
    >
      <Archive />
    </Layout>
  )
}
