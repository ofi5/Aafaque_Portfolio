import React,{useState} from 'react'

import Section from '../shared/section'

import "./style.css"

import Filters from './filters'

import Showcase from './showcase'

import fifaChatbotImg from '../../images/fifa-chatbot.png'
import nutritionChatbotImg from '../../images/nutrition-chatbot.png'
import soulsticeImg from '../../images/soulstice.jpg'

const projectsData = [
    {
        id: 9,
        name: "FIFA Kickoff Insight",
        description: "RAG chatbot that answers questions about the FIFA World Cup using Google Generative AI embeddings and a Groq LLM.",
        tech: ["Streamlit", "LangChain", "Groq", "Google Generative AI"],
        tags: ["ai-ml", "full-stack"],
        media: { thumbnail: fifaChatbotImg },
        live: "https://fifachatbot.streamlit.app/",
        lnk: "https://github.com/ofi5/fifa-kickoff-insight-rag-chatbot",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 10,
        name: "Nutrition ChatBot",
        description: "RAG chatbot that answers nutrition and diet questions from a knowledge base, powered by Google Generative AI embeddings and a Groq LLM.",
        tech: ["Streamlit", "LangChain", "Groq", "Google Generative AI"],
        tags: ["ai-ml", "full-stack"],
        media: { thumbnail: nutritionChatbotImg },
        live: "https://nutritionchatbot.streamlit.app/",
        lnk: "https://github.com/ofi5/NutritionChatBot",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        id: 11,
        name: "Soulstice Dating",
        description: "A modern dating web app designed to help people make meaningful connections.",
        tech: ["React", "Full-Stack"],
        tags: ["full-stack"],
        media: { thumbnail: soulsticeImg },
        live: "https://soulsticedating.com/",
        gradient: "linear-gradient(135deg, #ff6a88 0%, #ff99ac 100%)"
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