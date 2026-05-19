import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import JournalArticle from '../components/journal/JournalArticle.jsx'
import { getJournalEntryBySlug } from '../data/journalEntries.js'

export default function JournalArticlePage() {
  const { slug } = useParams()
  const entry = slug ? getJournalEntryBySlug(slug) : undefined

  useEffect(() => {
    document.title = entry ? `${entry.title} — TESSRAH Journal` : 'TESSRAH — Journal'
  }, [entry])

  if (!slug || !entry) {
    return <Navigate to="/journal" replace />
  }

  return (
    <Layout
      navVariant="journal"
      railLabel="TESSRAH_OS / JOURNAL_STREAM"
      footerVariant="home"
    >
      <main className="journal-page">
        <JournalArticle entry={entry} />
      </main>
    </Layout>
  )
}
