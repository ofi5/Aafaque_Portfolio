import React from 'react'
import logo from '../../../images/logo.png'
import CallToAction from '../../shared/CallToAction'

import "./style.css"

const Navigation = () => {
  return (
    <div className="top-navigation-bar">
        <div className="app-logo">
            <img src={logo} alt="js dev"/> 
        </div>
        <div className="navigation">
            <span className="navigation-item">Skills</span>
            <span className="navigation-item">Portfolio</span>
            <span className="navigation-item">Blogs</span>
            <CallToAction text = "contact me"/>

        </div>
    </div>
  )
}

export default Navigation