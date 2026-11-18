import { useEffect, useState } from 'react'

// Cycles through random letters once when the page loads, then settles on the
// real text one letter at a time from left to right. Screen readers only get
// the real text, and visitors with "reduce motion" turned on see it straight away.

const letters = 'abcdefghijklmnopqrstuvwxyz'
const frameMs = 45 // how often the random letters change
const startMs = 200 // scrambling before the first letter settles
const perLetterMs = 110 // time between each letter settling

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function scramble(text: string, settled: number) {
  return text
    .split('')
    .map((char, i) =>
      i < settled || char === ' ' ? char : letters[Math.floor(Math.random() * letters.length)],
    )
    .join('')
}

function ScrambleText({ text }: { text: string }) {
  const [shown, setShown] = useState(() => (reduceMotion() ? text : scramble(text, 0)))

  useEffect(() => {
    if (reduceMotion()) return
    const start = performance.now()
    const timer = setInterval(() => {
      const elapsed = performance.now() - start
      const settled = Math.max(0, Math.floor((elapsed - startMs) / perLetterMs) + 1)
      if (settled >= text.length) {
        setShown(text)
        clearInterval(timer)
      } else {
        setShown(scramble(text, settled))
      }
    }, frameMs)
    return () => clearInterval(timer)
  }, [text])

  // The real text holds the width so the heading never shifts while the
  // random letters (which have different widths) play over it.
  return (
    <span className="relative inline-block">
      <span className="invisible">{text}</span>
      <span aria-hidden="true" className="absolute left-0 top-0 whitespace-nowrap">
        {shown}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  )
}

export default ScrambleText
