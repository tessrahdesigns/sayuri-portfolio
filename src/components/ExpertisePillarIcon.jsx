/** Decorative pillars — stroke icons match portfolio accents via CSS `currentColor`. */

function IconEnterpriseUx() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      {/* Layered surfaces / orchestration */}
      <rect x="9" y="14" width="22" height="30" rx="2" stroke="currentColor" strokeWidth="1.35" />
      <rect x="21" y="10" width="26" height="32" rx="2" stroke="currentColor" strokeWidth="1.35" opacity={0.55} />
      <path
        d="M17 26h10M17 31h14M17 36h8"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity={0.45}
      />
      <circle cx="41" cy="22" r="2.25" fill="var(--sky-blue)" opacity={0.85} />
      <circle cx="41" cy="34" r="2.25" fill="var(--sky-blue)" opacity={0.55} />
    </svg>
  )
}

function IconDesignSystems() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      {/* Modular grid */}
      <rect x="11" y="11" width="14" height="14" rx="1.75" stroke="currentColor" strokeWidth="1.35" />
      <rect x="31" y="11" width="14" height="14" rx="1.75" stroke="currentColor" strokeWidth="1.35" opacity={0.6} />
      <rect x="11" y="31" width="14" height="14" rx="1.75" stroke="currentColor" strokeWidth="1.35" opacity={0.6} />
      <rect x="31" y="31" width="14" height="14" rx="1.75" stroke="currentColor" strokeWidth="1.35" />
      <path
        d="M26 18v20M18 26h20"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 3"
        opacity={0.35}
      />
    </svg>
  )
}

function IconResearchLed() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      {/* Lens + insight lines */}
      <circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="1.35" />
      <path d="M32 32 L43 43" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path
        d="M13 42h22"
        stroke="var(--sky-blue)"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity={0.65}
      />
      <path
        d="M13 46h14"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity={0.35}
      />
    </svg>
  )
}

const BY_ID = {
  'enterprise-ux': IconEnterpriseUx,
  'design-systems': IconDesignSystems,
  'research-led-design': IconResearchLed,
}

export default function ExpertisePillarIcon({ pillarId }) {
  const Cmp = BY_ID[pillarId]
  if (!Cmp) return null
  return (
    <span className="expertise-pillars__icon" aria-hidden="true">
      <Cmp />
    </span>
  )
}
