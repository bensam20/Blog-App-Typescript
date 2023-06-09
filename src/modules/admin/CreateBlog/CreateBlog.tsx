import React, {useState, useContext, useRef} from 'react';
import Header from '../Dashboard/components/header';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import './style.css'
import { BlogContext } from '../../../context/BlogContext';
import { Toast } from 'primereact/toast';
import { postReq, getAllReq } from '../../../api/apicall';

function CreateBlog() {
  const blogContext = useContext(BlogContext);
  const toast = useRef<any>(null);

  const showToast = (severity: string, msg: string, summary: string) => {
    toast.current.show({severity:severity, summary: summary, detail:msg, life: 3000});
  }

  const submitForm = () => {
    if (blogContext?.title === "" || blogContext?.author === "" || blogContext?.imageLink === "" || blogContext?.content === ""){
      showToast('error','All fields must be filled', "Error");
      return
    } else {
      const newBlog = {
        title: blogContext?.title || '',
        author: blogContext?.author || '',
        image: blogContext?.imageLink || '',
        text: blogContext?.content || '',
      }
      postReq('/blog', newBlog);
      console.log("inside bloglist", getAllReq('/blog'));
      
      // blogContext?.setBlogs(getAllReq('/blog'));
      blogContext?.setBlogs([...blogContext?.blogs, newBlog]);
      blogContext?.setTitle("");
      blogContext?.setAuthor("");
      blogContext?.setImageLink("");
      blogContext?.setContent("");
      showToast("success","Blog created successfully", "Success");
    }
  }

  return (
    <div>
      <Header />
      <Toast ref={toast} />
      <div className="create-blog-title">Create New Blog</div>
      <Card className='create-blog-form'>
        <span className="p-float-label">
          <InputText id="title" aria-describedby="username-help" value={blogContext?.title} onChange={(e) => blogContext?.setTitle(e.target.value)} />
          <label htmlFor="title">Title</label>
        </span>
        <span className="p-float-label">
          <InputText id="author" aria-describedby="username-help" value={blogContext?.author} onChange={(e) => blogContext?.setAuthor(e.target.value)} />
          <label htmlFor="author">Author</label>
        </span>
        <span className="p-float-label">
          <InputText id="image-link" aria-describedby="username-help" value={blogContext?.imageLink} onChange={(e) => blogContext?.setImageLink(e.target.value)} />
          <label htmlFor="image-link">Image Link</label>
        </span>
        <span className="content p-float-label">
          <InputTextarea id="content" value={blogContext?.content} onChange={(e) => blogContext?.setContent(e.target.value)} rows={5} cols={30} />
          <label htmlFor="content">Content</label>
        </span>
        <Button onClick={submitForm} style={{marginTop: "15px"}}>Submit Blog</Button>
      </Card>
    </div>
  )
}

export default CreateBlog