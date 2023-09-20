import { useState } from 'react'
import React from 'react'


import './style.css'


const filtersData = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Products",
        id: "product",
    },
    {
        name: "Web Pages",
        id: "web-page",
    },
    {
        name: "Web Apps",
        id: "web-app",
    },
    {
        name: "Mobile Apps",
        id: "mobile-app",
    },
]

const Filters = () => {

    const [active, setActive] = useState("");

    const clickHandler = (id) => {
        setActive(id)
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
