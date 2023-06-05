import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import '../style.css';

function Header() {
  const navigate = useNavigate();
  return (
    <>
        <div className='header'>
            <div className='header-title'>BlogApp</div>
            <Button className='adminNavigate' link label="Sign in as Admin" onClick={()=>navigate("/admin/login")}/>
        </div>
    </>
  )
}

export default Header;