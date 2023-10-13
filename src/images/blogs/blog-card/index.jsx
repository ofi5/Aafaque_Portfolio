import React from "react";

import Arrow from "../../../components/shared/arrow";

import "./style.css";

const handleClick = () => {
    
}


const BlogCard = ({ user, date, image, title, description }) => {
    return (
        <div className="blog-card">
            <div className="image-section">
                <img
                    src={image}
                    alt={title}
                />
            </div>
            <div className="content-section">
                <div className="info-bar">
                    <div className="user-name">By {user}</div>
                    <div className="posted-date">{date}</div>
                </div>
                <h4 className="head4">{title}</h4>
                <p className="para2">{description}</p>
                <button>Read More</button>
        
            </div>
            
        </div>
        
    );
};

export default BlogCard;