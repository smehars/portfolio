/* main website code */
import About from './components/About'
import Experience from './components/Experience'
import Panel from './components/Panel'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <main className="font-sans text-ink">
      <Panel z={10} className="bg-canvas">
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
