import { useEffect, useRef, type ReactNode } from 'react'

type Props = {
  z: number
  className: string
  children: ReactNode
}

function Panel({ z, className, children }: Props) {
  const ref = useRef<HTMLElement>(null)

  // A panel taller than the viewport pins by its bottom edge instead of its
  // top, so all of its content scrolls past before the next panel covers it.
  // It then holds still for a short stretch of scrolling (the bottom margin)
  // so its last rows can be read before the wipe starts.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => {
      const overflow = el.offsetHeight - window.innerHeight
      el.style.top = `${Math.min(0, -overflow)}px`
      const hasNextPanel = el.nextElementSibling?.tagName === 'SECTION'
      el.style.marginBottom = overflow > 0 && hasNextPanel ? `${Math.round(window.innerHeight * 0.3)}px` : ''
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    window.addEventListener('resize', update)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section
      ref={ref}
      style={{ zIndex: z }}
      className={`sticky top-0 flex min-h-screen items-center justify-center px-6 pb-24 pt-16 ${className}`}
    >
      {children}
    </section>
  )
}

export default Panel
