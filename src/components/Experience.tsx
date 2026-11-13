import { roles } from '../content/experience'

const todo = 'rounded border border-dashed border-lavender/50 px-1.5 py-0.5 text-sm text-lavender'
const siteCard = 'block h-full rounded-xl border border-lavender/20 bg-canvas p-5'

const highlight = 'font-semibold text-lilac'

// Renders **highlighted words** and [highlighted links](https://url) inside a string.
function Text({ children }: { children: string }) {
  if (children.startsWith('TODO')) return <span className={todo}>{children}</span>
  const parts = children.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (link) {
          return (
            <a
              key={i}
              href={link[2]}
              target="_blank"
              rel="noreferrer"
              className={`${highlight} underline decoration-lilac/50 underline-offset-4 hover:decoration-lilac`}
            >
              {link[1]}
            </a>
          )
        }
        if (part.startsWith('**')) {
          return (
            <strong key={i} className={highlight}>
              {part.slice(2, -2)}
            </strong>
          )
        }
        return part
      })}
    </>
  )
}

function Experience() {
  return (
    <div className="w-full max-w-3xl">
      <h2 className="text-3xl font-bold">experience</h2>
      <ul className="mt-8 space-y-8">
        {roles.map((role) => (
          <li key={`${role.title} ${role.org}`} className="border-l-2 border-lavender/30 pl-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-bold">{role.title}</h3>
              <p className="text-sm text-mist">
                <Text>{role.dates}</Text>
              </p>
            </div>
            <p className="mt-1 text-lavender">{role.org}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-ink/90 marker:text-mist">
              {role.points.map((point) => (
                <li key={point}>
                  <Text>{point}</Text>
                </li>
              ))}
            </ul>
            {role.sites && (
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:-mr-24 lg:grid-cols-3">
                {role.sites.map((site) => {
                  const body = (
                    <>
                      <h4 className="font-bold">
                        {site.name}
                        {site.href && <span aria-hidden="true"> ↗</span>}
                      </h4>
                      <p className="mt-2 text-sm text-ink/90">
                        <Text>{site.summary}</Text>
                      </p>
                    </>
                  )
                  return (
                    <li key={site.name}>
                      {site.href ? (
                        <a
                          href={site.href}
                          target="_blank"
                          rel="noreferrer"
                          className={`${siteCard} transition-colors hover:border-lavender/60`}
                        >
                          {body}
                        </a>
                      ) : (
                        <div className={siteCard}>{body}</div>
                      )}
                    </li>
                  )
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience
