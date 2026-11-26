// Edit experience text here. Layout lives in src/components/Experience.tsx.
// Any string starting with "TODO" is shown as a visible placeholder.
// In points: **words** are highlighted, and [words](https://link) become a
// highlighted link.

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
      'Lead a **17-person executive team**.',
      'Organized [CS/SoSy Roadmap Night](https://luma.com/5egcwk30) with the CSSS: a degree-planning and networking evening for first & second-year students, inviting **2 faculty speakers** and a **panel of 5 upper-year students** to guide **30 attendees**.',
      "Chairing **SystemsHacks 2027**, the SSSS's overnight hackathon on January 30–31, 2027, with an **18-person committee**.",
    ],
  },
  {
    title: 'Website Technical Lead',
    org: 'SFU Software Systems Student Society (SSSS)',
    dates: 'Nov 2025 – present',
    points: [
      'Maintain **sfussss.org** and shipped its **v6.0 redesign**, with a light and dark theme, a rebuilt courses page, improved SEO, and traffic analytics.',
      'Cut the total initial transfer across the website by **7x**.',
      'Raised all pages to **95+ desktop Lighthouse performance** on the live site.',
      'Improved **CI** by introducing a linter, typechecking, and a full build on every pull request. The new linting step caught **2 live errors**.',
    ],
    sites: [
      {
        name: 'sfussss.org',
        summary: 'Updating and maintaining the main SSSS website',
        href: 'https://sfussss.org',
      },
      {
        name: 'Patch the System',
        summary:
          'Event site for the AI-assisted defensive CTF. Improved the first version and added an instructions page with screenshots.',
        href: 'https://patch.sfussss.org',
      },
      {
        name: 'SystemsHacks 2026',
        summary:
          'Hackathon site in plain HTML and JS on GitHub Pages. Improved from previous iterations by introducing deferring YouTube loading and reducing image sizes.',
        href: 'https://systemshacks.com/',
      },
      // {
      //   name: 'SystemsHacks 2027',
      //   summary: 'In progress: wireframe and design.',
      //   href: null,
      // },
    ],
  },
  {
    title: 'Technical Lead',
    org: 'Patch the System CTF, SSSS with the SFU Cybersecurity Club',
    dates: 'Aug – Nov 2026',
    points: [
      'One of **3 event leads** for a one-day defensive CTF where student teams found security bugs in 3 deliberately vulnerable web apps, then patched them. Led the **8-person backend team** within a 22-person organizing team.',
      "Designed the **automated fix grader**: a team pushes a fix, the grader builds their app in **Docker**, runs a hidden exploit test and the app's regression tests, then posts the result on GitHub and adds points on **CTFd**. It graded **309 fixes** from **9 teams** on the event day.",
      'Wrote **3 of the 15 challenges** (command injection, SQL injection and weak crypto), each with a reference patch and an exploit test, and checked every other challenge end to end.',
      'Built the **read-only AI assistant** teams used for code explanations and hints on macOS, Windows and Linux, and ran per-team model keys with a $10 cap (**$56 of $100** spent).',
      'Ran a morning rehearsal that caught a grader restart issue before teams arrived, then mentored teams in person through setup and AI access problems for **31 competitors**.',
    ],
  },
  {
    title: 'Judging Lead',
    org: 'CSSS Fall Hacks 2026',
    dates: 'Nov 7, 2026',
    points: [
      'Managed all judging, as part of the organizing committee, for a hackathon with **100+ hackers**, **40 submitted projects**, and **12 judges** across 3 presentation rooms.',
      'Recruited judges and designed the judging format, timings and a **5-category weighted rubric**.',
      "Set up a **Google Sheets scoring workbook** with weighted totals and normalization of each judge's scores, and wrote the judge package covering the schedule, rubric and prize tracks.",
    ],
  },
  {
    title: 'HIVE Leader',
    org: 'SFU 101 / Welcome Week, Faculty of Applied Sciences',
    dates: 'Aug – Sep 2026',
    points: [
      'Co-led **HIVE 11**, an orientation group of **30 new students**, with one other leader through the Fall 2026 welcome cycle.',
      'Led the group at Welcome Day and helped organize a social for its members.',
    ],
  },
  {
    title: 'Upper Division Representative',
    org: 'SFU Software Systems Student Society (SSSS)',
    dates: 'Apr 2025 – Apr 2026',
    points: [
      'Represented upper-division students on the executive team, giving an upper-year perspective on club decisions.',
      'Coordinated logistics for **SystemsHacks (200+ attendees)** and overnight frosh events.',
      'Organized networking events: moderated a Q&A panel on an **SAP office tour** and ran "Lunch and Learn" sessions with faculty.',
    ],
  },
  {
    title: 'Sales Associate',
    org: 'Gap Factory, New Westminster, BC',
    dates: 'Jul 2021 – present',
    points: [
      'Worked part-time throughout college and university.',
      'Handle cashier and customer service, averaging **50+ transactions per shift**, and **train new hires** on register and sales-floor procedures.',
    ],
  },
]
