import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar () {
  return (
    <div className="nav">
   <h2 className="text-primary fw-bold">
  SkillSphere
</h2>
    <div className="alert alert-info">
  Welcome to SkillSphere! Start learning today.

    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        
    </ul>
      </div>
    </div>
  );
}
