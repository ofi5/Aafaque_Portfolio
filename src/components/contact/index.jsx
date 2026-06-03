import React from 'react'
import "./style.css"
import Section from "../shared/section"
import ContactInfo from './contact-info'
import Form from './form'

const Contact = () => {
    return (
        <Section id="contact" title="Contact" background="dark">
            <div className="contact-content-wrapper">
                <ContactInfo />
                <Form />
            </div>
        </Section>
    )
}

export default Contact
