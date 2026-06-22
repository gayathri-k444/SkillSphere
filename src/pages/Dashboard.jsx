import React from 'react'

export default function Dashboard({ enrolledCourses }){
  return (
    <div className='mt-4'>
     
      <h2>Welcome to Your Dashboard</h2>
<p>Manage your enrolled courses here.</p>
      {enrolledCourses.length === 0 ? (
        <div className="alert alert-warning">
  You haven't enrolled in any courses yet.
</div>
      ) : (
      <>
      <h3> My Courses</h3>
      <ul className='list-group'>
      {enrolledCourses.map((course,index) =>(
      <li key={index} className='list-group-item'>{course}</li>
      ))}
        
      </ul>
      </>
      )}
      <p className='mt-3'>Total Courses: {enrolledCourses.length}</p>
    </div>
  )
}
