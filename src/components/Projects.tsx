import type { ReactNode } from 'react'
import { projects, type Project } from '../content/projects'
import RevealItem from './RevealItem'
import { link } from '../linkStyle'

function TechTags({ tech }: { tech: string[] }) {
  return (
    <ul className="mt-auto flex flex-wrap gap-2 pt-5 text-sm text-mist">
      {tech.map((item) => (
        <li key={item} className="rounded-full border border-mist/30 px-3 py-1">
          {item}
        </li>
      ))}
    </ul>
  )
}

// Link rules for cards:
// - One link: the whole card is the link.
// - Two or more: the first link goes on the title and picture, and the rest
//   are listed under the description.
function CardShell({
  project,
  className,
  delay,
  children,
}: {
  project: Project
  className: string
  delay: number
  children: ReactNode
}) {
  const only = project.links?.length === 1 ? project.links[0] : null
  return (
    <RevealItem delay={delay}>
      {only ? (
        <a
          href={only.href}
          target="_blank"
          rel="noreferrer"
          className={`${className} transition-colors hover:border-lavender/60`}
        >
          {children}
        </a>
      ) : (
        <div className={className}>{children}</div>
      )}
    </RevealItem>
  )
}

function CardLinks({ project, className }: { project: Project; className: string }) {
  const links = project.links ?? []
  if (links.length === 0) return null
  // The whole card is already a link, so show its label as plain text.
  if (links.length === 1) return <p className={`${className} ${link}`}>{links[0].label}</p>
  return (
    <ul className={`${className} flex flex-wrap gap-x-5 gap-y-2`}>
      {links.slice(1).map((item) => (
        <li key={item.href}>
          <a className={link} href={item.href} target="_blank" rel="noreferrer">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

function FeaturedCard({ project, delay }: { project: Project; delay: number }) {
  const links = project.links ?? []
  const primary = links.length > 1 ? links[0] : null

  const picture = project.image ? (
    <img
      src={project.image.src}
      alt={project.image.alt}
      width={project.image.width}
      height={project.image.height}
      loading="lazy"
      className="aspect-video w-full object-cover"
    />
  ) : (
    <div className="flex aspect-video w-full items-center justify-center border-b border-dashed border-lavender/40 text-sm text-lavender">
      TODO: picture
    </div>
  )

  return (
    <CardShell
      project={project}
      delay={delay}
      className="glow flex h-full flex-col overflow-hidden rounded-2xl border border-lavender/20 bg-canvas"
    >
      {primary ? (
        <a href={primary.href} target="_blank" rel="noreferrer">
          {picture}
        </a>
      ) : (
        picture
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold">
          {primary ? (
            <a
              href={primary.href}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-transparent underline-offset-4 transition-colors hover:decoration-lavender"
            >
              {project.title}
              <span aria-hidden="true"> ➚</span>
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-3 text-ink/90">{project.summary}</p>
        <ul className="mt-4 space-y-1 text-lavender">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <CardLinks project={project} className="mt-4" />
        <TechTags tech={project.tech} />
      </div>
    </CardShell>
  )
}

function SmallCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <CardShell
      project={project}
      delay={delay}
      className="glow flex h-full flex-col rounded-xl border border-lavender/20 bg-canvas p-5"
    >
      <h4 className="font-bold">{project.title}</h4>
      <p className="mt-2 text-sm text-ink/90">{project.summary}</p>
      {project.highlights.length > 0 && (
        <ul className="mt-3 space-y-1 text-sm text-lavender">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
      <CardLinks project={project} className="mt-3 text-sm" />
      <TechTags tech={project.tech} />
    </CardShell>
  )
}

function Projects() {
  const featured = projects.filter((project) => project.featured)
  const others = projects.filter((project) => !project.featured)

  return (
    <div className="w-full max-w-5xl">
      <h2 className="text-3xl font-bold">projects</h2>
      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {featured.map((project, i) => (
          <FeaturedCard key={project.slug} project={project} delay={(i % 2) * 100} />
        ))}
      </ul>
      {others.length > 0 && (
        <>
          <h3 className="mt-10 text-lg font-bold text-mist">other projects</h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {others.map((project, i) => (
              <SmallCard key={project.slug} project={project} delay={(i % 3) * 100} />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Projects
