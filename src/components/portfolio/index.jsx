import React,{useState} from 'react'

import Section from '../shared/section'

import "./style.css"

import Filters from './filters'

import Showcase from './showcase'

const projectsData = [
    {
        id: 2,
        name: "Password Generator",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/pg.png"),
        },
        lnk:"https://ofi5.github.io/password_generator.github.io/"
    },
    {
        id: 1,
        name: "Generic Pizza Website",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/pizza.png"),
        },
        lnk:"https://ofi5.github.io/Pizza_Delivery_website.github.io/"
    },
    {
        id: 3,
        name: "Fun with Triangles",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/triangle.png"),
        },
        lnk:"https://inspiring-cocada-d7b302.netlify.app/"
    },
    {
        id: 4,
        name: "Unit Converter ",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/Converter.png"),
        },
        lnk:"https://ofi5.github.io/metric_unit_converter.github.io/"
    },
    {
        id: 5,
        name: "Song Recommender",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/song.png"),
        },
        lnk:"https://0q8by5.csb.app/"
    },
    {
        id: 6,
        name: "Cash Register",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/cash.png"),
        },
        lnk:"https://6328c915a42023113f60afbf--delightful-semifreddo-69ba95.netlify.app/"
    },
    {
        id: 7,
        name: "Stock Estimator",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/stock.png"),
        },
        lnk:"https://6327babc5ddea727d5b61643--snazzy-unicorn-66dc54.netlify.app/"
    },
    {
        id: 8,
        name: "Football Quiz",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/quiz.png"),
        },
        lnk:"https://replit.com/@ofi5/My-football-quiz?embed=1&ouput=1#index.js"
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