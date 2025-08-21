import React from 'react'
import girl from "../../../images/girl.png"
import hand from "../../../images/hand.png";
import utdsmall from "../../../images/utdsmall.png"

import "./style.css"
import CallToAction from '../../shared/CallToAction';
import { BsAwardFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { scrollToSection } from '../../utils/helpers';
import utdLogo from '../../../images/utdLogo.webp'
import mahe from '../../../images/portfolio/mahe.png'

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
                My name is Aafaque Rasheed and I am currently pursuing Masters at University of Texas, Dallas in Information, Technology and Management. I am an aspiring fullstack developer and heres a showcase of my projects.
                </p>
                
                {/* <CallToAction text="Contact Me" action = {()=>scrollToSection("contact")}/> */}
            </div>
            
            <div className="right-col">
              {/* <img src={utdLogo}/> */}
             <div className='highlights vertical'>
              {/* <div className="highlights horizontal"> */}
                <div className="icon">
                  <img src={utdsmall} alt="utdLogo" />
                </div>
                <div className="text"> Masters in Information, Technology and Management</div>
              </div>
              <div className="highlights vertical">
                <div className="icon">
                <img src={mahe} alt="mahe" />
                </div>
                <div className="text">
                  <span>Bachelors of Technology in Civil Engineering</span>
                 
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default IntroContent