import React from 'react'

import Arrow from "../arrow"

import "./style.css"


const CallToAction = ({ text }) => {
  return (
    <div className="call-to-action">
        <span className="text">{text}</span>
        <Arrow />
    </div>
  )
}

export default CallToAction