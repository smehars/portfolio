// Edit project text here. Layout lives in src/components/Projects.tsx.
// `featured: true` projects get a large card with a picture at the top of the
// section. Everything else gets a small card underneath.

export type Project = {
  slug: string
  title: string
  summary: string
  highlights: string[]
  tech: string[]
  featured?: boolean
  // Put the file in public/images/ and set src to e.g. '/images/echoes.webp'.
  image?: { src: string; alt: string; width: number; height: number }
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    slug: 'discord-bot-deploy',
    title: 'coursebot',
    summary:
      "A Discord bot that answers SFU course questions with slash commands, built for my student society server. Deployed to AWS through GitHub Actions.",
    highlights: [
      'Running in production, with a separate dev bot',
      '5 slash commands, 121 automated tests',
      'Deploys through OIDC, no stored AWS keys',
    ],
    tech: ['Python', 'discord.py', 'Docker', 'GitHub Actions', 'ECR', 'App Runner'],
    featured: true,
    image: {
      src: '/images/coursebot.webp',
      alt: 'coursebot replying in Discord to the /course command with a card for CMPT 130: the course description, recent offerings and instructors, credits, and prerequisites.',
      width: 1177,
      height: 662,
    },
    links: [{ label: 'GitHub➚', href: 'https://github.com/ssss-sfu/coursebot' }],
  },
  {
    slug: 'echoes-of-kanto',
    title: 'Echoes of Kanto',
    summary:
      "A browser game: hear a Pokémon's cry, watch it drawn as a 3D graph, and guess the Pokémon. Built solo in 24 hours at Mountain Madness 2026, the SFU CSSS hackathon.",
    highlights: [
      'Originally for the first generation 151 Pokémon',
      'Now spans 1,025 Pokémon across 9 generations',
      "Redesigned in November 2026 using Fable. The redesign cut the graph compute time from ~1,409 ms to ~11 ms.",
    ],
    tech: ['React', 'Three.js', 'Web Audio API', 'Vite', 'Vercel'],
    featured: true,
    image: {
      src: '/images/echoes-of-kanto.webp',
      alt: 'Echoes of Kanto game screen, styled like a red Pokédex: a 3D graph of a cry’s frequency, time and amplitude next to a Play Audio button and a box for guessing the Pokémon.',
      width: 800,
      height: 449,
    },
    links: [
      { label: 'Live Demo➚', href: 'https://echoes-of-kanto.vercel.app/' },
      { label: 'GitHub➚', href: 'https://github.com/smehars/echoes-of-kanto' },
    ],
  },
  {
    slug: 'yase',
    title: 'YASE: relational database engine',
    summary:
      'A database engine in C++ for CMPT 454 (Database Systems II). Includes a buffer manager with LRU page eviction, a lock-free skip list index, and a lock manager using strict two-phase locking with deadlock detection.',
    highlights: ['Reached 15,000+ commits/sec at under 0.2% aborts on the course benchmark.'],
    tech: ['C++', 'CMake', 'Docker'],
  },
  {
    slug: 'nexus',
    title: 'Nexus game engine',
    summary:
      'A multiplayer game engine where I owned the backend architecture, split into 4 layers (domain, interpreter, networking, services) so each could be tested without a running server.',
    highlights: ['Built by a 7-person team for CMPT 373 (Fall 2025)'],
    tech: ['C++', 'Docker'],
  },
  {
    slug: 'eventssss',
    title: 'EventSSSS',
    summary:
      'A web app where students find and RSVP to student-society events and executives manage them. I built the login and permissions side: cookie-based sessions, three user roles, and sessions that end as soon as a password or role changes. Demoed, not launched; the code is in a private repo.',
    highlights: ['Created in a team of 4 for CMPT 372 (Summer 2026)'],
    tech: ['TypeScript', 'Express', 'PostgreSQL', 'React'],
  },
  {
    slug: 'pokemon-colour-type',
    title: 'Pokémon colour → type classifier',
    summary:
      "A classification project testing whether a Pokémon's type can be assumed from the colours in its artwork. Colour turned out to be a real but weak signal.",
    highlights: ['Course Project for CMPT 353'],
    tech: ['Python', 'pandas', 'scikit-learn', 'scikit-image'],
    links: [
      { label: 'Report➚', href: 'https://docs.google.com/document/d/19kfwf-AVasbbQwr64GgCBWg3IgyutoYt800BestO8pw/view'},
    ],
  },
  {
    slug: 'plottogether',
    title: 'PlotTogether',
    summary:
      'A graphing tool where users enter coordinates and get live plots with a server-computed trend line. Deployed with Docker on a GCP VM behind Nginx.',
    highlights: ['Created in a team of 4 for StormForge 2025'],
    tech: ['React', 'Node.js', 'Docker', 'Nginx'],
  },
  {
    slug: 'deny-and-conquer',
    title: 'Deny and Conquer',
    summary:
      'A real-time multiplayer game over Python sockets, with a custom text protocol that keeps game state in sync across clients.',
    highlights: [],
    tech: ['Python', 'Sockets', 'Docker'],
  },
  {
    slug: 'posture-analysis',
    title: 'Posture analysis tool',
    summary:
      "A real-time slouch detector that reads posture from MediaPipe 3D landmarks, with sliding-window checks so brief movements don't trigger alerts.",
    highlights: [],
    tech: ['Python', 'MediaPipe', 'Docker'],
    links: [
      { label: 'GitHub➚', href: 'https://github.com/smehars/LockedIn-Posture-Analysis-Tool' },
    ],    
  },
]
