import React,{useState} from 'react'

import Section from '../shared/section'

import "./style.css"

import Filters from './filters'

import Showcase from './showcase'

const projectsData = [
    {
        id: 1,
        name: "Password Generator",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/pg.png"),
        },
        lnk:"https://ofi5.github.io/password_generator.github.io/"
    },
    {
        id: 2,
        name: "Anna & Daniel",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-2.jpg"),
        },
    },
    {
        id: 3,
        name: "Web Design Landing Page",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-8.jpg"),
        },
    },
    {
        id: 4,
        name: "Business Analytics Web App",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-1.jpg"),
        },
    },
    {
        id: 5,
        name: "Limitless",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-6.jpg"),
        },
    },
    {
        id: 6,
        name: "Dashboard",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-4.jpg"),
        },
    },
    {
        id: 7,
        name: "Digital Creative Agency",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-3.jpg"),
        },
    },
    {
        id: 8,
        name: "Virtual Reality Experience",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-5.jpg"),
        },
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
        background="light"
        >
            <div className="portfolio-content-wrapper"></div>
        <Filters filterProjects={(tag)=>filterProjects(tag)}/>
        <Showcase 
            data = {projects}
            transition = {transition} 
        />
    </Section>
  )
}

export default Portfolio