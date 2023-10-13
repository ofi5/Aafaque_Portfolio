import React from 'react'
import logo from '../../../images/logo.png'
import CallToAction from '../../shared/CallToAction'
import { scrollToSection } from '../../utils/helpers'

import "./style.css"

const Navigation = () => {
  return (
    <div className="top-navigation-bar">
        
            <p className='myName'>Aafaque Rasheed</p> 
        
        <div className="navigation">
            <span className="navigation-item" onClick={()=>scrollToSection("skills")}>Skills</span>
            <span className="navigation-item" onClick={()=>scrollToSection("portfolio")}>Portfolio</span>
            {/* <span className="navigation-item" onClick={()=>scrollToSection("blogs")}>Blogs</span> */}
            <CallToAction text = "contact me" action={()=>scrollToSection("contact")}/>

        </div>
    </div>
  )
}

export default Navigation