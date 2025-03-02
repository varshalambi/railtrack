// import React, { useState } from 'react';
// import axiosInstance from '../utils/axiosInstance';

// const ViewCustomersTab = () => {
//   const [transitLineName, setTransitLine] = useState('');
//   const [reservationDate, setReservationDate] = useState('');
//   const [customers, setCustomers] = useState([]);
//   const [error, setError] = useState('');

//   // Function to handle search button click
//   const handleSearch = async () => {
//     if (!transitLineName || !reservationDate) {
//       setError('Please enter both transit line and reservation date.');
//       return;
//     }

//     try {
//       const response = await axiosInstance.get('/customer-rep/customers', {
//         params: { transitLineName, reservationDate },
//       });
//       setCustomers(response.data.customers);
//       setError('');
//     } catch (err) {
//       console.error('Error fetching customers:', err);
//       setError('Failed to fetch customers.');
//     }
//   };

//   return (
//     <div>
//       <h2>View Customers with Reservations</h2>
//       {error && <p className="error">{error}</p>}
      
//       {/* Input fields for transit line and reservation date */}
//       <div style={{ marginBottom: '20px' }}>
//         <input
//           type="text"
//           placeholder="Enter Transit Line"
//           value={transitLineName}
//           onChange={(e) => setTransitLine(e.target.value)}
//           style={{ marginRight: '10px', padding: '5px' }}
//         />
//         <input
//           type="date"
//           value={reservationDate}
//           onChange={(e) => setReservationDate(e.target.value)}
//           style={{ marginRight: '10px', padding: '5px' }}
//         />
//         <button onClick={handleSearch} style={{ padding: '5px 10px' }}>
//           Search
//         </button>
//       </div>

//       {/* Table to display customers */}
//       {customers.length > 0 && (
//         <table>
//           <thead>
//             <tr>
//               <th>Customer ID</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Reservation ID</th>
//               <th>Reservation Date</th>
//               <th>Transit Line</th>
//             </tr>
//           </thead>
//           <tbody>
//             {customers.map((customer) => (
//               <tr key={customer.ReservationID}>
//                 <td>{customer.CustomerID}</td>
//                 <td>{customer.FirstName}</td>
//                 <td>{customer.LastName}</td>
//                 <td>{customer.ReservationID}</td>
//                 <td>{customer.ReservationDate}</td>
//                 <td>{customer.transitLineName}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ViewCustomersTab;

// import React, { useState } from 'react';
// import axiosInstance from '../utils/axiosInstance';

// const ViewCustomersTab = () => {
//   const [transitLineName, setTransitLineName] = useState('');
//   const [reservationDate, setReservationDate] = useState('');
//   const [customers, setCustomers] = useState([]);
//   const [error, setError] = useState('');

//   const handleSearch = async () => {
//     try {
//       const response = await axiosInstance.get('/customer-rep/customers/reservations', {
//         params: {
//           transitLineName,
//           reservationDate,
//         },
//       });
      
//       if (response.data.customers.length === 0) {
//         setError('No customers found.');
//       } else {
//         setCustomers(response.data.customers);
//         setError('');
//       }
//     } catch (err) {
//       console.error('Error fetching customers:', err);
//       setError('Failed to fetch customers.');
//     }
//   };

//   return (
//     <div>
//       <h2>View Customers by Transit Line and Date</h2>

//       <div>
//         <input
//           type="text"
//           placeholder="Transit Line Name"
//           value={transitLineName}
//           onChange={(e) => setTransitLineName(e.target.value)}
//         />
//         <input
//           type="date"
//           value={reservationDate}
//           onChange={(e) => setReservationDate(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {error && <p className="error">{error}</p>}

//       {customers.length > 0 ? (
//         <table style={{ marginTop: '20px' }}>
//           <thead>
//             <tr>
//               <th>Customer ID</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Reservation ID</th>
//               <th>Reservation Date</th>
//               <th>Transit Line</th>
//             </tr>
//           </thead>
//           <tbody>
//             {customers.map((customer) => (
//               <tr key={customer.CustomerID}>
//                 <td>{customer.CustomerID}</td>
//                 <td>{customer.FirstName}</td>
//                 <td>{customer.LastName}</td>
//                 <td>{customer.ReservationID}</td>
//                 <td>{new Date(customer.ReservationDate).toLocaleDateString()}</td>
//                 <td>{customer.TransitLineName}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : null}
//     </div>
//   );
// };

// export default ViewCustomersTab;

import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';

const ViewCustomersTab = () => {
  const [transitLines, setTransitLines] = useState([]);
  const [transitLineName, setTransitLineName] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTransitLines();
  }, []);

  // Fetch all available transit lines for the dropdown
  const fetchTransitLines = async () => {
    try {
      const response = await axiosInstance.get('/transit-lines');
      setTransitLines(response.data.transitLines);
    } catch (err) {
      console.error('Error fetching transit lines:', err);
      setError('Failed to fetch transit lines.');
    }
  };

  // Handle search action
  const handleSearch = async () => {
    if (!transitLineName || !reservationDate) {
      setError('Please select a transit line and date.');
      return;
    }

    try {
      const response = await axiosInstance.get('/customer-rep/customers/reservations', {
        params: {
          transitLineName,
          reservationDate,
        },
      });

      if (response.data.customers.length === 0) {
        setError('No customers found.');
        setCustomers([]);
      } else {
        setCustomers(response.data.customers);
        setError('');
      }
    } catch (err) {
      console.error('Error fetching customers:', err);
      setError('Failed to fetch customers.');
    }
  };

  return (
    <div>
      <h2>View Customers by Transit Line and Date</h2>

      <div>
        {/* Transit Line Dropdown */}
        <select
          value={transitLineName}
          onChange={(e) => setTransitLineName(e.target.value)}
        >
          <option value="">Select Transit Line</option>
          {transitLines.map((line) => (
            <option key={line.TransitLineName} value={line.TransitLineName}>
              {line.TransitLineName}
            </option>
          ))}
        </select>

        {/* Date Picker */}
        <input
          type="date"
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
        />
        
        {/* Search Button */}
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Error Message */}
      {error && <p className="error">{error}</p>}

      {/* Customer Data Table */}
      {customers.length > 0 && (
        <table style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Reservation ID</th>
              <th>Reservation Date</th>
              <th>Transit Line</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.CustomerID}>
                <td>{customer.CustomerID}</td>
                <td>{customer.FirstName}</td>
                <td>{customer.LastName}</td>
                <td>{customer.ReservationID}</td>
                <td>{new Date(customer.ReservationDate).toLocaleDateString()}</td>
                <td>{customer.TransitLineName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewCustomersTab;
