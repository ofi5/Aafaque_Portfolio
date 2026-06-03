import React from 'react'
import { FaPhoneAlt, FaGithub, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import './style.css'

const contactItems = [
    {
        icon: <FaMapMarkerAlt />,
        label: "Location",
        value: "Seattle, WA — Remote / Open to Relocation",
        href: null,
    },
    {
        icon: <MdEmail />,
        label: "Email",
        value: "aafaquerasheed@gmail.com",
        href: "mailto:aafaquerasheed@gmail.com",
    },
    {
        icon: <FaPhoneAlt />,
        label: "Phone",
        value: "+1 (425) 652-0071",
        href: "tel:+14256520071",
    },
    {
        icon: <FaLinkedinIn />,
        label: "LinkedIn",
        value: "linkedin.com/in/aafaque-rasheed",
        href: "https://www.linkedin.com/in/aafaque-rasheed/",
    },
    {
        icon: <FaGithub />,
        label: "GitHub",
        value: "github.com/ofi5",
        href: "https://github.com/ofi5",
    },
]

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-subtitle">
                Open to full-time roles, freelance projects, and collaborations. I'll get back to you within a day.
            </p>
            <div className="contact-items">
                {contactItems.map((item) => (
                    <div key={item.label} className="contact-item">
                        <span className="contact-icon">{item.icon}</span>
                        <div className="contact-item-text">
                            <span className="contact-item-label">{item.label}</span>
                            {item.href ? (
                                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-item-value link">
                                    {item.value}
                                </a>
                            ) : (
                                <span className="contact-item-value">{item.value}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContactInfo
