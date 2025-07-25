import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

import "./style.css"

const CallToAction = ({ text, action, icon, className = '' }) => {
  const handleClick = (e) => {
    e.preventDefault()
    if (action) {
      action()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (action) {
        action()
      }
    }
  }

  return (
    <button 
      className={`call-to-action ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={text}
      tabIndex={0}
    >
      <span className="text">{text}</span>
      {icon ? (
        <div className="icon">{icon}</div>
      ) : (
        <FaArrowRight className="arrow-icon" />
      )}
    </button>
  )
}

export default CallToAction