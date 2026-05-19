import { HOME_FEATURED_STUDIES } from '../data/homeFeaturedStudies.js'
import FeaturedStudyHero from './FeaturedStudyHero.jsx'

export default function CaseStudies() {
  return (
    <main className="case-studies">
      <h2 className="section-label">Selected Work</h2>
      {HOME_FEATURED_STUDIES.map((study, index) => (
        <FeaturedStudyHero
          key={study.id}
          study={study}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      ))}
    </main>
  )
}
