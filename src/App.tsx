import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
