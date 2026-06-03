import React,{useState} from 'react'

import Section from '../shared/section'

import "./style.css"

import Filters from './filters'

import Showcase from './showcase'

const projectsData = [
    {
        id: 9,
        name: "RAG Chatbot",
        description: "Retrieval-Augmented Generation chatbot with custom knowledge bases and vector embeddings.",
        tech: ["LangChain", "Python", "React", "FastAPI"],
        tags: ["ai-ml", "full-stack"],
        media: { thumbnail: null },
        lnk: null,
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 10,
        name: "ML Analytics Dashboard",
        description: "Real-time analytics dashboard with ML-powered insights and interactive visualizations.",
        tech: ["Streamlit", "Python", "PostgreSQL", "Pandas"],
        tags: ["ai-ml", "full-stack"],
        media: { thumbnail: null },
        lnk: null,
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        id: 11,
        name: "Microservices API",
        description: "Scalable REST API built with microservices architecture, containerized with Docker.",
        tech: ["NestJS", "Node.js", "Docker", "PostgreSQL"],
        tags: ["full-stack", "tools"],
        media: { thumbnail: null },
        lnk: null,
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
        id: 12,
        name: "Cloud Data Pipeline",
        description: "AWS-based event-driven data ingestion and processing pipeline with real-time monitoring.",
        tech: ["AWS", "Python", "MongoDB", "Terraform"],
        tags: ["full-stack", "ai-ml", "tools"],
        media: { thumbnail: null },
        lnk: null,
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
        id: 13,
        name: "LLM Prompt Studio",
        description: "Interactive playground for testing, comparing, and optimizing LLM prompts side by side.",
        tech: ["React", "Node.js", "OpenAI API", "LangChain"],
        tags: ["ai-ml", "frontend", "tools"],
        media: { thumbnail: null },
        lnk: null,
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
]


const Portfolio = () => {

    const [projects,setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(()=>{
            if(tag !=="all"){
                const filteredProjects = projectsData.filter((f)=>f.tags.includes(tag))
                setProjects(filteredProjects)
            }else{
                setProjects(projectsData)
            }
            setTransition("zoomin");
        },200)

        setTimeout(()=>{
            setTransition(false)
        },600);

    };

  return (
    <Section 
        id="portfolio"
        title='My Portfolio'
        background="dark"
        >
            <div className="portfolio-content-wrapper">
        <Filters filterProjects={(tag)=>filterProjects(tag)}/>
        <Showcase 
            data = {projects}
            transition = {transition} 
        />
        </div>
    </Section>
  )
}

export default Portfolio