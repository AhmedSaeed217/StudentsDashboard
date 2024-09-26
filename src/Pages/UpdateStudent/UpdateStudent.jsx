import React, { useEffect, useState } from 'react';
import './UpdateStudent.css';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateStudent() {
  const [studentInfo, setStudentInfo] = useState({});
  let navigate = useNavigate();
  const [stdName, setStdName] = useState('');
  const [stdEmail, setStdEmail] = useState('');
  const [stdEnrollNum, setStdEnrollNum] = useState('');
  const [stdPhonNum, setStdPhonNum] = useState(0);
  const [stdAddDat, setStdAddDat] = useState('');
  let { studentId } = useParams();

  useEffect(() => {
    fetch(`https://students-server-ujrr.onrender.com/students/${studentId}`)
      .then((res) => res.json())
      .then(data => {
        setStudentInfo(data);

      })
  }, [])

  const formSubmit = (e) => {
    e.preventDefault();
    fetch(`https://students-server-ujrr.onrender.com/students/${studentId}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: stdName.length > 0 ? stdName : studentInfo.name,
        email: stdEmail.length > 0 ? stdEmail : studentInfo.email,
        phone: stdPhonNum.length > 0 ? stdPhonNum : studentInfo.phone,
        enrollNumber: stdEnrollNum.length > 0 ? stdEnrollNum : studentInfo.enrollNumber,
        admissionDate: stdAddDat.length > 0 ? stdAddDat : studentInfo.admissionDate,
        img: studentInfo.img
      })
    })
      .then(response => response.json())
      .then(() => {
        Swal.fire({
          title: `The Student Updated successfully`,
          icon: 'success',
          showCloseButton: true
        });


      }).then(() => {
        navigate('/students')
      })
  };

  return (

    <div className='update-student'>
      <div className="update-student-header">
        <h3>Update Student</h3>
      </div>
      <form onSubmit={formSubmit} className='update-form'>
        <div className="form-group">
          <label htmlFor="name">Student Name</label>
          <input placeholder={studentInfo.name} onChange={(e) => setStdName(e.target.value)} type="text" id='name' />
        </div>

        <div className="form-group">
          <label htmlFor="email">Student Email</label>
          <input placeholder={studentInfo.email} onChange={(e) => setStdEmail(e.target.value)} type="text" id='email' />
        </div>

        <div className="form-group">
          <label htmlFor="enrollnum">Student Enroll Number</label>
          <input placeholder={studentInfo.enrollNumber} onChange={(e) => setStdEnrollNum(e.target.value)} type="text" id='enrollnum' />
        </div>

        <div className="form-group">
          <label htmlFor="phonenum">Student Phone Number</label>
          <input placeholder={studentInfo.phone} onChange={(e) => setStdPhonNum(e.target.value)} type="tel" id='phonenum' />
        </div>

        <div className="form-group">
          <label htmlFor="dateofadd">Date of Admission</label>
          <input value={studentInfo.admissionDate} onChange={(e) => setStdAddDat(e.target.value)} type="date" id='dateofadd' />
        </div>


        <button type='submit'>Update</button>

      </form>

    </div>

  )
}
