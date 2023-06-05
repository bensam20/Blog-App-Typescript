import React, {useContext} from 'react'
import { BlogContext } from '../../../../context/BlogContext'
import { Card } from 'primereact/card';

function BlogList() {

    const blogContext = useContext(BlogContext);

    const textToPrint = (text: string):string => {
        const words = text.split(' ');
        const extractedText = words.slice(0, 50).join(' ');
        return extractedText
    }

  return (
    <div>
        {blogContext?.blogs.map((blog, i) => {
            return (
                <div key={i}>
                    <Card title={blog.title} subTitle={blog.author} header={<img src={blog.image} style={{height: "150px"}} />} className="md:w-25rem" style={{width: "50rem", height: "25rem", marginBottom: "20px"}}>
                    <p className="m-0">{textToPrint(blog.text)}...</p>
                    </Card>
                </div>
            )
        })}
    </div>
  )
}

export default BlogList;