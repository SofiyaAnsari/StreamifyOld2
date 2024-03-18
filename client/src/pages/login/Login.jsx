import React, { useState } from "react";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation: Check if email and password are not empty
    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password.");
      return;
    }

    // Email validation using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Password length validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // Additional validation logic can be added here

    // If validation passes, you can proceed with the login process
    console.log("Logging in...");
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="../public/s.png" alt="" />
        </div>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="loginButton" type="submit">
            Sign In
          </button>
          <span>
            New to STREAMIFY <b>Sign up now</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a{" "}
            robot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
