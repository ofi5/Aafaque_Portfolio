import React from 'react'
import "./style.css"

import Section from "../shared/section"
import ContactInfo from './contact-info'
import Form from './form'
const Contact = () => {
  return (
    <div className="box1">
    <Section
        id="contact"
        title="Any Questions? Feel free to contact"

        
        
        >
        <div className="contact-content-wrapper">
        <ContactInfo/>
        <Form/>
        </div>
    </Section>
    </div>
  )
}

export default Contact