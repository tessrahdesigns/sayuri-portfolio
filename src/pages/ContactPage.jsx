import { useEffect } from 'react'
import Layout from '../components/Layout.jsx'
import ContactView from '../components/contact/ContactView.jsx'

const BODY_CLASS = 'page-contact'

export default function ContactPage() {
  useEffect(() => {
    document.title = 'TESSRAH — Contact'
    document.body.classList.add(BODY_CLASS)
    return () => {
      document.body.classList.remove(BODY_CLASS)
    }
  }, [])

  return (
    <Layout
      navVariant="contact"
      railLabel="S_ID: INQUIRY_MODULE / LOC: GLOBAL"
      footerVariant="contact"
    >
      <ContactView />
    </Layout>
  )
}
