import React from 'react'

import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";
import Section from '../shared/section';
import "./style.css"

const Blogs = () => {
  return (
    <Section
            id = "blogs"
            title = "blogs & Articles"
            background = "dark"
            >
                <div className="blogs-content-wrapper"></div>
    </Section>

  )
}

export default Blogs