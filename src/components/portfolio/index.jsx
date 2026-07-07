import React,{useState} from 'react'

import Section from '../shared/section'

import "./style.css"

import Filters from './filters'

import Showcase from './showcase'

const projectsData = [
    {
        id: 9,
        name: "FIFA Kickoff Insight",
        description: "RAG chatbot that answers questions about the FIFA World Cup using Google Generative AI embeddings and a Groq LLM.",
        tech: ["Streamlit", "LangChain", "Groq", "Google Generative AI"],
        tags: ["ai-ml", "full-stack"],
        media: { thumbnail: null },
        lnk: "https://github.com/ofi5/fifa-kickoff-insight-rag-chatbot",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 10,
        name: "Nutrition ChatBot",
        description: "RAG chatbot that answers nutrition and diet questions from a knowledge base, powered by Google Generative AI embeddings and a Groq LLM.",
        tech: ["Streamlit", "LangChain", "Groq", "Google Generative AI"],
        tags: ["ai-ml", "full-stack"],
        media: { thumbnail: null },
        lnk: "https://github.com/ofi5/NutritionChatBot",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
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