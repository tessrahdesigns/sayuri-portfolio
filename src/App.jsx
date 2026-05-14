import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import HomePage from './pages/HomePage.jsx'
import ArchivePage from './pages/ArchivePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import CaseStudyPage from './pages/CaseStudyPage.jsx'
import { useProjectsIndexPath } from './hooks/useMobileViewport.js'

function LegacyArchiveSlugRedirect() {
  const { slug } = useParams()
  return <Navigate to={`/projects/${slug}`} replace />
}

function RedirectToProjectsIndex() {
  const path = useProjectsIndexPath()
  return <Navigate to={path} replace />
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ArchivePage />} />
        <Route
          path="/projects/ethereal-archive"
          element={<Navigate to="/projects/dealer-theme-portal" replace />}
        />
        <Route path="/projects/:slug" element={<CaseStudyPage />} />
        <Route path="/archive" element={<RedirectToProjectsIndex />} />
        <Route
          path="/archive/:slug"
          element={<LegacyArchiveSlugRedirect />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/info" element={<Navigate to="/about" replace />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}
