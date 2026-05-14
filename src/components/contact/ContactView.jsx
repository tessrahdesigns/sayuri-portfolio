import { useCallback } from 'react'

const CONTACT_EMAIL = 'tessrahdesigns@gmail.com'

export default function ContactView() {
  const resizeTextarea = useCallback((el) => {
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }, [])

  const onMessageInput = useCallback(
    (e) => {
      resizeTextarea(e.target)
    },
    [resizeTextarea],
  )

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const subjectLine = String(fd.get('subject') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()
    const subject = encodeURIComponent(subjectLine)
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`)
    window.location.assign(
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`,
    )
  }, [])

  return (
    <main className="contact-view">
      <div className="contact-header">
        <div className="availability">Open to work</div>
        <h1 className="contact-title">
          Let&apos;s
          <span>Collaborate.</span>
        </h1>
      </div>

      <div className="contact-form-container">
        <form className="contact-form" action="#" onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder=" " required />
            <label htmlFor="name">Full Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              required
            />
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder=" "
              required
            />
            <label htmlFor="subject">Subject line</label>
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows={1}
              placeholder=" "
              required
              onInput={onMessageInput}
            />
            <label htmlFor="message">Your Message</label>
          </div>
          <button type="submit" className="submit-btn">
            Send Signal <span>→</span>
          </button>
        </form>
      </div>
    </main>
  )
}
