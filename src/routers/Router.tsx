import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../modules/admin/Login/Login';
import Dashboard from '../modules/admin/Dashboard/Dashboard';
import CreateBlog from '../modules/admin/CreateBlog/CreateBlog';
import ListBlog from '../modules/admin/ListBlog/ListBlog';
import EditBlog from '../modules/admin/EditBlog/EditBlog';
import Blogs from '../modules/user/Blogs/Blogs';

function Router() {
  return (
    <Routes>
        <Route path="admin/login" element={<Login />} />
        <Route path="admin/dashboard" element={<Dashboard />} />
        <Route path="admin/createblog" element={<CreateBlog />} />
        <Route path='admin/listblog' element={<ListBlog />} />
        <Route path='admin/editblog' element={<EditBlog />}></Route>
        <Route path='*' element={<Blogs />} />
    </Routes>
  )
}

export default Router