import React, { useEffect, useState } from 'react'
import './Students.css'
import Spinner from '../../Components/Spinner/Spinner';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function Students() {
  const [students, setStudents] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);
  const search = () => {
    const filtered = students.filter((item) =>
      item.name.toLowerCase().includes(searchWord.toLowerCase())
    );
    setFilteredStudents(filtered); // Update state with filtered results
  };

  const getData = () => {
    fetch('https://students-server-ujrr.onrender.com/students')
      .then((res) => res.json())
      .then(data => {
        setStudents(data)
        setFilteredStudents(data);
      })
  }

  const deletStudent = (id, name) => {
    Swal.fire({
      title: `Are You Sure To Delete ${name} ?`,
      showCancelButton: true,
      icon: 'warning',
      showCloseButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`https://students-server-ujrr.onrender.com/students/${id}`, {
          method: 'delete'
        })
          .then((res) => {
            res.json();
            getData();
          })
        Swal.fire({
          title: `You Deleted ${name} Successfully`,
          icon: 'success',

        })

      }
    })



  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="students">
      <div className="students-header">
        <h3>Students List</h3>
        <Link to='/addstudent'><button>Add New Student</button></Link>
      </div>

      <div className="search-student">
        <input onKeyUp={() => search()} onChange={(e) => setSearchWord(e.target.value)} type="text" placeholder='Search Student...' />
      </div>
      <hr />


      {students.length === 0 ? <Spinner /> :
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Enroll Number</th>
              <th>Date of Admission</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>

            {(searchWord ? filteredStudents : students).map((student, index) =>
              <tr key={index}>
                <td>
                  <Link to={`/students/${student.id}`} ><img src={student.img} alt="" /></Link>
                </td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.enrollNumber}</td>
                <td>{student.admissionDate}</td>
                <td>
                  <button onClick={() => deletStudent(student.id, student.name)} className='delete'>Delete</button>
                </td>
                <td>
                  <Link to={`/updatestudent/${student.id}`}><button className='update'>Update</button></Link>
                </td>
              </tr>

            )}



          </tbody>

        </table>
      }


    </div>
  )


}
