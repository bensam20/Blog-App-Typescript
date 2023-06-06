import React, {useContext} from 'react';
import { BlogContext } from '../../../context/BlogContext';
import Header from '../Blogs/components/Header';
import { Card } from 'primereact/card';

function BlogDetail() {
    const blogContext = useContext(BlogContext);
    const blogToDisplay = blogContext?.selectedBlog;

  return (
    <div>
        <Header />
        <Card title={blogToDisplay?.title} subTitle={blogToDisplay?.author} header={<img src={blogToDisplay?.image} style={{height: "auto"}} />} className="blog-card md:w-25rem" style={{marginLeft: "3rem", marginTop: "1rem"}}>
            <p className="m-0">{blogToDisplay?.text}</p>  
        </Card>
    </div>
  )
}

export default BlogDetail