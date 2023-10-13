import React from 'react'

import {FaPhoneAlt} from "react-icons/fa"
import {MdEmail} from "react-icons/md"

import "./style.css"

const ContactInfo = () => {
  return (
    <div className="contact-info-box">
        <h4>
            I would be happy to answer any questions you may have about
            my profile!
        </h4>
        <br/>
        <div className="contact-option">
            <FaPhoneAlt/>
            <span className="text">4256520071</span>
        </div>
        <br/>
        <div className="contact-option">
        <MdEmail/>
            <span className="text">axr230013@utdallas.edu<br/><br/><MdEmail/>aafaquerasheed@gmail.com</span>
            
        </div>
    </div>
  )
}

export default ContactInfo