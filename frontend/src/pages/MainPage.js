// // import React, { useState, useEffect } from "react";
// // import axiosInstance from "../utils/axiosInstance";

// // const MainPage = () => {
// //   const [stations, setStations] = useState([]);
// //   const [sourceStation, setSourceStation] = useState("");
// //   const [destinationStation, setDestinationStation] = useState("");
// //   const [error, setError] = useState("");

// //   // Fetch stations from the backend API
// //   const fetchStations = async () => {
// //     try {
// //       const response = await axiosInstance.get("/stations");
// //       setStations(response.data.stations);
// //     } catch (err) {
// //       console.error("Error fetching stations:", err);
// //       setError("Failed to load stations. Please try again.");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchStations();
// //   }, []);

// //   return (
// //     <div className="main-page">
// //       <header className="header">
// //         <h1>Railway Reservation System</h1>
// //         <div id="real-time-clock"></div>
// //       </header>

// //       <div className="search-container">
// //         <h2>Search Train</h2>
// //         <select
// //           value={sourceStation}
// //           onChange={(e) => setSourceStation(e.target.value)}
// //         >
// //           <option value="">--Source Station--</option>
// //           {stations.map((station) => (
// //             <option key={station.StationID} value={station.StationName}>
// //               {station.StationName}
// //             </option>
// //           ))}
// //         </select>

// //         <select
// //           value={destinationStation}
// //           onChange={(e) => setDestinationStation(e.target.value)}
// //         >
// //           <option value="">--Destination Station--</option>
// //           {stations.map((station) => (
// //             <option key={station.StationID} value={station.StationName}>
// //               {station.StationName}
// //             </option>
// //           ))}
// //         </select>

// //         <input type="date" placeholder="Select Date" />

// //         <button className="search-button">Search</button>

// //         {error && <p className="error">{error}</p>}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MainPage;


// // import React, { useState, useEffect } from "react";
// // import axiosInstance from "../utils/axiosInstance";
// // import "../styles/MainPage.css"; // Import the CSS file for styling

// // const MainPage = () => {
// //   const [stations, setStations] = useState([]);
// //   const [sourceStation, setSourceStation] = useState("");
// //   const [destinationStation, setDestinationStation] = useState("");
// //   const [error, setError] = useState("");
// //   const [time, setTime] = useState("");

// //   // Fetch stations from backend API
// //   const fetchStations = async () => {
// //     try {
// //       const response = await axiosInstance.get("/stations");
// //       setStations(response.data.stations);
// //     } catch (err) {
// //       console.error("Error fetching stations:", err);
// //       setError("Failed to load stations. Please try again.");
// //     }
// //   };

// //   // Real-time clock
// //   useEffect(() => {
// //     fetchStations();
// //     const interval = setInterval(() => {
// //       const now = new Date();
// //       setTime(now.toLocaleTimeString());
// //     }, 1000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="main-page">
// //       {/* Header */}
// //       <header className="header">
// //         <h1>Railway Reservation System</h1>
// //         <div className="header-actions">
// //           <a href="/login">Sign In</a>
// //           <a href="/signup">Sign Up</a>
// //         </div>
// //         <div className="real-time-clock">{time}</div>
// //       </header>

// //       {/* Train Search Container */}
// //       <div className="search-container">
// //         <h2>Search Train</h2>
// //         <select
// //           value={sourceStation}
// //           onChange={(e) => setSourceStation(e.target.value)}
// //         >
// //           <option value="">--Source Station--</option>
// //           {stations.map((station) => (
// //             <option key={station.StationID} value={station.StationName}>
// //               {station.StationName}
// //             </option>
// //           ))}
// //         </select>

// //         <select
// //           value={destinationStation}
// //           onChange={(e) => setDestinationStation(e.target.value)}
// //         >
// //           <option value="">--Destination Station--</option>
// //           {stations.map((station) => (
// //             <option key={station.StationID} value={station.StationName}>
// //               {station.StationName}
// //             </option>
// //           ))}
// //         </select>

// //         <input type="date" placeholder="Select Date" />
// //         <button className="search-button">Search</button>
// //         {error && <p className="error">{error}</p>}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MainPage;

// // import React, { useState, useEffect } from "react";
// // import axiosInstance from "../utils/axiosInstance";
// // import "../styles/MainPage.css";

// // const MainPage = () => {
// //   const [stations, setStations] = useState([]);
// //   const [sourceStation, setSourceStation] = useState("");
// //   const [destinationStation, setDestinationStation] = useState("");
// //   const [travelDate, setTravelDate] = useState("");
// //   const [schedules, setSchedules] = useState([]);
// //   const [error, setError] = useState("");
// //   const [time, setTime] = useState("");

// //   // Fetch stations
// //   const fetchStations = async () => {
// //     try {
// //       const response = await axiosInstance.get("/stations");
// //       setStations(response.data.stations);
// //     } catch (err) {
// //       console.error("Error fetching stations:", err);
// //       setError("Failed to load stations. Please try again.");
// //     }
// //   };

// //   // Real-time clock
// //   useEffect(() => {
// //     fetchStations();
// //     const interval = setInterval(() => {
// //       const now = new Date();
// //       setTime(now.toLocaleTimeString());
// //     }, 1000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   // Fetch train schedules
// //   const handleSearch = async () => {
// //     if (!sourceStation || !destinationStation || !travelDate) {
// //       setError("Please fill all fields.");
// //       return;
// //     }
// //     setError(""); // Clear error

// //     try {
// //       const response = await axiosInstance.get("/train-schedules", {
// //         params: {
// //           originStation: sourceStation,
// //           destinationStation,
// //           travelDate,
// //         },
// //       });
// //       setSchedules(response.data.trainSchedules);
// //     } catch (err) {
// //       console.error("Error fetching train schedules:", err);
// //       setError("No train schedules available.");
// //     }
// //   };

// //   return (
// //     <div className="main-page">
// //       {/* Header */}
// //       <header className="header">
// //         <h1>Railway Reservation System</h1>
// //         <div className="header-actions">
// //           <a href="/login">Sign In</a>
// //           <a href="/signup">Sign Up</a>
// //         </div>
// //         <div className="real-time-clock">{time}</div>
// //       </header>

// //       {/* Search Form */}
// //       <div className="search-container">
// //         <h2>Search Train</h2>
// //         <select value={sourceStation} onChange={(e) => setSourceStation(e.target.value)}>
// //           <option value="">--Source Station--</option>
// //           {stations.map((station) => (
// //             <option key={station.StationID} value={station.StationName}>
// //               {station.StationName}
// //             </option>
// //           ))}
// //         </select>

// //         <select value={destinationStation} onChange={(e) => setDestinationStation(e.target.value)}>
// //           <option value="">--Destination Station--</option>
// //           {stations.map((station) => (
// //             <option key={station.StationID} value={station.StationName}>
// //               {station.StationName}
// //             </option>
// //           ))}
// //         </select>

// //         <input
// //           type="date"
// //           value={travelDate}
// //           onChange={(e) => setTravelDate(e.target.value)}
// //         />
// //         <button className="search-button" onClick={handleSearch}>Search</button>

// //         {error && <p className="error">{error}</p>}
// //       </div>

// //       {/* Display Schedules */}
// //       {schedules.length > 0 && (
// //         <div className="schedules-table">
// //           <h2>Available Train Schedules</h2>
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Train ID</th>
// //                 <th>Transit Line</th>
// //                 <th>Departure Time</th>
// //                 <th>Arrival Time</th>
// //                 <th>Travel Time</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {schedules.map((schedule) => (
// //                 <tr key={schedule.ScheduleID}>
// //                   <td>{schedule.TrainID}</td>
// //                   <td>{schedule.TransitLineName}</td>
// //                   <td>{new Date(schedule.DepartureDateTime).toLocaleString()}</td>
// //                   <td>{new Date(schedule.ArrivalDateTime).toLocaleString()}</td>
// //                   <td>{schedule.TravelTime}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default MainPage;

// // import React, { useState, useEffect } from "react";
// // import axiosInstance from "../utils/axiosInstance";
// // import "../styles/MainPage.css";

// // const MainPage = () => {
// //   const [stations, setStations] = useState([]);
// //   const [sourceStation, setSourceStation] = useState("");
// //   const [destinationStation, setDestinationStation] = useState("");
// //   const [travelDate, setTravelDate] = useState("");
// //   const [error, setError] = useState("");
// //   const [time, setTime] = useState("");

// //   // Fetch stations
// //   useEffect(() => {
// //     const fetchStations = async () => {
// //       try {
// //         const response = await axiosInstance.get("/stations");
// //         setStations(response.data.stations);
// //       } catch (err) {
// //         console.error("Error fetching stations:", err);
// //         setError("Failed to load stations.");
// //       }
// //     };
// //     fetchStations();

// //     // Real-time clock
// //     const interval = setInterval(() => {
// //       setTime(new Date().toLocaleTimeString());
// //     }, 1000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   const handleSearch = async () => {
// //     if (!sourceStation || !destinationStation || !travelDate) {
// //       setError("Please select all fields.");
// //       return;
// //     }
// //     setError(""); // Clear any previous errors
  
// //     try {
// //       const response = await axiosInstance.get("/mainPage/train-schedules", {
// //         params: {
// //           sourceStation,
// //           destinationStation,
// //           travelDate,
// //         },
// //       });
// //       console.log("Train Schedules:", response.data.schedules);
// //       // Here you can set state to display the schedules in a table
// //     } catch (err) {
// //       console.error("Error fetching train schedules:", err);
// //       setError("Failed to fetch train schedules.");
// //     }
// //   };
  

// //   return (
// //     <div className="main-page">
// //       <header className="header">
// //         <h1>Railway Reservation System</h1>
// //         <div className="header-actions">
// //           <a href="/login">Sign In</a>
// //           <a href="/signup">Sign Up</a>
// //         </div>
// //         <div className="real-time-clock">{time}</div>
// //       </header>

// //       <div className="search-container">
// //         <h2>Search Train</h2>
// //         <select value={sourceStation} onChange={(e) => setSourceStation(e.target.value)}>
// //           <option value="">--Source Station--</option>
// //           {stations.map((station) => (
// //             <option key={station.StationID} value={station.StationName}>
// //               {station.StationName}
// //             </option>
// //           ))}
// //         </select>

// //         <select value={destinationStation} onChange={(e) => setDestinationStation(e.target.value)}>
// //           <option value="">--Destination Station--</option>
// //           {stations.map((station) => (
// //             <option key={station.StationID} value={station.StationName}>
// //               {station.StationName}
// //             </option>
// //           ))}
// //         </select>

// //         <input
// //           type="date"
// //           value={travelDate}
// //           onChange={(e) => setTravelDate(e.target.value)}
// //         />
// //         <button className="search-button" onClick={handleSearch}>
// //           Search
// //         </button>

// //         {error && <p className="error">{error}</p>}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MainPage;


// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import "../styles.css";

// // const MainPage = () => {
// //   const [stations, setStations] = useState([]);
// //   const [originStation, setOriginStation] = useState("");
// //   const [destinationStation, setDestinationStation] = useState("");
// //   const [travelDate, setTravelDate] = useState("");
// //   const [schedules, setSchedules] = useState([]);
// //   const [error, setError] = useState("");

// //   // Fetch available stations
// //   useEffect(() => {
// //     const fetchStations = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:3000/api/stations");
// //         setStations(response.data.stations);
// //       } catch (err) {
// //         console.error("Error fetching stations:", err);
// //       }
// //     };
// //     fetchStations();
// //   }, []);

// //   // Handle Search Train Schedules
// //   const handleSearch = async () => {
// //     if (!originStation || !destinationStation || !travelDate) {
// //       setError("Please select all fields.");
// //       return;
// //     }
// //     setError(""); // Clear any previous errors

// //     try {
// //       const response = await axios.get(
// //         "http://localhost:3000/api/mainPage/train-schedules",
// //         {
// //           params: {
// //             originStation,
// //             destinationStation,
// //             travelDate,
// //           },
// //         }
// //       );
// //       setSchedules(response.data.trainSchedules);
// //     } catch (err) {
// //       console.error("Error fetching train schedules:", err);
// //       setError("Failed to fetch train schedules. Try again later.");
// //     }
// //   };

// //   return (
// //     <div className="main-page">
// //       <div className="header">
// //         <h1>Railway Reservation System</h1>
// //         <div className="header-links">
// //           <a href="/login">Sign In</a>
// //           <a href="/signup">Sign Up</a>
// //         </div>
// //         <div className="time">{new Date().toLocaleTimeString()}</div>
// //       </div>

// //       <div className="search-container">
// //         <h2>Search Train</h2>
// //         <select
// //           value={originStation}
// //           onChange={(e) => setOriginStation(e.target.value)}
// //         >
// //           <option value="">--Source Station--</option>
// //           {stations.map((station) => (
// //             <option key={station.StationID} value={station.StationName}>
// //               {station.StationName}
// //             </option>
// //           ))}
// //         </select>

// //         <select
// //           value={destinationStation}
// //           onChange={(e) => setDestinationStation(e.target.value)}
// //         >
// //           <option value="">--Destination Station--</option>
// //           {stations.map((station) => (
// //             <option key={station.StationID} value={station.StationName}>
// //               {station.StationName}
// //             </option>
// //           ))}
// //         </select>

// //         <input
// //           type="date"
// //           value={travelDate}
// //           onChange={(e) => setTravelDate(e.target.value)}
// //         />

// //         <button className="search-button" onClick={handleSearch}>
// //           Search
// //         </button>
// //         {error && <p className="error">{error}</p>}
// //       </div>

// //       {/* Train Schedule Results */}
// //       {schedules.length > 0 && (
// //         <div className="results-container">
// //           <h3>Available Train Schedules</h3>
// //           <table className="schedules-table">
// //             <thead>
// //               <tr>
// //                 <th>Train ID</th>
// //                 <th>Origin</th>
// //                 <th>Destination</th>
// //                 <th>Departure Time</th>
// //                 <th>Arrival Time</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {schedules.map((schedule) => (
// //                 <tr key={schedule.ScheduleID}>
// //                   <td>{schedule.TrainID}</td>
// //                   <td>{schedule.OriginStation}</td>
// //                   <td>{schedule.DestinationStation}</td>
// //                   <td>{new Date(schedule.DepartureDateTime).toLocaleString()}</td>
// //                   <td>{new Date(schedule.ArrivalDateTime).toLocaleString()}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default MainPage;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles.css";

// const MainPage = () => {
//   const [stations, setStations] = useState([]);
//   const [originStation, setOriginStation] = useState("");
//   const [destinationStation, setDestinationStation] = useState("");
//   const [travelDate, setTravelDate] = useState("");
//   const [schedules, setSchedules] = useState([]);
//   const [error, setError] = useState("");
//   const [trainDetails, setTrainDetails] = useState(null); // Train details
//   const [sortedSchedules, setSortedSchedules] = useState([]);
//   const [sortField, setSortField] = useState("");

//   // Fetch available stations
//   useEffect(() => {
//     const fetchStations = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/stations");
//         setStations(response.data.stations);
//       } catch (err) {
//         console.error("Error fetching stations:", err);
//       }
//     };
//     fetchStations();
//   }, []);

//   const handleSort = (field) => {
//     const sortedData = [...schedules].sort((a, b) => {
//       const dateA = new Date(a[field]);
//       const dateB = new Date(b[field]);
//       return dateA - dateB;
//     });

//     setSortedSchedules(sortedData);
//     setSortField(field);
//   };

//   // Handle Search Train Schedules
//   const handleSearch = async () => {
//     if (!originStation || !destinationStation || !travelDate) {
//       setError("Please select all fields.");
//       return;
//     }
//     setError("");

//     try {
//       const response = await axios.get(
//         "http://localhost:3000/api/mainPage/train-schedules",
//         {
//           params: { originStation, destinationStation, travelDate },
//         }
//       );
//       setSchedules(response.data.trainSchedules);
//       setSortedSchedules(response.data.trainSchedules);
//     } catch (err) {
//       console.error("Error fetching train schedules:", err);
//       setError("Failed to fetch train schedules. Try again later.");
//     }
//   };

//   // Fetch Train Details
//   const fetchTrainDetails = async (scheduleID) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3000/api/mainPage/train-schedules/${scheduleID}/stops`
//       );
//       setTrainDetails(response.data); // Set train details
//       console.log(response.data.Stops);
//     } catch (err) {
//       console.error("Error fetching train details:", err);
//       setError("Failed to fetch train details. Try again later.");
//     }
//   };

//   const getStopsBetweenStations = (stops) => {
//     // Find the indices of startStation and endStation
//     const startIndex = stops.findIndex(
//       (stop) => stop.StationName === originStation
//     );
//     const endIndex = stops.findIndex(
//       (stop) => stop.StationName === destinationStation
//     );
  
//     // If stations are not found or in the wrong order
//     if (startIndex === -1 || endIndex === -1 || startIndex > endIndex) {
//       console.error("Invalid start or destination station.");
//       return [];
//     }
  
//     // Return the subarray of stops
//     return stops.slice(startIndex, endIndex + 1);
//   };

//   return (
//     <div className="main-page">
//       <div className="header">
//         <h1>Railway Reservation System</h1>
//         <div className="header-links">
//           <a href="/login">Sign In</a>
//           <a href="/signup">Sign Up</a>
//         </div>
//         <div className="time">{new Date().toLocaleTimeString()}</div>
//       </div>

//       <div className="search-container">
//         <h2>Search Train</h2>
//         <select
//           value={originStation}
//           onChange={(e) => setOriginStation(e.target.value)}
//         >
//           <option value="">--Source Station--</option>
//           {stations.map((station) => (
//             <option key={station.StationID} value={station.StationName}>
//               {station.StationName}
//             </option>
//           ))}
//         </select>

//         <select
//           value={destinationStation}
//           onChange={(e) => setDestinationStation(e.target.value)}
//         >
//           <option value="">--Destination Station--</option>
//           {stations.map((station) => (
//             <option key={station.StationID} value={station.StationName}>
//               {station.StationName}
//             </option>
//           ))}
//         </select>

//         <input
//           type="date"
//           value={travelDate}
//           onChange={(e) => setTravelDate(e.target.value)}
//         />

//         <button className="search-button" onClick={handleSearch}>
//           Search
//         </button>
//         {error && <p className="error">{error}</p>}
//       </div>

//       <div className="sorting-buttons">
//         <button onClick={() => handleSort("ArrivalDateTime")}>
//           Sort by Arrival Time
//         </button>
//         <button onClick={() => handleSort("DepartureDateTime")}>
//           Sort by Departure Time
//         </button>
//       </div>

//       {/* Train Schedule Results */}
//       {schedules.length > 0 && (
//         <div className="results-container">
//           <h3>Available Train Schedules</h3>
//           <table className="schedules-table">
//             <thead>
//               <tr>
//                 <th>Train ID</th>
//                 <th>Origin</th>
//                 <th>Destination</th>
//                 <th>Departure Time</th>
//                 <th>Arrival Time</th>
//                 <th>Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sortedSchedules.map((schedule) => (
//                 <tr key={schedule.ScheduleID}>
//                   <td>{schedule.TrainID}</td>
//                   <td>{schedule.OriginStation}</td>
//                   <td>{schedule.DestinationStation}</td>
//                   <td>{new Date(schedule.DepartureDateTime).toLocaleString()}</td>
//                   <td>{new Date(schedule.ArrivalDateTime).toLocaleString()}</td>
//                   <td>
//                     <button
//                       className="details-button"
//                       onClick={() => fetchTrainDetails(schedule.ScheduleID)}
//                     >
//                       View Details
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Train Details */}
//       {trainDetails && ( 
//         <div className="train-details">
//           <h3>Train Details</h3>
//           <p><strong>Fare:</strong> ${trainDetails.BaseFare}</p>
//           <h4>Stops:</h4>
//           <ul>
//             {/* {trainDetails.Stops.map((stop, index) => (
//               <li key={index}>
//                 {stop.StationName} - Arrival:{" "}
//                 {new Date(stop.ArrivalDateTime).toLocaleString()}, Departure:{" "}
//                 {new Date(stop.DepartureDateTime).toLocaleString()}
//               </li>
//             ))} */}
//           </ul>
//           <tbody>
//         {getStopsBetweenStations(trainDetails.Stops).map((stop, idx) => (
//     <tr key={idx}>
//       <td>{stop.StationName}</td>
//       <td>{new Date(stop.ArrivalDateTime).toLocaleString()}</td>
//       <td>{new Date(stop.DepartureDateTime).toLocaleString()}</td>
//       {/* <td>${stop.BaseFare.toFixed(2)}</td> */}
//     </tr>
//   ))}
// </tbody>

//         </div>
        
//       )}
//     </div>
//   );
// };

// export default MainPage;


import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../styles.css";

const MainPage = () => {
  const [stations, setStations] = useState([]);
  const [originStation, setOriginStation] = useState("");
  const [destinationStation, setDestinationStation] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [sortedSchedules, setSortedSchedules] = useState([]);
  const [trainDetails, setTrainDetails] = useState(null);
  const [error, setError] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [time, setTime] = useState("");

  // Fetch available stations
  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/stations");
        setStations(response.data.stations);
      } catch (err) {
        console.error("Error fetching stations:", err);
        setError("Failed to load stations.");
      }
    };

    fetchStations();

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle Search Train Schedules
  const handleSearch = async () => {
    if (!originStation || !destinationStation || !travelDate) {
      setError("Please select all fields.");
      return;
    }
    setError("");

    try {
      const response = await axios.get(
        "http://localhost:3000/api/mainPage/train-schedules",
        {
          params: { originStation, destinationStation, travelDate },
        }
      );
      setSchedules(response.data.trainSchedules);
      setSortedSchedules(response.data.trainSchedules);
    } catch (err) {
      console.error("Error fetching train schedules:", err);
      setError("Failed to fetch train schedules.");
    }
  };

  // Sorting Logic
  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    const sortedData = [...schedules].sort((a, b) => {
      const dateA = new Date(a[field]);
      const dateB = new Date(b[field]);
      return order === "asc" ? dateA - dateB : dateB - dateA;
    });

    setSortedSchedules(sortedData);
    setSortField(field);
    setSortOrder(order);
  };

  // Fetch Train Details
  const fetchTrainDetails = async (scheduleID) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/mainPage/train-schedules/${scheduleID}/stops`
      );
      setTrainDetails(response.data);
    } catch (err) {
      console.error("Error fetching train details:", err);
      setError("Failed to fetch train details.");
    }
  };

  const getFare =  async (scheduleID) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/mainPage/train-schedules/${scheduleID}/stops`
      );
      return getFareForStations(response.data);
    } catch (err) {
      console.error("Error fetching train details:", err);
      setError("Failed to fetch train details.");
    }
  };

  // Get Stops between Source and Destination
  const getStopsBetweenStations = (stops) => {
    const startIndex = stops.findIndex(
      (stop) => stop.StationName === originStation
    );
    const endIndex = stops.findIndex(
      (stop) => stop.StationName === destinationStation
    );

    if (startIndex === -1 || endIndex === -1 || startIndex > endIndex) {
      return stops; // Fallback to showing all stops
    }
    return stops.slice(startIndex, endIndex + 1);
  };

  const getFareForStations = (responseData) => {
    const stopCount = responseData.Stops.length - 1;
    const farePerStop = responseData.BaseFare / stopCount;

    const x = (getStopsBetweenStations(responseData.Stops).length - 1 )* farePerStop;
    return x;
  }

  return (
    <div className="main-page">
      {/* Header */}
      <div className="header">
        <h1>Railway Reservation System</h1>
        <div className="header-links">
          <a href="/login">Sign In</a>
          <a href="/signup">Sign Up</a>
        </div>
        <div className="time">{time}</div>
      </div>

      {/* Search Form */}
      <div className="search-container">
        <h2>Search Train</h2>
        <select value={originStation} onChange={(e) => setOriginStation(e.target.value)}>
          <option value="">--Source Station--</option>
          {stations.map((station) => (
            <option key={station.StationID} value={station.StationName}>
              {station.StationName}
            </option>
          ))}
        </select>

        <select value={destinationStation} onChange={(e) => setDestinationStation(e.target.value)}>
          <option value="">--Destination Station--</option>
          {stations.map((station) => (
            <option key={station.StationID} value={station.StationName}>
              {station.StationName}
            </option>
          ))}
        </select>

        <input type="date" value={travelDate} onChange={(e) => setTravelDate(e.target.value)} />
        <button className="search-button" onClick={handleSearch}>Search</button>
        {error && <p className="error">{error}</p>}
      </div>


      {/* Train Schedules */}
      {sortedSchedules.length > 0 && (
        <div className="results-container">
          <h3>Available Train Schedules</h3>
           {/* Sorting Buttons */}
      <div className="sorting-buttons">
        <button onClick={() => handleSort("ArrivalDateTime")}>Sort by Arrival Time</button>
        <button onClick={() => handleSort("DepartureDateTime")}>Sort by Departure Time</button>
      </div>
          <table className="schedules-table">
            <thead>
              <tr>
                <th>Train ID</th>
                <th>Transit Line</th>
                <th>Departure Time</th>
                <th>Arrival Time</th>
                <th>Fare</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {sortedSchedules.map((schedule) => (
                <tr key={schedule.ScheduleID}>
                  <td>{schedule.TrainID}</td>
                  <td>{schedule.TransitLineName}</td>
                  <td>{new Date(schedule.DepartureDateTime).toLocaleString()}</td>
                  <td>{new Date(schedule.ArrivalDateTime).toLocaleString()}</td>
                  {/* <td>{getFare(schedule.ScheduleID)}</td> */}
                  <td>{"$10"}</td>
                  <td>
                    <button onClick={() => fetchTrainDetails(schedule.ScheduleID)}>
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Train Details */}
      {trainDetails && (
        <div className="train-details">
          <h3>Train Details</h3>
          {/* <p><strong>Fare:</strong> ${trainDetails.BaseFare}</p> */}
          <p><strong>Fare:</strong> ${getFareForStations(trainDetails)}</p>
          <h4>Stops:</h4>
          <table>
            <thead>
              <tr>
                <th>Station</th>
                <th>Arrival</th>
                <th>Departure</th>
              </tr>
            </thead>
            <tbody>
              {getStopsBetweenStations(trainDetails.Stops).map((stop, idx) => (
                <tr key={idx}>
                  <td>{stop.StationName}</td>
                  <td>{new Date(stop.ArrivalDateTime).toLocaleString()}</td>
                  <td>{new Date(stop.DepartureDateTime).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MainPage;
