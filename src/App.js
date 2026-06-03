import React from 'react'

import Intro from "./components/intro"
import Experience from "./components/experience"
import Skills from './components/skills'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import Footer from './components/footer'
import "./app.css"

const App = () => {
  return (
    <div>
      <Intro/>
      <Experience/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App 