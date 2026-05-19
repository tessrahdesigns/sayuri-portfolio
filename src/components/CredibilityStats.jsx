import { Fragment } from 'react'
import { CREDIBILITY_STATS } from '../data/credibilityStats.js'

export default function CredibilityStats() {
  return (
    <section className="credibility-stats" aria-labelledby="credibility-stats-heading">
      <h2 id="credibility-stats-heading" className="section-label">
        My experience
      </h2>
      <div className="credibility-stats__inner">
        {CREDIBILITY_STATS.map((stat, index) => (
          <Fragment key={stat.id}>
            {index > 0 ? (
              <span className="credibility-stats__sep" aria-hidden="true">
                ·
              </span>
            ) : null}
            <div className="credibility-stats__item">
              <span className="credibility-stats__value">{stat.value}</span>
              <span className="credibility-stats__label">{stat.label}</span>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
