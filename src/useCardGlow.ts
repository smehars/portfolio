import { useEffect } from 'react'

// One listener for the whole page: tells the card under the mouse where the
// cursor is, so its .glow light (see styles/index.css) can follow it.
function useCardGlow() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      const card = (e.target as Element).closest<HTMLElement>('.glow')
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--x', `${e.clientX - r.left}px`)
      card.style.setProperty('--y', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])
}

export default useCardGlow
