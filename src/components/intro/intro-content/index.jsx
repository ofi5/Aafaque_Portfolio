import React from 'react'
import girl from "../../../images/girl.png"
import hand from "../../../images/hand.png";

import "./style.css"
import CallToAction from '../../shared/CallToAction';
import { BsAwardFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

const IntroContent = () => {
  return (
    
    <div className="intro-content">
        <div className="layout">
            
            <div className="left-col">
              <h1 className='title'>
                  <span className="small-text">
                    <span className="text">Hello</span>
                    <span className="icon">
                      <img src = {hand}/>
                    </span>
                    <span className="text">yo</span>
                  </span>
                  <span className="big-text">
                    Namaste
                  </span>
                </h1>    
                <p>
                  LOREM IPSUM
                </p>
                <CallToAction text="Contact Me"/>
            </div>
            
            <div className="right-col">
              <img src={girl}/>

              <div className="highlights horizontal">
                <div className="icon">
                  <BsAwardFill/>
                </div>
                <div className="text">Best DEsign Award</div>
              </div>
              <div className="highlights vertical">
                <div className="icon">
                  <FaUser/>
                </div>
                <div className="text">
                  <span>4k+</span>

                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default IntroContent