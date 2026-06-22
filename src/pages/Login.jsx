import React from "react";

export default function Login() {
  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <input
        type="email"
        className="form-control mb-3"
        placeholder="Enter Email"
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Enter Password"
      />

      <button className="btn btn-primary">
        Login
      </button>
    </div>
  );
}