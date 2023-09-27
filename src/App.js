import React from 'react'

import Intro from "./components/intro"

import Skills from './components/skills'

import Portfolio from './components/portfolio'



import "./app.css"
import Blogs from './components/blogs'




const App = () => {
  return (
    <div>
      <Intro/>
      <Skills/>
      <Portfolio/>
      <Blogs/>
      </div>
  )
}

export default App 