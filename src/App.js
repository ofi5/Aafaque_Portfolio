import React from 'react'

import Intro from "./components/intro"

import Skills from './components/skills'

import Portfolio from './components/portfolio'

import Contact from './components/contact'

import Footer from './components/footer'



import "./app.css"
import Blogs from './components/blogs'




const App = () => {
  return (
    <div>
      <Intro/>
      <Skills/> 
       <Portfolio/>
      
      <Contact/>
      <Footer/>  
      </div>
  )
}

export default App 