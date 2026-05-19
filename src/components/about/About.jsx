import { useEffect, useRef } from 'react'
import { publicUrl } from '../../utils/publicUrl.js'
import AboutSkillsStrip from './AboutSkillsStrip.jsx'
import Timeline from './Timeline.jsx'
import Testimonials from '../Testimonials.jsx'

const PORTRAIT_SRC = '/images/tessrah-mahalingam.png'

export default function About() {
  const profileImgRef = useRef(null)

  useEffect(() => {
    const img = profileImgRef.current
    if (!img) return

    const onScroll = () => {
      const parent = img.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      const offset = (window.innerHeight - rect.top) * 0.05
      img.style.transform = `translateY(${offset}px) scale(1.1)`
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main>
      <section className="about-header">
        <div className="profile-img-container">
          <img
            ref={profileImgRef}
            src={publicUrl(PORTRAIT_SRC)}
            alt="Tessrah Mahalingam, professional portrait"
          />
        </div>
        <div className="bio-content">
          <div className="about-meta">Based in Toronto</div>
          <h1 className="bio-title">
            Tessrah <span>Mahalingam</span>
          </h1>
          <div className="bio-text">
            <p>
              With over 5 years of experience in UX design, and 10 years in graphic design, I&apos;ve helped startups
              and established companies create digital products that users love. My
              approach combines research, creativity, and strategic thinking to
              deliver designs that are both beautiful and functional.
            </p>
            <p>
              I believe great design is invisible — it guides users naturally and anticipates needs without demanding
              attention. At a senior level, that means making the right trade-offs early: understanding business
              constraints, advocating for users in rooms where they aren&apos;t present, and shipping work that&apos;s
              both beautiful and measurably useful.
            </p>
          </div>
        </div>
      </section>

      <AboutSkillsStrip />

      <Timeline />

      <Testimonials variant="about" />
    </main>
  )
}
