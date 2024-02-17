import React from "react";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

  const handleToggle=()=>{
const allSections=document.querySelectorAll("section");
const footer=document.querySelector(".footer");
footer.style.display="none";
const resNav=document.querySelector(".resContent");
resNav.classList.add("showNav")
allSections.forEach((s)=>{
  s.classList.add("makeInv");
})
  }

  const handleCut=()=>{
    const allSections=document.querySelectorAll("section");
    const footer=document.querySelector(".footer");
    footer.style.display="inherit";
    const resNav=document.querySelector(".resContent");
    resNav.classList.remove("showNav")
    allSections.forEach((s)=>{
s.classList.remove("makeInv") ;
   })
      }

  return (
    <div className="navBar">

<ul className="navItems">
    <li className="navItem"><a href="">About</a></li>
    <li className="navItem"><a href="">Services</a></li>
    <li className="navItem"><a href="">Events</a></li>

</ul>
      <div className="logo">
        <h1>24 Carrots</h1>
        <p>Catering & Events</p>
      </div>

      <ul className="navItems">
    <li className="navItem"><a href="">Venues</a></li>
    <li className="navItem"><a href="">Careers</a></li>
    <li className="nav-btn"><a href="">Get in touch</a></li>
</ul>
<button className="resBtn" onClick={handleToggle}><FontAwesomeIcon icon={faBars} /></button>
<div className="resContent">
<ul className="navItems2">
<div className="logo">
        <h1>24 Carrots</h1>
        <p>Catering & Events</p>
      </div>
    <li className="navItem"><a href="">Venues</a></li>
    <li className="navItem"><a href="">Careers</a></li>
    <li className="navItem"><a href="">Get in touch</a></li>
    <li className="navItem"><a href="">About</a></li>
    <li className="navItem"><a href="">Services</a></li>
    <li className="navItem"><a href="">Events</a></li>

</ul>
<FontAwesomeIcon icon={faXmark} className="cutBtn" onClick={handleCut}/>
</div>
    </div>
  );
};

export default Header;
