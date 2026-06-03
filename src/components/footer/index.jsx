import React from 'react'
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Section from '../shared/section'
import { scrollToSection } from '../utils/helpers'
import './style.css'

const navLinks = [
    { label: 'Experience', section: 'experience' },
    { label: 'Skills', section: 'skills' },
    { label: 'Portfolio', section: 'portfolio' },
    { label: 'Contact', section: 'contact' },
]

const socialLinks = [
    {
        icon: <FaLinkedinIn />,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/aafaque-rasheed/',
        color: '#0A66C2',
    },
    {
        icon: <FaGithub />,
        label: 'GitHub',
        href: 'https://github.com/ofi5',
        color: '#333',
    },
    {
        icon: <FaTwitter />,
        label: 'Twitter',
        href: 'https://twitter.com/AafaqueRasheed',
        color: '#1DA1F2',
    },
    {
        icon: <MdEmail />,
        label: 'Email',
        href: 'mailto:aafaquerasheed@gmail.com',
        color: '#EA4335',
    },
]

const Footer = () => {
    return (
        <Section background="dark" className="footer">
            <div className="footer-content-wrapper">

                <div className="footer-grid">
                    {/* Brand col */}
                    <div className="footer-brand">
                        <h2 className="footer-name">Aafaque Rasheed</h2>
                        <p className="footer-tagline">Full-Stack Developer &amp; Gen AI Engineer</p>
                        <p className="footer-bio">
                            Building scalable web apps and intelligent systems. Open to full-time roles and collaborations.
                        </p>
                        <span className="footer-location">📍 Seattle, WA — Remote / Open to Relocation</span>
                    </div>

                    {/* Nav col */}
                    <div className="footer-nav">
                        <h4 className="footer-col-title">Quick Links</h4>
                        <ul>
                            {navLinks.map((item) => (
                                <li key={item.section} onClick={() => scrollToSection(item.section)}>
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social col */}
                    <div className="footer-social-col">
                        <h4 className="footer-col-title">Connect</h4>
                        <div className="footer-social-links">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target={s.href.startsWith('http') ? '_blank' : undefined}
                                    rel="noreferrer"
                                    className="footer-social-item"
                                >
                                    <span className="footer-social-icon" style={{ background: s.color }}>
                                        {s.icon}
                                    </span>
                                    <span className="footer-social-label">{s.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} Aafaque Rasheed · All rights reserved</span>
                    <span className="footer-cert">AWS Certified Cloud Practitioner</span>
                </div>

            </div>
        </Section>
    )
}

export default Footer
