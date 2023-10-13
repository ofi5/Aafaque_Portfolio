import React from 'react'
import {jsPDF} from "jspdf";

import Section from "../shared/section";
import {AiOutlineCloudDownload} from "react-icons/ai"

import TechIcons from "../../images/tech-icons.png"
import "./style.css"
import CallToAction from '../shared/CallToAction';
import chapter6 from '../../images/stars.jpg'


// const doc = new jsPDF();

// const downloadresume = () => {
    
// }

// doc.text(chapter6);
// doc.save("a4.pdf");

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
                <h1>Skills</h1>
                     <p>
                        I have my learnings in coding languages like JavaScript, python HTML, CSS and FrameWorks React. View my resume for my entire skillset.
                    </p>
                  
                <div className='container'>{/* <CallToAction text="resume" icon = {<AiOutlineCloudDownload/>}/> */}
                <button className='text'><a href={require("../../images/Resume_AafaqueRasheed.pdf")} download="Aafaque's Resume intern candidate">Resume</a></button>
                </div>
             </div>
        </div>   

    </Section>
    )
}

export default Skills;