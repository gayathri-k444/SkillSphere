import React from "react";

export default function Signup() {
  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter Name"
      />

      <input
        type="email"
        className="form-control mb-3"
        placeholder="Enter Email"
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Create Password"
      />

      <button className="btn btn-success">
        Sign Up
      </button>
    </div>
  );
}