import React, { useState } from 'react'
import adminImg from '../../assets/imgs/adminImg.png'
import './Sidebar.css'
import { Link } from 'react-router-dom';

export default function Sidebar() {
const[activeLink,setActiveLink]=useState('home');



  return<>
  <div className="sidebar">
    <div className="top-bar">
      <h2>Crud Operations</h2>
      <div className="admin-info">
        <img src={adminImg} alt="" />
        <h3 className="name">Ronald Smith</h3>
        <p className="role">Admin</p>
      </div>
    </div>

    <div className="middle-bar">
      <ul>
       <li>
       <Link to='/'  onClick={()=>setActiveLink('home')}
        className={activeLink==='home'?'active link':'link'}>
        <i className="fa-solid fa-house"></i>  <span>Home</span>
          </Link>
       </li>
        <Link to='/students' onClick={()=>setActiveLink('students')}
         className={activeLink==='students'?'active link':'link'}>
          <i className="fa-solid fa-graduation-cap"></i> <span>Students</span></Link>
        <Link to='/courses' onClick={()=>setActiveLink('course')}
         className={activeLink==='course'?'active link':'link'}>
          <i class="fa-regular fa-bookmark"></i> <span>Courses</span></Link>
      </ul>
    </div>

    <div className="bottom-bar">
      <button>Logout 
        <i className="fa-solid fa-right-from-bracket"></i>
      </button>
      
    </div>
    
    
    
    
    
    </div>  
  
  
  
  
  </>
}
