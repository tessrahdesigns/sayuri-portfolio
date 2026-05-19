/** Homepage spotlight rows — detail lives on `/projects` case studies */

/** @typedef {{
 *   id: string,
 *   slug: string,
 *   title: string,
 *   lead: string,
 *   problem?: string[],
 *   role: string,
 *   image: string,
 *   imageAlt: string,
 * }} HomeFeaturedStudy */

/** @type {HomeFeaturedStudy[]} */
export const HOME_FEATURED_STUDIES = [
  {
    id: 'audi-dealer-ecosystem',
    slug: 'audi-dealer-ecosystem',
    title: 'Audi North America Dealer Ecosystem',
    lead:
      'Enterprise UX at scale — I redesigned the dealer management ecosystem for Audi North America, touching 400+ dealerships.',
    role:
      'UX Designer — IA, stakeholder workshops, dealer audits, and AEM-ready specs alongside PM and engineering partners.',
    image: '/images/audi-dealer-ecosystem-hero.png',
    imageAlt:
      'Tablet in landscape showing the Audi Nashville dealer homepage with showroom hero and primary CTAs',
  },
  {
    id: 'yuniter',
    slug: 'yuniter',
    title: 'Yuniter',
    lead:
      'Marketing SaaS — I applied full-cycle UX inside a CEO-led merger, turning fragmented legacy tools into a coherent dashboard marketers could actually ship campaigns from.',
    role:
      'UI/UX Designer — solo design partner with PM and two engineers; interviews, IA, and hi-fi system in Figma.',
    image: '/images/yuniter-hero.png',
    imageAlt:
      'MacBook on a cafe table showing the Yuniter Recipes dashboard with sidebar and recipe cards',
  },
]
