// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import Login from "./pages/Login";
// // import AdminDashboard from "./pages/AdminDashboard";
// // import RepresentativeDashboard from "./pages/RepresentativeDashboard";
// // import CustomerDashboard from "./pages/CustomerDashboard";
// // import ManageTrains from "./pages/ManageTrains";
// // // import ManageTrainSchedules from './pages/ManageTrainSchedules';
// // import ManageReservations from './pages/ManageReservations';
// // import ViewCustomers from './pages/ViewCustomers';
// // import ViewEmployees from './pages/ViewEmployees';
// // import ManageRepresentatives from './pages/ManageRepresentatives';

// // function App() {
// //   const role = localStorage.getItem('role'); // Get role from localStorage
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Login />} />
// //         <Route path="/admin-dashboard" element={<AdminDashboard />} />
// //         <Route path="/representative-dashboard" element={<RepresentativeDashboard />} />
// //         <Route path="/customer-dashboard" element={<CustomerDashboard />} />
// //         <Route path="/manage-trains" element={<ManageTrains />} />
// //         {role === 'admin' && (
// //           <>
// //             <Route path="/admin-dashboard" element={<AdminDashboard />} />
// //             {/* <Route path="/admin/train-schedules" element={<ManageTrainSchedules />} /> */}
// //             <Route path="/admin/reservations" element={<ManageReservations />} />
// //             <Route path="/admin/customers" element={<ViewCustomers />} />
// //             <Route path="/admin/employees" element={<ViewEmployees />} />
// //             <Route path="/admin/manage-representatives" element={<ManageRepresentatives />} />
// //           </>
// //         )}
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;


// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./pages/Login";
// import AdminDashboard from "./pages/AdminDashboard";
// import RepresentativeDashboard from "./pages/RepresentativeDashboard";
// import CustomerDashboard from "./pages/CustomerDashboard";
// import ManageTrains from "./pages/ManageTrains";
// import ManageReservations from './pages/ManageReservations';
// import ViewCustomers from './pages/ViewCustomers';
// import ViewEmployees from './pages/ViewEmployees';
// import ManageRepresentatives from './pages/ManageRepresentatives';
// import ManageSchedules from './pages/ManageSchedules';  // New - for managing train schedules
// import ReplyQuestions from './pages/ReplyQuestions'; // New - for replying to customer questions

// function App() {
//   const role = localStorage.getItem('role'); // Get role from localStorage after login
  
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />

//         {/* Admin Routes */}
//         {role === 'admin' && (
//           <>
//             <Route path="/admin-dashboard" element={<AdminDashboard />} />
//             <Route path="/admin/reservations" element={<ManageReservations />} />
//             <Route path="/admin/customers" element={<ViewCustomers />} />
//             <Route path="/admin/employees" element={<ViewEmployees />} />
//             <Route path="/admin/manage-representatives" element={<ManageRepresentatives />} />
//           </>
//         )}

//         {/* Customer Representative Routes */}
//         {role === 'staff' && (
//           <>
//             <Route path="/representative-dashboard" element={<RepresentativeDashboard />} />
//             <Route path="/manage-trains" element={<ManageTrains />} />
//             <Route path="/manage-schedules" element={<ManageSchedules />} />
//             <Route path="/reply-questions" element={<ReplyQuestions />} />
//             <Route path="/view-customers" element={<ViewCustomers />} />
//           </>
//         )}

//         {/* Customer Routes */}
//         {role === 'customer' && (
//           <Route path="/customer-dashboard" element={<CustomerDashboard />} />
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./pages/Login";
// import AdminDashboard from "./pages/AdminDashboard";
// import RepresentativeDashboard from "./pages/RepresentativeDashboard";
// import CustomerDashboard from "./pages/CustomerDashboard";
// import ManageTrains from "./pages/ManageTrains";
// import ManageReservations from './pages/ManageReservations';
// import ViewCustomers from './pages/ViewCustomers';
// import ViewEmployees from './pages/ViewEmployees';
// import ManageRepresentatives from './pages/ManageRepresentatives';
// import ManageSchedules from './pages/ManageSchedules';
// import ReplyQuestions from './pages/ReplyQuestions';
// import LogoutButton from './components/LogoutButton';  // Import LogoutButton

// function App() {
//   const role = localStorage.getItem('role'); // Get role from localStorage after login

//   return (
//     <Router>
//       {role && <LogoutButton />} {/* Display logout button if a role is set */}

//       <Routes>
//         <Route path="/" element={<Login />} />

//         {/* Admin Routes */}
//         {role === 'admin' && (
//           <>
//             <Route path="/admin-dashboard" element={<AdminDashboard />} />
//             <Route path="/admin/reservations" element={<ManageReservations />} />
//             <Route path="/admin/customers" element={<ViewCustomers />} />
//             <Route path="/admin/employees" element={<ViewEmployees />} />
//             <Route path="/admin/manage-representatives" element={<ManageRepresentatives />} />
//           </>
//         )}

//         {/* Customer Representative Routes */}
//         {role === 'staff' && (
//           <>
//             <Route path="/representative-dashboard" element={<RepresentativeDashboard />} />
//             <Route path="/manage-trains" element={<ManageTrains />} />
//             <Route path="/manage-schedules" element={<ManageSchedules />} />
//             <Route path="/reply-questions" element={<ReplyQuestions />} />
//             <Route path="/view-customers" element={<ViewCustomers />} />
//           </>
//         )}

//         {/* Customer Routes */}
//         {role === 'customer' && (
//           <Route path="/customer-dashboard" element={<CustomerDashboard />} />
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./pages/Login";
// import SearchTrain from "./pages/SearchTrain"; // New landing page
// import AdminDashboard from "./pages/AdminDashboard";
// import RepresentativeDashboard from "./pages/RepresentativeDashboard";
// import CustomerDashboard from "./pages/CustomerDashboard";
// import ManageTrains from "./pages/ManageTrains";
// import ManageReservations from './pages/ManageReservations';
// import ViewCustomers from './pages/ViewCustomers';
// import ViewEmployees from './pages/ViewEmployees';
// import ManageRepresentatives from './pages/ManageRepresentatives';
// import ManageSchedules from './pages/ManageSchedules';
// import ReplyQuestions from './pages/ReplyQuestions';
// import LogoutButton from './components/LogoutButton';  // Import LogoutButton

// function App() {
//   const role = localStorage.getItem('role'); // Get role from localStorage after login

//   return (
//     <Router>
//       {role && <LogoutButton />} {/* Display logout button if a role is set */}

//       <Routes>
//         <Route path="/" element={<SearchTrain />} /> {/* Main landing page */}
//         <Route path="/login" element={<Login />} />

//         {/* Admin Routes */}
//         {role === 'admin' && (
//           <>
//             <Route path="/admin-dashboard" element={<AdminDashboard />} />
//             <Route path="/admin/reservations" element={<ManageReservations />} />
//             <Route path="/admin/customers" element={<ViewCustomers />} />
//             <Route path="/admin/employees" element={<ViewEmployees />} />
//             <Route path="/admin/manage-representatives" element={<ManageRepresentatives />} />
//           </>
//         )}

//         {/* Customer Representative Routes */}
//         {role === 'staff' && (
//           <>
//             <Route path="/representative-dashboard" element={<RepresentativeDashboard />} />
//             <Route path="/manage-trains" element={<ManageTrains />} />
//             <Route path="/manage-schedules" element={<ManageSchedules />} />
//             <Route path="/reply-questions" element={<ReplyQuestions />} />
//             <Route path="/view-customers" element={<ViewCustomers />} />
//           </>
//         )}

//         {/* Customer Routes */}
//         {role === 'customer' && (
//           <Route path="/customer-dashboard" element={<CustomerDashboard />} />
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./pages/Login";
// import MainPage from "./pages/MainPage";
// import AdminDashboard from "./pages/AdminDashboard";
// import RepresentativeDashboard from "./pages/RepresentativeDashboard";
// import CustomerDashboard from "./pages/CustomerDashboard";
// import LogoutButton from "./components/LogoutButton";

// function App() {
//   const role = localStorage.getItem("role"); // Get role from localStorage after login

//   return (
//     <Router>
//       {role && <LogoutButton />} {/* Show LogoutButton when a role is set */}
//       <Routes>
//         {/* Main Page */}
//         <Route path="/" element={<MainPage />} />

//         {/* Login */}
//         <Route path="/login" element={<Login />} />

//         {/* Role-Based Routes */}
//         {role === "admin" && <Route path="/admin-dashboard" element={<AdminDashboard />} />}
//         {role === "staff" && <Route path="/representative-dashboard" element={<RepresentativeDashboard />} />}
//         {role === "customer" && <Route path="/customer-dashboard" element={<CustomerDashboard />} />}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./pages/Login";
// import MainPage from "./pages/MainPage";
// import AdminDashboard from "./pages/AdminDashboard";
// import RepresentativeDashboard from "./pages/RepresentativeDashboard";
// import CustomerDashboard from "./pages/CustomerDashboard";
// import LogoutButton from "./components/LogoutButton";
// import Signup from "./pages/SignUp";

// // function App() {
// //   const role = localStorage.getItem("role");

// //   return (
// //     <Router>
// //       {/* Show LogoutButton only if role exists */}
// //       {role && <LogoutButton />}
// //       <Routes>
// //         {/* Main Page */}
// //         <Route path="/" element={<MainPage />} />

// //         {/* Login */}
// //         <Route path="/login" element={<Login />} />

// //         {/* Role-Based Routes */}
// //         {role === "admin" && <Route path="/admin-dashboard" element={<AdminDashboard />} />}
// //         {role === "staff" && <Route path="/representative-dashboard" element={<RepresentativeDashboard />} />}
// //         {role === "customer" && <Route path="/customer-dashboard" element={<CustomerDashboard />} />}
// //       </Routes>
// //     </Router>
// //   );
// // }


// function App() {
//   const role = localStorage.getItem("role"); // Check role from localStorage

//   return (
//     <Router>
//       {role && <LogoutButton />} {/* Show Logout button only when role exists */}
//       <Routes>
//         <Route path="/" element={<MainPage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {role === "admin" && <Route path="/admin-dashboard" element={<AdminDashboard />} />}
//         {role === "staff" && <Route path="/representative-dashboard" element={<RepresentativeDashboard />} />}
//         {role === "customer" && <Route path="/customer-dashboard" element={<CustomerDashboard />} />}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import AdminDashboard from "./pages/AdminDashboard";
import RepresentativeDashboard from "./pages/RepresentativeDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import LogoutButton from "./components/LogoutButton";
import Signup from "./pages/SignUp";

function App() {
  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const checkRole = () => setRole(localStorage.getItem("role"));
    window.addEventListener("storage", checkRole); // Listen for storage changes
    return () => window.removeEventListener("storage", checkRole);
  }, []);

  return (
    <Router>
      {role && <LogoutButton onLogout={() => setRole(null)} />} {/* Logout Button */}

      <Routes>
        {/* Main Page */}
        <Route path="/" element={<MainPage />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Role-Based Routes */}
        {role === "admin" && <Route path="/admin-dashboard" element={<AdminDashboard />} />}
        {role === "staff" && <Route path="/representative-dashboard" element={<RepresentativeDashboard />} />}
        {role === "customer" && <Route path="/customer-dashboard" element={<CustomerDashboard />} />}
      </Routes>
    </Router>
  );
}

export default App;
