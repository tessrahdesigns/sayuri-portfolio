const CONTACT_EMAIL = 'tessrahdesigns@gmail.com'
const CONTACT_EMAIL_DISPLAY = 'tessrahdesigns[AT]gmail.com'
const CONTACT_LINKEDIN = 'https://www.linkedin.com/in/tessrah/'

export default function FooterMini() {
  return (
    <div className="footer-mini">
      <span className="footer-mini__text">Est. 2012 - Tessrah Designs</span>
      <span className="footer-mini__sep" aria-hidden="true">
        ·
      </span>
      <div className="direct-contact">
        <span className="footer-mini__text">Or reach me directly:</span>
        <span className="footer-mini__sep" aria-hidden="true">
          ·
        </span>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL_DISPLAY}</a>
        <span className="footer-mini__sep" aria-hidden="true">
          ·
        </span>
        <a href={CONTACT_LINKEDIN} target="_blank" rel="noreferrer">
          linkedin.com/in/tessrah
        </a>
      </div>
    </div>
  )
}
