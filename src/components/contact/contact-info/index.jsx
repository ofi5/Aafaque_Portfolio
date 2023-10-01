import React from 'react'

import {FaPhoneAlt} from "react-icons/fa"
import {MdEmail} from "react-icons/md"

import "./style.css"

const ContactInfo = () => {
  return (
    <div className="contact-info-box">
        <h4>
            I would be happy to answer any questions you may have about
            freelance writing or content marketing!
        </h4>
        <div className="contact-option">
            <FaPhoneAlt/>
            <span className="text">324245234234</span>
        </div>
        <div className="contact-option">
            <MdEmail/>
            <span className="text">aafaque@gmail.com</span>
        </div>
    </div>
  )
}

export default ContactInfo