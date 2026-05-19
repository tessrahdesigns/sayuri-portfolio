import { useEffect, useRef } from 'react'
import CaseStudyMoreProjects from './CaseStudyMoreProjects.jsx'
import { publicUrl } from '../../utils/publicUrl.js'
import NarrativeImageLightbox from './NarrativeImageLightbox.jsx'

/** @typedef {{ type: 'h1'|'h2'|'p'|'ul'|'figure'|'embed'|'link'|'video', text?: string, items?: (string|{ lead: string, detail?: string, detailParts?: { text: string, mediumBold?: boolean }[] })[], parts?: { text: string, bold?: boolean, href?: string }[], src?: string, alt?: string, caption?: string, title?: string, href?: string, layout?: 'inline', embedVariant?: 'mobile' }} NarrativeBlock */

function loomShareToEmbedUrl(shareUrl) {
  const m = shareUrl.match(/loom\.com\/share\/([a-zA-Z0-9_-]+)/)
  return m ? `https://www.loom.com/embed/${m[1]}` : shareUrl
}

function NarrativeBlocks({ blocks }) {
  if (!blocks?.length) return null
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === 'h1') {
          return (
            <h2 key={i} className="case-narrative-h1">
              {block.text}
            </h2>
          )
        }
        if (block.type === 'h2') {
          return (
            <h3 key={i} className="case-narrative-h2">
              {block.text}
            </h3>
          )
        }
        if (block.type === 'ul') {
          return (
            <ul key={i} className="case-narrative-list">
              {(block.items ?? []).map((item, j) => {
                if (typeof item === 'string') {
                  return <li key={j}>{item}</li>
                }
                return (
                  <li key={j}>
                    <strong className="case-narrative-list-lead">
                      {item.lead}
                    </strong>{' '}
                    {item.detailParts?.length
                      ? item.detailParts.map((seg, k) =>
                          seg.mediumBold ? (
                            <span
                              key={k}
                              className="case-narrative-list-semibold"
                            >
                              {seg.text}
                            </span>
                          ) : (
                            <span key={k}>{seg.text}</span>
                          ),
                        )
                      : item.detail}
                  </li>
                )
              })}
            </ul>
          )
        }
        if (block.type === 'p') {
          if (block.parts?.length) {
            return (
              <p key={i}>
                {block.parts.map((part, j) => {
                  if (part.href) {
                    return (
                      <a
                        key={j}
                        href={part.href}
                        className="case-narrative-external-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {part.text}
                      </a>
                    )
                  }
                  return part.bold ? (
                    <strong key={j}>{part.text}</strong>
                  ) : (
                    <span key={j}>{part.text}</span>
                  )
                })}
              </p>
            )
          }
          return (
            <p key={i}>{block.text}</p>
          )
        }
        if (block.type === 'figure' && block.src && block.alt) {
          if (block.layout === 'inline') {
            return (
              <figure
                key={`figure-${i}-${block.src}`}
                className="case-narrative-figure case-narrative-figure--inline"
              >
                <img
                  src={publicUrl(block.src)}
                  alt={block.alt}
                  className="case-narrative-inline-img"
                  loading="lazy"
                  decoding="async"
                />
                {block.caption ? (
                  <figcaption className="case-narrative-figure__caption">
                    {block.caption}
                  </figcaption>
                ) : null}
              </figure>
            )
          }
          return (
            <NarrativeImageLightbox
              key={`figure-${i}-${block.src}`}
              src={publicUrl(block.src)}
              alt={block.alt}
              caption={block.caption}
              lightboxSrc={
                block.lightboxSrc ? publicUrl(block.lightboxSrc) : undefined
              }
              diagramFigure={block.diagramFigure}
            />
          )
        }
        if (block.type === 'embed' && block.src) {
          const embedSrc = loomShareToEmbedUrl(block.src)
          const isFigma = /figma\.com/i.test(embedSrc)
          const isMobilePreview = block.embedVariant === 'mobile'
          const title =
            block.title ??
            (isFigma ? 'Figma prototype' : 'Embedded content')
          return (
            <figure
              key={`embed-${i}`}
              className={`case-narrative-figure case-narrative-embed${isFigma ? ' case-narrative-embed--figma' : ''}${isMobilePreview ? ' case-narrative-embed--mobile-preview' : ''}`}
            >
              <div className="case-narrative-embed__frame">
                <iframe
                  src={embedSrc}
                  title={title}
                  allowFullScreen
                  allow={
                    isFigma
                      ? 'fullscreen; autoplay; clipboard-write; clipboard-read'
                      : 'fullscreen; clipboard-write'
                  }
                  loading="lazy"
                />
              </div>
              {block.caption ? (
                <figcaption className="case-narrative-figure__caption">
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          )
        }
        if (block.type === 'video' && block.src) {
          const title = block.title ?? 'Video overview'
          return (
            <figure key={`video-${i}`} className="case-narrative-figure case-narrative-video">
              <div className="case-narrative-video__shell">
                <video
                  className="case-narrative-video__media"
                  src={publicUrl(block.src)}
                  title={title}
                  controls
                  playsInline
                  muted
                  loop
                  autoPlay
                  preload="metadata"
                />
              </div>
              {block.caption ? (
                <figcaption className="case-narrative-figure__caption">
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          )
        }
        if (block.type === 'link' && block.href) {
          return (
            <p key={`link-${i}`} className="case-narrative-link-row">
              <a
                href={block.href}
                className="case-narrative-external-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {block.text ?? block.href}
              </a>
            </p>
          )
        }
        return null
      })}
    </>
  )
}

function MetaValueLines({ lines }) {
  return (
    <div className="meta-value">
      {lines.map((line, i) => (
        <span key={i}>
          {i > 0 ? <br /> : null}
          {line}
        </span>
      ))}
    </div>
  )
}

export default function CaseStudyView({ data, slug }) {
  const heroImgRef = useRef(null)

  useEffect(() => {
    const img = heroImgRef.current
    if (!img) return

    const onScroll = () => {
      const scroll = window.pageYOffset
      img.style.transform = `translateY(${scroll * 0.3}px) scale(${1 + scroll * 0.0005})`
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className="case-hero">
        <img
          ref={heroImgRef}
          src={publicUrl(data.heroImage)}
          alt={data.heroImageAlt}
        />
        <div className="case-hero-content">
          <div
            className="meta-label case-hero-kicker"
          >
            {data.heroKicker}
          </div>
          <h1 className="case-hero-title">
            {data.heroTitleLine1} <span>{data.heroTitleAccent}</span>
          </h1>
        </div>
      </header>

      <main className="content-container">
        <aside className="case-sidebar">
          <div className="meta-group">
            <span className="meta-label">Timeline</span>
            <div className="meta-value">{data.sidebar.timeline}</div>
          </div>
          <div className="meta-group">
            <span className="meta-label">Role</span>
            <MetaValueLines lines={data.sidebar.role} />
          </div>
          {data.sidebar.scope ? (
            <div className="meta-group">
              <span className="meta-label">Scope</span>
              <div className="meta-value">{data.sidebar.scope}</div>
            </div>
          ) : null}
          <div className="meta-group">
            <span className="meta-label">
              {data.sidebar.toolsLabel ?? 'Tools'}
            </span>
            <MetaValueLines lines={data.sidebar.tools} />
          </div>
          <div className="meta-group">
            <span className="meta-label">Collaborators</span>
            <MetaValueLines lines={data.sidebar.collaborators} />
          </div>
        </aside>

        <section className="case-narrative">
          <div className="narrative-block">
            {data.narrativeIntroBlocks ? (
              <NarrativeBlocks blocks={data.narrativeIntroBlocks} />
            ) : (
              (data.narrativeIntro ?? []).map((p, i) => (
                <p key={`intro-${i}`}>{p}</p>
              ))
            )}
            {data.pullQuote ? (
              <blockquote className="pull-quote">
                &quot;{data.pullQuote}&quot;
              </blockquote>
            ) : null}
            {data.narrativeMidBlocks ? (
              <NarrativeBlocks blocks={data.narrativeMidBlocks} />
            ) : (
              (data.narrativeMid ?? []).map((p, i) => (
                <p key={`mid-${i}`}>{p}</p>
              ))
            )}
          </div>

          {data.process ? (
            <div className="process-visuals">
              <h2 className="section-subhead">{data.process.title}</h2>
              <div className="wireframe-grid">
                {data.process.images.map((img) => (
                  <div key={img.src} className="wireframe-item">
                    <img src={publicUrl(img.src)} alt={img.alt} />
                  </div>
                ))}
              </div>
              <p className="process-caption">{data.process.caption}</p>
            </div>
          ) : null}

          <div className="narrative-block">
            {data.narrativeOutroBlocks ? (
              <NarrativeBlocks blocks={data.narrativeOutroBlocks} />
            ) : (
              (data.narrativeOutro ?? []).map((p, i) => (
                <p key={`out-${i}`}>{p}</p>
              ))
            )}
          </div>
        </section>

        <CaseStudyMoreProjects currentSlug={slug} />
      </main>
    </>
  )
}
