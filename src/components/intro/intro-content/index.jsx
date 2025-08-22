import React from 'react'
import aafaquerasheed from "../../../images/aafaquerasheed.jpeg"
import hand from "../../../images/hand.png";
import utdsmall from "../../../images/utdsmall.png"

import "./style.css"
import CallToAction from '../../shared/CallToAction';
import { BsAwardFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { scrollToSection } from '../../utils/helpers';
import utdLogo from '../../../images/utdLogo.webp'
import fullstacklogo from '../../../images/fullstacklogo.webp'
import mahe from '../../../images/portfolio/mahe.png'
import genai from '../../../images/genai.png'

const IntroContent = () => {
  return (
    <div className="intro-content">
        <div className="layout">
            <div className="left-col">
              <h1 className='title'>
                  <span className="big-text">
                  Welcome to my Portfolio
                  </span>
                </h1>    
                <p className='myintro'>
                I'm Aafaque Rasheed, a full-stack developer with expertise in React.js, Node.js, and modern cloud technologies. I'm passionate about building scalable web applications and currently expanding my skills into Generative AI. I've developed and deployed multiple projects achieving 40% performance improvements and delivering solutions ahead of schedule. This portfolio showcases my learning journey, technical projects, and development capabilities.
                </p>
            </div>
            <div className="right-col">
              {/* Circular Profile Image */}
              <div className="profile-image-container">
                <img src={aafaquerasheed} alt="Aafaque Rasheed" className="profile-image" />
              </div>
              
              {/* Education Highlights - Moved Lower */}
              <div className="education-highlights">
                <div className='highlights vertical'>
                  <div className="icon">
                    <img src={fullstacklogo} alt="fullstacklogo" />
                  </div>
                  <div className="text"> Full Stack Developer</div>
                </div>
                <div className="highlights vertical">
                  <div className="icon">
                  <img src={genai} alt="genai" />
                  </div>
                  <div className="text">
                    <span>Gen AI Engineer</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default IntroContent