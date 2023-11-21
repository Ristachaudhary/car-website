import React, { useState } from 'react';
import "./style.css";
import Logo from "../../images/logo.png";
import {AiOutlineSearch, AiOutlineUser, AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
  return (
    <div className='navbar-container'>
     <div className='navbar-logo'>
        <img src={Logo} alt=''/>
     </div>
     <div className='navbar-anker-container'>
         <ul>
            <a href=''>Learn More</a>
            <a href=''>Log In</a>
            <a href=''>Sign up</a>
            <a href='' className='navbar-anker-a-icon'><AiOutlineSearch/></a>
            <a href='' className='navbar-anker-a-icon'><AiOutlineUser/></a>
       </ul>
       <div onClick={()=>setNav(!nav)} className='navbar-mb-menu-icon'>
        {nav ? <AiOutlineClose/>:         <AiOutlineMenu/>
}
       </div>
     </div>

    </div>
  )
}

export default Navbar;