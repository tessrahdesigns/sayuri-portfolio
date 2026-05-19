import HalftoneBackground from '../HalftoneBackground.jsx'
import Vignette from '../Vignette.jsx'
import Nav from '../Nav.jsx'
import VerticalRail from '../VerticalRail.jsx'
import CaseStudyView from './CaseStudyView.jsx'
import CaseStudyFooter from './CaseStudyFooter.jsx'

export default function CaseStudyShell({ data, slug }) {
  return (
    <>
      <HalftoneBackground />
      <Vignette />
      <Nav variant="caseStudy" />
      <VerticalRail label={data.railId} />
      <CaseStudyView data={data} slug={slug} />
      <CaseStudyFooter />
    </>
  )
}
