import { useState } from 'react'
import React from 'react'


import './style.css'


const filtersData = [
    { name: "All", id: "all" },
    { name: "Full-Stack", id: "full-stack" },
    { name: "AI / ML", id: "ai-ml" },
    { name: "Frontend", id: "frontend" },
    { name: "Tools", id: "tools" },
]

const Filters = ({filterProjects}) => {

    const [active, setActive] = useState("");

    const clickHandler = (id) => {
        setActive(id)
        filterProjects(id)
    }

  return (
    <ul className="filter-menu-items">
        {filtersData.map((item)=>{
            return (
                <li 
                key= {item.id}
                className={`filter-menu-item ${
                    active===item.id ? "active":""
                }`}
                onClick={() => clickHandler(item.id)}
                >{item.name}
                </li>
            )
        })}
        
    </ul>
  )
}

export default Filters
