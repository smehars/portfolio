// Edit experience text here. Layout lives in src/components/Experience.tsx.
// Any string starting with "TODO" is shown as a visible placeholder.

export type Role = {
  title: string
  org: string
  dates: string
  points: string[]
  // Shown as small cards under the role. Set href to the site's URL to make
  // the card clickable; leave it null until the link is ready.
  sites?: { name: string; summary: string; href: string | null }[]
}

export const roles: Role[] = [
  {
    title: 'President',
    org: 'SFU Software Systems Student Society (SSSS)',
    dates: 'Apr 2026 – Apr 2027',
    points: [
      'Lead a 17-person executive team.',
      'Organized CS/SoSy Roadmap Night with the Computing Science Student Society: a three-hour degree-planning and networking evening for first- and second-year students, with 2 faculty speakers and a panel of 4 upper-year students and 1 graduate. 30 students attended.',
      "Created the society's Best Use of Python prize track at StormHacks 2026 (our mascot is a python): wrote the rubric, recruited fellow judges, and judged 71 teams in a two-phase review.",
      "Chairing SystemsHacks 2027, the society's overnight hackathon on January 30–31, 2027, with an 18-person committee and a cap of 160 hackers. Built the Notion task board the committee plans from.",
    ],
  },
  {
    title: 'Website Technical Lead',
    org: 'SFU Software Systems Student Society (SSSS)',
    dates: 'Nov 2025 – present',
    points: [
      'Maintain sfussss.org and shipped its v6.0 redesign, with a light and dark theme, a rebuilt courses page, and SEO metadata.',
      "Cut the total initial transfer across the site's 7 main pages from 43.9MB to 6.0MB. The About page went from 34MB to 1.4MB.",
      'Raised all 7 main pages to 90+ desktop Lighthouse performance on the live site.',
      'Replaced a formatting-only CI check with one that also runs lint, typecheck and a full build on every pull request. The new lint step caught 2 errors the old setup had missed.',
    ],
    sites: [
      {
        name: 'sfussss.org',
        summary: 'The society’s main site, v6.0.',
        href: 'https://sfussss.org',
      },
      {
        name: 'Patch the System',
        summary: 'Event site for the AI-assisted defensive CTF. Developed, deployed and maintained.',
        href: 'https://patch.sfussss.org',
      },
      {
        name: 'SystemsHacks 2026',
        summary:
          'Hackathon site in plain HTML and JS on GitHub Pages. Sped it up by deferring YouTube loading and reducing image sizes.',
        href: 'https://systemshacks.com/',
      },
      {
        name: 'SystemsHacks 2027',
        summary: 'In progress: wireframe and design.',
        href: null,
      },
    ],
  },
  {
    title: 'Backend Lead and Event Logistics Lead',
    org: 'Patch the System CTF, with the SFU Cybersecurity Club',
    dates: 'Competition day: Nov 21, 2026',
    points: [
      'Lead the backend and infrastructure for an AI-assisted defensive CTF, planned for 10 teams of 4, on a dev team of about 8: the CTFd scoring platform, hosted challenge apps, and team repositories.',
      'Built the Notes challenge platform on a reskinned DVGA app, with 6 challenges: 4 main and 2 backups for adjusting difficulty. Each has an automated exploit test and a reference patch.',
      "Wrote several of the grading pipeline's scripts, working with a teammate.",
      'Ran two playtests, with teams of four and three, and debugged scoring live during the first: automatic fix-point awards were failing because of a missing Content-Type header.',
      "Set up the AI coding assistant teams use: it runs in a Docker container, can only see the team's repo, and asks before every action.",
    ],
  },
  {
    title: 'Judging Lead',
    org: 'CSSS Fall Hacks 2026',
    dates: 'Nov 7, 2026',
    points: [
      'Managed all judging, as part of the organizing committee, for a hackathon with 110 checked-in hackers, 40 submitted projects, and 12 judges across 3 presentation rooms.',
      'Recruited every judge and set the judging format, timings and a 5-category weighted rubric.',
      'Reworked the schedule when rooms dropped from 4 to 3: presentations went to 90 minutes and deliberation to 30.',
      "Set up a Google Sheets scoring workbook with weighted totals and normalization of each judge's scores, and wrote the judge package covering the schedule, rubric and 9 prize tracks.",
    ],
  },
  {
    title: 'HIVE Leader',
    org: 'SFU 101 / Welcome Week, Faculty of Applied Sciences',
    dates: 'Aug – Sep 2026',
    points: [
      'Co-led HIVE 11, an orientation group of 30 new students, with one other leader through the Fall 2026 welcome cycle.',
      'Led the group at Welcome Day and helped organize a social for its members.',
    ],
  },
  {
    title: 'Upper Division Representative',
    org: 'SFU Software Systems Student Society (SSSS)',
    dates: 'Apr 2025 – Apr 2026',
    points: [
      'Represented upper-division students on the executive team, giving an upper-year perspective on club decisions.',
      'Coordinated logistics for SystemsHacks (200+ attendees) and overnight frosh events.',
      'Organized networking events: moderated a Q&A panel on an SAP office tour and ran "Lunch and Learn" sessions with faculty.',
    ],
  },
  {
    title: 'Sales Associate',
    org: 'Gap Factory, New Westminster, BC',
    dates: 'Jul 2021 – present',
    points: [
      'Worked part-time throughout college and university.',
      'Handle cashier and customer service, averaging 50+ transactions per shift, and train new hires on register and sales-floor procedures.',
    ],
  },
]
