import React, { useState } from 'react';
import './AddStudent.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function AddStudent() {

    let navigate=useNavigate();
    const [stdName, setStdName] = useState('');
    const [stdEmail, setStdEmail] = useState('');
    const [stdEnrollNum, setStdEnrollNum] = useState('');
    const [stdPhonNum, setStdPhonNum] = useState('');
    const [stdAddDat, setStdAddDat] = useState('');
    const formSubmit = (e) => {
        e.preventDefault();
        fetch('https://students-server-ujrr.onrender.com/students', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: stdName,
            email: stdEmail,
            phone: stdPhonNum,
            enrollNumber: stdEnrollNum,
            admissionDate: stdAddDat,
            img: "https://via.placeholder.com/150"
          })
        })
        .then(response => response.json())
        .then(() => {
          Swal.fire({
            title: `The Student Added successfully`,
            icon: 'success',
            showCloseButton: true
          });
         
         
        }).then(()=>{
            navigate('/students')
        })
      };

  return (

    <div className='add-student'>
    <div className="add-student-header">
        <h3>Add New Student</h3>
    </div>
   <form onSubmit={formSubmit} className='add-form'>
   <div className="form-group">
   <label htmlFor="name">Student Name</label>
   <input value={stdName} onChange={(e)=>setStdName(e.target.value)} type="text" id='name' />
   </div>

    <div className="form-group">
   <label htmlFor="email">Student Email</label>
    <input value={stdEmail} onChange={(e)=>setStdEmail(e.target.value)} type="text"  id='email'/>
    </div>

    <div className="form-group">
   <label htmlFor="enrollnum">Student Enroll Number</label>
    <input value={stdEnrollNum} onChange={(e)=>setStdEnrollNum(e.target.value)} type="text" id='enrollnum'/>
    </div>

    <div className="form-group">
   <label htmlFor="phonenum">Student Phone Number</label>
    <input value={stdPhonNum} onChange={(e)=>setStdPhonNum(e.target.value)} type="tel" id='phonenum'/>
    </div>
    
    <div className="form-group">
    <label htmlFor="dateofadd">Date of Admission</label>
    <input value={stdAddDat} onChange={(e)=>setStdAddDat(e.target.value)} type="date" id='dateofadd'/>
    </div>


    <button type='submit'>Add</button>

   </form>

  </div>
 
)
}
