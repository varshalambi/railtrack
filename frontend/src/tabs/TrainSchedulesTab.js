
// // // // // TrainSchedulesTab.js
// // // // import React, { useState } from 'react';
// // // // import axiosInstance from '../utils/axiosInstance';

// // // // const TrainSchedulesTab = ({ stations }) => {
// // // //   const [originStation, setOriginStation] = useState('');
// // // //   const [destinationStation, setDestinationStation] = useState('');
// // // //   const [travelDate, setTravelDate] = useState('');
// // // //   const [availableSchedules, setAvailableSchedules] = useState([]);
// // // //   const [error, setError] = useState('');

// // // //   const handleSearchSchedules = async () => {
// // // //     if (!originStation || !destinationStation || !travelDate) {
// // // //       setError('Please select all fields.');
// // // //       return;
// // // //     }
// // // //     try {
// // // //       const response = await axiosInstance.get('/customer/train-schedules', {
// // // //         params: {
// // // //           originStation,
// // // //           destinationStation,
// // // //           travelDate,
// // // //         },
// // // //       });
// // // //       setAvailableSchedules(response.data.trainSchedules);
// // // //       setError('');
// // // //     } catch (err) {
// // // //       console.error('Error fetching train schedules:', err);
// // // //       setError('Failed to fetch train schedules.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h3>Search & Book Train Schedules</h3>
// // // //       <div>
// // // //         <select
// // // //           value={originStation}
// // // //           onChange={(e) => setOriginStation(e.target.value)}
// // // //         >
// // // //           <option value="">Select Origin Station</option>
// // // //           {stations.map((station) => (
// // // //             <option key={station.StationID} value={station.StationName}>
// // // //               {station.StationName}
// // // //             </option>
// // // //           ))}
// // // //         </select>
// // // //         <select
// // // //           value={destinationStation}
// // // //           onChange={(e) => setDestinationStation(e.target.value)}
// // // //         >
// // // //           <option value="">Select Destination Station</option>
// // // //           {stations.map((station) => (
// // // //             <option key={station.StationID} value={station.StationName}>
// // // //               {station.StationName}
// // // //             </option>
// // // //           ))}
// // // //         </select>
// // // //         <input
// // // //           type="date"
// // // //           value={travelDate}
// // // //           onChange={(e) => setTravelDate(e.target.value)}
// // // //         />
// // // //         <button onClick={handleSearchSchedules}>Search Schedules</button>
// // // //       </div>

// // // //       {error && <p className="error">{error}</p>}

// // // //       {availableSchedules.length > 0 && (
// // // //         <table>
// // // //           <thead>
// // // //             <tr>
// // // //               <th>Schedule ID</th>
// // // //               <th>Transit Line Name</th>
// // // //               <th>Departure Time</th>
// // // //               <th>Arrival Time</th>
// // // //               <th>Action</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {availableSchedules.map((schedule) => (
// // // //               <tr key={schedule.ScheduleID}>
// // // //                 <td>{schedule.ScheduleID}</td>
// // // //                 <td>{schedule.TransitLineName}</td>
// // // //                 <td>{schedule.DepartureDateTime}</td>
// // // //                 <td>{schedule.ArrivalDateTime}</td>
// // // //                 <td>
// // // //                   <button>Book Now</button>
// // // //                 </td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TrainSchedulesTab;

// // // // import React, { useState } from 'react';
// // // // import axiosInstance from '../utils/axiosInstance';

// // // // const TrainSchedulesTab = ({ stations }) => {
// // // //   const [originStation, setOriginStation] = useState('');
// // // //   const [destinationStation, setDestinationStation] = useState('');
// // // //   const [travelDate, setTravelDate] = useState('');
// // // //   const [availableSchedules, setAvailableSchedules] = useState([]);
// // // //   const [error, setError] = useState('');
// // // //   const [successMessage, setSuccessMessage] = useState('');

// // // //   const handleSearchSchedules = async () => {
// // // //     if (!originStation || !destinationStation || !travelDate) {
// // // //       setError('Please select all fields.');
// // // //       return;
// // // //     }
// // // //     try {
// // // //       const response = await axiosInstance.get('/customer/train-schedules', {
// // // //         params: {
// // // //           originStation,
// // // //           destinationStation,
// // // //           travelDate,
// // // //         },
// // // //       });
// // // //       setAvailableSchedules(response.data.trainSchedules);
// // // //       setError('');
// // // //     } catch (err) {
// // // //       console.error('Error fetching train schedules:', err);
// // // //       setError('Failed to fetch train schedules.');
// // // //     }
// // // //   };

// // // //   const handleBookNow = async (scheduleId) => {
// // // //     try {
// // // //       // Assuming the API takes `scheduleId` and creates a reservation
// // // //       await axiosInstance.post('/customer/reservations', {
// // // //         scheduleId,
// // // //         tripType: 'one-way', // or 'round-trip' depending on your logic
// // // //       });
// // // //       setSuccessMessage('Reservation successfully booked!');
// // // //       setError('');
// // // //     } catch (err) {
// // // //       console.error('Error booking reservation:', err);
// // // //       setError('Failed to book reservation.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h3>Search & Book Train Schedules</h3>
// // // //       <div>
// // // //         <select
// // // //           value={originStation}
// // // //           onChange={(e) => setOriginStation(e.target.value)}
// // // //         >
// // // //           <option value="">Select Origin Station</option>
// // // //           {stations.map((station) => (
// // // //             <option key={station.StationID} value={station.StationName}>
// // // //               {station.StationName}
// // // //             </option>
// // // //           ))}
// // // //         </select>
// // // //         <select
// // // //           value={destinationStation}
// // // //           onChange={(e) => setDestinationStation(e.target.value)}
// // // //         >
// // // //           <option value="">Select Destination Station</option>
// // // //           {stations.map((station) => (
// // // //             <option key={station.StationID} value={station.StationName}>
// // // //               {station.StationName}
// // // //             </option>
// // // //           ))}
// // // //         </select>
// // // //         <input
// // // //           type="date"
// // // //           value={travelDate}
// // // //           onChange={(e) => setTravelDate(e.target.value)}
// // // //         />
// // // //         <button onClick={handleSearchSchedules}>Search Schedules</button>
// // // //       </div>

// // // //       {error && <p className="error">{error}</p>}
// // // //       {successMessage && <p className="success">{successMessage}</p>}

// // // //       {availableSchedules.length > 0 && (
// // // //         <table>
// // // //           <thead>
// // // //             <tr>
// // // //               <th>Schedule ID</th>
// // // //               <th>Transit Line Name</th>
// // // //               <th>Departure Time</th>
// // // //               <th>Arrival Time</th>
// // // //               <th>Action</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {availableSchedules.map((schedule) => (
// // // //               <tr key={schedule.ScheduleID}>
// // // //                 <td>{schedule.ScheduleID}</td>
// // // //                 <td>{schedule.TransitLineName}</td>
// // // //                 <td>{new Date(schedule.DepartureDateTime).toLocaleString()}</td>
// // // //                 <td>{new Date(schedule.ArrivalDateTime).toLocaleString()}</td>
// // // //                 <td>
// // // //                   <button onClick={() => handleBookNow(schedule.ScheduleID)}>
// // // //                     Book Now
// // // //                   </button>
// // // //                 </td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TrainSchedulesTab;

// // // // TrainSchedulesTab.js
// // // import React, { useState } from 'react';
// // // import axiosInstance from '../utils/axiosInstance';

// // // const TrainSchedulesTab = ({ stations, customerId }) => {
// // //   const [originStation, setOriginStation] = useState('');
// // //   const [destinationStation, setDestinationStation] = useState('');
// // //   const [travelDate, setTravelDate] = useState('');
// // //   const [availableSchedules, setAvailableSchedules] = useState([]);
// // //   const [error, setError] = useState('');
// // //   const [success, setSuccess] = useState('');

// // //   const handleSearchSchedules = async () => {
// // //     if (!originStation || !destinationStation || !travelDate) {
// // //       setError('Please select all fields.');
// // //       setSuccess('');
// // //       return;
// // //     }
// // //     try {
// // //       const response = await axiosInstance.get('/customer/train-schedules', {
// // //         params: {
// // //           originStation,
// // //           destinationStation,
// // //           travelDate,
// // //         },
// // //       });
// // //       setAvailableSchedules(response.data.trainSchedules);
// // //       setError('');
// // //     } catch (err) {
// // //       console.error('Error fetching train schedules:', err);
// // //       setError('Failed to fetch train schedules.');
// // //       setSuccess('');
// // //     }
// // //   };

// // //   const handleBookNow = async (scheduleId) => {
// // //     try {
// // //       const payload = {
// // //         customerId,
// // //         scheduleId,
// // //         originStation,
// // //         destinationStation,
// // //         tripType: 'one-way', // Adjust if you want to allow round-trip bookings
// // //       };
// // //       const response = await axiosInstance.post('/customer/reservations', payload);
// // //       setSuccess('Reservation successfully booked!');
// // //       setError('');
// // //     } catch (err) {
// // //       console.error('Error booking reservation:', err);
// // //       setError('Failed to book reservation.');
// // //       setSuccess('');
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h3>Search & Book Train Schedules</h3>
// // //       <div>
// // //         <select
// // //           value={originStation}
// // //           onChange={(e) => setOriginStation(e.target.value)}
// // //         >
// // //           <option value="">Select Origin Station</option>
// // //           {stations.map((station) => (
// // //             <option key={station.StationID} value={station.StationName}>
// // //               {station.StationName}
// // //             </option>
// // //           ))}
// // //         </select>
// // //         <select
// // //           value={destinationStation}
// // //           onChange={(e) => setDestinationStation(e.target.value)}
// // //         >
// // //           <option value="">Select Destination Station</option>
// // //           {stations.map((station) => (
// // //             <option key={station.StationID} value={station.StationName}>
// // //               {station.StationName}
// // //             </option>
// // //           ))}
// // //         </select>
// // //         <input
// // //           type="date"
// // //           value={travelDate}
// // //           onChange={(e) => setTravelDate(e.target.value)}
// // //         />
// // //         <button onClick={handleSearchSchedules}>Search Schedules</button>
// // //       </div>

// // //       {error && <p className="error">{error}</p>}
// // //       {success && <p className="success">{success}</p>}

// // //       {availableSchedules.length > 0 && (
// // //         <table>
// // //           <thead>
// // //             <tr>
// // //               <th>Schedule ID</th>
// // //               <th>Transit Line Name</th>
// // //               <th>Departure Time</th>
// // //               <th>Arrival Time</th>
// // //               <th>Action</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {availableSchedules.map((schedule) => (
// // //               <tr key={schedule.ScheduleID}>
// // //                 <td>{schedule.ScheduleID}</td>
// // //                 <td>{schedule.TransitLineName}</td>
// // //                 <td>{schedule.DepartureDateTime}</td>
// // //                 <td>{schedule.ArrivalDateTime}</td>
// // //                 <td>
// // //                   <button onClick={() => handleBookNow(schedule.ScheduleID)}>
// // //                     Book Now
// // //                   </button>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default TrainSchedulesTab;

// // // TrainSchedulesTab.js
// // import React, { useState, useEffect } from "react";
// // import axiosInstance from "../utils/axiosInstance";

// // const TrainSchedulesTab = ({ stations }) => {
// //   const [originStation, setOriginStation] = useState("");
// //   const [destinationStation, setDestinationStation] = useState("");
// //   const [travelDate, setTravelDate] = useState("");
// //   const [availableSchedules, setAvailableSchedules] = useState([]);
// //   const [error, setError] = useState("");
// //   const [selectedSchedule, setSelectedSchedule] = useState(null);
// //   const [passengerType, setPassengerType] = useState("adult");
// //   const [reservationDetails, setReservationDetails] = useState(null);

// //   useEffect(() => {
// //     // Clear selected schedule when inputs change
// //     setSelectedSchedule(null);
// //   }, [originStation, destinationStation, travelDate]);

// //   const handleSearchSchedules = async () => {
// //     if (!originStation || !destinationStation || !travelDate) {
// //       setError("Please select all fields.");
// //       return;
// //     }
// //     try {
// //       const response = await axiosInstance.get("/customer/train-schedules", {
// //         params: {
// //           originStation,
// //           destinationStation,
// //           travelDate,
// //         },
// //       });
// //       setAvailableSchedules(response.data.trainSchedules);
// //       setError("");
// //     } catch (err) {
// //       console.error("Error fetching train schedules:", err);
// //       setError("Failed to fetch train schedules.");
// //     }
// //   };

// //   const handleBookNow = async (schedule) => {
// //     const customerId = localStorage.getItem('customerId'); // Retrieve customer ID from localStorage
  
// //     if (!customerId) {
// //       setError('Customer ID not found. Please log in again.');
// //       return;
// //     }
  
// //     try {
// //       const response = await axiosInstance.post('/customer/reservations', {
// //         customerId,
// //         transitLineName: schedule.TransitLineName,
// //         originStation,
// //         destinationStation,
// //         travelDate,
// //         tripType: "One-Way",
// //         isRoundTrip: false,
// //         passengerType,
// //       });
  
// //       setReservationDetails({
// //         reservationId: response.data.reservationId,
// //         fare: response.data.fare,
// //       });
  
// //       setError('');
// //     } catch (err) {
// //       console.error('Error creating reservation:', err);
// //       setError('Failed to create reservation. Please try again.');
// //     }
// //   };
  

// //   return (
// //     <div>
// //       <h3>Search & Book Train Schedules</h3>
// //       <div>
// //         <select
// //           value={originStation}
// //           onChange={(e) => setOriginStation(e.target.value)}
// //         >
// //           <option value="">Select Origin Station</option>
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
// //           <option value="">Select Destination Station</option>
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
// //         <button onClick={handleSearchSchedules}>Search Schedules</button>
// //       </div>

// //       {error && <p className="error">{error}</p>}

// //       {availableSchedules.length > 0 && (
// //         <div>
// //           <h4>Available Train Schedules</h4>
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Schedule ID</th>
// //                 <th>Transit Line Name</th>
// //                 <th>Departure Time</th>
// //                 <th>Arrival Time</th>
// //                 <th>Action</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {availableSchedules.map((schedule) => (
// //                 <tr key={schedule.ScheduleID}>
// //                   <td>{schedule.ScheduleID}</td>
// //                   <td>{schedule.TransitLineName}</td>
// //                   <td>{schedule.DepartureDateTime}</td>
// //                   <td>{schedule.ArrivalDateTime}</td>
// //                   <td>
// //                     <button onClick={() => handleBookNow(schedule)}>
// //                       Book Now
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}

// //       {selectedSchedule && (
// //         <div>
// //           <h4>Passenger Details</h4>
// //           <select
// //             value={passengerType}
// //             onChange={(e) => setPassengerType(e.target.value)}
// //           >
// //             <option value="adult">Adult</option>
// //             <option value="child">Child</option>
// //             <option value="senior">Senior</option>
// //             <option value="disabled">Disabled</option>
// //           </select>
// //           <button onClick={handleBookNow}>Confirm Reservation</button>
// //         </div>
// //       )}

// //       {reservationDetails && (
// //         <div>
// //           <h4>Reservation Successful!</h4>
// //           <p>Reservation ID: {reservationDetails.reservationId}</p>
// //           <p>Total Fare: ${reservationDetails.fare}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default TrainSchedulesTab;


// import React, { useState, useEffect } from "react";
// import axiosInstance from "../utils/axiosInstance";

// const TrainSchedulesTab = ({ stations }) => {
//   const [originStation, setOriginStation] = useState("");
//   const [destinationStation, setDestinationStation] = useState("");
//   const [travelDate, setTravelDate] = useState("");
//   const [availableSchedules, setAvailableSchedules] = useState([]);
//   const [error, setError] = useState("");
//   const [passengerType, setPassengerType] = useState("adult");
//   const [reservationDetails, setReservationDetails] = useState(null);

//   // Clear reservation details when inputs change
//   useEffect(() => {
//     setReservationDetails(null);
//   }, [originStation, destinationStation, travelDate]);

//   // Search for train schedules
//   const handleSearchSchedules = async () => {
//     if (!originStation || !destinationStation || !travelDate) {
//       setError("Please select all fields.");
//       return;
//     }

//     try {
//       const response = await axiosInstance.get("/customer/train-schedules", {
//         params: {
//           originStation,
//           destinationStation,
//           travelDate,
//         },
//       });

//       setAvailableSchedules(response.data.trainSchedules);
//       setError("");
//     } catch (err) {
//       console.error("Error fetching train schedules:", err);
//       setError("Failed to fetch train schedules.");
//     }
//   };

//   // Book a reservation
//   const handleBookNow = async (schedule) => {
//     const customerId = localStorage.getItem("customerId"); // Retrieve customer ID from localStorage
//     if (!customerId) {
//       setError("Customer ID not found. Please log in again.");
//       return;
//     }

//     try {
//       const payload = {
//         customerId,
//         transitLineName: schedule.TransitLineName,
//         originStation,
//         destinationStation,
//         travelDate,
//         tripType: "One-Way", // For now, it defaults to One-Way
//         isRoundTrip: false,
//         passengerType,
//       };

//       const response = await axiosInstance.post("/customer/reservations", payload);
//       setReservationDetails({
//         reservationId: response.data.reservationId,
//         fare: response.data.fare,
//       });
//       setError("");
//     } catch (err) {
//       console.error("Error creating reservation:", err);
//       setError("Failed to create reservation. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h3>Search & Book Train Schedules</h3>

//       {/* Search Inputs */}
//       <div>
//         <select value={originStation} onChange={(e) => setOriginStation(e.target.value)}>
//           <option value="">Select Origin Station</option>
//           {stations.map((station) => (
//             <option key={station.StationID} value={station.StationName}>
//               {station.StationName}
//             </option>
//           ))}
//         </select>

//         <select value={destinationStation} onChange={(e) => setDestinationStation(e.target.value)}>
//           <option value="">Select Destination Station</option>
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

//         <button onClick={handleSearchSchedules}>Search Schedules</button>
//       </div>

//       {/* Error Messages */}
//       {error && <p className="error">{error}</p>}

//       {/* Train Schedule Results */}
//       {availableSchedules.length > 0 && (
//         <div>
//           <h4>Available Train Schedules</h4>
//           <table>
//             <thead>
//               <tr>
//                 <th>Schedule ID</th>
//                 <th>Transit Line Name</th>
//                 <th>Departure Time</th>
//                 <th>Arrival Time</th>
//                 <th>Passenger Type</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {availableSchedules.map((schedule) => (
//                 <tr key={schedule.ScheduleID}>
//                   <td>{schedule.ScheduleID}</td>
//                   <td>{schedule.TransitLineName}</td>
//                   <td>{new Date(schedule.DepartureDateTime).toLocaleString()}</td>
//                   <td>{new Date(schedule.ArrivalDateTime).toLocaleString()}</td>
//                   <td>
//                     <select
//                       value={passengerType}
//                       onChange={(e) => setPassengerType(e.target.value)}
//                     >
//                       <option value="adult">Adult</option>
//                       <option value="child">Child</option>
//                       <option value="senior">Senior</option>
//                       <option value="disabled">Disabled</option>
//                     </select>
//                   </td>
//                   <td>
//                     <button onClick={() => handleBookNow(schedule)}>Book Now</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Success Message */}
//       {reservationDetails && (
//         <div>
//           <h4>Reservation Successful!</h4>
//           <p>Reservation ID: {reservationDetails.reservationId}</p>
//           <p>Total Fare: ${reservationDetails.fare}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrainSchedulesTab;

import React, { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

const TrainSchedulesTab = ({ stations }) => {
  const [originStation, setOriginStation] = useState("");
  const [destinationStation, setDestinationStation] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [availableSchedules, setAvailableSchedules] = useState([]);
  const [error, setError] = useState("");
  const [passengerType, setPassengerType] = useState("adult");
  const [reservationDetails, setReservationDetails] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [roundTrip, setRoundTrip] = useState(false);
  const [loading, setLoading] = useState(false);

  // Clear reservation details when inputs change
  useEffect(() => {
    setReservationDetails(null);
    setSelectedSchedule(null);
  }, [originStation, destinationStation, travelDate]);

  // Search for train schedules
  const handleSearchSchedules = async () => {
    if (!originStation || !destinationStation || !travelDate) {
      setError("Please select all fields.");
      return;
    }

    try {
      setLoading(true);
      const response = await axiosInstance.get("/customer/train-schedules", {
        params: { originStation, destinationStation, travelDate },
      });
      setAvailableSchedules(response.data.trainSchedules);
      setError("");
    } catch (err) {
      console.error("Error fetching train schedules:", err);
      setError("Failed to fetch train schedules.");
    } finally {
      setLoading(false);
    }
  };

  // Book a reservation
  const handleBookNow = async (schedule) => {
    const customerId = localStorage.getItem("customerId"); // Retrieve customer ID from localStorage
    if (!customerId) {
      setError("Customer ID not found. Please log in again.");
      return;
    }

    try {
      setLoading(true);
      const payload = {
        customerId,
        transitLineName: schedule.TransitLineName,
        trainId: schedule.TrainID,
        originStation,
        destinationStation,
        travelDate,
        tripType: roundTrip ? "Two-Way" : "One-Way",
        isRoundTrip: roundTrip,
        passengerType,
      };

      const response = await axiosInstance.post("/customer/reservations", payload);
      setReservationDetails({
        reservationId: response.data.reservationId,
        fare: response.data.fare,
      });
      setError("");
    } catch (err) {
      console.error("Error creating reservation:", err);
      setError("Failed to create reservation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Search & Book Train Schedules</h3>

      {/* Search Inputs */}
      <div>
        <select value={originStation} onChange={(e) => setOriginStation(e.target.value)}>
          <option value="">Select Origin Station</option>
          {stations.map((station) => (
            <option key={station.StationID} value={station.StationName}>
              {station.StationName}
            </option>
          ))}
        </select>

        <select value={destinationStation} onChange={(e) => setDestinationStation(e.target.value)}>
          <option value="">Select Destination Station</option>
          {stations.map((station) => (
            <option key={station.StationID} value={station.StationName}>
              {station.StationName}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
        />

        <button onClick={handleSearchSchedules} disabled={loading}>
          {loading ? "Searching..." : "Search Schedules"}
        </button>
      </div>

      {/* Error Messages */}
      {error && <p className="error">{error}</p>}

      {/* Train Schedule Results */}
      {availableSchedules.length > 0 && (
        <div>
          <h4>Available Train Schedules</h4>
          <table>
      <thead>
        <tr>
          <th>Schedule ID</th>
          <th>Transit Line Name</th>
          <th>Train ID</th>
          <th>Departure Time</th>
          <th>Arrival Time</th>
          <th>Passenger Type</th>
          <th>Round Trip</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {availableSchedules.map((schedule) => (
          <tr key={schedule.ScheduleID}>
            <td>{schedule.ScheduleID}</td>
            <td>{schedule.TransitLineName}</td>
            <td>{schedule.TrainID}</td>
            <td>{new Date(schedule.DepartureDateTime).toLocaleString()}</td>
            <td>{new Date(schedule.ArrivalDateTime).toLocaleString()}</td>
            <td>
              <select
                value={passengerType}
                onChange={(e) => setPassengerType(e.target.value)}
              >
                <option value="adult">Adult</option>
                <option value="child">Child</option>
                <option value="senior">Senior</option>
                <option value="disabled">Disabled</option>
              </select>
            </td>
            <td>
              <input
                type="checkbox"
                onChange={() => setRoundTrip(!roundTrip)}
              />
            </td>
            <td>
              <button onClick={() => handleBookNow(schedule)} disabled={loading}>
                {loading ? "Booking..." : "Book Now"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
      )}

      {/* Success Message */}
      {reservationDetails && (
        <div>
          <h4>Reservation Successful!</h4>
          <p>Reservation ID: {reservationDetails.reservationId}</p>
          <p>Total Fare: ${reservationDetails.fare}</p>
        </div>
      )}
    </div>
  );
};

export default TrainSchedulesTab;
