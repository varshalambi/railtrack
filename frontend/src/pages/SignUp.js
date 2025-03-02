
import React, { useState } from "react"; 
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
// import "../styles/Login.css"; // Import CSS file
import backgroundImage from "../assets/Railway-Reservation-System.jpg"; // Import the image

const Signup = () => {

  const [email, setEmail] = useState("");
  const [firstName , setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/customer",{
        email,
        firstName,
        lastName,
        username,
        password
      });
      navigate("/login");
      
    } catch (err) {
      setError(err.response?.data?.error || "Sign-Up failed. Try again.");
    }
  };

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Heading */}
      <h1 className="page-title">Railway Reservation System</h1>

      <form onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="FirstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
         <input
          type="text"
          placeholder="LastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
         <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">SignUp</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
