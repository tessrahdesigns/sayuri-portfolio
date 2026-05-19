/** Homepage — UX / product design process (Discovery → Deliver framing). */

/** @typedef {{
 *   id: string,
 *   title: string,
 *   summary: string,
 * }} DesignProcessStep */

/** @type {DesignProcessStep[]} */
export const DESIGN_PROCESS_STEPS = [
  {
    id: 'discovery',
    title: 'Discovery',
    summary:
      'Align on outcomes with research, heuristics, and stakeholder workshops before narrowing on solutions.',
  },
  {
    id: 'define',
    title: 'Define',
    summary:
      'Synthesize insights into clear problem boundaries—journeys, IA bets, and metrics the cross-functional team commits to.',
  },
  {
    id: 'design',
    title: 'Design',
    summary:
      'Iterate flows and UI systems through prototyping and critique until interactions hold up under edge cases and scale.',
  },
  {
    id: 'deliver',
    title: 'Deliver',
    summary:
      'Partner through ship-ready specs, design QA, usability validation, and tuning from adoption and support signals.',
  },
]
