/** @typedef {{ type: 'text', text: string } | { type: 'link', text: string, to: string }} TimelineDescPart */

/** @typedef {{ id: string, year: string, title: string, titleHref?: string, desc?: string, descParts?: TimelineDescPart[] }} TimelineItem */

/** @type {TimelineItem[]} */
export const TIMELINE_ITEMS = [
  {
    id: 'present',
    year: 'Present',
    title: 'Tessrah Designs',
    desc:
      'Leverage my professional designs skills and years of experience to help businesses improve their relationships with their customers.',
  },
  {
    id: 'bimm',
    year: 'Dec 2022 – Feb 2026',
    title: 'BIMM',
    titleHref: 'https://bimm.com/',
    descParts: [
      {
        type: 'text',
        text:
          "Joined an incredible design department of 10+ members in UX, UI, Content and Research. Built experiences for clients like Audi, Leon's, and Angel's Envy. My work on the ",
      },
      {
        type: 'link',
        text: 'Audi global ecosystem',
        to: '/projects/audi-dealer-ecosystem',
      },
      {
        type: 'text',
        text: ' has touched 400+ Audi websites worldwide.',
      },
    ],
  },
  {
    id: 'stacktics',
    year: 'Oct 2021 – Dec 2022',
    title: 'Stacktics',
    titleHref: 'https://stacktics.com/',
    descParts: [
      {
        type: 'text',
        text:
          'Worked as a solo UX/UI designer, solving problems end-to-end exclusively on the product team. Branded and built ',
      },
      { type: 'link', text: 'Yuniter', to: '/projects/yuniter' },
      {
        type: 'text',
        text: ', a SaaS platform for marketing professionals.',
      },
    ],
  },
  {
    id: 'graphic-design',
    year: 'Sep 2009 – Oct 2019',
    title: '10+ Years Experience',
    desc:
      'Graduated from college as a graphic designer and worked for various companies. Most notably as a founding designer for the start-up FIIX Inc., which was acquired by Rockwell Automation for $290 million USD.',
  },
]
