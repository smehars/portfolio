import HeroGallery from './HeroGallery'
import ScrambleText from './ScrambleText'

const link =
  'text-lavender underline decoration-lavender/40 underline-offset-4 hover:decoration-lavender'

function About() {
  return (
    <div className="relative grid w-full max-w-6xl items-center gap-10 md:gap-14 md:grid-cols-[1fr_auto]">
      <div>
        <h1 className="text-4xl font-bold">
          hello, i'm{' '}
          <span className="text-lavender">
            <ScrambleText text="mehar" />
          </span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/90">
          I’m a Software Systems student at SFU, graduating in April 2028, and I like building
          things that people actually use, especially backend systems. I got into tech while completing
          my Associate of Science in Computer Science at Langara College before transferring to SFU,
          where I’m now president of the Software Systems Student Society and spend a lot of my time
          running events for the community.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-ink/90">
          Outside of tech, I love playing games, listening to music, and travelling. I’m currently
          looking for an internship for Spring or Summer 2027.
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-lg">
          <li>
            <a className={link} href="https://github.com/smehars" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a
              className={link}
              href="https://linkedin.com/in/smeharsaini"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a className={link} href="mailto:meharsaini@hotmail.com">
              Email
            </a>
          </li>
          <li>
            <a
              className={link}
              href="/backend_resume_mehar_saini.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume (PDF)
            </a>
          </li>
        </ul>
      </div>
      <HeroGallery />
    </div>
  )
}

export default About
