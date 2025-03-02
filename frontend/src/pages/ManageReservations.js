// // src/pages/ManageReservations.js
// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../utils/axiosInstance';

// const ManageReservations = () => {
//   const [reservations, setReservations] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchReservations();
//   }, []);

//   const fetchReservations = async () => {
//     try {
//       // Fetch data from all endpoints
//       const [reservationsResponse, customersResponse, transitLinesResponse] = await Promise.all([
//         axiosInstance.get('/admin/reservations'),
//         axiosInstance.get('/admin/customers'),
//         axiosInstance.get('/admin/transit-lines'),
//       ]);
  
//       // Create a map for customers
//       const customersMap = customersResponse.data.customers.reduce((map, customer) => {
//         map[customer.CustomerID] = `${customer.FirstName} ${customer.LastName}`;
//         return map;
//       }, {});
  
//       // Create a map for transit lines (if needed)
//       const transitLinesMap = transitLinesResponse.data.reduce((map, transitLine) => {
//         map[transitLine.TransitLineName] = transitLine.TransitLineName;
//         return map;
//       }, {});
  
//       // Map reservations with customer names and transit lines
//       const reservations = reservationsResponse.data.reservations.map((reservation) => ({
//         ...reservation,
//         CustomerName: customersMap[reservation.CustomerID] || 'Unknown Customer',
//         TransitLine: transitLinesMap[reservation.TransitLineName] || 'Unknown Transit Line',
//       }));
  
//       setReservations(reservations);
//       setError('');
//     } catch (err) {
//       console.error('Error fetching data:', err);
//       setError('Failed to fetch reservations.');
//     }
//   };
  
  

//   const deleteReservation = async (reservationId) => {
//     try {
//       await axiosInstance.delete(`/admin/reservations/${reservationId}`);
//       setReservations(reservations.filter(r => r.ReservationID !== reservationId));
//     } catch (err) {
//       setError('Failed to delete reservation.');
//     }
//   };

//   return (
//     <div>
//       <h2>Manage Reservations</h2>
//       {error && <p className="error">{error}</p>}
//       <table>
//   <thead>
//     <tr>
//       <th>Reservation ID</th>
//       <th>Customer</th>
//       <th>Transit Line</th>
//       <th>Total Fare</th>
//       <th>Trip Type</th>
//       <th>Departure</th>
//       <th>Arrival</th>
//     </tr>
//   </thead>
//   <tbody>
//     {reservations.map((reservation) => (
//       <tr key={reservation.ReservationID}>
//         <td>{reservation.ReservationID}</td>
//         <td>{reservation.CustomerName}</td>
//         <td>{reservation.TransitLine}</td>
//         <td>${reservation.TotalFare.toFixed(2)}</td>
//         <td>{reservation.TripType}</td>
//         <td>{reservation.DepartureStation}</td>
//         <td>{reservation.ArrivalStation}</td>
//       </tr>
//     ))}
//   </tbody>
// </table>

//     </div>
//   );
// };

// export default ManageReservations;

// // src/pages/ManageReservations.js
// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../utils/axiosInstance';

// const ManageReservations = () => {
//   const [reservations, setReservations] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchReservations();
//   }, []);

//   const fetchReservations = async () => {
//     try {
//       // Fetch reservations
//       const response = await axiosInstance.get('/admin/reservations');
//       const data = response.data.reservations;

//       // Map customer and transit line details into reservations
//       const reservationsWithDetails = data.map((reservation) => ({
//         ...reservation,
//         CustomerName: `${reservation.FirstName} ${reservation.LastName}`,
//         TransitLine: reservation.TransitLineName || 'Unknown Transit Line',
//       }));

//       setReservations(reservationsWithDetails);
//       setError('');
//     } catch (err) {
//       console.error('Error fetching reservations:', err);
//       setError('Failed to fetch reservations.');
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
//       <h2>Manage Reservations</h2>
//       {error && <p className="error">{error}</p>}
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
//               <td>{reservation.CustomerName}</td>
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

// export default ManageReservations;

import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';

const ManageReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      // Fetch reservations
      const response = await axiosInstance.get('/admin/reservations');
      const data = response.data.reservations;

      // Map customer and transit line details into reservations
      const reservationsWithDetails = data.map((reservation) => ({
        ...reservation,
        CustomerName: `${reservation.CustomerFirstName} ${reservation.CustomerLastName}`, // Use correct fields
        TransitLine: reservation.TransitLine || 'Unknown Transit Line',
      }));

      setReservations(reservationsWithDetails);
      setError('');
    } catch (err) {
      console.error('Error fetching reservations:', err);
      setError('Failed to fetch reservations.');
    }
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
      <h2>Manage Reservations</h2>
      {error && <p className="error">{error}</p>}
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

export default ManageReservations;
