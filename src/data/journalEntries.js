/** @typedef {{
 *   id: string,
 *   dateIso: string,
 *   dateDisplay: string,
 *   readTimeMin: number,
 *   category: string,
 *   title: string,
 *   summary: string,
 *   dek: string,
 *   tags: string[],
 *   paragraphs: string[],
 *   relatedIntro?: string,
 *   relatedLinks?: { label: string, href: string }[],
 *   youtubeVideos?: { videoId: string, watchUrl: string, embedTitle?: string }[],
 *   youtubeWatchUrl?: string,
 *   youtubeVideoId?: string,
 *   heroImage?: string,
 *   heroImageAlt?: string,
 *   vimeoVideoId?: string,
 *   vimeoWatchUrl?: string,
 *   vimeoEmbedTitle?: string,
 *   relatedScreens?: {
 *     href: string,
 *     label: string,
 *     image: string,
 *     imageAlt: string,
 *   }[],
 *   embeddedMobileApp?: {
 *     src: string,
 *     title: string,
 *     label?: string,
 *     openUrl?: string,
 *   },
 *   wip?: boolean,
 * }} JournalEntry */

/** @type {JournalEntry[]} Newest first */
export const JOURNAL_ENTRIES = [
  {
    id: 'tamil-everyday-hybrid',
    dateIso: '2026-02-18',
    dateDisplay: 'February 18, 2026',
    readTimeMin: 5,
    category: 'Experiment',
    title: 'Filling in the blanks: Tamil as it’s spoken at home',
    summary:
      'Tamil at our table mixes English and Tamil faster than textbooks keep up—so I’ve been playing with Lovable and AI: my own phrase spreadsheet, phonetic breakdowns, and beta-testing with family.',
    dek:
      'Seeing how far new AI tooling can bridge the hybrid English-tamil speech we actually use at home.',
    tags: ['Tamil', 'Language', 'Family', 'Canada', 'Lovable', 'AI'],
    paragraphs: [
      `Tamil is one of the oldest languages spoken in the world—and also one of the most complex languages to learn. Or so I've been told. As a Trinidadian-Canadian married into a Sri Lankan family, my journey with Tamil has been a lesson in “filling in the blanks.”`,
      `In many Tamil-Canadian households, conversations aren't strictly one language; they are a vibrant hybrid of Tamil and English. For a beginner like me, following along is like solving a puzzle. I rely on body language, the English words dropped into sentences, and the handful of Tamil phrases I've learned to recognize by ear—even when I couldn't spell them.`,
      `Once topics get dense, I'm quickly left behind. Most resources skew formal or academic; they don't meet this specific, everyday “hybrid” reality. So I used Lovable to build what I needed: a bridge for beginners oriented toward how Tamil is actually spoken in a Canadian–Sri Lankan home—not how it's frozen on a textbook page.`,
      `I uploaded my own data—an Excel sheet of phrases I've gathered over years—and used AI to break them down phonetically. If a word sounds like an English syllable, that's how it will be displayed. I've been beta-testing the app with my in-laws; it's still a work in progress and needs more refinement. By focusing on the way we actually speak at home, I'm building a tool that turns "hearing" into "understanding."`,
    ],
    embeddedMobileApp: {
      label: 'Try the phrasebook:',
      src: 'https://simpletamilnadu.lovable.app/',
      title: 'Interactive Tamil phrasebook prototype',
      openUrl: 'https://simpletamilnadu.lovable.app/',
    },
  },
  {
    id: 'experience-design-paradise-japan',
    dateIso: '2025-08-01',
    dateDisplay: 'August 2025',
    readTimeMin: 14,
    category: 'Essay',
    wip: true,
    title: 'Experience Design Paradise: Lessons in UX from Everyday Japan',
    summary:
      'Drawn from a design workshop—how Japan treats public life as a living lab for physical UX: food, transit, vending, and restrooms as case studies in anxiety reduction, autonomy, and respect.',
    dek:
      'Some of the sharpest UX lessons never touch a screen; they live in bentos, platforms, kiosks, and stall doors.',
    tags: [
      'Japan',
      'UX',
      'Workshop',
      'Physical design',
      'Service design',
      'Inclusive design',
      'Transit',
    ],
    paragraphs: [
      `When we think of world-class user experience (UX), our minds often drift to sleek smartphone applications, frictionless software-as-a-service (SaaS) platforms, or elegant digital interfaces. However, some of the most profound masterclasses in design do not happen on a screen. They happen in the physical world.`,
      `Japan has long been celebrated as a premier global destination, but for designers, it functions as something much greater: a living, breathing laboratory for real-world experience design. From public infrastructure to convenience store packaging, everyday life in Japan demonstrates how physical systems can be engineered to reduce anxiety, boost human autonomy, and support diverse user needs.`,
      `Based on insights from a design workshop I presented, here is how Japan sets a high bar for frictionless, inclusive, and delightful physical UX across four everyday categories: food, transit, vending machines, and restrooms.`,
      `In many fast-paced societies, quick food is synonymous with a compromise on quality, health, or presentation. Japan flips this script, proving that operational efficiency can actually be a vehicle for user delight and well-being.`,
      `The self-heating ekiben, designed for long-distance travel on the Shinkansen (bullet train), solves a classic physical constraint—the lack of a microwave. By pulling a string built into the packaging, a localized chemical reaction heats the meal (for example a crab meat and beef rice bento) to a steaming temperature right at your seat.`,
      `The humble convenience store rice ball (onigiri) uses a clever three-step numbered plastic wrapping system. It keeps the outer seaweed crisp and separate from the moist rice until the moment of consumption, guiding the user through a clear opening sequence.`,
      `Salad dressings and jam packets are engineered with localized tear zones or squeeze-and-dispense mechanisms that need no scissors or extra utensils—reducing the familiar friction of sticky fingers.`,
      `At 7-Eleven, fruit smoothies ship with ingredients fully frozen in the cup—reassuring customers about freshness—then an in-store automated blender prepares the drink on demand.`,
      `The UX takeaway: good design supports good living. Convenience does not have to mean a drop in experience quality; smart packaging can make healthier choices feel seamless and even playful.`,
      `Navigating crowded public transportation is traditionally one of the most high-anxiety activities a person can face. Japan’s transit network is designed to ease that cognitive load and to accommodate diverse bodies.`,
      `Stations use continuous yellow tactile paving so visually impaired commuters can navigate busy hubs. On staircases, explicit arrow markers steer pedestrian flow, organizing crowds and reducing collisions at rush hour.`,
      `Comfort varies person to person, so trains often include cars with different levels of air conditioning. For safety and psychological comfort, authorities also offer clearly designated women-only cars during specific peak hours.`,
      `Multi-language overhead digital screens continually confirm that travelers are on the correct platform and heading the right direction. That clarity pairs with physical platform gates that create a literal barrier between passengers and oncoming trains.`,
      `The UX takeaway: systems should actively lower anxiety. When empathy is embedded in physical spaces, infrastructure becomes a pillar of autonomous movement instead of a source of stress.`,
      `Vending machines and automated kiosks are often treated as sterile or second-rate. In Japan, self-service is a highly optimized, premium interaction.`,
      `Food and drink machines appear in dense cities and remote rural areas alike. They accept many payment types (cash, transit cards, digital pay), lean on clear visual cues and multi-language support, and sometimes use color-coded displays to distinguish piping-hot from ice-cold drinks—so people can rely on them without guesswork.`,
      `At traditional ramen shops, a ticket machine on the curb lets customers customize and pay before they join the queue. Chefs avoid handling dirty cash, diners get a predictable flow, and the kitchen stays focused on the food.`,
      `The UX takeaway: real-world interactions can be fast, frictionless, and inclusive. Well-designed self-service empowers people on both sides of the counter.`,
      `If you want to see how deeply a culture respects its users, look at its most private, unglamorous spaces. Japanese restrooms anticipate implicit needs at a remarkably high level.`,
      `Standard stalls include multi-language bidet panels with clear iconography—heated seats, adjustable water pressure and temperature, and more—so people can personalize the experience.`,
      `To ease psychological discomfort around sound, many stalls offer an automated privacy tone that mimics running water on demand.`,
      `Individual stalls often include wall-mounted baby seats so a caregiver can secure an infant safely while using the facilities—a small spatial choice that removes a huge logistical headache.`,
      `Sinks pair with compact mirrors for quick checks; separate counters with medium-height mirrors support makeup without blocking basins; full-length mirrors near exits allow a final wardrobe check before stepping back into public space.`,
      `The UX takeaway: respect means meeting people in every environment—including the vulnerable ones. Delight is also dignity: reducing awkwardness and protecting privacy.`,
      `Japan reminds us that experience design is a philosophy of hospitality. Whether you are shaping a mobile app or a train platform, the same questions apply: Have we reduced unnecessary cognitive load? Have we built safety nets for diverse and edge-case needs? Are we anticipating friction before the user hits it?`,
      `The next time you design a system, step away from the monitor and look at the world. The most elegant solutions tend to disappear into everyday rhythm—making the journey as humane as the destination.`,
    ],
  },
  {
    id: 'sensory-symphony-sonic-design',
    dateIso: '2023-11-10',
    dateDisplay: 'November 10, 2023',
    readTimeMin: 9,
    category: 'Essay',
    wip: true,
    title: 'The Sensory Symphony: Elevating User Experience Through Sonic Design',
    summary:
      'Originally written for a November 2023 presentation—why most digital experiences stay stubbornly silent, how sonic branding meets UX, and what Duolingo and Roomba teach us about UI sound design.',
    dek:
      'Beyond pixels and palettes: treating audio as part of the interface so digital products feel memorable, legible, and human.',
    tags: [
      'UX',
      'Sound design',
      'Sonic branding',
      'UI',
      'Presentation',
      'Product design',
    ],
    paragraphs: [
      `Originally prepared November 10, 2023 as part of a presentation.`,
      `In today’s digital landscape, the vast majority of websites and online platforms offer a silent, uneventful user experience. Designers painstakingly obsess over pixel-perfect layouts, color palettes, and intuitive navigation, yet they routinely ignore an entire sensory dimension. Because human emotions and memories are tightly intertwined, this systemic silence represents a massive missed opportunity. To truly make digital experiences memorable, web designers and user experience (UX) experts must look beyond the screen and embrace the power of sound.`,
      `To understand the potential of audio in digital spaces, one must first look at the success of sonic branding. Iconic brands like McDonald’s, Netflix, and Disney have woven audio so deeply into their identities that their signature sounds are instantly recognizable worldwide. The modern consumer does not even need to look at a screen to know that a Netflix original is starting; the distinct “ta-dum” chime says it all.`,
      `While this might sound like a topic reserved strictly for marketing agencies or creative services teams, it is fundamentally a UX challenge. The mission of an experience design team goes far beyond mere utility. A seamless user experience must be both functional and user-friendly, but it should also evoke an emotional response. This is where sonic branding transitions into the realm of UI sound design—the strategic integration of audio cues to guide, delight, and connect with the user.`,
      `When applied correctly, UI sound design transforms abstract digital interactions into concrete, satisfying moments. This can be seen across various industries, from software applications to physical smart appliances.`,
      `Duolingo, the popular language-learning platform, employs sound design ingeniously to drive user engagement. When a user answers a question correctly, the platform triggers a delightful, high-pitched chime. The chain is almost procedural: correct answer, UI cue, psychological payoff—pleasure and validation in one tone. These specific tones are scientifically proven to evoke feelings of pleasure and happiness. By using audio as a form of positive reinforcement, Duolingo builds a stronger emotional connection with its users, transforming a repetitive learning task into a rewarding game. This standard of audio feedback is rapidly becoming a staple across modern e-learning platforms.`,
      `Sound design is equally powerful when applied to hardware UX, as demonstrated by the Roomba autonomous vacuum cleaner. Lacking a traditional screen to communicate complex errors, the Roomba relies on simple audio cues to talk to its owner: high-pitched chimes signal a successful action, such as docking safely; low-pitched tones indicate trouble or a negative state, such as encountering an obstacle or getting stuck. These carefully chosen audio cues serve a highly practical purpose. They instantly inform the user of the device's status from across the room, prompting immediate, necessary action without requiring them to check a smartphone app.`,
      `As the world of user interface design continues to evolve, sound is shifting from a novelty to a necessity. Just as a well-designed logo leaves a lasting visual impression, strategic audio cues elevate a digital product to new heights. Sound bridges the gap between the cold, sterile digital world and the warm, sensory reality of human psychology.`,
      `To design the future of the internet, creators must ask themselves a vital question: How can we harness the power of sound to craft online experiences that are not just silent, but truly memorable? The answer lies in a harmonious blend of sound and design—transforming a standard user flow into a sensory journey that users will not easily forget.`,
    ],
  },
  {
    id: 'jamaal-myers-diversity-part-2',
    dateIso: '2021-12-15',
    dateDisplay: 'December 15, 2021',
    readTimeMin: 6,
    category: 'Interview',
    title: 'Part 2 — Jamaal Myers on transit, law, and “diversity of thought”',
    summary:
      'After BLM in 2020 amplified stories from people of colour across North America, I asked Jamaal Myers—health and transit advocate, corporate lawyer—what “diversity of thought” means to him and how he pushes for change.',
    dek:
      'A two-part conversation on Scarborough transit, anti-Black racism in transit and politics, being an LGBTQIA+ man of colour in law, and redefining whose voices centre the inclusion debate.',
    tags: [
      'Black Lives Matter',
      'Toronto',
      'Transit',
      'Scarborough',
      'Interview',
      'LGBTQIA+',
      'Diversity',
    ],
    paragraphs: [
      `In 2020, as Black Lives Matter surged across the United States for the second time in a decade, more stories from people of colour surfaced across North America. Part 1 of this series focused on my personal experience as a designer in Toronto hitting gatekeeping while trying to enter the industry as a POC woman. For Part 2 I wanted a POC man's perspective on what “diversity of thought” means to him—and how he works toward social change.`,
      `Meet Jamaal Myers: health and transit advocate for disproportionately represented communities, and corporate lawyer.`,
      `I first met Jamaal in 2019 at a TTC transit story circle organized by the Scarborough Discourse. A city councillor was there to listen to residents—but showed up defensive, argumentative, and dismissive, gaslighting attendees instead of hearing them. Jamaal spoke with clarity and conviction about why transit matters for Scarborough's diverse neighbourhoods. It stayed with me.`,
      `I reached out on LinkedIn for an interview, and he generously said yes. Across two recordings we talked about why he stepped into this transit work; anti-Black racism in transit and political systems; his path in the legal profession as an LGBTQIA+ man of colour; and what “diversity of thought” actually signals to him when institutions say it.`,
      `Both parts are below—thank you, Jamaal, for your time and candour.`,
    ],
    relatedIntro: 'Series — Part 1 (essay):',
    relatedLinks: [
      {
        label: 'When “diversity of thought” entered the room',
        href: '/journal/diversity-of-thought',
      },
    ],
    youtubeVideos: [
      {
        videoId: '5ek_-XbFnbQ',
        watchUrl: 'https://www.youtube.com/watch?v=5ek_-XbFnbQ',
        embedTitle: 'Interview with Jamaal Myers — Part 1',
      },
      {
        videoId: 'AC1hqmV6CHg',
        watchUrl: 'https://www.youtube.com/watch?v=AC1hqmV6CHg',
        embedTitle: 'Interview with Jamaal Myers — Part 2',
      },
    ],
  },
  {
    id: 'diversity-of-thought',
    dateIso: '2021-11-22',
    dateDisplay: 'November 22, 2021',
    readTimeMin: 7,
    category: 'Essay',
    title: "When \"diversity of thought\" entered the room",
    summary:
      'A 2017 conversation that redirected “diversity” into “diversity of thought”—and what Design Thinkers Toronto in 2018 revealed about hiring realities across city studios.',
    dek:
      'Reflections on language, power, and who gets to define inclusion when you are one of few POC voices on the team—and in the room with Toronto studio leadership.',
    tags: ['Diversity', 'Workplace', 'Toronto', 'Design industry', 'Hiring'],
    heroImage: '/images/journal-diversity-design-thinkers.png',
    heroImageAlt:
      'Tessrah Mahalingam speaking from the audience at Design Thinkers Toronto 2018 “Speak The Truth”, wearing an event badge and holding notes while attendees listen.',
    paragraphs: [
      `Once in 2017, my manager said "we need more diversity in this workplace", I got excited and agreed. I went on to talk about the importance of diversity in the work place. He looked visibly uncomfortable and said "I meant diversity of thought". I was so puzzled and let down. He went on to explain what that meant. "Diversity of thought is when people of different thought processes come together: analytical, creative, etc." The meeting eventually wrapped up and I'm sure it left everyone's minds. Here I am 4 years later, to tell you it's still on my mind today. I have a lot of respect for that boss to this day, but I felt like he was missing something there.`,
      `What is "diversity of thought" anyways? Why use that term instead of saying — diversity? It felt like a cop-out. I was 1 of 2 People Of Colour on the team, and the only one who was a woman. Was it fair to explain to me what diversity should mean? Or should the POCs on the team have been the ones leading that discussion?`,
      `First Hand Experience — At Design Thinkers TO in 2018 themed "Speak The Truth", I attended a panel discussion called: "Discrimination in the creative industry? Really?" I voiced my opinion to studio owners in Toronto. I asked "Shouldn't studios have a hiring quota for people of colour?" The response was an overwhelming "No, that isn't necessary. We look at talent. We hire the best person for the job." The tone was defensive. The panel had one POC who was a female.`,
      `Over the years I have sent in countless applications to studios all over the city. I had my portfolio reviewed by my college professors years after graduating, an OCAD thesis professor, and a few RGD professionals. The response was always positive, so I know it wasn't about my lack of talent.`,
      `An optional part of the conference experience was visiting studios across the city. I thought I would surely see POC designers in these spaces. In reality, I hardly saw any black or brown faces behind desks. I was definitely right during the panel discussion. There was a biased hiring practise taking place across Toronto design studios and firms. But the studio owners publicly disregarded my opinion as a POC. I was born and raised in the most diverse city in all of Canada, and these opportunities weren't available to me or people like me. The truth is, city studios needed to be better, and introduce diverse hiring practises into the workplace.`,
    ],
    relatedIntro: 'Here are a few websites and videos that provide more detail into the subject:',
    vimeoVideoId: '301185414',
    vimeoWatchUrl: 'https://vimeo.com/301185414',
    vimeoEmbedTitle:
      'Angela Bains — Truthfully, our Design Industry is not Diverse — And that’s a Problem!',
    relatedScreens: [
      {
        href:
          'https://www.cnbc.com/2020/06/11/companies-are-making-bold-promises-about-greater-diversity-theres-a-long-way-to-go.html',
        label:
          'CNBC — Bold promises on diversity, and how far companies still have to go',
        image: '/images/journal-ref-cnbc-diversity.png',
        imageAlt:
          'Screen capture of CNBC article on corporate diversity pledges, representation data, and accountability.',
      },
    ],
  },
  {
    id: 'casual-chat-mark-nguyen',
    dateIso: '2021-03-18',
    dateDisplay: 'March 18, 2021',
    readTimeMin: 4,
    category: 'Craft',
    title: 'Casual Chat w/ User Researcher Mark Nguyen',
    summary:
      'A conversation about protecting creative flow, designing with—not around—your collaborators, and pulling sharp ideas out of messy, cross-functional rooms.',
    dek:
      "On finding creative flow, designing collaboratively, and why the best ideas come from getting everyone in the room—not just the 'creative' people.",
    tags: ['Craft', 'Design', 'Collaboration', 'Interviews'],
    paragraphs: [
      `I've always seen my career as a bit of an evolution—like an instrument that I'm constantly fine-tuning to play the right notes. Moving from my classical training into the digital world was a big shift, but what I've really learned is how much my environment matters to my creativity. I'm a huge believer in finding a "flow" that works with my life, not against it. That's why I love the flexibility of working for myself; in the summer, you'll find me up at 5:00 AM taking a long walk before I even touch my computer. In the winter, I might sleep in a bit later and do my best thinking in the quiet of the evening. Being "heads down" and focused is where the magic happens for me, away from the constant interruptions of a busy office.`,
      `When it comes to the actual work, I don't believe in designing in a bubble. I'm a big fan of getting everyone involved in the process—whether you think you're a "creative" person or not. I remember working on a project for a big trade show where we gathered people from every department—sales, marketing, you name it—just to hash out ideas. It was incredible because they saw things I never would have thought of on my own. My favourite part of the job is taking all that raw energy and those big, messy ideas and using my skills to boil them down into something beautiful and simple that actually works. To me, great design isn't just about what I want; it's about listening to your story and turning it into something we're both proud of.`,
    ],
    youtubeWatchUrl: 'https://www.youtube.com/watch?v=INMGtTMRMBI',
    youtubeVideoId: 'INMGtTMRMBI',
  },
]

/** Entries with `wip: true` stay in source for editing but are omitted from `/journal` and return 404-style redirect from `/journal/:slug`. */

/**
 * @param {string} slug
 * @returns {JournalEntry | undefined}
 */
export function getJournalEntryBySlug(slug) {
  const entry = JOURNAL_ENTRIES.find((e) => e.id === slug)
  if (!entry || entry.wip) return undefined
  return entry
}

/** Entries visible on /journal (excludes `wip`). */
export function getPublishedJournalEntries() {
  return JOURNAL_ENTRIES.filter((e) => !e.wip)
}
