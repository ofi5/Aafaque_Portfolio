import React from 'react'
import './style.css'

const Showcase = ({data, transition}) => {
  return (
    <div className='projects-showcase'>
        {data.map((project) => (
            <div
                key={project.name}
                className={`showcase-item ${!project.media?.thumbnail ? 'placeholder-card' : ''} ${
                    transition === "zoomout" ? "zoomOut"
                    : transition === "zoomin" ? "zoomIn"
                    : ""
                }`}
                style={!project.media?.thumbnail ? { background: project.gradient } : {}}
            >
                {project.media?.thumbnail ? (
                    <img className="showcaseImg" src={project.media.thumbnail} alt={project.name} />
                ) : (
                    <div className="placeholder-bg">
                        <span className="placeholder-label">{project.name}</span>
                    </div>
                )}
                <div className="meta-content">
                    <h3>{project.name}</h3>
                    {project.description && (
                        <p className="project-desc">{project.description}</p>
                    )}
                    {project.tech && (
                        <div className="tech-tags">
                            {project.tech.map(t => (
                                <span key={t} className="tech-tag">{t}</span>
                            ))}
                        </div>
                    )}
                    <div className="go-to-cta">
                        {project.lnk ? (
                            <button className="showcase-button">
                                <a href={project.lnk} target="_blank" rel="noreferrer">Visit</a>
                            </button>
                        ) : (
                            <span className="coming-soon-badge">Coming Soon</span>
                        )}
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Showcase
