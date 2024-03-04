import '../styles/navbar.css'

import React from 'react'

const Navbar = () => {
  return (
   <nav>
    <div className="navfirst">
        <img className='logo ' src="./assets/logo.jpg" alt="" />
    </div>
    <div className="navsecond">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
    <div className="navthird">
    <i class="fa-solid fa-user"></i>
    <i class="fa-solid fa-envelope"></i>
    <i class="fa-solid fa-phone"></i>
    </div>
   </nav>
  )
}

export default Navbar
