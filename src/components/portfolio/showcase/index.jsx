import React from 'react'
import Arrow from '../../shared/arrow' 
import './style.css'

const Showcase = ({data,transition}) => {
  return (
    <div className='projects-showcase'>
        {data.map((project)=>(
            <div 
            key={project.name}
            className={`showcase-item ${
              transition === "zoomout"
              ? "zoomOut" 
              : transition === "zoomin"
              ? "zoomIn"
              : ""
              }`}
              >
                <div className="meta-content">
                     <h3>{project.name}</h3>
                     <div className="go-to-cta">
                        <span className="text">Project Details</span>
                        <a href={`${"https://ofi5.github.io/password_generator.github.io/"}`} target={"_blank"}><button style={{color:"red"}}><Arrow/></button></a>
                     </div>
                </div>
                <img className="showcaseImg"src={project.media.thumbnail}/>
            </div>

        ))}
    </div>
  )
}

export default Showcase