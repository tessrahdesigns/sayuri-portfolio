import { Link } from 'react-router-dom'

export default function JournalTeaser({ entry }) {
  const to = `/journal/${entry.id}`
  const categoriesLabel = [entry.category, ...entry.tags.filter((t) => t !== entry.category)].join(
    ' · ',
  )

  return (
    <article className="journal-teaser">
      <div className="journal-teaser__meta">
        <time dateTime={entry.dateIso}>{entry.dateDisplay}</time>
      </div>

      <h2 className="journal-teaser__title">
        <Link to={to}>{entry.title}</Link>
      </h2>

      <p className="journal-teaser__categories">{categoriesLabel}</p>

      <p className="journal-teaser__summary">{entry.summary}</p>

      <Link to={to} className="journal-teaser__more">
        Read more <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}
