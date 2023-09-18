import React from 'react'

import Section from "../shared/section";
import {AiOutlineCloudDownload} from "react-icons/ai"

import TechIcons from "../../images/tech-icons.png"
import "./style.css"
import CallToAction from '../shared/CallToAction';

const Skills = () => {
  return (
    <Section 
        background="dark"
        id="skills"
    >
        <div className="skills-content-wrapper">
            <div className="left-col">
                <img id="jsImage" src={TechIcons} alt="JS,React" />
            </div>
        
            <div className="right-col">
                <h2>Skills</h2>
                     <p>
                        Lorem ipsum
                    </p>
            <CallToAction text="resume" icon = {<AiOutlineCloudDownload/>}/>
             </div>
        </div>   

    </Section>
    )
}

export default Skills;