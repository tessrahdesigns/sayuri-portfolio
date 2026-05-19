import { PROJECT_ITEMS } from './archive.js'
import audiInteractionAuditVendorIntegrationsUrl from '../assets/audi-interaction-audit-vendor-integrations.png'
import audiVendorServiceSchedulerUrl from '../assets/audi-vendor-integrations-service-scheduler.jpg'
import yuniterBusinessUserNeedsVennUrl from '../assets/yuniter-business-user-needs-venn.png'
import yuniterIncrementalPermissionsDiagramUrl from '../assets/yuniter-incremental-permissions-diagram.png'

/** @typedef {{
 *   type: 'h1'|'h2'|'p'|'ul'|'figure'|'embed'|'link'|'video',
 *   text?: string,
 *   items?: (string|{ lead: string, detail?: string, detailParts?: { text: string, mediumBold?: boolean }[] })[],
 *   parts?: { text: string, bold?: boolean, href?: string }[],
 *   src?: string,
 *   alt?: string,
 *   caption?: string,
 *   title?: string,
 *   href?: string,
 *   layout?: 'inline',
 *   embedVariant?: 'mobile',
 *   lightboxSrc?: string,
 *   diagramFigure?: boolean,
 * }} NarrativeBlock */

/** @typedef {{
 *   docTitle: string
 *   railId: string
 *   heroImage: string
 *   heroImageAlt: string
 *   heroKicker: string
 *   heroTitleLine1: string
 *   heroTitleAccent: string
 *   sidebar: { timeline: string, role: string[], tools: string[], collaborators: string[], scope?: string, toolsLabel?: string }
 *   narrativeIntro?: string[]
 *   narrativeIntroBlocks?: NarrativeBlock[]
 *   pullQuote?: string
 *   narrativeMid?: string[]
 *   narrativeMidBlocks?: NarrativeBlock[]
 *   process?: { title: string, images: { src: string, alt: string }[], caption: string }
 *   narrativeOutro?: string[]
 *   narrativeOutroBlocks?: NarrativeBlock[]
 * }} CaseStudyDetail */

/** @type {Record<string, CaseStudyDetail>} */
export const CASE_STUDY_BY_SLUG = {
  'audi-dealer-ecosystem': {
    docTitle: 'Audi North America Dealer Ecosystem — Case Study — TESSRAH',
    railId: 'CASE_STUDY: AUDI_NA_DEALER_ECOSYSTEM / ITERATION.V1.0',
    heroImage: '/images/audi-dealer-ecosystem-hero.png',
    heroImageAlt:
      'Hands holding a tablet in landscape showing the Audi Nashville dealership site: nav with Audi rings, hero welcoming visitors with showroom photography, and Explore Inventory and Schedule Service CTAs',
    heroKicker: 'Standardizing the Premium Experience',
    heroTitleLine1: 'Audi North America',
    heroTitleAccent: 'Dealer Ecosystem.',
    sidebar: {
      timeline: 'Dec 2023 —\u00a0Dec 2024 · 12 months · 2023–2024',
      role: ['UX Designer'],
      toolsLabel: 'UX Methodologies',
      tools: [
        'Problem Definition, Information Architecture, Cross-Functional Workshop Facilitation, Interaction Auditing,',
        'Competitive & Market Research, Wireframing & Prototyping, Developer Handoff & Documentation, Stakeholder Management',
      ],
      collaborators: ['Product Management', 'Engineering, AEM implementation partners'],
    },
    narrativeIntroBlocks: [
      { type: 'h1', text: 'Overview' },
      {
        type: 'p',
        text:
          'As a UX Designer, I led the strategic redesign and standardization of the Information Architecture (IA) for Audi North America. The mission was to migrate hundreds of decentralized dealership websites from a high-cost legacy platform (Dealer.com) into a unified, brand-governed ecosystem within Adobe Experience Manager (AEM).',
      },
      {
        type: 'video',
        src: '/videos/audi-ecosystem.mov',
        title: 'USA & Canada dealer sites on AEM',
        caption:
          'The refreshed digital experience rolling out across US and Canadian dealerships—shared layout patterns and governance built in Adobe Experience Manager.',
      },
      { type: 'h1', text: 'Impact' },
      {
        type: 'ul',
        items: [
          '400% page speed improvement: Drastically reduced bounce rates and improved SEO across the entire dealer network.',
          '1,000+ sites unified: Migrated a massive legacy network into a single, governed AEM instance.',
          'Visits to vehicle pages increased by 25%, as they navigate between Audi.com and their local dealership sites',
          'Seamless journey: Established a “Global Ecosystem” where Audi customers will have similar premium brand experience across the entire Audi dealership network',
        ],
      },
    ],
    pullQuote:
      'This project was a lesson in balancing ideal UX with business reality. While I would have preferred full visual control over the vendor UIs, the priority was solving for fragmentation and cost.',
    narrativeMidBlocks: [
      { type: 'h1', text: 'The Challenge' },
      {
        type: 'p',
        text:
          'The “Wild West” of Digital Retail — Before this initiative, individual Audi dealerships in the US operated with significant autonomy, resulting in a fragmented digital presence.',
      },
      {
        type: 'ul',
        items: [
          'Inconsistency: Dealerships created their own navigation structures and content hierarchies, diluting the Audi premium brand experience.',
          'High overhead: The business incurred massive costs hosting these sites through third-party providers.',
          'Technical complexity: A web of diverse vendor integrations (trade-in tools, service schedulers, finance CTAs) made a “one-size-fits-all” solution impossible.',
        ],
      },
      { type: 'h1', text: 'Discovery & Research' },
      {
        type: 'p',
        text:
          'I began by auditing the existing IA inherited from previous European-market initiatives (Audi Ireland). My analysis quickly revealed that the North American market required a fundamentally different approach due to its geographical scale, diverse consumer needs, and high level of dealer ownership.',
      },
      { type: 'h2', text: 'The MVP Dealer Audit' },
      {
        type: 'p',
        text:
          'To establish a baseline, I conducted a deep-dive audit into three “Minimum Viable Product” (MVP) dealerships: Audi Rockville, Audi Nashville, and Audi Lakeland. I systematically overlaid the IA structures of these three dealers to identify commonalities, outliers, and essential user flows.',
      },
      {
        type: 'figure',
        src: '/images/audi-mvp-ia-audit.png',
        alt:
          'Side-by-side existing IA diagrams for Audi Rockville, Nashville, and Lakeland dealerships',
        caption:
          'MVP dealer audit: comparing existing IA structures across three dealerships.',
      },
      {
        type: 'p',
        text:
          'Gap identification: I mapped where native Audi pages (like “Sell My Car”) conflicted or overlapped with third-party tools already in use by the dealers.',
      },
      { type: 'h1', text: 'Definition & Strategy' },
      { type: 'h2', text: 'Cross-Functional Alignment' },
      {
        type: 'p',
        text:
          'I facilitated a two-day intensive workshop with the Product Manager to categorize the massive ecosystem of vendor integrations. We established five core pillars for the MVP: Digital Retailing, Service Scheduling, Trade-In Tools, Finance CTAs, and VDP (Vehicle Display Page) Flows.',
      },
      {
        type: 'p',
        text:
          'The strategic pivot: While we acknowledged that many third-party tools “broke” Audi’s visual branding, we prioritized functional parity and navigational consistency. The goal was a “Golden Path” for the consumer—ensuring that New Vehicles, Pre-owned, Finance, and Service were always where a customer expected them to be, regardless of the dealership location.',
      },
      {
        type: 'figure',
        src: '/images/audi-vendor-integrations-flow.png',
        alt:
          'Vendor integration flows: mobile wireframes for VLP, VDP, scheduling, service, and specials with legend and annotated connectors',
        caption:
          'North American retail flows and vendor touchpoints mapped after the strategic pivot—VLP, VDP, service, and related journeys in one workspace.',
      },
      { type: 'h1', text: 'Design & Architecture' },
      { type: 'h2', text: 'Integrated IA Mapping' },
      {
        type: 'p',
        text:
          'I developed a "Recommended Global IA" that served as the North Star for all USA dealerships. To make this actionable for internal stakeholders, I created a color-coded overlay system that visualized exactly where third-party integrations (e.g., Active Engage, 700 Credit, Dealer Track) would sit within the new AEM-hosted structure.',
      },
      {
        type: 'figure',
        src: '/images/audi-recommended-ia-overlay.png',
        alt:
          'Recommended Global IA diagram with color-coded overlays for each category of integration. service scheduling, trade-in, digital retailing on VLP and VDP, finance, and chat across',
        caption:
          'Color-coded overlay on the recommended IA for each vendor category.',
      },
      { type: 'h2', text: 'Interaction Audits & Annotations' },
      {
        type: 'p',
        text:
          'I conducted a meticulous audit of vendor flows using real-world screenshots, annotating every exit point and CTA. This ensured that even when a user left the native Audi environment to use a tool like Canadian Black Book or iPacket, the transition felt as seamless as possible.',
      },
      {
        type: 'figure',
        src: audiInteractionAuditVendorIntegrationsUrl,
        alt:
          'Service scheduling user flows on a design canvas: paths from home through Service and Parts to Update Promise versus Xtime scheduling, alongside vendor integration UI/UX improvement overview',
        caption:
          'Interaction audit: end-to-end scheduling journeys and vendor-integration UI/UX improvement framing in one canvas.',
      },
      { type: 'h1', text: 'Prototype & Implementation' },
      { type: 'h2', text: 'Modular Design Systems' },
      {
        type: 'p',
        text:
          'Because different dealers used different vendors for the same task (e.g., Update Promise vs. Xtime for service scheduling), I designed modular wireframes. These showed developers exactly how the UI would adjust based on which vendor was toggled on for a specific site.',
      },
      {
        type: 'figure',
        src: audiVendorServiceSchedulerUrl,
        alt:
          'Figma wireframes side by side: Service Scheduler with Update Promise versus Xtime, showing the same page with different vendor modules highlighted',
        caption:
          'Service scheduler modular wireframes: same site frame with Update Promise vs. Xtime vendor modules called out in Figma.',
      },
      { type: 'h2', text: 'The Developer Blueprint' },
      {
        type: 'p',
        text:
          'I authored a dedicated Figma documentation suite for the engineering team. This acted as the “Source of Truth,” detailing the layout logic for third-party modules sitting within native AEM pages. I managed this project through 80% of its lifecycle, ensuring a smooth transition to the subsequent design team during an internal reorganization.',
      },
    ],
    narrativeOutroBlocks: [
      { type: 'h1', text: 'Results' },
      {
        type: 'p',
        parts: [
          { text: 'Brand governance', bold: true },
          {
            text:
              '—successfully established a standardized layout that unified the Audi premium experience across the North American market.',
          },
        ],
      },
      {
        type: 'p',
        parts: [
          { text: 'Operational Efficiency', bold: true },
          {
            text:
              '—supported the transition to AEM, significantly reducing third-party hosting fees and streamlining site management.',
          },
        ],
      },
      {
        type: 'p',
        parts: [
          { text: 'Scalability', bold: true },
          {
            text:
              '—created a modular framework that allows Audi to eventually bring these vendor tools in-house, future-proofing the platform.',
          },
        ],
      },
    ],
  },

  'dealer-theme-portal': {
    docTitle: 'Dealer Theme Management Portal — Case Study — TESSRAH',
    railId: 'CASE_STUDY: DEALER_THEME_MGMT / MAR_2025',
    heroImage: '/images/dealer-theme-management-portal-hero.png',
    heroImageAlt:
      'Desktop setup on a wooden desk: monitor showing the Dealer Theme portal Edit Dealer view—Audi Queens in the sidebar with enrolment status, and Preview Dealer Theme with vehicle imagery, dealer bar, QR code, attachments, and Save',
    heroKicker: 'Automotive · Admin & Activation · MVP',
    heroTitleLine1: 'Dealer Theme',
    heroTitleAccent: 'Portal.',
    sidebar: {
      timeline: 'Mar 2025 —\u00a01 month',
      role: ['Lead UX Designer'],
      toolsLabel: 'UI library',
      tools: ['Adobe Spectrum', 'Figma'],
      collaborators: ['Product Owner', 'QA, 2 Front-End Developers'],
    },
    narrativeIntroBlocks: [
      { type: 'h1', text: 'Overview' },
      {
        type: 'p',
        text:
          'I designed an admin experience focused on making dealer theme activation straightforward and intuitive. This interface unifies core functions—enrollment, bulk uploads, search, and filtering—into one cohesive dashboard. By streamlining these workflows, I ensured administrators could track activation progress (from API validation to vehicle display) and manage dealer-specific details with total clarity.',
      },
      {
        type: 'p',
        text:
          'The portal is built for a Regional Manager–style administrator validating assets before release. The flip side is the Audi consumer in the vehicle: the same theme and QR surface as branded, in-car infotainment—not another admin surface.',
      },
      {
        type: 'figure',
        src: '/images/audi-mmi-infotainment-home.png',
        alt: 'Audi Multi Media Interface (MMI) home screen with dealer branding and QR code.',
        caption:
          'Consumer-facing outcome: dealer theme and QR on the in-car Multi Media Interface (MMI).',
      },
      { type: 'h1', text: 'Impact' },
      {
        type: 'ul',
        items: [
          'One dashboard for enrollment, bulk operations, search, and filtering—clear progress from API validation through in-vehicle display.',
          'Tighter partnership with the PO: from prescribed low-fi wireframes to a shared, requirements-driven solution space for high-volume admins.',
          'Discovery with engineering eliminated redundant manual upload and QR UIs; the back-end could source imagery and generate QR from dealer URL—saving build time and reducing error.',
          'MVP delivered on a one-month timeline using Adobe Spectrum for a scannable, data-dense admin layout aligned to a Regional Manager archetype.',
        ],
      },
    ],
    pullQuote:
      'When you can’t talk to users, your developers and your PO are your best “proxies.”',
    narrativeMidBlocks: [
      { type: 'h1', text: 'Business Needs vs. UX Thinking' },
      {
        type: 'p',
        text:
          'The Product Owner (PO) joined the project from the Audi business side. They brought deep knowledge of business requirements but initially approached the project by providing their own low-fidelity wireframes. I had to pivot the relationship, advocating for my role as a thinker and strategist. I explained that my role was to experiment by coming up with different solutions that would work for a high-volume administrator. We established a compromise using his wireframes as a starting point, while digging deeper into the original business requirements.',
      },
      {
        type: 'figure',
        src: '/images/dealer-theme-userflow-old-vs-updated.png',
        alt:
          'Two flowcharts: original Dealer Theme manager user flow from lo-fi wireframes versus updated wireframes with a central Dealers hub, Excel upload, and nested reporting',
        caption:
          'Original user flow from lo-fi wireframes and the updated structure: a single Dealers entry with consolidated paths for editing, themes, and daily reports.',
      },
      { type: 'h2', text: 'The Archetype: Regional Fleet Manager' },
      {
        type: 'p',
        text:
          'I was unable to speak directly to dealers, so I built an archetype to use as a reference point: a Regional Manager—a third-party admin managing clusters of dealerships (e.g., all dealers within New York City).',
      },
      {
        type: 'ul',
        items: [
          'User goal: efficiently manage “Theme Activations” for loaner fleets across multiple states.',
          'Pain point: verifying that a digital asset (the theme/QR code) has successfully traveled from the back-end API to a physical vehicle’s Multi Media Interface (MMI).',
        ],
      },
      { type: 'h1', text: 'Discovery & Technical' },
      {
        type: 'p',
        text:
          'In a one-month sprint, there is no room for “fluff.” I worked closely with the two front-end developers to identify where the UI could get out of the way. Through discovery with the devs, I learned that the back-end could automatically pull images and generate QR codes based on the dealer URL. I eliminated the need for a manual upload or QR generation UI. This was an important part of the discovery phase as it saved development time and reduced the margin for human error during the admin process.',
      },
      { type: 'h1', text: 'The Solution (Built with Adobe Spectrum)' },
      {
        type: 'p',
        text:
          'Using Adobe Spectrum, I focused on a clean, data-heavy layout that prioritized scannability.',
      },
      { type: 'h2', text: '1. The Enrollment Hub (Manage Dealers)' },
      {
        type: 'ul',
        items: [
          'List view: a high-density table showing all dealers in the region.',
          'Bulk management: a CSV upload feature to import thousands of loaner vehicle VINs at once.',
          'Status control: simple indicators to show dealer status in real time.',
        ],
      },
      {
        type: 'figure',
        src: '/images/dealer-theme-manage-dealers-all-dealers.png',
        alt:
          'Manage Dealers dashboard: sidebar with Manage Dealers and VIN Activations, search and enrolment filter, and a dense table of dealers with status icons, location, and edit actions',
        caption:
          'Enrollment hub—Manage Dealers: search, filter by enrolment status, and scan dealer rows with clear status signals.',
      },
      { type: 'h2', text: '2. The Activation Log (VIN Tracking)' },
      {
        type: 'p',
        text:
          'The success line: a single, clear row for each VIN that validates the lifecycle of an activation: License Created (legal/system check) → Image API Validated (technical check) → Theme Activated on Vehicle (final success). Admins can filter by activation date or dealer name to troubleshoot specific batches.',
      },
      {
        type: 'figure',
        src: '/images/dealer-theme-vin-activations-all-activations.png',
        alt:
          'VIN Activations dashboard: search by dealer or VIN, filters for activation status and date range, summary of complete vs incomplete activations, and a table of rows with dealer, VIN, status, and date',
        caption:
          'Activation log—all activations view with filters, batch summary, and scannable per-VIN status.',
      },
      { type: 'h2', text: '3. Detail & Preview View' },
      {
        type: 'p',
        text:
          'Visual validation: a drill-down page where the admin can see exactly what the dealer’s custom image and QR code look like before they go live in the car’s Multi Media Interface (MMI).',
      },
      {
        type: 'figure',
        src: '/images/dealer-theme-edit-dealer-preview.png',
        alt:
          'Edit Dealer screen: sidebar with Audi Queens dealer ID, non-participant status, and contact info; main area shows Preview Dealer Theme with vehicle image, dealer name bar, QR code, terms attachment, status dropdown, and Save',
        caption:
          'Detail & preview—dealer context in the rail, theme and QR preview, terms attachment, and enrolment controls before save.',
      },
    ],
    narrativeOutroBlocks: [
      { type: 'h1', text: 'MVP Rollout & Reflections' },
      {
        type: 'p',
        text:
          'With a strict one-month delivery, formal usability testing wasn’t possible. The MVP was rolled out to live dealers based on the validated “wireframe path” I negotiated with the PO. The walkthrough below tours the shipped admin experience—Manage Dealers, VIN Activations, and the dealer detail preview—in the same flows admins use in production.',
      },
      {
        type: 'embed',
        src: 'https://www.loom.com/share/7521a4d9545143b7b3617a23846e11c9',
        title: 'Dealer Theme Portal — MVP walkthrough (Loom)',
      },
      { type: 'h1', text: 'Results' },
      {
        type: 'p',
        parts: [
          { text: 'Key takeaway', bold: true },
          {
            text:
              '—when you can’t talk to users, your developers and your PO are your best proxies for constraints, feasibility, and business truth.',
          },
        ],
      },
      {
        type: 'p',
        parts: [
          { text: 'The UX win', bold: true },
          {
            text:
              '—by holding the line as a designer, I moved the work from a prescribed set of wireframes to a simplified, automated system that matched what Regional Managers actually need to do.',
          },
        ],
      },
    ],
  },

  'yuniter': {
    docTitle: 'Yuniter — Case Study — TESSRAH',
    railId: 'CASE_STUDY: YUNITER / ITER.V1',
    heroImage: '/images/yuniter-hero.png',
    heroImageAlt:
      'MacBook on a cafe table showing the Yuniter Recipes dashboard—sidebar, recipe cards, and circular progress—coffee cup and blurred cafe in the background',
    heroKicker: 'Cloud-based SaaS',
    heroTitleLine1: 'Yuniter',
    heroTitleAccent: 'Empowering marketing independence.',
    sidebar: {
      timeline: 'Dec 2021 —\u00a0Dec 2022 · 12 months · 2021–2022',
      role: ['UI/UX Designer'],
      toolsLabel: 'Platform',
      tools: ['Cloud-based SaaS Dashboard', 'Figma'],
      collaborators: ['Product Manager', '2 Full Stack Developers'],
    },
    narrativeIntroBlocks: [
      { type: 'h1', text: 'Project Overview' },
      {
        type: 'p',
        text:
          'I stepped into a high-pressure, “solution-first” environment where the roadmap was top-down and executive-led. The primary hurdle wasn’t learning how to work with stakeholders—it was applying a rigorous UX methodology to a project where the “solution” had already been decided by the CEO. It was also teaching my team how to work with a UX designer—the company had never had a designer before.',
      },
      {
        type: 'figure',
        src: '/images/yuniter-ux-design-process-flow.png',
        alt:
          'Six-stage UX process diagram: Empathise, Define, Ideate, Design and Prototype, Review, Implementation—with curved arrows showing iteration between prototype and review.',
        caption:
          'The UX cadence I followed and socialized—from insight through onboarding devs into Figma—grounding stakeholder alignment and review loops.',
      },
    ],
    pullQuote:
      'Shift from a feature-heavy legacy merger to a user-centric tool that enables marketing independence.',
    narrativeMidBlocks: [
      { type: 'h1', text: 'The Challenge' },
      {
        type: 'p',
        text:
          'In 2022, marketing professionals faced a significant bottleneck: they were unable to build marketing pipelines without high-level coding or engineering support.',
      },
      {
        type: 'p',
        parts: [
          { text: 'The Problem: ', bold: true },
          {
            text:
              'Existing solutions required deep technical knowledge, forcing marketers to wait on IT for answers or sift through dense documentation.',
          },
        ],
      },
      {
        type: 'p',
        parts: [
          { text: 'The “Solution-First” Constraint: ', bold: true },
          {
            text:
              'The business had already decided to merge several successful standalone legacy tools into one cloud-based program before the design process began.',
          },
        ],
      },
      {
        type: 'p',
        parts: [
          { text: 'The Mission: ', bold: true },
          {
            text:
              'Shift from a “feature-heavy” legacy merger to a user-centric tool that enabled marketing independence.',
          },
        ],
      },
      { type: 'h1', text: 'Design & Discovery' },
      {
        type: 'p',
        text:
          'As a solo designer in a company of under twenty employees, I had to be resourceful with research to validate the CEO’s top-down vision.',
      },
      { type: 'h2', text: 'Stakeholder & User Interviews' },
      {
        type: 'p',
        text:
          'I interviewed the CEO, the Product Manager, and three internal marketing professionals to align business goals with daily workflows.',
      },
      {
        type: 'p',
        parts: [
          { text: 'Stakeholder Goals: ', bold: true },
          {
            text:
              'Create a cost-effective, recurring revenue SaaS to compete with major market players.',
          },
        ],
      },
      {
        type: 'p',
        parts: [
          { text: 'User Goals: ', bold: true },
          {
            text:
              'Save time, reduce external dependencies, and build trust in their data through a centralized dashboard.',
          },
        ],
      },
      {
        type: 'figure',
        src: '/images/yuniter-ux-business-interviews.png',
        alt:
          'Stakeholder UX business interviews: seventeen numbered questions beside green Interview 1 stickies and yellow Interview 2 stickies, plus a competitor subsection referencing tools like Looker.',
        caption:
          'Executive interviews mapped to prompts—business goals, user pain points, KPIs, and early competitive signals in one synthesis board.',
      },
      {
        type: 'figure',
        src: '/images/yuniter-ux-user-interviews.png',
        alt:
          'Yuniter user interview synthesis: twenty-one numbered questions beside three sticky-note columns (pink, light blue, darker blue) comparing responses across three participants.',
        caption:
          'User interviews aligned question-by-row—profiles, tooling, pain points, and emotional expectations surfaced before persona work.',
      },
      { type: 'h2', text: 'Identifying Key Personas' },
      {
        type: 'p',
        parts: [
          { text: 'The Team Leader: ', bold: true },
          {
            text:
              'The decision-maker focused on security, ROI, and high-level strategy.',
          },
        ],
      },
      {
        type: 'figure',
        src: '/images/yuniter-persona-team-lead.png',
        alt:
          'Team Lead persona sheet: demographics, needs, personality sliders, pain points, and interests for the decision-maker role.',
        caption:
          'The Team Leader persona—security, ROI, and strategic oversight.',
      },
      {
        type: 'p',
        parts: [
          { text: 'The End User: ', bold: true },
          {
            text:
              'The daily operator (for example a paid advertiser) who needs to generate reports and manage data without writing code.',
          },
        ],
      },
      {
        type: 'figure',
        src: '/images/yuniter-persona-end-user.png',
        alt:
          'End user persona sheet: Paid Advertiser profile with needs, personality sliders, pain points, interests, and behavior traits.',
        caption:
          'The End User persona—hands-on campaign and reporting workflows without code.',
      },
      { type: 'h2', text: 'Competitive Audit: Analyzing 21 Solutions' },
      {
        type: 'p',
        text:
          'To define the MVP, I conducted a deep-dive analysis of twenty-one competitors, rating their capabilities as Unique, Best, Same, or Poor across five categories:',
      },
      {
        type: 'ul',
        items: [
          'Reporting & Analysis',
          'Marketing & Ads Automation',
          'Data Integrations & Transformation',
          'Cloud Environment (Data Storage)',
          'Miscellaneous / Other',
        ],
      },
      {
        type: 'figure',
        src: '/images/yuniter-competitive-analysis-reporting.png',
        alt:
          'Competitive analysis grid for Reporting and Analytics: GA4, Power BI, Looker, Morphio, Google Ads, Dream Data, and Singular—columns for unique, best, poor, and same capabilities with thumbnails and sticky notes.',
        caption:
          'Category slice: Reporting & Analytics—capabilities rated with evidence so “Best” and “Same” could anchor MVP decisions.',
      },
      {
        type: 'p',
        text:
          'By cross-referencing “Best” and “Same” features, I moved the conversation away from a “CEO wishlist” and toward a list of features that users actually found valuable for an all-in-one solution.',
      },
      {
        type: 'figure',
        layout: 'inline',
        src: yuniterBusinessUserNeedsVennUrl,
        alt:
          'Venn diagram: Business Needs (yellow notes) and User Needs (green notes) overlap at Business Goals (blue notes), including retention, sign-ups, an all-in-one integrated tool, and measurable user feedback.',
        caption:
          'Grounding the “all-in-one” MVP—explicit overlap between stakeholder metrics and observed user priorities before backlog negotiation.',
      },
      {
        type: 'p',
        text:
          'I translated my research into a technical roadmap by bringing my findings directly into sprint planning. I collaborated with the two Full Stack Developers to determine which high-impact features were technically feasible for a lean MVP. We established a prioritized sprint backlog, moving from conceptual Figma wireframes to high-fidelity screens that mapped the entire user journey.',
      },
      {
        type: 'figure',
        src: '/images/yuniter-business-goals-features-chart.png',
        alt:
          'Feature roadmap chart: Feature or strategy rows mapped to user benefits by persona (Winnie, Ken), UX outcomes such as time savings and trust, and fulfilling business goals, with collaborator sticky-note annotations.',
        caption:
          'From wishlist to traceability—every candidate feature tied to persona value, UX intent, and business outcomes before backlog negotiation.',
      },
      {
        type: 'h2',
        text: 'Design Strategy: Complex Logic & Permissions',
      },
      {
        type: 'p',
        text:
          'A core part of the product’s success was its ability to handle complex organizational structures. I collaborated closely with the Product Manager to iron out the logic for a tiered user system.',
      },
      {
        type: 'figure',
        src: yuniterIncrementalPermissionsDiagramUrl,
        alt:
          'Incremental permissions diagram: four columns for Ken (Super admin), Winnie (Admin), Jean (Manager), and Other—each showing personal workflows versus User Management controls for roles, groups, users, and billing, with solid vs. faded circles for permission strength.',
        caption:
          'Tiered logic across personas—incremental permissions from Super Admin through Manager so stakeholder conversations matched enforceable access.',
      },
      { type: 'h1', text: 'Design: Wireframes to High-Fidelity' },
      {
        type: 'p',
        text:
          'While the project began with conceptual wireframes to map user independence, it culminated in a comprehensive library of high-fidelity screens in Figma—aligned with today’s live yuniter.com experience.',
      },
      {
        type: 'figure',
        src: '/images/yuniter-low-fi-wireframes.png',
        alt:
          'Four-panel low-fidelity wireframe grid: create role, user control permissions, all groups table, and create group—with sidebar navigation sketched.',
        caption: 'Low-fi wireframes: user, role, and group management flows before high-fidelity work.',
      },
      {
        type: 'ul',
        items: [
          {
            lead: 'High-fidelity prototyping:',
            detailParts: [
              {
                text: 'I built a comprehensive Figma prototype focused on ',
              },
              { text: 'Super Admin', mediumBold: true },
              {
                text: ' roles, with complementary prototypes covering ',
              },
              { text: 'Admin', mediumBold: true },
              { text: ' and ' },
              { text: 'Regular users', mediumBold: true },
              { text: ' so every permission tier could be reviewed and handed off.' },
            ],
          },
          {
            lead: 'User management:',
            detail:
              'Designed the workflows for creating, editing, and removing team members within various organizational groups.',
          },
          {
            lead: 'Incremental permissions:',
            detail:
              'Established distinct access levels for Admin types versus Regular users, ensuring data security—a primary user pain point identified in research.',
          },
        ],
      },
      {
        type: 'embed',
        src:
          'https://embed.figma.com/proto/Q2eqzt5mVufjJc4CDJvcwi/Stacktics---Dashboard-for-Marketers?node-id=4-1098&viewport=7227%2C4240%2C0.58&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=4%3A1098&page-id=4%3A306&embed-host=share',
        title: 'Stacktics — Dashboard for Marketers (Super Admin prototype)',
        caption:
          'High-fidelity flow focused on the Super Admin experience—click through in Figma preview and expand to fullscreen from the footer controls.',
      },
    ],
    narrativeOutroBlocks: [
      { type: 'h1', text: 'The Impact: A Live Reality' },
      {
        type: 'p',
        text:
          'After my time, the Yuniter platform was successfully launched and remains live today. The current website features the original dashboard architecture and high-fidelity screens developed during this phase—evidence of the durability and market readiness of the design.',
      },
      {
        type: 'video',
        src: '/videos/yuniter-product-overview.mov',
        title: 'Yuniter product website overview',
        caption: 'Screen recording overview of https://yuniter.com/ (loops muted until you adjust volume in controls).',
      },
      { type: 'h1', text: 'What I Learned & Moving Forward' },
      {
        type: 'p',
        text:
          'Looking back at this project from 2022, I recognize several areas for growth that I have since integrated into my practice as a Senior Designer:',
      },
      {
        type: 'ul',
        items: [
          {
            lead: 'Earlier user access:',
            detail:
              'While internal proxies were effective, I would now push for “guerrilla testing” with external users earlier to validate the “self-sufficiency” goal even further.',
          },
          {
            lead: 'The “solution-first” trap:',
            detail:
              'I learned how to use competitive data as a shield for the user, successfully pivoting a top-down directive into a solution that addressed a genuine technical bottleneck.',
          },
          {
            lead: 'The MVP balance:',
            detail:
              'If I were to continue with Yuniter today, I would explore the freemium model further—analyzing how higher-grade data models could be tiered to increase recurring revenue without sacrificing the independence of the entry-level user.',
          },
        ],
      },
    ],
  },

  'customer-care-centre-mobile-app': {
    docTitle: 'Customer Care Centre Mobile App — Case Study — TESSRAH',
    railId: 'CASE_STUDY: CUSTOMER_CARE_MOBILE / DRAFT.V1',
    heroImage: '/images/customer-care-centre-mobile-app-hero.png',
    heroImageAlt:
      'Hand holding a smartphone showing Search and help with suggested queries and an on-screen keyboard',
    heroKicker: 'Mobile · Customer experience',
    heroTitleLine1: 'Customer Care Centre',
    heroTitleAccent: 'Mobile App.',
    sidebar: {
      timeline: 'Jan – Feb 2025 (4-week Sprint)',
      role: ['UX Designer'],
      toolsLabel: 'Tools',
      tools: ['Figma', 'FigJam', 'Audi Design System'],
      collaborators: ['Director of Product Management', 'UI Design Lead'],
    },
    narrativeIntroBlocks: [
      { type: 'h1', text: 'Overview' },
      {
        type: 'p',
        text:
          'BIMM is an agency that works for various clients. The R&D department looks for gaps within the client\'s product, and provides innovative solutions that can be rolled out as MVPs. This project was pitched to the Audi Germany Customer care team. As a UX designer, I was enlisted to introduce a personalized and interactive FAQ experience for the official Audi mobile app.',
      },
    ],
    narrativeMidBlocks: [
      { type: 'h1', text: 'The Challenge' },
      {
        type: 'p',
        text:
          'The customer care team had created an existing "App-to-Case" submission form. It sent users outside of the app experience and into emailing with customer support. There was no way to receive follow-up information from within the mobile app on how a user\'s ticket was progressing. They also had a catalyst project for AI chatbot functionality that they asked us to take into consideration. We only had one month, or 2 sprints, to deliver a prototype to be placed in front of the Audi business.',
      },
      { type: 'h1', text: 'The Approach' },
      {
        type: 'p',
        text:
          'By auditing the existing "App-to-Case" logic, I identified that while Audi had an AI chatbot and Forms in the works, they lacked the "connective tissue" that kept users informed.',
      },
      {
        type: 'p',
        text:
          'I mapped a huge user flow that allowed users to enter support from multiple high-intent touchpoints:',
      },
      {
        type: 'ul',
        items: [
          {
            lead: 'The Profile:',
            detail: 'A standard entry for general management.',
          },
        ],
      },
      {
        type: 'ul',
        items: [
          {
            lead: 'The Dashboard/Warning Centre:',
            detail:
              'A proactive entry point where vehicle health triggers specific, contextual help.',
          },
        ],
      },
      {
        type: 'figure',
        src: '/images/customer-care-ideal-user-flow.png',
        lightboxSrc: '/images/customer-care-ideal-user-flow-hires.png',
        diagramFigure: true,
        alt:
          'User-flow diagram for Audi Customer Care mobile: journeys from app open through Dashboard and Warning Centre, Search & Help Centre, chat support, and App-to-Case.',
        caption:
          'Ideal user flow across Dashboard / Warning Centre, Search & Help Centre, and support resolutions.',
      },
      { type: 'h1', text: 'Competitive Analysis' },
      {
        type: 'p',
        text:
          'Because Audi is a premium service brand, I looked beyond the automotive industry to analyze how leaders in travel, finance, and e-commerce handle high-stakes support. I conducted a deep dive into Air Canada, Airbnb, CIBC, Telus, Waze, Uber, and Amazon.',
      },
      {
        type: 'h2',
        text: 'The Audit Criteria',
      },
      {
        type: 'p',
        text:
          'I evaluated these help centres across four key dimensions:',
      },
      {
        type: 'ul',
        items: [
          {
            lead: 'Information Architecture (IA):',
            detail:
              'How they categorized complex data (e.g., "Refunds" vs. "Technical Support").',
          },
          {
            lead: 'Hierarchy:',
            detail:
              'What information earned the "above the fold" real estate.',
          },
          {
            lead: 'Actionability:',
            detail:
              'How quickly a user could move from a question to a solution (Search bars vs. Quick Links).',
          },
          {
            lead: 'Assistance Modalities:',
            detail:
              'The balance between AI Chat, static guides, and human contact.',
          },
        ],
      },
      {
        type: 'h2',
        text: 'Key Insights & Pros/Cons',
      },
      {
        type: 'ul',
        items: [
          {
            lead: 'The "Proactive" Pattern:',
            detail:
              'Top-tier apps (like Uber and Airbnb) don\'t just wait for a search; they surface "Active Trips" or "Recent Issues" immediately.',
          },
          {
            lead: 'The "Friction" Gap:',
            detail:
              'Many competitors had great FAQs but "dead-ended" the user after they read the article.',
          },
          {
            lead: 'The "Audi Opportunity":',
            detail:
              'I noticed a gap in how most services tracked ongoing issues. This insight directly led to the creation of our Status & Ticketing Centre, ensuring an Audi user never feels "lost" after submitting a form.',
          },
        ],
      },
      {
        type: 'figure',
        src: '/images/customer-care-competitive-analysis-board.png',
        diagramFigure: true,
        alt:
          'Wide competitive-analysis board comparing mobile help centres: columns for Air Canada, Airbnb, CIBC, TELUS, Waze, Uber, Amazon, Scotiabank and similar brands with vertical app screenshots, yellow sticky notes on IA and hierarchy, plus a Key Entry row for first-touch patterns.',
        caption:
          'Cross-industry audit—how premium mobile apps structure support, surface hierarchy, and balance quick paths with deeper help.',
      },
      {
        type: 'h2',
        text: 'Low-fidelity wireframes',
      },
      {
        type: 'p',
        text:
          'Since I already had a user flow mapped out, I was able to validate my assumptions based on what I saw in the market. From here I was able to quickly throw together low-fidelity wireframes and get feedback from our director. I focused on a "Search-First" layout but supplemented it with "Quick Action" chips (inspired by the efficiency of Waze and Uber) to ensure users could solve common problems like "Password Resets" in seconds.',
      },
      {
        type: 'figure',
        src: '/images/customer-care-low-fi-wireframes-board.png',
        diagramFigure: true,
        alt:
          'FigJam board of grayscale mobile wireframes: profile with Help Centre entry into Search & Help hub with quick-action chips and FAQs; flows through search results, chatbot with password reset guidance and ticket status, detailed guides and service booking; right-hand component library of chips, lists, chat patterns, and nav.',
        caption:
          'Low-fi flows plus component inventory—Search-First help centre, quick actions, escalation paths, and reusable patterns ready for critique.',
      },
      { type: 'h1', text: 'The Solution:' },
      {
        type: 'h2',
        text: 'Contextual "Search & Help" Centre',
      },
      {
        type: 'p',
        text:
          'Rather than a static FAQ list, we built a dynamic hub.',
      },
      {
        type: 'ul',
        items: [
          {
            lead: 'Smart Suggestions:',
            detail:
              'As users type (e.g., "Change Password"), the system provides instant redirection to the exact app setting or a live customer care form, reducing friction.',
          },
        ],
      },
      {
        type: 'figure',
        src: '/images/customer-care-smart-suggestions-wireframes.png',
        diagramFigure: true,
        alt:
          'Three-screen Search & Help flow: search bar with smart completions as the user types "I need…", results for "I need to change my password" with support fallback, then an actionable panel—guided reset instructions with primary navigation plus optional inline current/new password fields and Confirm.',
        caption:
          'From predictive suggestions through topic results to a preconfigured, actionable answer users can complete inside Search & Help—without bouncing to a separate password screen.',
      },
      {
        type: 'ul',
        items: [
          {
            lead: 'Multimedia Learning:',
            detail:
              'For hardware issues like "Refilling Washer Fluid," I integrated "How-to" videos and step-by-step guides directly into the help flow to empower self-service.',
          },
        ],
      },
      {
        type: 'figure',
        src: '/images/customer-care-multimedia-learning-flow.png',
        diagramFigure: true,
        alt:
          'Three-screen hi-fi flow for Audi Q6 e-tron Search & Help: from hub with topics including washer fluid, through search results for "Please fill up with washing fluid," to an FAQ detail page with a HOW-TO video module and numbered steps for locating and filling the washer fluid reservoir.',
        caption:
          'From Search & Help through ranked results to multimedia learning—video plus structured instructions for a concrete warning like washer fluid.',
      },
      {
        type: 'h2',
        text: 'The "Warning Centre" Entry',
      },
      {
        type: 'p',
        text:
          'We bridged the gap between vehicle diagnostics and customer support. If a warning light appears, the user is one tap away from:',
      },
      {
        type: 'ul',
        items: [
          'Directly booking with a dealership.',
          'Troubleshooting the issue via the Search & Help Centre.',
          'Remotely controlling vehicle functions (like Climate Control) to resolve minor issues immediately.',
        ],
      },
      {
        type: 'figure',
        src: '/images/customer-care-warning-centre-to-search-help.png',
        diagramFigure: true,
        alt:
          'Two-screen Audi e-tron flow: vehicle dashboard with door-open warning, car outline highlight, Search & Help entry, and Warnings and information chip with badge—arrow into Search & Help hub with quick actions and Common Q6 e-tron topic suggestions.',
        caption:
          'Scannable vehicle status and progressive disclosure from warnings into Search & Help—primary paths stay thumb-reachable while depth waits behind clear entry points.',
      },
    ],
    narrativeOutroBlocks: [
      { type: 'h1', text: 'Prototype walkthrough' },
      {
        type: 'p',
        text:
          'A quick tour of the clickable prototype—core Search & Help journeys, warning-centre entry, and how users move into chat, ticketing, and multimedia answers.',
      },
      {
        type: 'embed',
        src: 'https://www.loom.com/share/f9c475cfe63c4cad80158456407d93f9',
        title: 'Customer Care Centre Mobile App walkthrough (Loom)',
      },
      { type: 'h1', text: 'Results & learnings' },
      {
        type: 'ul',
        items: [
          {
            lead: 'Strategic Feature Innovation:',
            detail:
              'I identified and designed a new Status and Ticketing Center to bridge a critical gap in the support journey, which became the primary feature approved for the global product backlog.',
          },
          {
            lead: 'Systematic Velocity:',
            detail:
              'By establishing a mid-fidelity component library, I enabled rapid iteration with the UI Lead, ensuring high-quality delivery within an aggressive eight-week sprint.',
          },
          {
            lead: 'Global-to-Local Translation:',
            detail:
              'I successfully deciphered complex German technical frameworks into an intuitive English MVP, balancing rigid global requirements with localized user needs.',
          },
        ],
      },
    ],
  },

  'pcos-app-coach': {
    docTitle: 'Nourish — AI Nutrition Coach for PCOS — TESSRAH',
    railId: 'CASE_STUDY: NOURISH_PCOS / POC.V1',
    heroImage: '/images/nourish-pcos-hero.png',
    heroImageAlt:
      'Hands holding a smartphone displaying the Nourish My PCOS home screen—Recipe Generator, Meal Analyzer, Cravings Coach, and optional cycle phase pills—over a marble table with coffee and notebook',
    heroKicker: 'AI · Nutrition',
    heroTitleLine1: 'Nourish',
    heroTitleAccent: 'Nutrition coach for PCOS.',
    sidebar: {
      timeline: '1 day · February 2025',
      role: ['Agentic Product Designer'],
      toolsLabel: 'Tools',
      tools: ['Lovable', 'AI-assisted development (Vibe Coding)'],
      collaborators: ['Proof of concept'],
    },
    narrativeIntroBlocks: [
      {
        type: 'p',
        parts: [
          { text: 'Note: ', bold: true },
          {
            text:
              'This condition is now often referred to as PMOS (polycystic metabolic ovary syndrome). When I created Nourish, PCOS was the usual clinical name—this case study keeps that wording so it matches when the app was built. ',
          },
          {
            text: 'Read more on Wikipedia',
            href: 'https://en.wikipedia.org/wiki/Polycystic_ovary_syndrome',
          },
          { text: '.' },
        ],
      },
      { type: 'h1', text: 'Overview' },
      {
        type: 'p',
        text:
          'Nourish is a conversational nutrition tool designed to simplify symptom management for people living with PCOS. Developed as a high-fidelity proof of concept, the app shifts the focus from restrictive calorie counting to hormone-supportive, anti-inflammatory eating.',
      },
      {
        type: 'figure',
        src: '/images/nourish-meal-photo.png',
        alt: 'Phone held in two hands showing a photo of yogurt bowls topped with raspberries, walnuts, and seeds on a marble table near coffee',
        caption:
          'Lifestyle moment aligned with Nourish—simple, blood-sugar-friendly choices (like raspberries and walnuts) made feel attainable.',
      },
      { type: 'h1', text: 'Impact' },
      {
        type: 'ul',
        items: [
          'Three cohesive pillars—recipe generation, meal analysis, and cravings coaching—meet users where decision fatigue is highest.',
          'Optional cycle-phase syncing tunes nutritional framing when hormonally relevant.',
          'AI-assisted build in Lovable compressed iteration time while keeping tone and nutrition logic centrally authored.',
        ],
      },
    ],
    pullQuote:
      'PCOS affects roughly 1 in 10 people with ovaries, yet nutritional advice is often contradictory or overly restrictive. For many, managing symptoms feels like a second job.',
    narrativeMidBlocks: [
      {
        type: 'h2',
        text: 'The problem: the nutrition noise in PCOS',
      },
      {
        type: 'p',
        text:
          'PCOS affects roughly 1 in 10 people with ovaries, yet nutritional advice is often contradictory or overly restrictive. For many, managing symptoms feels like a second job. I wanted to build a tool that removes the cognitive load of meal planning and replaces guilt-based tracking with supportive coaching.',
      },
      {
        type: 'h2',
        text: 'The solution: three core pillars',
      },
      {
        type: 'p',
        text:
          'Nourish focuses on three high-impact features that meet users exactly where they are:',
      },
      {
        type: 'ul',
        items: [
          {
            lead: 'Recipe Generator:',
            detail:
              'Converts on-hand ingredients into PCOS-friendly meals. All suggestions prioritize blood sugar balance and hormone support.',
          },
          {
            lead: 'Meal Analyzer:',
            detail:
              'A non-judgmental second opinion on meals. Instead of calories, it breaks down impact on inflammation, insulin response, and nutrient density.',
          },
          {
            lead: 'Cravings Coach:',
            detail:
              'Decodes the physiological root of cravings and suggests satisfying alternatives that prevent blood sugar spikes.',
          },
        ],
      },
      {
        type: 'h2',
        text: 'Personalization via cycle syncing',
      },
      {
        type: 'p',
        text:
          'The app includes an optional Cycle Phase Selector. Because nutritional needs shift between follicular, ovulatory, luteal, and menstrual phases, the AI logic adjusts its coaching so the body gets the specific nutrients it needs at the right time.',
      },
      {
        type: 'h2',
        text: 'Key design philosophy: radical empathy',
      },
      {
        type: 'p',
        text:
          'The most critical component of Nourish isn\'t the code—it\'s the tone.',
      },
      {
        type: 'ul',
        items: [
          {
            lead: 'No good vs. bad:',
            detail:
              'The AI is programmed to avoid moralizing food.',
          },
          {
            lead: 'Actionable swaps:',
            detail:
              'It focuses on crowding out less nutritious options with better ones—for example, eating the filling of a wrap before the pita to help stabilize glucose.',
          },
          {
            lead: 'Vibe-coded aesthetics:',
            detail:
              'The UI uses a soft palette for a calm, editorial feel—contrasting the clinical, stressful tone common in many health apps.',
          },
        ],
      },
      {
        type: 'h2',
        text: 'The tech: high-velocity prototyping',
      },
      {
        type: 'p',
        text:
          'Nourish was built entirely using AI-assisted development (Vibe Coding) in Lovable. This approach enabled:',
      },
      {
        type: 'ul',
        items: [
          {
            lead: 'Rapid logic iteration:',
            detail:
              'Tuning the coaching engine\'s personality and medical logic in real time.',
          },
          {
            lead: 'Seamless component creation:',
            detail:
              'Moving from design intent to functional UI in a fraction of the time of traditional development.',
          },
          {
            lead: 'Proof of concept:',
            detail:
              'Demonstrating how designers can act as orchestrators—using AI to bridge design vision and a living product.',
          },
        ],
      },
      {
        type: 'h2',
        text: 'Live preview',
      },
      {
        type: 'embed',
        src: 'https://nourish-my-pcos-coach.lovable.app/',
        title: 'Nourish — AI nutrition companion (live app)',
        embedVariant: 'mobile',
        caption:
          'Interactive proof of concept hosted on Lovable—same flows as the vibe-coded prototype.',
      },
      {
        type: 'link',
        href: 'https://nourish-my-pcos-coach.lovable.app/',
        text: 'Open full app in a new tab →',
      },
    ],
    narrativeOutroBlocks: [
      { type: 'h1', text: 'Impact & reflection' },
      {
        type: 'p',
        text:
          'Building Nourish was as much a personal journey as a professional one. In testing the prototype, I found myself making immediate, meaningful shifts: opting for raspberries and walnuts over chocolate, or using monk fruit in my evening chai.',
      },
      {
        type: 'p',
        text:
          'Nourish proves that when we pair strong design thinking with AI-driven development, we can create tools that don\'t just track health—they actively support the person living through it.',
      },
    ],
  },
}

export function getCaseStudySlugs() {
  return PROJECT_ITEMS.map((item) => item.slug)
}

/**
 * @param {string} slug
 * @returns {{ slug: string, title: string }}
 */
export function getNextCaseStudy(slug) {
  const idx = PROJECT_ITEMS.findIndex((item) => item.slug === slug)
  if (idx === -1) {
    return { slug: PROJECT_ITEMS[0].slug, title: PROJECT_ITEMS[0].title }
  }
  const next = PROJECT_ITEMS[(idx + 1) % PROJECT_ITEMS.length]
  return { slug: next.slug, title: next.title }
}
