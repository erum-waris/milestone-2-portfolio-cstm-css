 import React from 'react'
import Navlinks from './Navlinks'

 
 function NavbarSec() {
   return (
     <div>
<header>
  <nav className="navbar">

    <div className="logo">
     Erum Waris
    </div>

    <ul >
    <li className="nav-items"> <Navlinks href="/" title="Home" /> </li>
    <li className="nav-items"> <Navlinks href="/about" title="About" /> </li>
    <li className="nav-items"> <Navlinks href="/projects" title="Projects" /> </li>
    <li className="nav-items"> <Navlinks href="/skills" title="Skills" /> </li>
    <li className="nav-items"> <Navlinks href="/contact" title="Contact" /> </li>
    </ul>
    
   
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    



  </nav>
</header>




     </div>
   )
 }
 
 export default NavbarSec