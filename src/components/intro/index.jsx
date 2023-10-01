import React from 'react'
import IntroContent from "./intro-content";
import cloud from "../../images/cloud.png"
import cloudsoft from "../../images/cloud-soft.png"
import stars from "../../images/stars.jpg"

import "./style.css"
import Navigation from "./navigation-bar"


const Intro = () => {
  return (
    
    <div className="Intro-section">

      <div className="vector-bg" id="parallex">

      </div>
      <img src={cloud} className='cloud'/>
      <img src={cloudsoft} className='cloud-soft'/>
      <div className="content">
        <Navigation/>
        <IntroContent/>
      </div>
    </div>
  )
}

export default Intro