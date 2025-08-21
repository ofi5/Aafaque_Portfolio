import React, { useState, useEffect } from 'react'
import { scrollToSection } from '../../utils/helpers'
import { FaBars, FaTimes } from 'react-icons/fa'
import "./style.css"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('skills')

  const handleResumeClick = () => {
    const link = document.createElement('a')
    link.href = require('../../../images/Resume_AafaqueRasheed.pdf')
    link.download = "Aafaque's Resume.pdf"
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleNavClick = (section) => {
    scrollToSection(section)
    setActiveSection(section)
    setIsMenuOpen(false)
  }

  // Close menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navigationItems = [
    { id: 'skills', label: 'Skills', section: 'skills' },
    { id: 'portfolio', label: 'Portfolio', section: 'portfolio' },
    { id: 'contact', label: 'Contact', section: 'contact' },
    { id: 'resume', label: 'Resume', action: handleResumeClick }
  ]

  return (
    <nav className="navbar">
      {/* Brand */}
      <div className="navbar-brand">
        <h1 className="brand-name">Aafaque</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-desktop">
        <div className="nav-links">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.section ? 'active' : ''}`}
              onClick={item.action ? item.action : () => handleNavClick(item.section)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            {navigationItems.map((item) => (
              <button
                key={item.id}
                className={`mobile-nav-link ${activeSection === item.section ? 'active' : ''}`}
                onClick={item.action ? item.action : () => handleNavClick(item.section)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation