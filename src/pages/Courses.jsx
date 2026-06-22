import React, { useState } from 'react'
export default function Courses({enrollCourse,unEnrollCourse,enrolledCourses}) { 
  const [search, setSearch] = useState(""); 
  const courses=[
      "React JS",
      "Python",
      "Javascript",
      "html",
      "CSS",
      "Data analytics",
      "AI/ML"
    ];
    const filteredCourses=courses.filter((course) =>
    course.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="container mt-4">
    <input type='text' className='form-control mb-3' placeholder='Search Courses' value={search} onChange={(e) => setSearch(e.target.value)}/>
      <h1 className='mb-4'>Available courses</h1>
    <div className='row'>
    {filteredCourses.map((course,index) => (
      <div className='col-md-4 mb-3'>
      <div className='card h-100'>
      <div className='card-body'>
        <h5 className='card-title'>{course}</h5>
        <p>Duration: 8 Weeks</p>
        <div className='d-flex gap-2'>
        <button className='btn btn-primary' onClick={() => enrollCourse(course)}> {enrolledCourses.includes({course})? "Enrolled" :"Enroll"}</button>
        {enrolledCourses.includes("React JS")&&(<button className='btn btn-danger' onClick={() => unEnrollCourse({course})}> UnEnroll</button>)}
        </div>
      </div>
      </div>
      </div>
    ))}
      
      </div>
    </div>
  )
}

