import React from 'react';
import Header from './components/header';
import BlogList from './components/BlogList';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className='dashboard-header'>Dashboard</div>
      <div className='add-list-buttons'>
        <Button className='add-blog-button' onClick={()=>navigate("/admin/createblog")}><i className="pi pi-plus" style={{marginRight: "3px"}}></i>Add Blog</Button>
        <Button className='list-blog-button' onClick={()=>navigate("/admin/listblog")}><i className="pi pi-list" style={{marginRight: "3px"}}></i>List All Blogs</Button>
      </div>
        <div className='bloglist-container'>
            <BlogList />
        </div> 
    </div>
  )
}

export default Dashboard