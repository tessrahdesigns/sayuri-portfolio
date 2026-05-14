import HalftoneBackground from './HalftoneBackground.jsx'
import Vignette from './Vignette.jsx'
import Nav from './Nav.jsx'
import VerticalRail from './VerticalRail.jsx'
import Footer from './Footer.jsx'
import FooterMini from './FooterMini.jsx'

export default function Layout({
  children,
  navVariant,
  railLabel,
  footerVariant,
}) {
  return (
    <>
      <HalftoneBackground />
      <Vignette />
      <Nav variant={navVariant} />
      <VerticalRail label={railLabel} />
      {children}
      {footerVariant === 'contact' ? (
        <FooterMini />
      ) : (
        <Footer variant={footerVariant} />
      )}
    </>
  )
}
