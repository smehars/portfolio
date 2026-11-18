/* main website code */
import About from './components/About'
import Experience from './components/Experience'
import Panel from './components/Panel'
import Pond from './components/Pond'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'
import useCardGlow from './useCardGlow'

function App() {
  useCardGlow()

  return (
    <main className="font-sans text-ink">
      <Panel z={10} className="bg-canvas">
        <Pond />
        <About />
      </Panel>

      <Panel z={20} className="bg-canvas-2">
        <Projects />
      </Panel>

      <Panel z={30} className="bg-canvas-3">
        <Experience />
      </Panel>
      <ScrollToTop />
    </main>
  )
}

export default App
