import { useEffect, useRef, useState, type ReactNode } from 'react'

// A list item that fades in and rises slightly the first time it scrolls into
// view. Visitors with "reduce motion" turned on see it in place immediately.
function RevealItem({ delay = 0, children }: { delay?: number; children: ReactNode }) {
  const ref = useRef<HTMLLIElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <li
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`motion-safe:transition motion-safe:duration-500 motion-safe:ease-out ${
        shown ? '' : 'motion-safe:translate-y-4 motion-safe:opacity-0'
      }`}
    >
      {children}
    </li>
  )
}

export default RevealItem
