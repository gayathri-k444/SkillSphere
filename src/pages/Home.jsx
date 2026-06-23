import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <h1 className="display-3 fw-bold">
          SkillSphere
        </h1>

        <p className="lead">
          Learn. Practice. Grow Your Skills.
        </p>

        <Link to="/login">
          <button className="btn btn-light me-3">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="btn btn-success">
            Sign Up
          </button>
        </Link>
      </div>

      {/* Statistics */}
      <div className="container mt-5">
        <div className="row text-center">

          <div className="col-md-4 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h2>20+</h2>
                <p>Available Courses</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h2>100+</h2>
                <p>Students</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h2>24/7</h2>
                <p>Learning Access</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* About */}
      <div className="container mt-5">
        <h2 className="text-center">
          About SkillSphere
        </h2>

        <p className="text-center mt-3">
          SkillSphere is an online learning platform designed to help
          students gain practical programming and development skills
          through structured courses and hands-on learning.
        </p>
      </div>

      {/* Features */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">
          Why Choose Us?
        </h2>

        <div className="row">

          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h3>📚 Courses</h3>
                <p>
                  Learn React, Python,
                  JavaScript and more.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h3>🔍 Search</h3>
                <p>
                  Find courses quickly using
                  the search feature.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h3>🎯 Dashboard</h3>
                <p>
                  Track enrolled courses
                  in one place.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Contact */}
      <div className="bg-light mt-5 py-4">
        <div className="container text-center">
          <h3>Contact Us</h3>
          <p>Email: support@skillsphere.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        © 2026 SkillSphere. All Rights Reserved.
      </footer>

    </div>
  );
}