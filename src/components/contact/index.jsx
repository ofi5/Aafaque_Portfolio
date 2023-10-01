import React from 'react'
import "./style.css"

import Section from "../shared/section"
import ContactInfo from './contact-info'
import Form from './form'
const Contact = () => {
  return (
    <Section
        id="contact"
        title="Any Qusetions? Fell free to contact"
        background="light"
        >
        <div className="contact-content-wrapper">
        <ContactInfo/>
        <Form/>
        </div>
    </Section>
  )
}

export default Contact