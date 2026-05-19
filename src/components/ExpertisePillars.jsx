import ExpertisePillarIcon from './ExpertisePillarIcon.jsx'
import { EXPERTISE_PILLARS } from '../data/expertisePillars.js'

export default function ExpertisePillars() {
  return (
    <section className="expertise-pillars" aria-labelledby="expertise-pillars-heading">
      <h2 className="section-label" id="expertise-pillars-heading">
        Core design capabilities
      </h2>
      <ul className="expertise-pillars__grid">
        {EXPERTISE_PILLARS.map((pillar) => (
          <li key={pillar.id} className="expertise-pillars__item">
            <ExpertisePillarIcon pillarId={pillar.id} />
            <h3 className="expertise-pillars__title">{pillar.title}</h3>
            <p className="expertise-pillars__desc">{pillar.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
