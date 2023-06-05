import React, {useContext, useState} from 'react';
import { BlogContext } from '../../../../context/BlogContext';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

type Blog = {
    author: string;
    title: string;
    text: string;
    image: string;
}

function BlogList() {

    const blogContext = useContext(BlogContext);
    const [deleteIndex, setDeleteIndex] = useState<number>(-1);
    const [isDelete, setIsDelete] = useState<boolean>(false);
    const navigate = useNavigate();

    const textToPrint = (text: string):string => {
        const words = text.split(' ');
        const extractedText = words.slice(0, 50).join(' ');
        return extractedText
    }

    
    const [visible, setVisible] = useState(false);
    const footerContent = (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => deleteResponse(false)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => deleteResponse(true)}  autoFocus />
        </div>
    );
    
    const deleteResponse = (res:boolean) => { 
        if(res) {
            blogContext?.deleteBlog(deleteIndex);
        }
        setVisible(false);
    }

    const deleteConfirmation = (index: number) => {
        setDeleteIndex(index);
        setVisible(true);
    }

    const editBlog = (blog: Blog, index: number) => {
        blogContext?.setIsEdit(true);
        blogContext?.setTitle(blog.title);
        blogContext?.setAuthor(blog.author);
        blogContext?.setImageLink(blog.image);
        blogContext?.setContent(blog.text);
        blogContext?.setEditIndex(index);
        navigate("/admin/editBlog");
    }

    const footer = (index: number, blog: Blog) => {
        return(<div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Edit" icon="pi pi-pencil" className="p-button-outlined" onClick={() => editBlog(blog, index)} />
            <Button label="Delete" icon="pi pi-times" className="p-button-outlined" onClick={() => deleteConfirmation(index)} style={{marginLeft:"5px", borderColor:"red"}} />
        </div>)
    };
    

  return (
    <div>
        <Dialog header="Confirm" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
            <p className="m-0">
                Are you sure you want to delete this blog?
            </p>
        </Dialog>
        {blogContext?.blogs.map((blog, i) => {
            return (
                <div key={i}>
                    <Card title={blog.title} subTitle={blog.author} header={<img src={blog.image} style={{height: "150px"}} />} footer={()=>footer(i, blog)} className="md:w-25rem" style={{width: "50rem", height: "30rem", marginBottom: "30px"}}>
                    <p className="m-0" style={{height: "80px"}}>{textToPrint(blog.text)}...</p>
                    </Card>
                </div>
            )
        })}
    </div>
  )
}

export default BlogList;