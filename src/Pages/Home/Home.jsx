import React, { useEffect } from 'react'
import './Home.css'
export default function Home() {


  return <>
    <div className="home">

      <div className="home-content">
        <div className="box students">
          <i class="fa-solid fa-graduation-cap"></i>
          <span>Students</span>
          <p>20</p>
        </div>

        <div className="box courses">
          <i class="fa-regular fa-bookmark"></i>
          <span>Courses</span>
          <p>13</p>
        </div>

        <div className="box payments">
          <i class="fa-solid fa-file-invoice-dollar"></i>
          <span>Payments</span>
          <p>$ 20000</p>
        </div>

        <div className="box users">
          <i class="fa-solid fa-user"></i>
          <span>Users</span>
          <p>3</p>
        </div>

      </div>



    </div>


  </>
}
