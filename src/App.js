import React from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import './App.css'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="mx-auto max-w-[100vw]">
        <About />
        <Projects />
        <Skills />
        <Gallery />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
