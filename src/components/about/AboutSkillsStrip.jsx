import { useId } from 'react'
import { ABOUT_SKILL_GROUPS } from '../../data/aboutSkills.js'

export default function AboutSkillsStrip() {
  const headingId = useId()

  return (
    <section className="about-skills-strip" aria-labelledby={headingId}>
      <div className="about-skills-strip__inner">
        <h2 id={headingId} className="about-skills-strip__title">
          Skills & Tools
        </h2>
        {ABOUT_SKILL_GROUPS.map((group) => (
          <div key={group.id} className="about-skills-row">
            <div className="about-skills-row__label">{group.label}</div>
            <div className="about-skills-row__tags">
              {group.tags.map((tag) => (
                <span key={tag} className="about-skill-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
