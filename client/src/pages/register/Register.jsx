import React, { useRef, useState } from "react";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    const enteredEmail = emailRef.current.value;

    // Basic validation: Check if email is not empty
    if (!enteredEmail.trim()) {
      alert("Please enter your email address.");
      return;
    }

    // Email format validation using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(enteredEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    setEmail(enteredEmail);
  };

  const handleFinish = () => {
    const enteredPassword = passwordRef.current.value;

    // Basic validation: Check if password is not empty
    if (!enteredPassword.trim()) {
      alert("Please enter your password.");
      return;
    }

    // Password complexity validation
    // You can customize this validation based on your requirements
    if (enteredPassword.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    setPassword(enteredPassword);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="../public/s.png" alt="" />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
