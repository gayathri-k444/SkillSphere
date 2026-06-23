import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          SkillSphere
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link text-white me-3" to="/">
            🏠 Home
          </Link>

          <Link className="nav-link text-white me-3" to="/courses">
            📚 Courses
          </Link>

          <Link className="nav-link text-white" to="/dashboard">
            📊 Dashboard
          </Link>

        </div>

      </div>
    </nav>
  )
}