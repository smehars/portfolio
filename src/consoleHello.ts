// A hello for anyone who opens the browser console.
const title = 'font: 700 20px "DM Sans", sans-serif; color: #CDB4DB'
const body = 'font: 13px "DM Sans", sans-serif; color: #E7E3ED; line-height: 1.6'
const link = 'font: 13px "DM Sans", sans-serif; color: #DDB8FF'

console.log(
  [
    "%chey what's up",
    '%cgood job finding this...',
    'this site is React, TypeScript, Vite and Tailwind, with no other runtime dependencies.',
    'pushes to main in my project repo are built and deployed to GitHub Pages by GitHub Actions.',
    '',
    '%csource: https://github.com/smehars/portfolio',
  ].join('\n'),
  title,
  body,
  link,
)
