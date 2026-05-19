import { HOME_TESTIMONIALS } from '../data/testimonials.js'

export default function Testimonials({ variant = 'home' }) {
  const sectionClass =
    variant === 'about' ? 'testimonials testimonials--about' : 'testimonials'

  return (
    <section className={sectionClass} aria-labelledby="testimonials-heading">
      <h2 className="section-label" id="testimonials-heading">
        Testimonials
      </h2>
      <ul className="testimonials__list">
        {HOME_TESTIMONIALS.map((item) => (
          <li key={item.id} className="testimonials__item">
            <blockquote className="testimonials__quote">
              <p>{item.quote}</p>
              <footer className="testimonials__attrib">
                <cite className="testimonials__name">{item.author}</cite>
                <span className="testimonials__role">{item.roleLine}</span>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  )
}
