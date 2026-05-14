import { useEffect } from 'react'
import Layout from '../components/Layout.jsx'
import Archive from '../components/archive/Archive.jsx'

export default function ArchivePage() {
  useEffect(() => {
    document.title = 'TESSRAH — Projects'
  }, [])

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
