import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import '../style.css';

function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("isLoggedIn", "");
    navigate("/");
  }
  return (
    <>
        <div className='header'>
            <div className='header-title' onClick={()=>navigate('/admin/dashboard')}>BlogApp</div>
            <Button className='adminNavigate' link label="Logout" onClick={logout}/>
        </div>
    </>
  )
}

export default Header;