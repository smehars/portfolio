import { projects, type Project } from '../content/projects'

const link =
  'text-lavender underline decoration-lavender/40 underline-offset-4 hover:decoration-lavender'

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

function FeaturedCard({ project }: { project: Project }) {
  return (
    <li className="flex flex-col overflow-hidden rounded-2xl border border-lavender/20 bg-canvas">
      {project.image ? (
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
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="mt-3 text-ink/90">{project.summary}</p>
        <ul className="mt-4 space-y-1 text-lavender">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        {project.links && (
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {project.links.map((item) => (
              <li key={item.href}>
                <a className={link} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        <TechTags tech={project.tech} />
      </div>
    </li>
  )
}

function SmallCard({ project }: { project: Project }) {
  return (
    <li className="flex flex-col rounded-xl border border-lavender/20 bg-canvas p-5">
      <h4 className="font-bold">{project.title}</h4>
      <p className="mt-2 text-sm text-ink/90">{project.summary}</p>
      <TechTags tech={project.tech} />
    </li>
  )
}

function Projects() {
  const featured = projects.filter((project) => project.featured)
  const others = projects.filter((project) => !project.featured)

  return (
    <div className="w-full max-w-5xl">
      <h2 className="text-3xl font-bold">projects</h2>
      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {featured.map((project) => (
          <FeaturedCard key={project.slug} project={project} />
        ))}
      </ul>
      {others.length > 0 && (
        <>
          <h3 className="mt-10 text-lg font-bold text-mist">other projects</h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {others.map((project) => (
              <SmallCard key={project.slug} project={project} />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Projects
