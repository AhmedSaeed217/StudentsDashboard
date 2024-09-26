import React from 'react'
import './Courses.css'
import webDesign from '../../assets/imgs/web design.png';
import mobile from '../../assets/imgs/Mobile dev.png'
import ui from '../../assets/imgs/uiux.png'
import advanced from '../../assets/imgs/Advanced Js.png'
import front from '../../assets/imgs/Front.png'
import graphic from '../../assets/imgs/graphic.png'
export default function Courses() {
  return <>
  <div className="courses">
      <div className="header">
      <h3>Our Courses</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo sequi id eveniet exercitationem sapiente error quisquam officia, veniam itaque eum!</p>
      </div>
    <div className="courses-container">
    <div className="course">
      <img src={webDesign} alt="" />
      <div className="course-details">
        <div className="duration-level">
          <span>4 Weeks</span>
          <span>Beginner</span>
        </div>
        <div className="instructor">
          <p>By John Smith</p>
        </div>
      </div>
      <div className="course-info">
        <h3>Web Design Fundamentals </h3>
        <p>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
      </div>
    </div>

    <div className="course">
      <img src={ui} alt="" />
      <div className="course-details">
        <div className="duration-level">
          <span>6 Weeks</span>
          <span>Intermediate</span>
        </div>
        <div className="instructor">
          <p>By Emily Johnson</p>
        </div>
      </div>
      <div className="course-info">
        <h3>UI/UX Design</h3>
        <p>Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability.</p>
      </div>
    </div>

    <div className="course">
      <img src={mobile} alt="" />
      <div className="course-details">
        <div className="duration-level">
          <span>8 Weeks</span>
          <span>Intermediate</span>
        </div>
        <div className="instructor">
          <p>By David Brown</p>
        </div>
      </div>
      <div className="course-info">
        <h3>Mobile App Development</h3>
        <p>Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.</p>
      </div>
    </div>

    <div className="course">
      <img src={graphic} alt="" />
      <div className="course-details">
        <div className="duration-level">
          <span>10 Weeks</span>
          <span>Beginner</span>
        </div>
        <div className="instructor">
          <p>By Sarah Thompson</p>
        </div>
      </div>
      <div className="course-info">
        <h3>Graphic Design for Beginners</h3>
        <p>Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.</p>
      </div>
    </div>


    <div className="course">
      <img src={front} alt="" />
      <div className="course-details">
        <div className="duration-level">
          <span>10 Weeks</span>
          <span>Intermediate</span>
        </div>
        <div className="instructor">
          <p>By Michael Adams</p>
        </div>
      </div>
      <div className="course-info">
        <h3>Front-End Web Development</h3>
        <p>Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.</p>
      </div>
    </div>


    <div className="course">
      <img src={advanced} alt="" />
      <div className="course-details">
        <div className="duration-level">
          <span>6 Weeks</span>
          <span>Advanced</span>
        </div>
        <div className="instructor">
          <p>By Jennifer Wilson</p>
        </div>
      </div>
      <div className="course-info">
        <h3>Advanced JavaScript</h3>
        <p>Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.</p>
      </div>
    </div>


    </div>
  </div>
  
  
  
  
  
  
  
  </>
}
