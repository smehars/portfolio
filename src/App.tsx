/* main website code */
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="font-sans text-ink">
      <section className="sticky top-0 z-10 flex min-h-screen items-center justify-center bg-canvas">
        <h1 className="text-4xl font-bold">
          hello, i'm <span className="text-lavender">mehar</span>
        </h1>
      </section>

      <section className="sticky top-0 z-20 flex min-h-screen items-center justify-center bg-canvas-2">
        <h2 className="text-3xl font-bold">about</h2>
      </section>

      <section className="sticky top-0 z-30 flex min-h-screen items-center justify-center bg-canvas-3">
        <h2 className="text-3xl font-bold">projects</h2>
      </section>

      <section className="sticky top-0 z-40 flex min-h-screen items-center justify-center bg-canvas-4">
        <h2 className="text-3xl font-bold">contact</h2>
      </section>
      <ScrollToTop />
    </div>
  )
}

export default App
