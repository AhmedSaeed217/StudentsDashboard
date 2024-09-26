import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return <>
  <nav>
    <div className="left-nav">

        <i className="fa-brands fa-gg-circle"></i>


    </div>
 
    <div className="right-nav">
    <div className="search-box">
            <input type="text" placeholder='Search...' />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>

    <div className="bell">
        <i className="fa-regular fa-bell"></i>
        </div>
    </div>

        

  </nav>
  
  
  
  
  </>
}
