import React, { useState, useEffect, useRef } from 'react'
import logo from '../../../images/logo.png'
import CallToAction from '../../shared/CallToAction'
import { scrollToSection } from '../../utils/helpers'
import { FaBars, FaTimes, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa'

import "./style.css"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('skills')
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleResumeClick = () => {
    // Open resume in new tab
    window.open('/resume', '_blank')
  }

  const handleNavClick = (section) => {
    scrollToSection(section)
    setActiveSection(section)
    setIsMenuOpen(false) // Close menu when item is clicked
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    // Close menu on escape key
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navigationItems = [
    { id: 'skills', label: 'Skills', icon: <FaCode />, section: 'skills' },
    { id: 'portfolio', label: 'Portfolio', icon: <FaBriefcase />, section: 'portfolio' },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope />, section: 'contact' }
  ]

  return (
    <nav className="top-navigation-bar" role="navigation" aria-label="Main navigation">
      {/* Desktop Navigation */}
      <div className="desktop-nav">
        <div className="nav-brand">
          <p className='myName'>Aafaque</p>
        </div>
        
        <div className="navigation" role="menubar">
          {navigationItems.map((item) => (
            <span 
              key={item.id}
              className={`navigation-item ${activeSection === item.section ? 'active' : ''}`}
              onClick={() => handleNavClick(item.section)}
              role="menuitem"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleNavClick(item.section)
                }
              }}
            >
              {item.label}
            </span>
          ))}
          <div className="nav-cta">
            <CallToAction text="resume" action={() => handleResumeClick()}/>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-nav" ref={menuRef}>
        <div className="nav-brand">
          <p className='myName'>Aafaque</p>
        </div>
        
        <button 
          className="burger-menu" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <FaTimes className="burger-icon" /> : <FaBars className="burger-icon" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          id="mobile-menu"
          className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-hidden={!isMenuOpen}
        >
          <div className="mobile-menu-content">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                className={`mobile-nav-item ${activeSection === item.section ? 'active' : ''}`}
                onClick={() => handleNavClick(item.section)}
                aria-label={`Navigate to ${item.label} section`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation