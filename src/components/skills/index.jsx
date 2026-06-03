import React from 'react'
import Section from "../shared/section";
import "./style.css"

const skillCategories = [
    {
        label: "Frontend",
        icon: "🌐",
        skills: ["React", "Angular", "Flutter", "TypeScript", "HTML/CSS"]
    },
    {
        label: "Backend",
        icon: "⚙️",
        skills: ["Node.js", "NestJS", "Flask", "Express", "REST APIs"]
    },
    {
        label: "Cloud & DevOps",
        icon: "☁️",
        skills: ["AWS", "Docker", "Terraform", "CI/CD", "Linux"]
    },
    {
        label: "AI / ML",
        icon: "🤖",
        skills: ["LangChain", "LLMs", "RAG", "Prompt Engineering", "Hugging Face"]
    },
    {
        label: "Data",
        icon: "📊",
        skills: ["PostgreSQL", "MongoDB", "Pandas", "Streamlit", "Big Data"]
    },
]

const Skills = () => {
  return (
    <Section background="dark" id="skills">
        <div className="skills-content-wrapper">
            <div className="skills-header">
                <h1>Skills</h1>
                <p className="skills-subtitle">
                    Building across the full stack — from pixel-perfect UIs to scalable cloud infrastructure and LLM-powered systems.
                </p>
            </div>

            <div className="skills-grid">
                {skillCategories.map((cat) => (
                    <div key={cat.label} className="skill-category">
                        <div className="category-header">
                            <span className="category-icon">{cat.icon}</span>
                            <span className="category-label">{cat.label}</span>
                        </div>
                        <div className="skill-pills">
                            {cat.skills.map(skill => (
                                <span key={skill} className="skill-pill">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="skills-footer">
                <button>
                    <a href={require("../../images/Resume_AafaqueRasheed.pdf")} download="Aafaque_Rasheed_Resume.pdf">
                        Download Resume
                    </a>
                </button>
            </div>
        </div>
    </Section>
    )
}

export default Skills;
