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
            <Button className='adminNavigate' link label="Logout" onClick={()=>navigate("/")}/>
        </div>
    </>
  )
}

export default Header;