import React from 'react'
import Header from '../Dashboard/components/header';
import BlogList from './components/BlogList';
import './style.css'

function ListBlog() {
  return (
    <div>
      <Header />
      <div className="blog-list-title">All Blogs</div>
      <div className="blog-list-container">
        <BlogList />
      </div>
    </div>
  )
}

export default ListBlog