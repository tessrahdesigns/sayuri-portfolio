import { Link } from 'react-router-dom'
import { getPublishedJournalEntries } from '../../data/journalEntries.js'
import JournalTeaser from './JournalTeaser.jsx'

export default function Journal() {
  const entries = getPublishedJournalEntries()
  const hasEntries = entries.length > 0

  return (
    <main className="journal-page">
      <header className="journal-header">
        <p className="journal-kicker">Journal</p>
        <h1 className="journal-title">
          A space for <span>exploration</span>
        </h1>
        <p className="journal-lead">
          Short notes on design practice, tools, and things I&apos;m learning—plus conversations worth revisiting.
        </p>
      </header>

      {hasEntries ? (
        <div className="journal-teaser-list">
          {entries.map((entry) => (
            <JournalTeaser key={entry.id} entry={entry} />
          ))}
        </div>
      ) : null}

      {!hasEntries ? (
        <section className="journal-empty" aria-labelledby="journal-empty-heading">
          <h2 id="journal-empty-heading" className="journal-empty__title">
            Coming soon
          </h2>
          <p className="journal-empty__body">
            Check back for essays and case-adjacent reflections—or reach out via{' '}
            <Link to="/contact">Contact</Link> if there&apos;s a topic you&apos;d like covered.
          </p>
        </section>
      ) : null}
    </main>
  )
}
