import { useEffect } from 'react'
import Layout from '../components/Layout.jsx'
import Hero from '../components/Hero.jsx'
import CaseStudies from '../components/CaseStudies.jsx'
import CredibilityStats from '../components/CredibilityStats.jsx'
import DesignProcess from '../components/DesignProcess.jsx'
import ExpertisePillars from '../components/ExpertisePillars.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function HomePage() {
  useEffect(() => {
    document.title = 'Tessrah Mahalingam - Senior Product Designer'
  }, [])

  return (
    <Layout
      navVariant="home"
      railLabel="PORTFOLIO_2026 / SENIOR_PRODUCT_DESIGNER"
      footerVariant="home"
    >
      <Hero />
      <CaseStudies />
      <ExpertisePillars />
      <CredibilityStats />
      <DesignProcess />
      <Testimonials />
    </Layout>
  )
}
