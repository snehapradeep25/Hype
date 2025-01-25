import React from 'react'
import './Navbar.css'
import { assets } from '../assets/assests'
import { useState } from 'react'
const Navbar = () => {
    const [menu,setMenu] = useState("home");


  return (
    <div className='navbar'  >
    <img src={assets.logo} alt="" className="logo" />
    <ul className="navbar-section">
<li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
<li onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>menu</li>
<li onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>mobile-app</li>
<li onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>contact us</li>
</ul>
<button>Sign Up</button>

    </div>
  )
}

export default Navbar
