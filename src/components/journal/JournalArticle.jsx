import { Link } from 'react-router-dom'
import { publicUrl } from '../../utils/publicUrl.js'

function youtubeEmbedsFromEntry(entry) {
  if (entry.youtubeVideos?.length) return entry.youtubeVideos
  if (entry.youtubeVideoId) {
    return [
      {
        videoId: entry.youtubeVideoId,
        watchUrl: entry.youtubeWatchUrl ?? '',
        embedTitle: `Video: ${entry.title}`,
      },
    ]
  }
  return []
}

export default function JournalArticle({ entry }) {
  const youtubeList = youtubeEmbedsFromEntry(entry)

  return (
    <article className="journal-entry journal-entry--full">
      <div className="journal-entry__meta">
        <time dateTime={entry.dateIso}>{entry.dateDisplay}</time>
        <span className="journal-entry__meta-sep" aria-hidden="true">
          ·
        </span>
        <span>{entry.readTimeMin} min</span>
        <span className="journal-entry__meta-sep" aria-hidden="true">
          ·
        </span>
        <span className="journal-entry__category">{entry.category}</span>
      </div>

      <h1 className="journal-entry__title journal-entry__title--page">{entry.title}</h1>

      <p className="journal-entry__dek">{entry.dek}</p>

      <ul className="journal-entry__tags">
        {entry.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      {entry.heroImage ? (
        <figure className="journal-entry__hero">
          <img
            src={publicUrl(entry.heroImage)}
            alt={entry.heroImageAlt ?? ''}
            loading="lazy"
            decoding="async"
          />
        </figure>
      ) : null}

      <div className="journal-entry__body">
        {entry.paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

      {entry.embeddedMobileApp ? (
        <div className="journal-entry__media journal-entry__media--mobile-app">
          {entry.embeddedMobileApp.label ? (
            <p className="journal-entry__related-intro">{entry.embeddedMobileApp.label}</p>
          ) : null}
          <div className="journal-entry__mobile-shell">
            <div className="journal-entry__mobile-bezel">
              <div className="journal-entry__mobile-earpiece" aria-hidden="true" />
              <div className="journal-entry__mobile-viewport">
                <iframe
                  src={entry.embeddedMobileApp.src}
                  title={entry.embeddedMobileApp.title}
                  loading="lazy"
                  allow="clipboard-write; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>
          <p className="journal-entry__video-caption">
            <a
              href={entry.embeddedMobileApp.openUrl ?? entry.embeddedMobileApp.src}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in full browser <span aria-hidden="true">↗</span>
            </a>
          </p>
        </div>
      ) : null}

      {entry.relatedIntro ? (
        <div className="journal-entry__related">
          <p className="journal-entry__related-intro">{entry.relatedIntro}</p>
          {entry.relatedLinks?.length ? (
            <ul className="journal-entry__related-list">
              {entry.relatedLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href}>{link.label}</Link>
                  ) : (
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      {youtubeList.map((vid) => (
        <div key={vid.videoId} className="journal-entry__media">
          <div className="journal-entry__video">
            <iframe
              src={`https://www.youtube.com/embed/${vid.videoId}`}
              title={vid.embedTitle ?? `Video: ${entry.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
          {vid.watchUrl ? (
            <p className="journal-entry__video-caption">
              <a href={vid.watchUrl} target="_blank" rel="noopener noreferrer">
                Watch on YouTube
              </a>
            </p>
          ) : null}
        </div>
      ))}

      {entry.vimeoVideoId ? (
        <div className="journal-entry__media journal-entry__media--vimeo">
          <div className="journal-entry__video">
            <iframe
              src={`https://player.vimeo.com/video/${entry.vimeoVideoId}`}
              title={entry.vimeoEmbedTitle ?? 'Related video on Vimeo'}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          {entry.vimeoWatchUrl ? (
            <p className="journal-entry__video-caption">
              <a href={entry.vimeoWatchUrl} target="_blank" rel="noopener noreferrer">
                Watch on Vimeo
              </a>
            </p>
          ) : null}
        </div>
      ) : null}

      {entry.relatedScreens?.length ? (
        <div className="journal-entry__screen-cards">
          {entry.relatedScreens.map((card) => (
            <a
              key={card.href}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="journal-entry__screen-card"
            >
              <span className="journal-entry__screen-card-thumb">
                <img
                  src={publicUrl(card.image)}
                  alt={card.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="journal-entry__screen-card-footer">
                <span className="journal-entry__screen-card-label">{card.label}</span>
                <span className="journal-entry__screen-card-open">
                  Open <span aria-hidden="true">↗</span>
                </span>
              </span>
            </a>
          ))}
        </div>
      ) : null}
    </article>
  )
}
