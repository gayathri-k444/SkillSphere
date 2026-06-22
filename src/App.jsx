import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import { Routes , Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {
  const [enrolledCourses,setEnrolledCourses] = useState([])
  const enrollCourse = (courseName) => {
    if(! enrolledCourses.includes(courseName)){
      setEnrolledCourses([...enrolledCourses,courseName])
      alert(`Successfully enrolled in ${courseName}`);
    }
      else{
       alert("already enrolled") 
      }

  }
   const unEnrollCourse = (courseName) => {
   setEnrolledCourses(enrolledCourses.filter((course) => course !== courseName))
   }
  return (
     <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/courses" element={<Courses enrollCourse={enrollCourse} unEnrollCourse={unEnrollCourse} enrolledCourses={enrolledCourses}/>} />
      <Route path="/dashboard" element={<Dashboard enrolledCourses={enrolledCourses} />} />
      </Routes>
      </div>
  )
}
