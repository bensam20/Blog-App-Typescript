import { createContext, useMemo, useState, useEffect } from 'react';
import { getAllReq } from '../api/apicall';

export type Blog = {
    author: string;
    title: string;
    text: string;
    image: string;
}

interface blogProps {
    blogs: Blog[];
    setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    author: string;
    setAuthor: React.Dispatch<React.SetStateAction<string>>;
    imageLink: string;
    setImageLink: React.Dispatch<React.SetStateAction<string>>;
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    deleteBlog(i:number): Function;
    isEdit: boolean;
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
    blogToEdit: Blog;
    setBlogToEdit: React.Dispatch<React.SetStateAction<Blog>>;
    editIndex: number;
    setEditIndex: React.Dispatch<React.SetStateAction<number>>;
    editBlog: Function;
    selectedBlog: Blog;
    setSelectedBlog: React.Dispatch<React.SetStateAction<Blog>>;
}

export const BlogContext = createContext<blogProps | null>(null);

function BlogDataContext(props:any) {
    const getItems = localStorage.getItem('blogs');
    const [blogs, setBlogs] = useState<Blog[] | []>(getAllReq('/blog'));
    // const [blogs, setBlogs] = useState<Blog[] | []>(getItems ? JSON.parse(getItems) : []);
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [imageLink, setImageLink] = useState<string>("");
    const [content, setContent] = useState<string>();
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [blogToEdit, setBlogToEdit] = useState<Blog>();
    const [editIndex, setEditIndex] = useState<number>(-1);
    const [selectedBlog, setSelectedBlog] = useState<Blog>();

    useEffect(() => {
        localStorage.setItem('blogs', JSON.stringify(blogs));
    }, [blogs]);

    const deleteBlog = (i:number) => {
        const newArr = blogs?.filter((v,j) => {
            return i!==j
        })
        setBlogs(newArr);
    };

    const editBlog = (newBlog: Blog) => {
        console.log(newBlog);
        blogs[editIndex] = newBlog;
        setBlogs(blogs);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        setIsEdit(false);
    }

    const contextPayload = useMemo(
        () => ({
            blogs,
            setBlogs,
            title,
            setTitle,
            author,
            setAuthor,
            imageLink,
            setImageLink,
            content,
            setContent,
            deleteBlog,
            isEdit,
            setIsEdit,
            blogToEdit,
            setBlogToEdit,
            editIndex,
            setEditIndex,
            editBlog,
            selectedBlog, 
            setSelectedBlog
        }),
        [
            blogs,
            title,
            author,
            imageLink,
            content,
            isEdit,
            blogToEdit,
            editIndex,
            selectedBlog
        ]
    )

  return <BlogContext.Provider  value={contextPayload} {...props} />
}

export default BlogDataContext