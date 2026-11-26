// Counts link clicks in Umami (the analytics script in index.html). The event
// name is where the link goes, e.g. "github.com/smehars" or
// "/backend_resume_mehar_saini.pdf", and "email" for the mailto link.
declare global {
  interface Window {
    umami?: { track: (event: string) => void }
  }
}

export function eventName(a: HTMLAnchorElement) {
  if (a.protocol === 'mailto:') return 'email'
  const where = a.host === location.host ? a.pathname : a.host + a.pathname
  // Umami caps event names at 50 characters.
  return where
    .replace(/^www\./, '')
    .replace(/\/$/, '')
    .slice(0, 50)
}

document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest('a')
  if (a) window.umami?.track(eventName(a))
})
