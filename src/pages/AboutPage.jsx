import { useEffect } from 'react'
import Layout from '../components/Layout.jsx'
import About from '../components/about/About.jsx'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'TESSRAH — About'
  }, [])

  return (
    <Layout
      navVariant="about"
      railLabel="TESSRAH_OS_CORE / BIO_MODULE_LOADED"
      footerVariant="home"
    >
      <About />
    </Layout>
  )
}
