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
      "A Discord bot that answers SFU course questions with slash commands, for my program's 1,800-member server. GitHub Actions deploys it to AWS with no long-lived keys.",
    highlights: [
      'Running in production, with a separate dev bot',
      '5 slash commands, 121 automated tests',
      'Deploys through OIDC, no stored AWS keys',
      'Images tagged by git SHA',
    ],
    tech: ['Python', 'discord.py', 'Docker', 'GitHub Actions', 'ECR', 'App Runner'],
    featured: true,
    links: [{ label: 'View the code on GitHub', href: 'https://github.com/ssss-sfu/coursebot' }],
  },
  {
    slug: 'echoes-of-kanto',
    title: 'Echoes of Kanto',
    summary:
      "A browser game: hear a Pokémon's cry, watch it drawn as a 3D graph, and guess the Pokémon. Built solo in 24 hours at Mountain Madness 2026, the SFU CSSS hackathon.",
    highlights: [
      '1,025 Pokémon across 9 generations',
      "Redesigned after the event, in November 2026, using Fable. The redesign cut the cry graph's compute time from about 1,409 ms to about 11 ms.",
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
      { label: 'Play the live demo', href: 'https://echoes-of-kanto.vercel.app/' },
      { label: 'View the code on GitHub', href: 'https://github.com/smehars/echoes-of-kanto' },
    ],
  },
  {
    slug: 'yase',
    title: 'YASE: relational database engine',
    summary:
      'A database engine in C++ for CMPT 454 (Database Systems II): a buffer manager with LRU page eviction, a lock-free skip list index, and a lock manager using strict two-phase locking with deadlock detection. Reached 15,000+ commits/sec at under 0.2% aborts on the course benchmark.',
    highlights: [],
    tech: ['C++', 'CMake', 'Docker'],
  },
  {
    slug: 'nexus',
    title: 'Nexus game engine',
    summary:
      'A multiplayer game engine built by a 7-person team for CMPT 373. I owned the backend architecture, split into 4 layers (domain, interpreter, networking, services) so each could be tested without a running server.',
    highlights: [],
    tech: ['C++', 'Docker'],
  },
  {
    slug: 'eventssss',
    title: 'EventSSSS',
    summary:
      'A team-of-4 project for CMPT 372 (summer 2026): a web app where students find and RSVP to student-society events and executives manage them. I built the login and permissions side: cookie-based sessions, three user roles, and sessions that end as soon as a password or role changes. Demoed, not launched; the code is in a private repo.',
    highlights: [],
    tech: ['TypeScript', 'Express', 'PostgreSQL', 'React'],
  },
  {
    slug: 'pokemon-colour-type',
    title: 'Pokémon colour → type classifier',
    summary:
      "A CMPT 353 project testing whether a Pokémon's type can be guessed from the colours in its artwork. Colour turned out to be a real but weak signal.",
    highlights: [],
    tech: ['Python', 'pandas', 'scikit-learn', 'scikit-image'],
  },
  {
    slug: 'plottogether',
    title: 'PlotTogether',
    summary:
      'A graphing tool where users enter coordinates and get live plots with a server-computed trend line. Deployed with Docker on a GCP VM behind Nginx.',
    highlights: [],
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
  },
]
