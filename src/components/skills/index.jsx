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
                    
                    <h4>My current focus areas include:</h4>
                    
                        <ul>
                            <li>🌐 Full-Stack Web & Mobile Development (Angular, React, Flutter, Node.js, NestJS, Flask, Express)</li>
                            <li>☁️ Cloud & DevOps (AWS, CI/CD, Docker, Terraform)</li>
                            <li>🤖 Machine Learning & GenAI (LangChain, LLMs, RAG, Prompt Engineering)</li>
                            <li>📊 Data Engineering & Analytics (MongoDB, PostgreSQL, Big Data, Streamlit Dashboards)</li>
                        </ul>
                    
                    <h4>I’m always eager to take on new challenges, open-source contributions, and collaborative projects where I can grow as a developer and deliver real-world impact.</h4>
                  
                <div className='container'>{/* <CallToAction text="resume" icon = {<AiOutlineCloudDownload/>}/> */}
                <button className='text'><a href={require("../../images/Resume_AafaqueRasheed.pdf")} download="Aafaque's Resume intern candidate">Resume</a></button>
                </div>
             </div>
        </div>   

    </Section>
    )
}

export default Skills;