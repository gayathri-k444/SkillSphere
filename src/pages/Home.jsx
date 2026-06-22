import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <h3>About SkillSphere</h3>

<p>
  SkillSphere is an online learning platform designed
  to help students gain practical programming and
  development skills through structured courses.
</p>
      <div className="mt-4">
  <Link to="/login">
    <button className="btn btn-primary me-3">
      Login
    </button>
  </Link>

  <Link to="/signup">
    <button className="btn btn-success">
      Sign Up
    </button>
  </Link>
</div>
<h3>Contact Us</h3>

<p>Email: support@skillsphere.com</p>
<p>Phone: +91 9653147404</p>
<footer className="text-center mt-5">
  <hr />
  <p>© 2026 SkillSphere. All Rights Reserved.</p>
</footer>
    </div>
  )
}

