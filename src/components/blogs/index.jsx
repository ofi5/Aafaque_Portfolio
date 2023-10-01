import React from 'react'

import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";
import Section from '../shared/section';
import BlogCard from '../../images/blogs/blog-card';
import "./style.css"

const Blogs = () => {
  return (
    <Section
            id = "blogs"
            title = "blogs & Articles"
            background = "dark"
            >
                <div className="blogs-content-wrapper">
                  <BlogCard
                    user="aafi"
                    date="12 march"
                    image={Blog1}
                    title="hello"
                    description="the qwfdsjkdfsklfjdfkls"/>
                  <BlogCard
                    user="aafi"
                    date="12 march"
                    image={Blog2}
                    title="hello"
                    description="the qwfdsjkdfsklfjdfkls"/>
                  <BlogCard
                    user="aafi"
                    date="12 march"
                    image={Blog3}
                    title="hello"
                    description="the qwfdsjkdfsklfjdfkls"/>  
                </div>
    </Section>

  )
}

export default Blogs