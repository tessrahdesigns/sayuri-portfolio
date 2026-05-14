import { useEffect, useRef } from 'react'
import { STUDIES } from '../data/studies'
import StudyItem from './StudyItem'

export default function CaseStudies() {
  const imgRefs = useRef([])

  useEffect(() => {
    const onScroll = () => {
      imgRefs.current.forEach((img) => {
        if (!img?.parentElement) return
        const rect = img.parentElement.getBoundingClientRect()
        const offset = (window.innerHeight - rect.top) * 0.05
        img.style.transform = `translateY(${offset}px)`
      })
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="case-studies">
      <h2 className="section-label">Selected Work</h2>
      {STUDIES.map((study, index) => (
        <StudyItem
          key={study.id}
          study={study}
          imgRef={(el) => {
            imgRefs.current[index] = el
          }}
        />
      ))}
    </main>
  )
}
