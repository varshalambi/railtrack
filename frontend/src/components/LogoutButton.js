// import React from "react";
// import { useNavigate } from "react-router-dom";

// const LogoutButton = () => {
//   const navigate = useNavigate();

//   const handleLogout =  () => {
//      localStorage.clear(); // Clear all localStorage items
//      navigate("/"); // Redirect to MainPage.js
//   };

//   return (
//     <button onClick={handleLogout} className="logout-button">
//       Logout
//     </button>
//   );
// };

// export default LogoutButton;

import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    onLogout(); // Notify the parent component
    navigate("/"); // Redirect to the main page
  };

  return <button className="logout-button" onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
