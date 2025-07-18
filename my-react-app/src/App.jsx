import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'


const App = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar is fixed, so give padding-top to body */}
      <Navbar />
      <main className="pt-20 scroll-smooth">
        <div className='bg-gradient-to-br from-indigo-900/20 to-purple-900/80'  >
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        
          <section id="about" className="min-h-screen ">
          <About />
        </section>
        <section id="skills" className="min-h-screen ">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen ">
          <Projects />
        </section>
        <section id="footer" className="bg-black">
          <Footer />
        </section>
        </div>
      </main>
    </div>
  )
}

export default App
