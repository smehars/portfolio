import { useEffect, useRef } from 'react'

// Soft lavender blobs that drift behind the hero and lean toward the cursor.
// The animation stops while the hero is covered by the next panel or the tab
// is hidden, and visitors with "reduce motion" turned on see the blobs
// standing still.

// x and y are the resting position (% of the hero), size is in vmax,
// drift is how far it wanders (px) and depth is how far it leans toward the
// cursor (px). Each blob moves at a different speed so they never sync up.
const blobs = [
  {
    x: 18,
    y: 28,
    size: 42,
    color: '205 180 219',
    alpha: 0.13,
    speed: 0.00018,
    drift: 60,
    depth: 50,
  },
  {
    x: 78,
    y: 22,
    size: 34,
    color: '221 184 255',
    alpha: 0.1,
    speed: 0.00023,
    drift: 70,
    depth: 30,
  },
  {
    x: 62,
    y: 78,
    size: 46,
    color: '205 180 219',
    alpha: 0.09,
    speed: 0.00014,
    drift: 80,
    depth: 65,
  },
  {
    x: 28,
    y: 82,
    size: 30,
    color: '221 184 255',
    alpha: 0.11,
    speed: 0.00027,
    drift: 50,
    depth: 40,
  },
]

const center = 'translate(-50%, -50%)'

function Pond() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const pond = ref.current
    const hero = pond?.parentElement
    if (!pond || !hero) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const els = Array.from(pond.querySelectorAll<HTMLElement>('[data-blob]'))
    const pointer = { x: 0, y: 0 } // -1 to 1 across the hero
    const lean = { x: 0, y: 0 } // eases toward pointer
    let frame = 0

    const tick = (t: number) => {
      lean.x += (pointer.x - lean.x) * 0.03
      lean.y += (pointer.y - lean.y) * 0.03
      els.forEach((el, i) => {
        const b = blobs[i]
        const dx = Math.sin(t * b.speed + i * 2) * b.drift + lean.x * b.depth
        const dy = Math.cos(t * b.speed * 0.8 + i) * b.drift + lean.y * b.depth
        el.style.transform = `${center} translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`
      })
      frame = requestAnimationFrame(tick)
    }

    // Only animate while the hero can actually be seen.
    const update = () => {
      const next = hero.nextElementSibling
      const covered = next ? next.getBoundingClientRect().top <= 0 : false
      const run = !covered && !document.hidden
      if (run && !frame) frame = requestAnimationFrame(tick)
      if (!run && frame) {
        cancelAnimationFrame(frame)
        frame = 0
      }
    }

    const onMove = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect()
      pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1
      pointer.y = ((e.clientY - r.top) / r.height) * 2 - 1
    }

    update()
    hero.addEventListener('pointermove', onMove)
    window.addEventListener('scroll', update, { passive: true })
    document.addEventListener('visibilitychange', update)
    return () => {
      cancelAnimationFrame(frame)
      hero.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', update)
      document.removeEventListener('visibilitychange', update)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {blobs.map((b, i) => (
        <div
          key={i}
          data-blob
          className="absolute rounded-full will-change-transform"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: `${b.size}vmax`,
            height: `${b.size}vmax`,
            transform: center,
            background: `radial-gradient(circle, rgb(${b.color} / ${b.alpha}), transparent 70%)`,
          }}
        />
      ))}
    </div>
  )
}

export default Pond
