import { useEffect } from 'react'
import Layout from '../components/Layout.jsx'
import Journal from '../components/journal/Journal.jsx'

export default function JournalPage() {
  useEffect(() => {
    document.title = 'TESSRAH — Journal'
  }, [])

  return (
    <Layout
      navVariant="journal"
      railLabel="TESSRAH_OS / JOURNAL_STREAM"
      footerVariant="home"
    >
      <Journal />
    </Layout>
  )
}
