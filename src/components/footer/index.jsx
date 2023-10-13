import React from 'react'

import {
    FaTwitter,
    FaGithub,
    FaLinkedinIn,
    FaStackOverflow,
    FaInstagram,
} from "react-icons/fa";

import Section from "../shared/section";
import Logo from "../../images/logo.png";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";


import "./style.css"


const Footer = () => {
  return (
    <Section
            background="dark"
            className="footer"

        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    {/* <img
                        src={Logo}
                        alt="JS Dev Hindi"
                    /> */}
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("blogs")}
                    >
                        Blog & Articles
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                    
                    
                    <SocialIcon
                        color="#0D2636"
                        icon={<FaGithub />}
                        link="https://github.com/ofi5"
                    />
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedinIn />}
                        link="https://www.linkedin.com/in/aafaque-rasheed/"
                    />
                    <SocialIcon
                        color="#f2740d"
                        icon={<FaTwitter />}
                        link="https://twitter.com/AafaqueRasheed"
                    />
                    {/* <SocialIcon
                        color="#E84C88"
                        icon={<FaInstagram />}
                    /> */}
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Aafaque Rasheed, UTD, Information Technology and Management 
                    </div>
                </div>
            </div>
        
    </Section>
  )
}

export default Footer