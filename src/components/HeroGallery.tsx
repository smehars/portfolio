import { useState } from 'react'

// Photos live in public/images/me/. Add or reorder them here.
const photos = [
  {
    src: '/images/me/hike.webp',
    alt: 'Mehar sitting on a log beside a trail marker in a forest.',
  },
  {
    src: '/images/me/ssss-booth.webp',
    alt: 'Mehar giving two thumbs up beside a Software Systems Student Society banner at a club booth.',
  },
  {
    src: '/images/me/sunset.webp',
    alt: 'Mehar standing on a waterfront plaza at sunset.',
  },
  {
    src: '/images/me/japan-2.webp',
    alt: 'Mehar sitting on a bench outside a wooden building in Japan.',
  },
  {
    src: '/images/me/concert.webp',
    alt: 'Mehar with arms crossed in an arena, with a lit stage in the background.',
  },
  {
    src: '/images/me/burger.webp',
    alt: 'Mehar outdoors at night, wearing headphones over a cap and holding a burger.',
  },
]

// Hidden until the photo is hovered or a button has keyboard focus. Always
// visible on touch screens, which have no hover.
const reveal =
  'opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100'

const arrow = `absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-lavender/30 bg-canvas/80 text-lavender hover:bg-canvas-3 ${reveal}`

function HeroGallery() {
  const [index, setIndex] = useState(0)
  const photo = photos[index]
  const step = (by: number) => setIndex((i) => (i + by + photos.length) % photos.length)

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Photos of Mehar"
      className="group relative mx-auto w-full max-w-sm md:w-[26rem] md:max-w-none lg:w-[30rem] xl:w-[36rem]"
    >
      <img
        key={photo.src}
        src={photo.src}
        srcSet={`${photo.src} 800w, ${photo.src.replace('.webp', '-1200.webp')} 1200w`}
        sizes="(min-width: 1280px) 576px, (min-width: 1024px) 480px, (min-width: 768px) 416px, 100vw"
        alt={photo.alt}
        width={800}
        height={1067}
        className="aspect-[3/4] w-full rounded-2xl border border-lavender/20 object-cover"
      />
      <button
        type="button"
        className={`${arrow} left-3`}
        aria-label="Previous photo"
        onClick={() => step(-1)}
      >
        <span aria-hidden="true">←</span>
      </button>
      <button
        type="button"
        className={`${arrow} right-3`}
        aria-label="Next photo"
        onClick={() => step(1)}
      >
        <span aria-hidden="true">→</span>
      </button>
      <p
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-canvas/80 px-3 py-1 text-sm text-ink ${reveal}`}
        aria-live="polite"
      >
        {index + 1} / {photos.length}
      </p>
    </div>
  )
}

export default HeroGallery
