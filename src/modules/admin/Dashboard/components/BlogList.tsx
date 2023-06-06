import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../../../../context/BlogContext';
import { Card } from 'primereact/card';
import { Blog } from '../../../../context/BlogContext';

function BlogList() {

    const blogContext = useContext(BlogContext);
    const navigate = useNavigate();

    const textToPrint = (text: string):string => {
        const words = text.split(' ');
        const extractedText = words.slice(0, 50).join(' ');
        return extractedText
    }

    const blogDetail = (blog: Blog) => {
        blogContext?.setSelectedBlog(blog);
        navigate("/blogdetail");
    } 

  return (
    <div>
        {blogContext?.blogs.map((blog, i) => {
            return (
                <div key={i}>
                    <Card onClick={()=>blogDetail(blog)} title={blog.title} subTitle={blog.author} header={<img src={blog.image} style={{height: "150px"}} />} className="blog-card md:w-25rem">
                    <p className="m-0">{textToPrint(blog.text)}...</p>
                    </Card>
                </div>
            )
        })}
    </div>
  )
}

export default BlogList;