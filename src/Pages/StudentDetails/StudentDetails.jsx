import React, { useEffect, useState } from 'react'
import './StudentDetails.css'
import { useParams } from 'react-router-dom'
import Spinner from '../../Components/Spinner/Spinner';
export default function StudentDetails() {
    let { studentId } = useParams();
    const [loading, setLoading] = useState(true);
    const [studentDetail, setStudentDetails] = useState({});
    const getStudentDetails = () => {
        fetch(`https://students-server-ujrr.onrender.com/students/${studentId}`)
            .then((res) => res.json())
            .then(data => {
                setStudentDetails(data);
                setLoading(false)
            })
    }

    useEffect(() => {
        getStudentDetails();
        console.log(!studentDetail)
    }, [])

    return <div className='student-details'>
        <div className="student-details-header">
            <h4>Student Details</h4>
        </div>
        {!loading ? <div className="student-details-content">
            <div className="top">
                <img src={studentDetail.img} alt="" />
                <h2 className="name">{studentDetail.name}</h2>
            </div>
            <div className="bottom">
                <p><span>Email</span> : {studentDetail.email}</p>
                <p><span>Phone Number</span> : {studentDetail.phone}</p>
                <p><span>Enroll Number</span> :{studentDetail.enrollNumber} </p>
                <p><span>Admission Date</span> : {studentDetail.admissionDate}</p>
            </div>
        </div> : <Spinner />
        }







    </div>

}
