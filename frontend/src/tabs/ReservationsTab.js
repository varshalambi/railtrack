// import React, { useState, useEffect } from "react";
// import axiosInstance from "../utils/axiosInstance";

// const Reservations = () => {
//   const [reservations, setReservations] = useState([]);
//   const [transitLines, setTransitLines] = useState([]);
//   const [customers, setCustomers] = useState([]);
//   const [filterBy, setFilterBy] = useState("all");
//   const [filterValue, setFilterValue] = useState("");

//   useEffect(() => {
//     // Fetch initial reservation data
//     const fetchReservations = async () => {
//       try {
//         const response = await axiosInstance.get("/admin/reservations");
//         setReservations(response.data.reservations || []);
//       } catch (err) {
//         console.error("Error fetching reservations:", err);
//       }
//     };

//     // Fetch transit lines for dropdown
//     const fetchTransitLines = async () => {
//       try {
//         const response = await axiosInstance.get("/admin/transit-lines");
//         setTransitLines(response.data || []);
//       } catch (err) {
//         console.error("Error fetching transit lines:", err);
//       }
//     };

//     // Fetch customers for dropdown
//     const fetchCustomers = async () => {
//       try {
//         const response = await axiosInstance.get("/admin/customers");
//         setCustomers(response.data || []);
//       } catch (err) {
//         console.error("Error fetching customers:", err);
//       }
//     };

//     fetchReservations();
//     fetchTransitLines();
//     fetchCustomers();
//   }, []);

//   const handleFilterChange = async () => {
//     let endpoint = "/admin/reservations";
//     if (filterBy === "transitLine" && filterValue) {
//       endpoint = `/admin/reservations?transitLine=${filterValue}`;
//     } else if (filterBy === "customer" && filterValue) {
//       endpoint = `/admin/reservations?customerName=${filterValue}`;
//     }

//     try {
//       const response = await axiosInstance.get(endpoint);
//       setReservations(response.data.reservations || []);
//     } catch (err) {
//       console.error("Error filtering reservations:", err);
//     }
//   };

//   return (
//     <div>
//       <h2>Reservations</h2>

//       {/* Filter Dropdowns */}
//       <div style={{ marginBottom: "1rem" }}>
//         <label htmlFor="filterBy">Filter By: </label>
//         <select
//           id="filterBy"
//           value={filterBy}
//           onChange={(e) => setFilterBy(e.target.value)}
//         >
//           <option value="all">All</option>
//           <option value="transitLine">Transit Line</option>
//           <option value="customer">Customer</option>
//         </select>

//         {filterBy === "transitLine" && (
//           <select
//             id="transitLine"
//             value={filterValue}
//             onChange={(e) => setFilterValue(e.target.value)}
//             style={{ marginLeft: "1rem" }}
//           >
//             <option value="">Select Transit Line</option>
//             {transitLines.map((line) => (
//               <option key={line.TransitLineName} value={line.TransitLineName}>
//                 {line.TransitLineName}
//               </option>
//             ))}
//           </select>
//         )}

//         {filterBy === "customer" && (
//           <select
//             id="customer"
//             value={filterValue}
//             onChange={(e) => setFilterValue(e.target.value)}
//             style={{ marginLeft: "1rem" }}
//           >
//             <option value="">Select Customer</option>
//             {customers.map((customer) => (
//               <option
//                 key={customer.CustomerID}
//                 value={`${customer.FirstName} ${customer.LastName}`}
//               >
//                 {customer.FirstName} {customer.LastName}
//               </option>
//             ))}
//           </select>
//         )}

//         <button
//           onClick={handleFilterChange}
//           style={{ marginLeft: "1rem", padding: "0.5rem" }}
//         >
//           Apply Filter
//         </button>
//       </div>

//       {/* Display Reservations */}
//       <table border="1" style={{ width: "100%", textAlign: "left" }}>
//         <thead>
//           <tr>
//             <th>Reservation ID</th>
//             <th>Customer</th>
//             <th>Transit Line</th>
//             <th>Total Fare</th>
//             <th>Trip Type</th>
//             <th>Departure</th>
//             <th>Arrival</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reservations.length > 0 ? (
//             reservations.map((reservation) => (
//               <tr key={reservation.ReservationID}>
//                 <td>{reservation.ReservationID}</td>
//                 <td>{`${reservation.FirstName} ${reservation.LastName}`}</td>
//                 <td>{reservation.TransitLineName}</td>
//                 <td>${reservation.TotalFare.toFixed(2)}</td>
//                 <td>{reservation.TripType}</td>
//                 <td>{reservation.DepartureStation}</td>
//                 <td>{reservation.ArrivalStation}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7">No reservations found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Reservations;


// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../utils/axiosInstance';

// const Reservations = () => {
//   const [reservations, setReservations] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchReservations();
//   }, []);

//   const fetchReservations = async () => {
//     try {
//       setLoading(true); // Start loading before fetching data
//       const response = await axiosInstance.get('/admin/reservations');
//       const data = response.data.reservations;

//       // Ensure that all the expected fields are available in the response
//       const reservationsWithDetails = data.map((reservation) => ({
//         ReservationID: reservation.ReservationID,
//         ReservationDate: reservation.ReservationDate,
//         CustomerName: `${reservation.CustomerFirstName} ${reservation.CustomerLastName}`,
//         TransitLine: reservation.TransitLine || 'Unknown Transit Line',
//         TotalFare: reservation.TotalFare,
//         TripType: reservation.TripType,
//         DepartureStation: reservation.DepartureStation,
//         ArrivalStation: reservation.ArrivalStation,
//       }));

//       setReservations(reservationsWithDetails);
//       setError('');
//     } catch (err) {
//       console.error('Error fetching reservations:', err);
//       setError('Failed to fetch reservations.');
//     } finally {
//       setLoading(false); // Stop loading after data is fetched or on error
//     }
//   };

//   const deleteReservation = async (reservationId) => {
//     try {
//       await axiosInstance.delete(`/admin/reservations/${reservationId}`);
//       setReservations(reservations.filter((r) => r.ReservationID !== reservationId));
//     } catch (err) {
//       console.error('Error deleting reservation:', err);
//       setError('Failed to delete reservation.');
//     }
//   };

//   return (
//     <div>
//       <h2>Reservations</h2>
//       {error && <p className="error">{error}</p>}
//       {loading ? (
//         <p>Loading reservations...</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Reservation ID</th>
//               <th>Customer</th>
//               <th>Transit Line</th>
//               <th>Total Fare</th>
//               <th>Trip Type</th>
//               <th>Departure</th>
//               <th>Arrival</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reservations.length > 0 ? (
//               reservations.map((reservation) => (
//                 <tr key={reservation.ReservationID}>
//                   <td>{reservation.ReservationID}</td>
//                   <td>{reservation.CustomerName}</td>
//                   <td>{reservation.TransitLine}</td>
//                   <td>${reservation.TotalFare.toFixed(2)}</td>
//                   <td>{reservation.TripType}</td>
//                   <td>{reservation.DepartureStation}</td>
//                   <td>{reservation.ArrivalStation}</td>
//                   <td>
//                     <button onClick={() => deleteReservation(reservation.ReservationID)}>Delete</button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="8" style={{ textAlign: 'center' }}>
//                   No reservations available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Reservations;


// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../utils/axiosInstance';

// const ReservationsTab = () => {
//   const [reservations, setReservations] = useState([]);
//   const [error, setError] = useState('');
//   const [customerName, setCustomerName] = useState('');
//   const [transitLine, setTransitLine] = useState('');
//   const [tripType, setTripType] = useState('');

//   useEffect(() => {
//     fetchReservations();
//   }, []);

//   const fetchReservations = async (filters = {}) => {
//     try {
//       const response = await axiosInstance.get('/admin/reservations', {
//         params: filters,
//       });
//       setReservations(response.data.reservations);
//       setError('');
//     } catch (err) {
//       console.error('Error fetching reservations:', err);
//       setError('Failed to fetch reservations.');
//     }
//   };

//   const handleFilterSubmit = (e) => {
//     e.preventDefault();
//     fetchReservations({
//       customerName,
//       transitLine,
//       tripType,
//     });
//   };

//   const deleteReservation = async (reservationId) => {
//     try {
//       await axiosInstance.delete(`/admin/reservations/${reservationId}`);
//       setReservations(reservations.filter((r) => r.ReservationID !== reservationId));
//     } catch (err) {
//       console.error('Error deleting reservation:', err);
//       setError('Failed to delete reservation.');
//     }
//   };

//   return (
//     <div>
//       <h2>Reservations</h2>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleFilterSubmit}>
//         <div>
//           <label>Customer Name: </label>
//           <input
//             type="text"
//             value={customerName}
//             onChange={(e) => setCustomerName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Transit Line: </label>
//           <input
//             type="text"
//             value={transitLine}
//             onChange={(e) => setTransitLine(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Trip Type: </label>
//           <input
//             type="text"
//             value={tripType}
//             onChange={(e) => setTripType(e.target.value)}
//           />
//         </div>
//         <button type="submit">Apply Filter</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Reservation ID</th>
//             <th>Customer</th>
//             <th>Transit Line</th>
//             <th>Total Fare</th>
//             <th>Trip Type</th>
//             <th>Departure</th>
//             <th>Arrival</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reservations.map((reservation) => (
//             <tr key={reservation.ReservationID}>
//               <td>{reservation.ReservationID}</td>
//               <td>{reservation.CustomerFirstName} {reservation.CustomerLastName}</td>
//               <td>{reservation.TransitLine}</td>
//               <td>${reservation.TotalFare.toFixed(2)}</td>
//               <td>{reservation.TripType}</td>
//               <td>{reservation.DepartureStation}</td>
//               <td>{reservation.ArrivalStation}</td>
//               <td>
//                 <button onClick={() => deleteReservation(reservation.ReservationID)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ReservationsTab;

// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../utils/axiosInstance';

// const ReservationsTab = () => {
//   const [reservations, setReservations] = useState([]);
//   const [error, setError] = useState('');
//   const [filterType, setFilterType] = useState(''); // to store whether filtering by 'CustomerName' or 'TransitLine'
//   const [filterValue, setFilterValue] = useState(''); // to store the input value for filtering

//   useEffect(() => {
//     fetchReservations();
//   }, []);

//   const fetchReservations = async (filters = {}) => {
//     try {
//       const response = await axiosInstance.get('/admin/reservations', {
//         params: filters,
//       });
//       setReservations(response.data.reservations);
//       setError('');
//     } catch (err) {
//       console.error('Error fetching reservations:', err);
//       setError('Failed to fetch reservations.');
//     }
//   };

//   const handleFilterSubmit = (e) => {
//     e.preventDefault();
//     // Choose filter type
//     if (filterType && filterValue) {
//       fetchReservations({
//         [filterType]: filterValue,
//       });
//     } else {
//       fetchReservations(); // Fetch without filter if nothing is selected
//     }
//   };

//   const deleteReservation = async (reservationId) => {
//     try {
//       await axiosInstance.delete(`/admin/reservations/${reservationId}`);
//       setReservations(reservations.filter((r) => r.ReservationID !== reservationId));
//     } catch (err) {
//       console.error('Error deleting reservation:', err);
//       setError('Failed to delete reservation.');
//     }
//   };

//   return (
//     <div>
//       <h2>Reservations</h2>
//       {error && <p className="error">{error}</p>}

//       {/* Filter Form */}
//       <form onSubmit={handleFilterSubmit}>
//         <div>
//           <label>Filter By: </label>
//           <select
//             value={filterType}
//             onChange={(e) => setFilterType(e.target.value)}
//           >
//             <option value="">Select Filter Type</option>
//             <option value="customerName">Customer Name</option>
//             <option value="transitLine">Transit Line</option>
//           </select>
//         </div>
//         <div>
//           <label>Filter Value: </label>
//           <input
//             type="text"
//             value={filterValue}
//             onChange={(e) => setFilterValue(e.target.value)}
//           />
//         </div>
//         <button type="submit">Apply Filter</button>
//       </form>

//       {/* Reservations Table */}
//       <table>
//         <thead>
//           <tr>
//             <th>Reservation ID</th>
//             <th>Customer</th>
//             <th>Transit Line</th>
//             <th>Total Fare</th>
//             <th>Trip Type</th>
//             <th>Departure</th>
//             <th>Arrival</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reservations.map((reservation) => (
//             <tr key={reservation.ReservationID}>
//               <td>{reservation.ReservationID}</td>
//               <td>{reservation.CustomerFirstName} {reservation.CustomerLastName}</td>
//               <td>{reservation.TransitLine}</td>
//               <td>${reservation.TotalFare.toFixed(2)}</td>
//               <td>{reservation.TripType}</td>
//               <td>{reservation.DepartureStation}</td>
//               <td>{reservation.ArrivalStation}</td>
//               <td>
//                 <button onClick={() => deleteReservation(reservation.ReservationID)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ReservationsTab;


import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';

const ReservationsTab = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState('');
  const [filterType, setFilterType] = useState(''); // to store whether filtering by 'CustomerName' or 'TransitLine'
  const [filterValue, setFilterValue] = useState(''); // to store the input value for filtering

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async (filters = {}) => {
    try {
      const response = await axiosInstance.get('/admin/reservations', {
        params: filters,
      });
      setReservations(response.data.reservations);
      setError('');
    } catch (err) {
      console.error('Error fetching reservations:', err);
      setError('Failed to fetch reservations.');
    }
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    // Choose filter type
    if (filterType && filterValue) {
      fetchReservations({
        [filterType]: filterValue,
      });
    } else {
      fetchReservations(); // Fetch without filter if nothing is selected
    }
  };

  const handleClearFilter = () => {
    setFilterType(''); // Clear filter type
    setFilterValue(''); // Clear filter value
    fetchReservations(); // Fetch all reservations without filters
  };

  const deleteReservation = async (reservationId) => {
    try {
      await axiosInstance.delete(`/admin/reservations/${reservationId}`);
      setReservations(reservations.filter((r) => r.ReservationID !== reservationId));
    } catch (err) {
      console.error('Error deleting reservation:', err);
      setError('Failed to delete reservation.');
    }
  };

  return (
    <div>
      <h2>Reservations</h2>
      {error && <p className="error">{error}</p>}

      {/* Filter Form */}
      <form onSubmit={handleFilterSubmit}>
        <div>
          <label>Filter By: </label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">Select Filter Type</option>
            <option value="customerName">Customer Name</option>
            <option value="transitLine">Transit Line</option>
          </select>
        </div>
        <div>
          <label>Filter Value: </label>
          <input
            type="text"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </div>
        <button type="submit">Apply Filter</button>
        <button type="button" onClick={handleClearFilter} style={{ marginLeft: '10px' }}>
          Clear Filter
        </button>
      </form>

      {/* Reservations Table */}
      <table>
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>Customer</th>
            <th>Transit Line</th>
            <th>Total Fare</th>
            <th>Trip Type</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.ReservationID}>
              <td>{reservation.ReservationID}</td>
              <td>{reservation.CustomerFirstName} {reservation.CustomerLastName}</td>
              <td>{reservation.TransitLine}</td>
              <td>${reservation.TotalFare.toFixed(2)}</td>
              <td>{reservation.TripType}</td>
              <td>{reservation.DepartureStation}</td>
              <td>{reservation.ArrivalStation}</td>
              <td>
                <button onClick={() => deleteReservation(reservation.ReservationID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationsTab;
