import React from 'react'
import './index.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import BackUp from './components/BackUp'

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow overflow-y-auto">
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <BackUp />
        </div>
    </div>
    </>
  )
}

export default App
