import { DESIGN_PROCESS_STEPS } from '../data/designProcess.js'

export default function DesignProcess() {
  return (
    <section className="design-process" aria-labelledby="design-process-heading">
      <h2 className="section-label" id="design-process-heading">
        Design Process
      </h2>
      <ol className="design-process__steps">
        {DESIGN_PROCESS_STEPS.map((step, index) => (
          <li key={step.id} className="design-process__step">
            <span className="design-process__step-num" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="design-process__step-title">{step.title}</h3>
            <p className="design-process__step-desc">{step.summary}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
