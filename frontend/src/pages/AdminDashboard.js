// // src/pages/AdminDashboard.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const AdminDashboard = () => {
//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <nav>
//         <ul>
//           <li><Link to="/admin/manage-representatives">Manage Representatives</Link></li>
//           <li><Link to="/admin/reservations">Manage Reservations</Link></li>
//           <li><Link to="/admin/customers">View Customers</Link></li>
//           <li><Link to="/admin/employees">View Employees</Link></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default AdminDashboard;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("sales");

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "sales":
//         return <div><h2>Sales Report</h2><p>This is where the sales report data will be displayed.</p></div>;
//       case "reservations":
//         return <div><h2>Reservations</h2><p>This is where reservations data will be displayed.</p></div>;
//       case "revenue":
//         return <div><h2>Revenue by Customer</h2><p>This is where revenue data will be displayed.</p></div>;
//       case "transit":
//         return <div><h2>Active Transit Lines</h2><p>This is where active transit lines will be displayed.</p></div>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       {/* Manage Employees Link */}
//       <Link to="/admin/manage-representatives" style={{ color: "purple", textDecoration: "none", fontWeight: "bold" }}>
//         Manage Employees
//       </Link>

//       {/* Tabs */}
//       <div style={{ marginTop: "20px" }}>
//         <button onClick={() => setActiveTab("sales")} style={{ background: activeTab === "sales" ? "blue" : "lightgray", color: activeTab === "sales" ? "white" : "black" }}>Sales Report</button>
//         <button onClick={() => setActiveTab("reservations")} style={{ background: activeTab === "reservations" ? "blue" : "lightgray", color: activeTab === "reservations" ? "white" : "black" }}>Reservations</button>
//         <button onClick={() => setActiveTab("revenue")} style={{ background: activeTab === "revenue" ? "blue" : "lightgray", color: activeTab === "revenue" ? "white" : "black" }}>Revenue by Customer</button>
//         <button onClick={() => setActiveTab("transit")} style={{ background: activeTab === "transit" ? "blue" : "lightgray", color: activeTab === "transit" ? "white" : "black" }}>Active Transit Lines</button>
//       </div>

//       {/* Tab Content */}
//       <div style={{ marginTop: "20px" }}>
//         {renderTabContent()}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import SalesReport from "../tabs/SalesReportTab"; // Import SalesReport component

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("sales");

//   // Render tab content dynamically
//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "sales":
//         return <SalesReport />; // Render the SalesReport component
//       case "reservations":
//         return (
//           <div>
//             <h2>Reservations</h2>
//             <p>This is where reservations data will be displayed.</p>
//           </div>
//         );
//       case "revenue":
//         return (
//           <div>
//             <h2>Revenue by Customer</h2>
//             <p>This is where revenue data will be displayed.</p>
//           </div>
//         );
//       case "transit":
//         return (
//           <div>
//             <h2>Active Transit Lines</h2>
//             <p>This is where active transit lines will be displayed.</p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>

//       {/* Manage Employees Link */}
//       <Link
//         to="/admin/manage-representatives"
//         style={{
//           color: "purple",
//           textDecoration: "none",
//           fontWeight: "bold",
//           marginBottom: "20px",
//           display: "inline-block",
//         }}
//       >
//         Manage Employees
//       </Link>

//       {/* Tabs */}
//       <div style={{ marginTop: "20px" }}>
//         <button
//           onClick={() => setActiveTab("sales")}
//           style={{
//             background: activeTab === "sales" ? "blue" : "lightgray",
//             color: activeTab === "sales" ? "white" : "black",
//             margin: "0 5px",
//             padding: "10px",
//           }}
//         >
//           Sales Report
//         </button>
//         <button
//           onClick={() => setActiveTab("reservations")}
//           style={{
//             background: activeTab === "reservations" ? "blue" : "lightgray",
//             color: activeTab === "reservations" ? "white" : "black",
//             margin: "0 5px",
//             padding: "10px",
//           }}
//         >
//           Reservations
//         </button>
//         <button
//           onClick={() => setActiveTab("revenue")}
//           style={{
//             background: activeTab === "revenue" ? "blue" : "lightgray",
//             color: activeTab === "revenue" ? "white" : "black",
//             margin: "0 5px",
//             padding: "10px",
//           }}
//         >
//           Revenue by Customer
//         </button>
//         <button
//           onClick={() => setActiveTab("transit")}
//           style={{
//             background: activeTab === "transit" ? "blue" : "lightgray",
//             color: activeTab === "transit" ? "white" : "black",
//             margin: "0 5px",
//             padding: "10px",
//           }}
//         >
//           Active Transit Lines
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div style={{ marginTop: "20px" }}>{renderTabContent()}</div>
//     </div>
//   );
// };

// export default AdminDashboard;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import SalesReport from "../tabs/SalesReportTab"; // Import SalesReport component
// import Reservations from "../tabs/ReservationsTab"; // Import Reservations component

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("sales");

//   // Render tab content dynamically
//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "sales":
//         return <SalesReport />; // Render the SalesReport component
//       case "reservations":
//         return <Reservations />; // Render the Reservations component
//       case "revenue":
//         return (
//           <div>
//             <h2>Revenue</h2>
//             <p>This is where revenue data will be displayed.</p>
//           </div>
//         );
//       case "transit":
//         return (
//           <div>
//             <h2>Active Transit Lines</h2>
//             <p>This is where active transit lines will be displayed.</p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>

//       {/* Manage Employees Link */}
//       <Link
//         to="/admin/manage-representatives"
//         style={{
//           color: "purple",
//           textDecoration: "none",
//           fontWeight: "bold",
//           marginBottom: "20px",
//           display: "inline-block",
//         }}
//       >
//         Manage Employees
//       </Link>

//       {/* Tabs */}
//       <div style={{ marginTop: "20px" }}>
//         <button
//           onClick={() => setActiveTab("sales")}
//           style={{
//             background: activeTab === "sales" ? "blue" : "lightgray",
//             color: activeTab === "sales" ? "white" : "black",
//             margin: "0 5px",
//             padding: "10px",
//           }}
//         >
//           Sales Report
//         </button>
//         <button
//           onClick={() => setActiveTab("reservations")}
//           style={{
//             background: activeTab === "reservations" ? "blue" : "lightgray",
//             color: activeTab === "reservations" ? "white" : "black",
//             margin: "0 5px",
//             padding: "10px",
//           }}
//         >
//           Reservations
//         </button>
//         <button
//           onClick={() => setActiveTab("revenue")}
//           style={{
//             background: activeTab === "revenue" ? "blue" : "lightgray",
//             color: activeTab === "revenue" ? "white" : "black",
//             margin: "0 5px",
//             padding: "10px",
//           }}
//         >
//           Revenue
//         </button>
//         <button
//           onClick={() => setActiveTab("transit")}
//           style={{
//             background: activeTab === "transit" ? "blue" : "lightgray",
//             color: activeTab === "transit" ? "white" : "black",
//             margin: "0 5px",
//             padding: "10px",
//           }}
//         >
//           Active Transit Lines
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div style={{ marginTop: "20px" }}>{renderTabContent()}</div>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import SalesReport from "../tabs/SalesReportTab"; // Import SalesReport component
// import Reservations from "../tabs/ReservationsTab"; // Import Reservations component
// import RevenueTab from "../tabs/RevenueTab"; // Import RevenueTab component

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("sales");

//   // Render tab content dynamically
//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "sales":
//         return <SalesReport />; // Render the SalesReport component
//       case "reservations":
//         return <Reservations />; // Render the Reservations component
//       case "revenue":
//         return <RevenueTab />; // Render the Revenue component
//       case "transit":
//         return (
//           <div>
//             <h2>Active Transit Lines</h2>
//             <p>This is where active transit lines will be displayed.</p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>

//       {/* Manage Employees Link */}
//       <Link
//         to="/admin/manage-representatives"
//         style={{
//           color: "purple",
//           textDecoration: "none",
//           fontWeight: "bold",
//           marginBottom: "20px",
//           display: "inline-block",
//         }}
//       >
//         Manage Employees
//       </Link>

//       {/* Tabs */}
//       <div style={{ marginTop: "20px" }}>
//         <button
//           onClick={() => setActiveTab("sales")}
//           style={{
//             background: activeTab === "sales" ? "blue" : "lightgray",
//             color: activeTab === "sales" ? "white" : "black",
//             margin: "0 5px",
//             padding: "10px",
//           }}
//         >
//           Sales Report
//         </button>
//         <button
//           onClick={() => setActiveTab("reservations")}
//           style={{
//             background: activeTab === "reservations" ? "blue" : "lightgray",
//             color: activeTab === "reservations" ? "white" : "black",
//             margin: "0 5px",
//             padding: "10px",
//           }}
//         >
//           Reservations
//         </button>
//         <button
//           onClick={() => setActiveTab("revenue")}
//           style={{
//             background: activeTab === "revenue" ? "blue" : "lightgray",
//             color: activeTab === "revenue" ? "white" : "black",
//             margin: "0 5px",
//             padding: "10px",
//           }}
//         >
//           Revenue
//         </button>
//         <button
//           onClick={() => setActiveTab("transit")}
//           style={{
//             background: activeTab === "transit" ? "blue" : "lightgray",
//             color: activeTab === "transit" ? "white" : "black",
//             margin: "0 5px",
//             padding: "10px",
//           }}
//         >
//           Active Transit Lines
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div style={{ marginTop: "20px" }}>{renderTabContent()}</div>
//     </div>
//   );
// };

// export default AdminDashboard;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import SalesReport from "../tabs/SalesReportTab"; // Import SalesReport component
// import Reservations from "../tabs/ReservationsTab"; // Import Reservations component
// import RevenueTab from "../tabs/RevenueTab"; // Import RevenueTab component
// import MostActiveTransitLines from "../tabs/MostActiveTransitLinesTab"; // Import MostActiveTransitLines component

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("sales");

//   // Render tab content dynamically
//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "sales":
//         return <SalesReport />; // Render the SalesReport component
//       case "reservations":
//         return <Reservations />; // Render the Reservations component
//       case "revenue":
//         return <RevenueTab />; // Render the Revenue component
//       case "transit":
//         return (
//           <div>
//             <h2>Active Transit Lines</h2>
//             <p>This is where active transit lines will be displayed.</p>
//           </div>
//         );
//       case "most-active-transit":
//         return <MostActiveTransitLines />; // Render the Most Active Transit Lines component
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>

//       {/* Manage Employees Link */}
//       <Link
//         to="/admin/manage-representatives"
//         style={{
//           color: "purple",
//           textDecoration: "none",
//           fontWeight: "bold",
//           marginBottom: "20px",
//           display: "inline-block",
//         }}
//       >
//         Manage Employees
//       </Link>

//       {/* Tabs */}
//       <div style={{ marginTop: "20px" }}>
//         <button
//           onClick={() => setActiveTab("sales")}
//           style={{
//             background: activeTab === "sales" ? "blue" : "lightgray",
//             color: activeTab === "sales" ? "white" : "black",
//             margin: "0 5px",
//             padding: "10px",
//           }}
//         >
//           Sales Report
//         </button>
//         <button
//           onClick={() => setActiveTab("reservations")}
//           style={{
//             background: activeTab === "reservations" ? "blue" : "lightgray",
//             color: activeTab === "reservations" ? "white" : "black",
//             margin: "0 5px",
//             padding: "10px",
//           }}
//         >
//           Reservations
//         </button>
//         <button
//           onClick={() => setActiveTab("revenue")}
//           style={{
//             background: activeTab === "revenue" ? "blue" : "lightgray",
//             color: activeTab === "revenue" ? "white" : "black",
//             margin: "0 5px",
//             padding: "10px",
//           }}
//         >
//           Revenue
//         </button>
//         <button
//           onClick={() => setActiveTab("transit")}
//           style={{
//             background: activeTab === "transit" ? "blue" : "lightgray",
//             color: activeTab === "transit" ? "white" : "black",
//             margin: "0 5px",
//             padding: "10px",
//           }}
//         >
//           Active Transit Lines
//         </button>
//         <button
//           onClick={() => setActiveTab("most-active-transit")}
//           style={{
//             background: activeTab === "most-active-transit" ? "blue" : "lightgray",
//             color: activeTab === "most-active-transit" ? "white" : "black",
//             margin: "0 5px",
//             padding: "10px",
//           }}
//         >
//           Most Active Transit Lines
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div style={{ marginTop: "20px" }}>{renderTabContent()}</div>
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import SalesReport from "../tabs/SalesReportTab"; // Import SalesReport component
import Reservations from "../tabs/ReservationsTab"; // Import Reservations component
import RevenueTab from "../tabs/RevenueTab"; // Import RevenueTab component
import MostActiveTransitLines from "../tabs/MostActiveTransitLinesTab"; // Import MostActiveTransitLines component

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("sales");

  // Render tab content dynamically
  const renderTabContent = () => {
    switch (activeTab) {
      case "sales":
        return <SalesReport />; // Render the SalesReport component
      case "reservations":
        return <Reservations />; // Render the Reservations component
      case "revenue":
        return <RevenueTab />; // Render the Revenue component
      case "most-active-transit":
        return <MostActiveTransitLines />; // Render the Most Active Transit Lines component
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      {/* Manage Employees Link */}
      <Link
        to="/admin/manage-representatives"
        style={{
          color: "purple",
          textDecoration: "none",
          fontWeight: "bold",
          marginBottom: "20px",
          display: "inline-block",
        }}
      >
        Manage Employees
      </Link>

      {/* Tabs */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setActiveTab("sales")}
          style={{
            background: activeTab === "sales" ? "blue" : "lightgray",
            color: activeTab === "sales" ? "white" : "black",
            margin: "0 5px",
            padding: "10px",
          }}
        >
          Sales Report
        </button>
        <button
          onClick={() => setActiveTab("reservations")}
          style={{
            background: activeTab === "reservations" ? "blue" : "lightgray",
            color: activeTab === "reservations" ? "white" : "black",
            margin: "0 5px",
            padding: "10px",
          }}
        >
          Reservations
        </button>
        <button
          onClick={() => setActiveTab("revenue")}
          style={{
            background: activeTab === "revenue" ? "blue" : "lightgray",
            color: activeTab === "revenue" ? "white" : "black",
            margin: "0 5px",
            padding: "10px",
          }}
        >
          Revenue
        </button>
        <button
          onClick={() => setActiveTab("most-active-transit")}
          style={{
            background: activeTab === "most-active-transit" ? "blue" : "lightgray",
            color: activeTab === "most-active-transit" ? "white" : "black",
            margin: "0 5px",
            padding: "10px",
          }}
        >
          Most Active Transit Lines
        </button>
      </div>

      {/* Tab Content */}
      <div style={{ marginTop: "20px" }}>{renderTabContent()}</div>
    </div>
  );
};

export default AdminDashboard;
