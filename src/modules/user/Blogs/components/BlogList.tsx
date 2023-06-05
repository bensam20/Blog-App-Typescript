import React, {useContext} from 'react'
import { BlogContext } from '../../../../context/BlogContext'
import { Card } from 'primereact/card';

function BlogList() {

    const blogContext = useContext(BlogContext);
    const blogs = blogContext?.blogs
    
    // const testData = [{
    //     author: 'Alice',
    //     title: "Just a sample test blog",
    //     text: "Nullam sollicitudin justo sed dui suscipit cursus. Duis quam nisi, malesuada sed aliquet at, euismod vitae libero. Nullam mi elit, blandit consequat iaculis et, dictum malesuada arcu. Morbi viverra lobortis odio eu hendrerit. Quisque dictum turpis id tellus sagittis, a feugiat felis faucibus. Sed luctus porttitor turpis, sit amet molestie turpis molestie nec. Donec eleifend accumsan aliquam. Nunc scelerisque ultricies neque eget efficitur. Quisque at quam congue, fringilla ligula a, varius velit. Maecenas feugiat pharetra nisl, tincidunt fringilla elit mollis id. Duis consectetur, nunc eget semper congue, nibh metus tempor quam, ac scelerisque tortor purus quis elit. Proin a neque fringilla, sollicitudin turpis eget, dapibus magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer venenatis lacus a enim ultrices luctus.",
    //     image: "https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png"
    // }]
    // localStorage.setItem('blogs', JSON.stringify(testData));
    console.log(blogs);

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
                    <Card title={blog.title} subTitle={blog.author} header={<img src={blog.image} style={{height: "150px"}} />} className="md:w-25rem" style={{width: "50rem", height: "25rem"}}>
                    <p className="m-0">{textToPrint(blog.text)}...</p>
                    </Card>
                </div>
            )
        })}
    </div>
  )
}

export default BlogList;