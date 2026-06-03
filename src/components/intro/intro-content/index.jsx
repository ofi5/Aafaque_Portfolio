import React from 'react'
import aafaquerasheed from "../../../images/aafaquerasheed.jpeg"
import { scrollToSection } from '../../utils/helpers'
import "./style.css"

const techStack = ['React', 'Angular', 'Flutter', 'Node.js', 'Python', 'AWS', 'LangChain', 'Docker']

const IntroContent = () => {
  return (
    <div className="intro-content">
        <div className="layout">

            <div className="left-col">
                <div className="status-badge">
                    <span className="pulse-dot" />
                    Open to Work
                </div>

                <h1 className="title">
                    <span className="greeting">Hi, I'm</span>
                    <span className="big-text">Aafaque Rasheed</span>
                    <span className="sub-text">Full-Stack Developer &amp; Gen AI Engineer</span>
                </h1>

                <p className="myintro">
                    Senior Full-Stack Developer with 2+ years shipping production web and mobile apps.
                    I build responsive UIs in React, Angular &amp; Flutter, backed by Flask/MongoDB APIs
                    and deployed on AWS with CI/CD. Currently applying LLMs and LangChain to build
                    intelligent, production-ready systems.
                </p>

                <div className="hero-ctas">
                    <button className="cta-primary" onClick={() => scrollToSection('portfolio')}>
                        View Projects
                    </button>
                    <button className="cta-secondary">
                        <a href={require('../../../images/Resume_AafaqueRasheed.pdf')} download="Aafaque_Rasheed_Resume.pdf">
                            Download Resume
                        </a>
                    </button>
                </div>
            </div>

            <div className="right-col">
                <div className="profile-ring">
                    <div className="profile-image-container">
                        <img src={aafaquerasheed} alt="Aafaque Rasheed" className="profile-image" />
                    </div>
                </div>

                <div className="tech-chips">
                    {techStack.map(t => (
                        <span key={t} className="tech-chip">{t}</span>
                    ))}
                </div>

                <div className="cert-badge">
                    <span className="cert-icon">☁️</span>
                    <span>AWS Certified Cloud Practitioner</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default IntroContent
