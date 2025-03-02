// // // // import React, { useState, useEffect } from 'react';
// // // // import axiosInstance from '../utils/axiosInstance';

// // // // const ManageSchedulesTab = () => {
// // // //   const [schedules, setSchedules] = useState([]);
// // // //   const [error, setError] = useState('');
// // // //   const [editMode, setEditMode] = useState(null);
// // // //   const [formValues, setFormValues] = useState({});

// // // //   // Fetch schedules on component mount
// // // //   useEffect(() => {
// // // //     fetchSchedules();
// // // //   }, []);

// // // //   // Function to fetch train schedules
// // // //   const fetchSchedules = async () => {
// // // //     try {
// // // //       const response = await axiosInstance.get('/representative/schedules');
// // // //       setSchedules(response.data.schedules);
// // // //       setError('');
// // // //     } catch (err) {
// // // //       console.error('Error fetching schedules:', err);
// // // //       setError('Failed to fetch schedules.');
// // // //     }
// // // //   };

// // // //   // Handle delete schedule
// // // //   const deleteSchedule = async (scheduleId) => {
// // // //     try {
// // // //       await axiosInstance.delete(`/representative/schedules/${scheduleId}`);
// // // //       setSchedules(schedules.filter((s) => s.ScheduleID !== scheduleId));
// // // //     } catch (err) {
// // // //       console.error('Error deleting schedule:', err);
// // // //       setError('Failed to delete schedule.');
// // // //     }
// // // //   };

// // // //   // Handle edit schedule
// // // //   const editSchedule = (schedule) => {
// // // //     setEditMode(schedule.ScheduleID);
// // // //     setFormValues({
// // // //       TransitLineName: schedule.TransitLineName,
// // // //       DepartureDateTime: schedule.DepartureDateTime,
// // // //       ArrivalDateTime: schedule.ArrivalDateTime,
// // // //       TravelTime: schedule.TravelTime,
// // // //     });
// // // //   };

// // // //   // Handle form input changes
// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormValues({ ...formValues, [name]: value });
// // // //   };

// // // //   // Handle save edited schedule
// // // //   const saveSchedule = async (scheduleId) => {
// // // //     try {
// // // //       await axiosInstance.put(`/representative/schedules/${scheduleId}`, formValues);
// // // //       setEditMode(null);
// // // //       fetchSchedules();
// // // //     } catch (err) {
// // // //       console.error('Error updating schedule:', err);
// // // //       setError('Failed to update schedule.');
// // // //     }
// // // //   };

// // // //   // Render
// // // //   return (
// // // //     <div>
// // // //       <h2>Manage Schedules</h2>
// // // //       {error && <p className="error">{error}</p>}
// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Schedule ID</th>
// // // //             <th>Transit Line</th>
// // // //             <th>Departure Time</th>
// // // //             <th>Arrival Time</th>
// // // //             <th>Travel Time</th>
// // // //             <th>Actions</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {schedules.map((schedule) => (
// // // //             <tr key={schedule.ScheduleID}>
// // // //               <td>{schedule.ScheduleID}</td>
// // // //               <td>
// // // //                 {editMode === schedule.ScheduleID ? (
// // // //                   <input
// // // //                     type="text"
// // // //                     name="TransitLineName"
// // // //                     value={formValues.TransitLineName}
// // // //                     onChange={handleInputChange}
// // // //                   />
// // // //                 ) : (
// // // //                   schedule.TransitLineName
// // // //                 )}
// // // //               </td>
// // // //               <td>
// // // //                 {editMode === schedule.ScheduleID ? (
// // // //                   <input
// // // //                     type="datetime-local"
// // // //                     name="DepartureDateTime"
// // // //                     value={formValues.DepartureDateTime}
// // // //                     onChange={handleInputChange}
// // // //                   />
// // // //                 ) : (
// // // //                   new Date(schedule.DepartureDateTime).toLocaleString()
// // // //                 )}
// // // //               </td>
// // // //               <td>
// // // //                 {editMode === schedule.ScheduleID ? (
// // // //                   <input
// // // //                     type="datetime-local"
// // // //                     name="ArrivalDateTime"
// // // //                     value={formValues.ArrivalDateTime}
// // // //                     onChange={handleInputChange}
// // // //                   />
// // // //                 ) : (
// // // //                   new Date(schedule.ArrivalDateTime).toLocaleString()
// // // //                 )}
// // // //               </td>
// // // //               <td>
// // // //                 {editMode === schedule.ScheduleID ? (
// // // //                   <input
// // // //                     type="time"
// // // //                     name="TravelTime"
// // // //                     value={formValues.TravelTime}
// // // //                     onChange={handleInputChange}
// // // //                   />
// // // //                 ) : (
// // // //                   schedule.TravelTime
// // // //                 )}
// // // //               </td>
// // // //               <td>
// // // //                 {editMode === schedule.ScheduleID ? (
// // // //                   <>
// // // //                     <button onClick={() => saveSchedule(schedule.ScheduleID)}>Save</button>
// // // //                     <button onClick={() => setEditMode(null)}>Cancel</button>
// // // //                   </>
// // // //                 ) : (
// // // //                   <>
// // // //                     <button onClick={() => editSchedule(schedule)}>Edit</button>
// // // //                     <button onClick={() => deleteSchedule(schedule.ScheduleID)}>Delete</button>
// // // //                   </>
// // // //                 )}
// // // //               </td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ManageSchedulesTab;

// // // // import React, { useState, useEffect } from 'react';
// // // // import axiosInstance from '../utils/axiosInstance';

// // // // const ManageSchedulesTab = () => {
// // // //   const [schedules, setSchedules] = useState([]);
// // // //   const [newSchedule, setNewSchedule] = useState({
// // // //     transitLineName: '',
// // // //     travelTime: '',
// // // //     arrivalDateTime: '',
// // // //     departureDateTime: '',
// // // //     trainId: '',
// // // //   });
// // // //   const [error, setError] = useState('');

// // // //   useEffect(() => {
// // // //     fetchSchedules();
// // // //   }, []);

// // // //   const fetchSchedules = async () => {
// // // //     try {
// // // //       const response = await axiosInstance.get('/customer-rep/train-schedules');
// // // //       setSchedules(response.data.trainSchedules);
// // // //       setError('');
// // // //     } catch (err) {
// // // //       console.error('Error fetching schedules:', err);
// // // //       setError('Failed to fetch schedules.');
// // // //     }
// // // //   };

// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setNewSchedule((prev) => ({ ...prev, [name]: value }));
// // // //   };

// // // //   const addSchedule = async () => {
// // // //     try {
// // // //       await axiosInstance.post('customer-rep/train-schedules', newSchedule);
// // // //       fetchSchedules(); // Refresh the list after adding a new schedule
// // // //     } catch (err) {
// // // //       console.error('Error adding schedule:', err);
// // // //       setError('Failed to add new schedule.');
// // // //     }
// // // //   };

// // // //   const editSchedule = async (scheduleId) => {
// // // //     try {
// // // //       const updatedSchedule = schedules.find((s) => s.ScheduleID === scheduleId);
// // // //       await axiosInstance.put(`/customer-rep/train-schedules/${scheduleId}`, updatedSchedule);
// // // //       fetchSchedules(); // Refresh the list after editing
// // // //     } catch (err) {
// // // //       console.error('Error editing schedule:', err);
// // // //       setError('Failed to edit schedule.');
// // // //     }
// // // //   };

// // // //   const deleteSchedule = async (scheduleId) => {
// // // //     try {
// // // //       await axiosInstance.delete(`/customer-rep/train-schedules/${scheduleId}`);
// // // //       fetchSchedules(); // Refresh the list after deleting
// // // //     } catch (err) {
// // // //       console.error('Error deleting schedule:', err);
// // // //       setError('Failed to delete schedule.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Manage Train Schedules</h2>
// // // //       {error && <p className="error">{error}</p>}

// // // //       {/* Form to Add New Schedule */}
// // // //       <div style={{ marginBottom: '20px' }}>
// // // //         <input
// // // //           type="text"
// // // //           name="transitLineName"
// // // //           placeholder="Transit Line Name"
// // // //           value={newSchedule.transitLineName}
// // // //           onChange={handleInputChange}
// // // //           style={{ marginRight: '10px' }}
// // // //         />
// // // //         <input
// // // //           type="time"
// // // //           name="travelTime"
// // // //           placeholder="Travel Time"
// // // //           value={newSchedule.travelTime}
// // // //           onChange={handleInputChange}
// // // //           style={{ marginRight: '10px' }}
// // // //         />
// // // //         <input
// // // //           type="datetime-local"
// // // //           name="arrivalDateTime"
// // // //           placeholder="Arrival DateTime"
// // // //           value={newSchedule.arrivalDateTime}
// // // //           onChange={handleInputChange}
// // // //           style={{ marginRight: '10px' }}
// // // //         />
// // // //         <input
// // // //           type="datetime-local"
// // // //           name="departureDateTime"
// // // //           placeholder="Departure DateTime"
// // // //           value={newSchedule.departureDateTime}
// // // //           onChange={handleInputChange}
// // // //           style={{ marginRight: '10px' }}
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           name="trainId"
// // // //           placeholder="Train ID"
// // // //           value={newSchedule.trainId}
// // // //           onChange={handleInputChange}
// // // //           style={{ marginRight: '10px' }}
// // // //         />
// // // //         <button onClick={addSchedule}>Add Schedule</button>
// // // //       </div>

// // // //       {/* Schedule Table */}
// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Schedule ID</th>
// // // //             <th>Transit Line Name</th>
// // // //             <th>Travel Time</th>
// // // //             <th>Arrival DateTime</th>
// // // //             <th>Departure DateTime</th>
// // // //             <th>Train ID</th>
// // // //             <th>Actions</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {schedules.map((schedule) => (
// // // //             <tr key={schedule.ScheduleID}>
// // // //               <td>{schedule.ScheduleID}</td>
// // // //               <td>
// // // //                 <input
// // // //                   type="text"
// // // //                   value={schedule.TransitLineName}
// // // //                   onChange={(e) =>
// // // //                     setSchedules((prev) =>
// // // //                       prev.map((s) =>
// // // //                         s.ScheduleID === schedule.ScheduleID ? { ...s, TransitLineName: e.target.value } : s
// // // //                       )
// // // //                     )
// // // //                   }
// // // //                 />
// // // //               </td>
// // // //               <td>
// // // //                 <input
// // // //                   type="time"
// // // //                   value={schedule.TravelTime}
// // // //                   onChange={(e) =>
// // // //                     setSchedules((prev) =>
// // // //                       prev.map((s) =>
// // // //                         s.ScheduleID === schedule.ScheduleID ? { ...s, TravelTime: e.target.value } : s
// // // //                       )
// // // //                     )
// // // //                   }
// // // //                 />
// // // //               </td>
// // // //               <td>
// // // //                 <input
// // // //                   type="datetime-local"
// // // //                   value={schedule.ArrivalDateTime}
// // // //                   onChange={(e) =>
// // // //                     setSchedules((prev) =>
// // // //                       prev.map((s) =>
// // // //                         s.ScheduleID === schedule.ScheduleID ? { ...s, ArrivalDateTime: e.target.value } : s
// // // //                       )
// // // //                     )
// // // //                   }
// // // //                 />
// // // //               </td>
// // // //               <td>
// // // //                 <input
// // // //                   type="datetime-local"
// // // //                   value={schedule.DepartureDateTime}
// // // //                   onChange={(e) =>
// // // //                     setSchedules((prev) =>
// // // //                       prev.map((s) =>
// // // //                         s.ScheduleID === schedule.ScheduleID ? { ...s, DepartureDateTime: e.target.value } : s
// // // //                       )
// // // //                     )
// // // //                   }
// // // //                 />
// // // //               </td>
// // // //               <td>
// // // //                 <input
// // // //                   type="text"
// // // //                   value={schedule.TrainID}
// // // //                   onChange={(e) =>
// // // //                     setSchedules((prev) =>
// // // //                       prev.map((s) =>
// // // //                         s.ScheduleID === schedule.ScheduleID ? { ...s, TrainID: e.target.value } : s
// // // //                       )
// // // //                     )
// // // //                   }
// // // //                 />
// // // //               </td>
// // // //               <td>
// // // //                 <button onClick={() => editSchedule(schedule.ScheduleID)}>Edit</button>
// // // //                 <button onClick={() => deleteSchedule(schedule.ScheduleID)}>Delete</button>
// // // //               </td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ManageSchedulesTab;


// // // // import React, { useState, useEffect } from 'react';
// // // // import axiosInstance from '../utils/axiosInstance';

// // // // const ManageSchedulesTab = () => {
// // // //   const [schedules, setSchedules] = useState([]);
// // // //   const [newSchedule, setNewSchedule] = useState({
// // // //     transitLineName: '',
// // // //     travelTime: '',
// // // //     arrivalDateTime: '',
// // // //     departureDateTime: '',
// // // //     trainId: '',
// // // //   });
// // // //   const [error, setError] = useState('');

// // // //   useEffect(() => {
// // // //     fetchSchedules();
// // // //   }, []);

// // // //   const fetchSchedules = async () => {
// // // //     try {
// // // //       const response = await axiosInstance.get('/customer-rep/train-schedules');
// // // //       setSchedules(response.data.trainSchedules);
// // // //       setError('');
// // // //     } catch (err) {
// // // //       console.error('Error fetching schedules:', err);
// // // //       setError('Failed to fetch schedules.');
// // // //     }
// // // //   };

// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setNewSchedule((prev) => ({ ...prev, [name]: value }));
// // // //   };

// // // //   const addSchedule = async () => {
// // // //     try {
// // // //       await axiosInstance.post('/customer-rep/train-schedules', newSchedule);
// // // //       fetchSchedules(); // Refresh the list after adding a new schedule
// // // //     } catch (err) {
// // // //       console.error('Error adding schedule:', err);
// // // //       setError('Failed to add new schedule.');
// // // //     }
// // // //   };

// // // //   const editSchedule = async (scheduleId) => {
// // // //     try {
// // // //       const updatedSchedule = schedules.find((s) => s.ScheduleID === scheduleId);
// // // //       await axiosInstance.put(`/customer-rep/train-schedules/${scheduleId}`, updatedSchedule);
// // // //       fetchSchedules(); // Refresh the list after editing
// // // //     } catch (err) {
// // // //       console.error('Error editing schedule:', err);
// // // //       setError('Failed to edit schedule.');
// // // //     }
// // // //   };

// // // //   const deleteSchedule = async (scheduleId) => {
// // // //     try {
// // // //       await axiosInstance.delete(`/customer-rep/train-schedules/${scheduleId}`);
// // // //       fetchSchedules(); // Refresh the list after deleting
// // // //     } catch (err) {
// // // //       console.error('Error deleting schedule:', err);
// // // //       setError('Failed to delete schedule.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Manage Train Schedules</h2>
// // // //       {error && <p className="error">{error}</p>}

// // // //       {/* Form to Add New Schedule */}
// // // //       <div style={{ marginBottom: '20px' }}>
// // // //         <input
// // // //           type="text"
// // // //           name="transitLineName"
// // // //           placeholder="Transit Line Name"
// // // //           value={newSchedule.transitLineName}
// // // //           onChange={handleInputChange}
// // // //           style={{ marginRight: '10px' }}
// // // //         />
// // // //         <input
// // // //           type="time"
// // // //           name="travelTime"
// // // //           placeholder="Travel Time"
// // // //           value={newSchedule.travelTime}
// // // //           onChange={handleInputChange}
// // // //           style={{ marginRight: '10px' }}
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           name="arrivalDateTime"
// // // //           placeholder="Arrival DateTime (YYYY-MM-DD HH:MM:SS)"
// // // //           value={newSchedule.arrivalDateTime}
// // // //           onChange={handleInputChange}
// // // //           style={{ marginRight: '10px' }}
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           name="departureDateTime"
// // // //           placeholder="Departure DateTime (YYYY-MM-DD HH:MM:SS)"
// // // //           value={newSchedule.departureDateTime}
// // // //           onChange={handleInputChange}
// // // //           style={{ marginRight: '10px' }}
// // // //         />
// // // //         <input
// // // //           type="text"
// // // //           name="trainId"
// // // //           placeholder="Train ID"
// // // //           value={newSchedule.trainId}
// // // //           onChange={handleInputChange}
// // // //           style={{ marginRight: '10px' }}
// // // //         />
// // // //         <button onClick={addSchedule}>Add Schedule</button>
// // // //       </div>

// // // //       {/* Schedule Table */}
// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Schedule ID</th>
// // // //             <th>Transit Line Name</th>
// // // //             <th>Travel Time</th>
// // // //             <th>Arrival DateTime</th>
// // // //             <th>Departure DateTime</th>
// // // //             <th>Train ID</th>
// // // //             <th>Actions</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {schedules.map((schedule) => (
// // // //             <tr key={schedule.ScheduleID}>
// // // //               <td>{schedule.ScheduleID}</td>
// // // //               <td>
// // // //                 <input
// // // //                   type="text"
// // // //                   value={schedule.TransitLineName}
// // // //                   onChange={(e) =>
// // // //                     setSchedules((prev) =>
// // // //                       prev.map((s) =>
// // // //                         s.ScheduleID === schedule.ScheduleID ? { ...s, TransitLineName: e.target.value } : s
// // // //                       )
// // // //                     )
// // // //                   }
// // // //                 />
// // // //               </td>
// // // //               <td>
// // // //                 <input
// // // //                   type="time"
// // // //                   value={schedule.TravelTime}
// // // //                   onChange={(e) =>
// // // //                     setSchedules((prev) =>
// // // //                       prev.map((s) =>
// // // //                         s.ScheduleID === schedule.ScheduleID ? { ...s, TravelTime: e.target.value } : s
// // // //                       )
// // // //                     )
// // // //                   }
// // // //                 />
// // // //               </td>
// // // //               <td>
// // // //                 <input
// // // //                   type="text"
// // // //                   value={schedule.ArrivalDateTime}
// // // //                   onChange={(e) =>
// // // //                     setSchedules((prev) =>
// // // //                       prev.map((s) =>
// // // //                         s.ScheduleID === schedule.ScheduleID ? { ...s, ArrivalDateTime: e.target.value } : s
// // // //                       )
// // // //                     )
// // // //                   }
// // // //                 />
// // // //               </td>
// // // //               <td>
// // // //                 <input
// // // //                   type="text"
// // // //                   value={schedule.DepartureDateTime}
// // // //                   onChange={(e) =>
// // // //                     setSchedules((prev) =>
// // // //                       prev.map((s) =>
// // // //                         s.ScheduleID === schedule.ScheduleID ? { ...s, DepartureDateTime: e.target.value } : s
// // // //                       )
// // // //                     )
// // // //                   }
// // // //                 />
// // // //               </td>
// // // //               <td>
// // // //                 <input
// // // //                   type="text"
// // // //                   value={schedule.TrainID}
// // // //                   onChange={(e) =>
// // // //                     setSchedules((prev) =>
// // // //                       prev.map((s) =>
// // // //                         s.ScheduleID === schedule.ScheduleID ? { ...s, TrainID: e.target.value } : s
// // // //                       )
// // // //                     )
// // // //                   }
// // // //                 />
// // // //               </td>
// // // //               <td>
// // // //                 <button onClick={() => editSchedule(schedule.ScheduleID)}>Edit</button>
// // // //                 <button onClick={() => deleteSchedule(schedule.ScheduleID)}>Delete</button>
// // // //               </td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ManageSchedulesTab;

// // // // import React, { useState, useEffect } from 'react';
// // // // import axiosInstance from '../utils/axiosInstance';

// // // // const ManageSchedulesTab = () => {
// // // //   const [schedules, setSchedules] = useState([]);
// // // //   const [error, setError] = useState('');

// // // //   useEffect(() => {
// // // //     fetchSchedules();
// // // //   }, []);

// // // //   const fetchSchedules = async () => {
// // // //     try {
// // // //       const response = await axiosInstance.get('/customer-rep/train-schedules');
// // // //       setSchedules(response.data.trainSchedules);
// // // //       setError('');
// // // //     } catch (err) {
// // // //       console.error('Error fetching schedules:', err);
// // // //       setError('Failed to fetch schedules.');
// // // //     }
// // // //   };

// // // //   const handleDelete = async (scheduleId) => {
// // // //     try {
// // // //       await axiosInstance.delete(`/customer-rep/train-schedules/${scheduleId}`);
// // // //       setSchedules(schedules.filter((schedule) => schedule.ScheduleID !== scheduleId));
// // // //     } catch (err) {
// // // //       console.error('Error deleting schedule:', err);
// // // //       setError('Failed to delete train schedule.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Manage Train Schedules</h2>
// // // //       {error && <p className="error">{error}</p>}
// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Schedule ID</th>
// // // //             <th>Transit Line Name</th>
// // // //             <th>Travel Time</th>
// // // //             <th>Arrival DateTime</th>
// // // //             <th>Departure DateTime</th>
// // // //             <th>Train ID</th>
// // // //             <th>Actions</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {schedules.map((schedule) => (
// // // //             <tr key={schedule.ScheduleID}>
// // // //               <td>{schedule.ScheduleID}</td>
// // // //               <td>{schedule.TransitLineName}</td>
// // // //               <td>{schedule.TravelTime}</td>
// // // //               <td>{schedule.ArrivalDateTime}</td>
// // // //               <td>{schedule.DepartureDateTime}</td>
// // // //               <td>{schedule.TrainID}</td>
// // // //               <td>
// // // //                 <button
// // // //                   onClick={() => console.log('Edit schedule')}
// // // //                   style={{ marginRight: '5px' }}
// // // //                 >
// // // //                   Edit
// // // //                 </button>
// // // //                 {schedule.ReservationCount === 0 ? (
// // // //                   <button onClick={() => handleDelete(schedule.ScheduleID)}>Delete</button>
// // // //                 ) : (
// // // //                   <button disabled title="Cannot delete. Reservations exist.">Delete</button>
// // // //                 )}
// // // //               </td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ManageSchedulesTab;


// // // // import React, { useState, useEffect } from 'react';
// // // // import axiosInstance from '../utils/axiosInstance';

// // // // const ManageSchedulesTab = () => {
// // // //   const [schedules, setSchedules] = useState([]);
// // // //   const [editingSchedule, setEditingSchedule] = useState(null);
// // // //   const [error, setError] = useState('');

// // // //   useEffect(() => {
// // // //     fetchSchedules();
// // // //   }, []);

// // // //   const fetchSchedules = async () => {
// // // //     try {
// // // //       const response = await axiosInstance.get('/customer-rep/train-schedules');
// // // //       setSchedules(response.data.trainSchedules);
// // // //       setError('');
// // // //     } catch (err) {
// // // //       console.error('Error fetching schedules:', err);
// // // //       setError('Failed to fetch schedules.');
// // // //     }
// // // //   };

// // // //   const handleEditClick = (schedule) => {
// // // //     setEditingSchedule(schedule);
// // // //   };

// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setEditingSchedule((prev) => ({
// // // //       ...prev,
// // // //       [name]: value,
// // // //     }));
// // // //   };

// // // //   const handleSave = async (scheduleId) => {
// // // //     try {
// // // //       await axiosInstance.put(`/customer-rep/train-schedules/${scheduleId}`, editingSchedule);
// // // //       setEditingSchedule(null);
// // // //       fetchSchedules(); // Re-fetch schedules to reflect updates
// // // //     } catch (err) {
// // // //       console.error('Error updating schedule:', err);
// // // //       setError('Failed to update train schedule.');
// // // //     }
// // // //   };

// // // //   const handleCancel = () => {
// // // //     setEditingSchedule(null);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Manage Train Schedules</h2>
// // // //       {error && <p className="error">{error}</p>}
// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Schedule ID</th>
// // // //             <th>Transit Line Name</th>
// // // //             <th>Travel Time</th>
// // // //             <th>Arrival DateTime</th>
// // // //             <th>Departure DateTime</th>
// // // //             <th>Train ID</th>
// // // //             <th>Actions</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {schedules.map((schedule) => (
// // // //             <tr key={schedule.ScheduleID}>
// // // //               {editingSchedule && editingSchedule.ScheduleID === schedule.ScheduleID ? (
// // // //                 <>
// // // //                   <td>{schedule.ScheduleID}</td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="TransitLineName"
// // // //                       value={editingSchedule.TransitLineName}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="TravelTime"
// // // //                       value={editingSchedule.TravelTime}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="ArrivalDateTime"
// // // //                       value={editingSchedule.ArrivalDateTime}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="DepartureDateTime"
// // // //                       value={editingSchedule.DepartureDateTime}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="TrainID"
// // // //                       value={editingSchedule.TrainID}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <button onClick={() => handleSave(schedule.ScheduleID)}>Save</button>
// // // //                     <button onClick={handleCancel}>Cancel</button>
// // // //                   </td>
// // // //                 </>
// // // //               ) : (
// // // //                 <>
// // // //                   <td>{schedule.ScheduleID}</td>
// // // //                   <td>{schedule.TransitLineName}</td>
// // // //                   <td>{schedule.TravelTime}</td>
// // // //                   <td>{schedule.ArrivalDateTime}</td>
// // // //                   <td>{schedule.DepartureDateTime}</td>
// // // //                   <td>{schedule.TrainID}</td>
// // // //                   <td>
// // // //                     <button onClick={() => handleEditClick(schedule)} style={{ marginRight: '5px' }}>
// // // //                       Edit
// // // //                     </button>
// // // //                     {schedule.ReservationCount === 0 ? (
// // // //                       <button onClick={() => handleDelete(schedule.ScheduleID)}>Delete</button>
// // // //                     ) : (
// // // //                       <button disabled title="Cannot delete. Reservations exist.">Delete</button>
// // // //                     )}
// // // //                   </td>
// // // //                 </>
// // // //               )}
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ManageSchedulesTab;

// // // // import React, { useState, useEffect } from 'react';
// // // // import axiosInstance from '../utils/axiosInstance';

// // // // const ManageSchedulesTab = () => {
// // // //   const [schedules, setSchedules] = useState([]);
// // // //   const [editingSchedule, setEditingSchedule] = useState(null);
// // // //   const [error, setError] = useState('');

// // // //   useEffect(() => {
// // // //     fetchSchedules();
// // // //   }, []);

// // // //   // Fetch all train schedules
// // // //   const fetchSchedules = async () => {
// // // //     try {
// // // //       const response = await axiosInstance.get('/customer-rep/train-schedules');
// // // //       setSchedules(response.data.trainSchedules);
// // // //       setError('');
// // // //     } catch (err) {
// // // //       console.error('Error fetching schedules:', err);
// // // //       setError('Failed to fetch schedules.');
// // // //     }
// // // //   };

// // // //   // Handle edit button click
// // // //   const handleEditClick = (schedule) => {
// // // //     setEditingSchedule(schedule);
// // // //   };

// // // //   // Handle input change for editable fields
// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setEditingSchedule((prev) => ({
// // // //       ...prev,
// // // //       [name]: value,
// // // //     }));
// // // //   };

// // // //   // Handle save button click for updating the schedule
// // // //   const handleSave = async (scheduleId) => {
// // // //     try {
// // // //       await axiosInstance.put(`/customer-rep/train-schedules/${scheduleId}`, editingSchedule);
// // // //       setEditingSchedule(null);
// // // //       fetchSchedules(); // Re-fetch schedules to reflect the updates
// // // //     } catch (err) {
// // // //       console.error('Error updating schedule:', err);
// // // //       setError('Failed to update train schedule.');
// // // //     }
// // // //   };

// // // //   // Handle cancel button click to cancel editing
// // // //   const handleCancel = () => {
// // // //     setEditingSchedule(null);
// // // //   };

// // // //   // Handle delete button click for removing a schedule
// // // //   const handleDelete = async (scheduleId) => {
// // // //     try {
// // // //       await axiosInstance.delete(`/customer-rep/train-schedules/${scheduleId}`);
// // // //       setSchedules(schedules.filter((schedule) => schedule.ScheduleID !== scheduleId));
// // // //     } catch (err) {
// // // //       console.error('Error deleting schedule:', err);
// // // //       setError('Failed to delete train schedule.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Manage Train Schedules</h2>
// // // //       {error && <p className="error">{error}</p>}
// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Schedule ID</th>
// // // //             <th>Transit Line Name</th>
// // // //             <th>Travel Time</th>
// // // //             <th>Arrival DateTime</th>
// // // //             <th>Departure DateTime</th>
// // // //             <th>Train ID</th>
// // // //             <th>Actions</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {schedules.map((schedule) => (
// // // //             <tr key={schedule.ScheduleID}>
// // // //               {editingSchedule && editingSchedule.ScheduleID === schedule.ScheduleID ? (
// // // //                 <>
// // // //                   <td>{schedule.ScheduleID}</td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="TransitLineName"
// // // //                       value={editingSchedule.TransitLineName}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="TravelTime"
// // // //                       value={editingSchedule.TravelTime}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="ArrivalDateTime"
// // // //                       value={editingSchedule.ArrivalDateTime}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="DepartureDateTime"
// // // //                       value={editingSchedule.DepartureDateTime}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="TrainID"
// // // //                       value={editingSchedule.TrainID}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <button onClick={() => handleSave(schedule.ScheduleID)}>Save</button>
// // // //                     <button onClick={handleCancel} style={{ marginLeft: '5px' }}>Cancel</button>
// // // //                   </td>
// // // //                 </>
// // // //               ) : (
// // // //                 <>
// // // //                   <td>{schedule.ScheduleID}</td>
// // // //                   <td>{schedule.TransitLineName}</td>
// // // //                   <td>{schedule.TravelTime}</td>
// // // //                   <td>{schedule.ArrivalDateTime}</td>
// // // //                   <td>{schedule.DepartureDateTime}</td>
// // // //                   <td>{schedule.TrainID}</td>
// // // //                   <td>
// // // //                     <button onClick={() => handleEditClick(schedule)} style={{ marginRight: '5px' }}>
// // // //                       Edit
// // // //                     </button>
// // // //                     {schedule.ReservationCount === 0 ? (
// // // //                       <button onClick={() => handleDelete(schedule.ScheduleID)}>Delete</button>
// // // //                     ) : (
// // // //                       <button disabled title="Cannot delete. Reservations exist.">Delete</button>
// // // //                     )}
// // // //                   </td>
// // // //                 </>
// // // //               )}
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ManageSchedulesTab;

// // // // import React, { useState, useEffect } from 'react';
// // // // import axiosInstance from '../utils/axiosInstance';

// // // // const ManageSchedulesTab = () => {
// // // //   const [schedules, setSchedules] = useState([]);
// // // //   const [editingSchedule, setEditingSchedule] = useState(null);
// // // //   const [error, setError] = useState('');
// // // //   const [transitLineName, setTransitLineName] = useState('');
// // // //   const [travelTime, setTravelTime] = useState('');
// // // //   const [arrivalDateTime, setArrivalDateTime] = useState('');
// // // //   const [departureDateTime, setDepartureDateTime] = useState('');
// // // //   const [trainID, setTrainID] = useState('');
// // // //   const [success, setSuccess] = useState('');

// // // //   useEffect(() => {
// // // //     fetchSchedules();
// // // //   }, []);

// // // //   // Fetch all train schedules
// // // //   const fetchSchedules = async () => {
// // // //     try {
// // // //       const response = await axiosInstance.get('/customer-rep/train-schedules');
// // // //       setSchedules(response.data.trainSchedules);
// // // //       setError('');
// // // //     } catch (err) {
// // // //       console.error('Error fetching schedules:', err);
// // // //       setError('Failed to fetch schedules.');
// // // //     }
// // // //   };

// // // //   // Handle edit button click
// // // //   const handleEditClick = (schedule) => {
// // // //     setEditingSchedule(schedule);
// // // //   };

// // // //   // Handle input change for editable fields
// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setEditingSchedule((prev) => ({
// // // //       ...prev,
// // // //       [name]: value,
// // // //     }));
// // // //   };

// // // //   // Handle save button click for updating the schedule
// // // //   const handleSave = async (scheduleId) => {
// // // //     try {
// // // //       await axiosInstance.put(`/customer-rep/train-schedules/${scheduleId}`, editingSchedule);
// // // //       setEditingSchedule(null);
// // // //       fetchSchedules(); // Re-fetch schedules to reflect the updates
// // // //     } catch (err) {
// // // //       console.error('Error updating schedule:', err);
// // // //       setError('Failed to update train schedule.');
// // // //     }
// // // //   };

// // // //   // Handle cancel button click to cancel editing
// // // //   const handleCancel = () => {
// // // //     setEditingSchedule(null);
// // // //   };

// // // //   // Handle delete button click for removing a schedule
// // // //   const handleDelete = async (scheduleId) => {
// // // //     try {
// // // //       await axiosInstance.delete(`/customer-rep/train-schedules/${scheduleId}`);
// // // //       setSchedules(schedules.filter((schedule) => schedule.ScheduleID !== scheduleId));
// // // //     } catch (err) {
// // // //       console.error('Error deleting schedule:', err);
// // // //       setError('Failed to delete train schedule.');
// // // //     }
// // // //   };

// // // //   // Handle adding a new schedule
// // // //   const handleAddSchedule = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const response = await axiosInstance.post('/customer-rep/train-schedules', {
// // // //         TransitLineName: transitLineName,
// // // //         TravelTime: travelTime,
// // // //         ArrivalDateTime: arrivalDateTime,
// // // //         DepartureDateTime: departureDateTime,
// // // //         TrainID: trainID,
// // // //       });

// // // //       setSuccess(response.data.message);
// // // //       setError('');
// // // //       fetchSchedules(); // Refresh the schedule list

// // // //       // Clear form fields
// // // //       setTransitLineName('');
// // // //       setTravelTime('');
// // // //       setArrivalDateTime('');
// // // //       setDepartureDateTime('');
// // // //       setTrainID('');
// // // //     } catch (err) {
// // // //       setError(err.response?.data?.message || 'Error adding train schedule.');
// // // //       setSuccess('');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Manage Train Schedules</h2>

// // // //       {/* Add Train Schedule Form */}
// // // //       <div>
// // // //         <h3>Add Train Schedule</h3>
// // // //         <form onSubmit={handleAddSchedule}>
// // // //           <div>
// // // //             <label>Transit Line Name:</label>
// // // //             <input
// // // //               type="text"
// // // //               value={transitLineName}
// // // //               onChange={(e) => setTransitLineName(e.target.value)}
// // // //               required
// // // //             />
// // // //           </div>
// // // //           <div>
// // // //             <label>Travel Time (hh:mm:ss):</label>
// // // //             <input
// // // //               type="text"
// // // //               value={travelTime}
// // // //               onChange={(e) => setTravelTime(e.target.value)}
// // // //               required
// // // //             />
// // // //           </div>
// // // //           <div>
// // // //             <label>Arrival DateTime (yyyy-mm-dd hh:mm:ss):</label>
// // // //             <input
// // // //               type="text"
// // // //               value={arrivalDateTime}
// // // //               onChange={(e) => setArrivalDateTime(e.target.value)}
// // // //               required
// // // //             />
// // // //           </div>
// // // //           <div>
// // // //             <label>Departure DateTime (yyyy-mm-dd hh:mm:ss):</label>
// // // //             <input
// // // //               type="text"
// // // //               value={departureDateTime}
// // // //               onChange={(e) => setDepartureDateTime(e.target.value)}
// // // //               required
// // // //             />
// // // //           </div>
// // // //           <div>
// // // //             <label>Train ID:</label>
// // // //             <input
// // // //               type="text"
// // // //               value={trainID}
// // // //               onChange={(e) => setTrainID(e.target.value)}
// // // //               required
// // // //             />
// // // //           </div>
// // // //           <button type="submit">Add Schedule</button>
// // // //         </form>
// // // //         {error && <p className="error">{error}</p>}
// // // //         {success && <p className="success">{success}</p>}
// // // //       </div>

// // // //       {/* Existing Table for Viewing, Editing, and Deleting Schedules */}
// // // //       {error && <p className="error">{error}</p>}
// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Schedule ID</th>
// // // //             <th>Transit Line Name</th>
// // // //             <th>Travel Time</th>
// // // //             <th>Arrival DateTime</th>
// // // //             <th>Departure DateTime</th>
// // // //             <th>Train ID</th>
// // // //             <th>Actions</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {schedules.map((schedule) => (
// // // //             <tr key={schedule.ScheduleID}>
// // // //               {editingSchedule && editingSchedule.ScheduleID === schedule.ScheduleID ? (
// // // //                 <>
// // // //                   <td>{schedule.ScheduleID}</td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="TransitLineName"
// // // //                       value={editingSchedule.TransitLineName}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="TravelTime"
// // // //                       value={editingSchedule.TravelTime}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="ArrivalDateTime"
// // // //                       value={editingSchedule.ArrivalDateTime}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="DepartureDateTime"
// // // //                       value={editingSchedule.DepartureDateTime}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="TrainID"
// // // //                       value={editingSchedule.TrainID}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <button onClick={() => handleSave(schedule.ScheduleID)}>Save</button>
// // // //                     <button onClick={handleCancel} style={{ marginLeft: '5px' }}>Cancel</button>
// // // //                   </td>
// // // //                 </>
// // // //               ) : (
// // // //                 <>
// // // //                   <td>{schedule.ScheduleID}</td>
// // // //                   <td>{schedule.TransitLineName}</td>
// // // //                   <td>{schedule.TravelTime}</td>
// // // //                   <td>{schedule.ArrivalDateTime}</td>
// // // //                   <td>{schedule.DepartureDateTime}</td>
// // // //                   <td>{schedule.TrainID}</td>
// // // //                   <td>
// // // //                     <button onClick={() => handleEditClick(schedule)} style={{ marginRight: '5px' }}>
// // // //                       Edit
// // // //                     </button>
// // // //                     {schedule.ReservationCount === 0 ? (
// // // //                       <button onClick={() => handleDelete(schedule.ScheduleID)}>Delete</button>
// // // //                     ) : (
// // // //                       <button disabled title="Cannot delete. Reservations exist.">Delete</button>
// // // //                     )}
// // // //                   </td>
// // // //                 </>
// // // //               )}
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ManageSchedulesTab;


// // // // import React, { useState, useEffect } from 'react';
// // // // import axiosInstance from '../utils/axiosInstance';

// // // // const ManageSchedulesTab = () => {
// // // //   const [schedules, setSchedules] = useState([]);
// // // //   const [editingSchedule, setEditingSchedule] = useState(null);
// // // //   const [error, setError] = useState('');

// // // //   useEffect(() => {
// // // //     fetchSchedules();
// // // //   }, []);

// // // //   // Fetch all train schedules
// // // //   const fetchSchedules = async () => {
// // // //     try {
// // // //       const response = await axiosInstance.get('/customer-rep/train-schedules');
// // // //       setSchedules(response.data.trainSchedules);
// // // //       setError('');
// // // //     } catch (err) {
// // // //       console.error('Error fetching schedules:', err);
// // // //       setError('Failed to fetch schedules.');
// // // //     }
// // // //   };

// // // //   // Handle edit button click
// // // //   const handleEditClick = (schedule) => {
// // // //     setEditingSchedule({
// // // //       ...schedule,
// // // //       ArrivalDate: schedule.ArrivalDateTime.split('T')[0],
// // // //       ArrivalTime: schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5),
// // // //       DepartureDate: schedule.DepartureDateTime.split('T')[0],
// // // //       DepartureTime: schedule.DepartureDateTime.split('T')[1]?.substring(0, 5),
// // // //     });
// // // //   };

// // // //   // Handle input change for editable fields
// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setEditingSchedule((prev) => {
// // // //       const updatedSchedule = {
// // // //         ...prev,
// // // //         [name]: value,
// // // //       };
      
// // // //       // Automatically calculate travel time if arrival or departure changes
// // // //       if (name === 'ArrivalDate' || name === 'ArrivalTime' || name === 'DepartureDate' || name === 'DepartureTime') {
// // // //         const arrivalDateTime = `${updatedSchedule.ArrivalDate}T${updatedSchedule.ArrivalTime}:00`;
// // // //         const departureDateTime = `${updatedSchedule.DepartureDate}T${updatedSchedule.DepartureTime}:00`;

// // // //         if (updatedSchedule.ArrivalDate && updatedSchedule.ArrivalTime && updatedSchedule.DepartureDate && updatedSchedule.DepartureTime) {
// // // //           const arrival = new Date(arrivalDateTime);
// // // //           const departure = new Date(departureDateTime);
          
// // // //           // Calculate the travel time in hours and minutes
// // // //           const diffMs = Math.abs(arrival - departure);
// // // //           const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
// // // //           const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

// // // //           updatedSchedule.TravelTime = `${diffHours}:${diffMinutes < 10 ? '0' : ''}${diffMinutes}`;
// // // //         }
// // // //       }

// // // //       return updatedSchedule;
// // // //     });
// // // //   };

// // // //   // Handle save button click for updating the schedule
// // // //   const handleSave = async (scheduleId) => {
// // // //     try {
// // // //       const updatedSchedule = {
// // // //         ...editingSchedule,
// // // //         ArrivalDateTime: `${editingSchedule.ArrivalDate}T${editingSchedule.ArrivalTime}:00`,
// // // //         DepartureDateTime: `${editingSchedule.DepartureDate}T${editingSchedule.DepartureTime}:00`,
// // // //       };
// // // //       await axiosInstance.put(`/customer-rep/train-schedules/${scheduleId}`, updatedSchedule);
// // // //       setEditingSchedule(null);
// // // //       fetchSchedules(); // Re-fetch schedules to reflect the updates
// // // //     } catch (err) {
// // // //       console.error('Error updating schedule:', err);
// // // //       setError('Failed to update train schedule.');
// // // //     }
// // // //   };

// // // //   // Handle cancel button click to cancel editing
// // // //   const handleCancel = () => {
// // // //     setEditingSchedule(null);
// // // //   };

// // // //   // Handle delete button click for removing a schedule
// // // //   const handleDelete = async (scheduleId) => {
// // // //     try {
// // // //       await axiosInstance.delete(`/customer-rep/train-schedules/${scheduleId}`);
// // // //       setSchedules(schedules.filter((schedule) => schedule.ScheduleID !== scheduleId));
// // // //     } catch (err) {
// // // //       console.error('Error deleting schedule:', err);
// // // //       setError('Failed to delete train schedule.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Manage Train Schedules</h2>
// // // //       {error && <p className="error">{error}</p>}
// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Schedule ID</th>
// // // //             <th>Transit Line Name</th>
// // // //             <th>Travel Time</th>
// // // //             <th>Arrival Date</th>
// // // //             <th>Arrival Time</th>
// // // //             <th>Departure Date</th>
// // // //             <th>Departure Time</th>
// // // //             <th>Train ID</th>
// // // //             <th>Actions</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {schedules.map((schedule) => (
// // // //             <tr key={schedule.ScheduleID}>
// // // //               {editingSchedule && editingSchedule.ScheduleID === schedule.ScheduleID ? (
// // // //                 <>
// // // //                   <td>{schedule.ScheduleID}</td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="TransitLineName"
// // // //                       value={editingSchedule.TransitLineName}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>{editingSchedule.TravelTime}</td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="date"
// // // //                       name="ArrivalDate"
// // // //                       value={editingSchedule.ArrivalDate}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="time"
// // // //                       name="ArrivalTime"
// // // //                       value={editingSchedule.ArrivalTime}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="date"
// // // //                       name="DepartureDate"
// // // //                       value={editingSchedule.DepartureDate}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="time"
// // // //                       name="DepartureTime"
// // // //                       value={editingSchedule.DepartureTime}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="TrainID"
// // // //                       value={editingSchedule.TrainID}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <button onClick={() => handleSave(schedule.ScheduleID)}>Save</button>
// // // //                     <button onClick={handleCancel} style={{ marginLeft: '5px' }}>Cancel</button>
// // // //                   </td>
// // // //                 </>
// // // //               ) : (
// // // //                 <>
// // // //                   <td>{schedule.ScheduleID}</td>
// // // //                   <td>{schedule.TransitLineName}</td>
// // // //                   <td>{schedule.TravelTime}</td>
// // // //                   <td>{schedule.ArrivalDateTime.split('T')[0]}</td>
// // // //                   <td>{schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5)}</td>
// // // //                   <td>{schedule.DepartureDateTime.split('T')[0]}</td>
// // // //                   <td>{schedule.DepartureDateTime.split('T')[1]?.substring(0, 5)}</td>
// // // //                   <td>{schedule.TrainID}</td>
// // // //                   <td>
// // // //                     <button onClick={() => handleEditClick(schedule)} style={{ marginRight: '5px' }}>
// // // //                       Edit
// // // //                     </button>
// // // //                     {schedule.ReservationCount === 0 ? (
// // // //                       <button onClick={() => handleDelete(schedule.ScheduleID)}>Delete</button>
// // // //                     ) : (
// // // //                       <button disabled title="Cannot delete. Reservations exist.">Delete</button>
// // // //                     )}
// // // //                   </td>
// // // //                 </>
// // // //               )}
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ManageSchedulesTab;

// // // // import React, { useState, useEffect } from 'react';
// // // // import axiosInstance from '../utils/axiosInstance';

// // // // const ManageSchedulesTab = () => {
// // // //   const [schedules, setSchedules] = useState([]);
// // // //   const [editingSchedule, setEditingSchedule] = useState(null);
// // // //   const [error, setError] = useState('');
// // // //   const [stationName, setStationName] = useState('');
// // // //   const [filteredSchedules, setFilteredSchedules] = useState([]);

// // // //   useEffect(() => {
// // // //     fetchSchedules();
// // // //   }, []);

// // // //   // Fetch all train schedules
// // // //   const fetchSchedules = async () => {
// // // //     try {
// // // //       const response = await axiosInstance.get('/customer-rep/train-schedules');
// // // //       setSchedules(response.data.trainSchedules);
// // // //       setFilteredSchedules(response.data.trainSchedules);
// // // //       setError('');
// // // //     } catch (err) {
// // // //       console.error('Error fetching schedules:', err);
// // // //       setError('Failed to fetch schedules.');
// // // //     }
// // // //   };

// // // //   // Handle edit button click
// // // //   const handleEditClick = (schedule) => {
// // // //     setEditingSchedule({
// // // //       ...schedule,
// // // //       ArrivalDate: schedule.ArrivalDateTime.split('T')[0],
// // // //       ArrivalTime: schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5),
// // // //       DepartureDate: schedule.DepartureDateTime.split('T')[0],
// // // //       DepartureTime: schedule.DepartureDateTime.split('T')[1]?.substring(0, 5),
// // // //     });
// // // //   };

// // // //   // Handle input change for editable fields
// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setEditingSchedule((prev) => {
// // // //       const updatedSchedule = {
// // // //         ...prev,
// // // //         [name]: value,
// // // //       };

// // // //       // Automatically calculate travel time if arrival or departure changes
// // // //       if (name === 'ArrivalDate' || name === 'ArrivalTime' || name === 'DepartureDate' || name === 'DepartureTime') {
// // // //         const arrivalDateTime = `${updatedSchedule.ArrivalDate}T${updatedSchedule.ArrivalTime}:00`;
// // // //         const departureDateTime = `${updatedSchedule.DepartureDate}T${updatedSchedule.DepartureTime}:00`;

// // // //         if (updatedSchedule.ArrivalDate && updatedSchedule.ArrivalTime && updatedSchedule.DepartureDate && updatedSchedule.DepartureTime) {
// // // //           const arrival = new Date(arrivalDateTime);
// // // //           const departure = new Date(departureDateTime);

// // // //           // Calculate the travel time in hours and minutes
// // // //           const diffMs = Math.abs(arrival - departure);
// // // //           const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
// // // //           const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

// // // //           updatedSchedule.TravelTime = `${diffHours}:${diffMinutes < 10 ? '0' : ''}${diffMinutes}`;
// // // //         }
// // // //       }

// // // //       return updatedSchedule;
// // // //     });
// // // //   };

// // // //   // Handle save button click for updating the schedule
// // // //   const handleSave = async (scheduleId) => {
// // // //     try {
// // // //       const updatedSchedule = {
// // // //         ...editingSchedule,
// // // //         ArrivalDateTime: `${editingSchedule.ArrivalDate}T${editingSchedule.ArrivalTime}:00`,
// // // //         DepartureDateTime: `${editingSchedule.DepartureDate}T${editingSchedule.DepartureTime}:00`,
// // // //       };
// // // //       await axiosInstance.put(`/customer-rep/train-schedules/${scheduleId}`, updatedSchedule);
// // // //       setEditingSchedule(null);
// // // //       fetchSchedules(); // Re-fetch schedules to reflect the updates
// // // //     } catch (err) {
// // // //       console.error('Error updating schedule:', err);
// // // //       setError('Failed to update train schedule.');
// // // //     }
// // // //   };

// // // //   // Handle cancel button click to cancel editing
// // // //   const handleCancel = () => {
// // // //     setEditingSchedule(null);
// // // //   };

// // // //   // Handle delete button click for removing a schedule
// // // //   const handleDelete = async (scheduleId) => {
// // // //     try {
// // // //       await axiosInstance.delete(`/customer-rep/train-schedules/${scheduleId}`);
// // // //       setSchedules(schedules.filter((schedule) => schedule.ScheduleID !== scheduleId));
// // // //     } catch (err) {
// // // //       console.error('Error deleting schedule:', err);
// // // //       setError('Failed to delete train schedule.');
// // // //     }
// // // //   };

// // // //   // Fetch schedules by station name
// // // //   const fetchSchedulesByStation = async () => {
// // // //     if (!stationName) {
// // // //       setError("Please enter a station name.");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const response = await axiosInstance.get('/customer-rep/schedules-by-station', {
// // // //         params: { stationName },
// // // //       });
// // // //       setFilteredSchedules(response.data.trainSchedules);
// // // //       if (response.data.trainSchedules.length === 0) {
// // // //         setError("No schedules found for this station.");
// // // //       } else {
// // // //         setError("");
// // // //       }
// // // //     } catch (err) {
// // // //       console.error('Error fetching schedules by station:', err);
// // // //       setError('Failed to fetch schedules for the specified station.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Manage Train Schedules</h2>
// // // //       {error && <p className="error">{error}</p>}

// // // //       <div style={{ marginBottom: '20px' }}>
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Enter station name to filter schedules"
// // // //           value={stationName}
// // // //           onChange={(e) => setStationName(e.target.value)}
// // // //           style={{ padding: '10px', marginRight: '10px' }}
// // // //         />
// // // //         <button onClick={fetchSchedulesByStation}>Search Schedules by Station</button>
// // // //       </div>

// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Schedule ID</th>
// // // //             <th>Transit Line Name</th>
// // // //             <th>Travel Time</th>
// // // //             <th>Arrival Date</th>
// // // //             <th>Arrival Time</th>
// // // //             <th>Departure Date</th>
// // // //             <th>Departure Time</th>
// // // //             <th>Train ID</th>
// // // //             <th>Actions</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {filteredSchedules.map((schedule) => (
// // // //             <tr key={schedule.ScheduleID}>
// // // //               {editingSchedule && editingSchedule.ScheduleID === schedule.ScheduleID ? (
// // // //                 <>
// // // //                   <td>{schedule.ScheduleID}</td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="TransitLineName"
// // // //                       value={editingSchedule.TransitLineName}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>{editingSchedule.TravelTime}</td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="date"
// // // //                       name="ArrivalDate"
// // // //                       value={editingSchedule.ArrivalDate}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="time"
// // // //                       name="ArrivalTime"
// // // //                       value={editingSchedule.ArrivalTime}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="date"
// // // //                       name="DepartureDate"
// // // //                       value={editingSchedule.DepartureDate}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="time"
// // // //                       name="DepartureTime"
// // // //                       value={editingSchedule.DepartureTime}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="TrainID"
// // // //                       value={editingSchedule.TrainID}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <button onClick={() => handleSave(schedule.ScheduleID)}>Save</button>
// // // //                     <button onClick={handleCancel} style={{ marginLeft: '5px' }}>Cancel</button>
// // // //                   </td>
// // // //                 </>
// // // //               ) : (
// // // //                 <>
// // // //                   <td>{schedule.ScheduleID}</td>
// // // //                   <td>{schedule.TransitLineName}</td>
// // // //                   <td>{schedule.TravelTime}</td>
// // // //                   <td>{schedule.ArrivalDateTime.split('T')[0]}</td>
// // // //                   <td>{schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5)}</td>
// // // //                   <td>{schedule.DepartureDateTime.split('T')[0]}</td>
// // // //                   <td>{schedule.DepartureDateTime.split('T')[1]?.substring(0, 5)}</td>
// // // //                   <td>{schedule.TrainID}</td>
// // // //                   <td>
// // // //                     <button onClick={() => handleEditClick(schedule)} style={{ marginRight: '5px' }}>
// // // //                       Edit
// // // //                     </button>
// // // //                     {schedule.ReservationCount === 0 ? (
// // // //                       <button onClick={() => handleDelete(schedule.ScheduleID)}>Delete</button>
// // // //                     ) : (
// // // //                       <button disabled title="Cannot delete. Reservations exist.">Delete</button>
// // // //                     )}
// // // //                   </td>
// // // //                 </>
// // // //               )}
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ManageSchedulesTab;

// // // // import React, { useState, useEffect } from 'react';
// // // // import axiosInstance from '../utils/axiosInstance';

// // // // const ManageSchedulesTab = () => {
// // // //   const [schedules, setSchedules] = useState([]);
// // // //   const [editingSchedule, setEditingSchedule] = useState(null);
// // // //   const [error, setError] = useState('');
// // // //   const [stationName, setStationName] = useState('');
// // // //   const [filteredSchedules, setFilteredSchedules] = useState([]);

// // // //   useEffect(() => {
// // // //     fetchSchedules();
// // // //   }, []);

// // // //   // Fetch all train schedules
// // // //   const fetchSchedules = async () => {
// // // //     try {
// // // //       const response = await axiosInstance.get('/customer-rep/train-schedules');
// // // //       setSchedules(response.data.trainSchedules);
// // // //       setFilteredSchedules(response.data.trainSchedules);
// // // //       setError('');
// // // //     } catch (err) {
// // // //       console.error('Error fetching schedules:', err);
// // // //       setError('Failed to fetch schedules.');
// // // //     }
// // // //   };

// // // //   // Handle edit button click
// // // //   const handleEditClick = (schedule) => {
// // // //     setEditingSchedule({
// // // //       ...schedule,
// // // //       ArrivalDate: schedule.ArrivalDateTime.split('T')[0],
// // // //       ArrivalTime: schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5),
// // // //       DepartureDate: schedule.DepartureDateTime.split('T')[0],
// // // //       DepartureTime: schedule.DepartureDateTime.split('T')[1]?.substring(0, 5),
// // // //     });
// // // //   };

// // // //   // Handle input change for editable fields
// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setEditingSchedule((prev) => {
// // // //       const updatedSchedule = {
// // // //         ...prev,
// // // //         [name]: value,
// // // //       };

// // // //       // Automatically calculate travel time if arrival or departure changes
// // // //       if (name === 'ArrivalDate' || name === 'ArrivalTime' || name === 'DepartureDate' || name === 'DepartureTime') {
// // // //         const arrivalDateTime = `${updatedSchedule.ArrivalDate}T${updatedSchedule.ArrivalTime}:00`;
// // // //         const departureDateTime = `${updatedSchedule.DepartureDate}T${updatedSchedule.DepartureTime}:00`;

// // // //         if (updatedSchedule.ArrivalDate && updatedSchedule.ArrivalTime && updatedSchedule.DepartureDate && updatedSchedule.DepartureTime) {
// // // //           const arrival = new Date(arrivalDateTime);
// // // //           const departure = new Date(departureDateTime);

// // // //           // Calculate the travel time in hours and minutes
// // // //           const diffMs = Math.abs(arrival - departure);
// // // //           const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
// // // //           const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

// // // //           updatedSchedule.TravelTime = `${diffHours}:${diffMinutes < 10 ? '0' : ''}${diffMinutes}`;
// // // //         }
// // // //       }

// // // //       return updatedSchedule;
// // // //     });
// // // //   };

// // // //   // Handle save button click for updating the schedule
// // // //   const handleSave = async (scheduleId) => {
// // // //     try {
// // // //       const updatedSchedule = {
// // // //         ...editingSchedule,
// // // //         ArrivalDateTime: `${editingSchedule.ArrivalDate}T${editingSchedule.ArrivalTime}:00`,
// // // //         DepartureDateTime: `${editingSchedule.DepartureDate}T${editingSchedule.DepartureTime}:00`,
// // // //       };
// // // //       await axiosInstance.put(`/customer-rep/train-schedules/${scheduleId}`, updatedSchedule);
// // // //       setEditingSchedule(null);
// // // //       fetchSchedules(); // Re-fetch schedules to reflect the updates
// // // //     } catch (err) {
// // // //       console.error('Error updating schedule:', err);
// // // //       setError('Failed to update train schedule.');
// // // //     }
// // // //   };

// // // //   // Handle cancel button click to cancel editing
// // // //   const handleCancel = () => {
// // // //     setEditingSchedule(null);
// // // //   };

// // // //   // Handle delete button click for removing a schedule
// // // //   const handleDelete = async (scheduleId) => {
// // // //     try {
// // // //       await axiosInstance.delete(`/customer-rep/train-schedules/${scheduleId}`);
// // // //       setSchedules(schedules.filter((schedule) => schedule.ScheduleID !== scheduleId));
// // // //     } catch (err) {
// // // //       console.error('Error deleting schedule:', err);
// // // //       setError('Failed to delete train schedule.');
// // // //     }
// // // //   };

// // // //   // Fetch schedules by station name
// // // //   const fetchSchedulesByStation = async () => {
// // // //     if (!stationName) {
// // // //       setError("Please enter a station name.");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const response = await axiosInstance.get('/customer-rep/schedules-by-station', {
// // // //         params: { stationName },
// // // //       });
// // // //       setFilteredSchedules(response.data.trainSchedules);
// // // //       if (response.data.trainSchedules.length === 0) {
// // // //         setError("No schedules found for this station.");
// // // //       } else {
// // // //         setError("");
// // // //       }
// // // //     } catch (err) {
// // // //       console.error('Error fetching schedules by station:', err);
// // // //       setError('Failed to fetch schedules for the specified station.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Manage Train Schedules</h2>
// // // //       {error && <p className="error">{error}</p>}

// // // //       {/* Manage Train Schedules Section */}
// // // //       <h3>Manage Train Schedules (Edit/Delete)</h3>
// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Schedule ID</th>
// // // //             <th>Transit Line Name</th>
// // // //             <th>Travel Time</th>
// // // //             <th>Arrival Date</th>
// // // //             <th>Arrival Time</th>
// // // //             <th>Departure Date</th>
// // // //             <th>Departure Time</th>
// // // //             <th>Train ID</th>
// // // //             <th>Actions</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {schedules.map((schedule) => (
// // // //             <tr key={schedule.ScheduleID}>
// // // //               {editingSchedule && editingSchedule.ScheduleID === schedule.ScheduleID ? (
// // // //                 <>
// // // //                   <td>{schedule.ScheduleID}</td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="TransitLineName"
// // // //                       value={editingSchedule.TransitLineName}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>{editingSchedule.TravelTime}</td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="date"
// // // //                       name="ArrivalDate"
// // // //                       value={editingSchedule.ArrivalDate}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="time"
// // // //                       name="ArrivalTime"
// // // //                       value={editingSchedule.ArrivalTime}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="date"
// // // //                       name="DepartureDate"
// // // //                       value={editingSchedule.DepartureDate}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="time"
// // // //                       name="DepartureTime"
// // // //                       value={editingSchedule.DepartureTime}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="TrainID"
// // // //                       value={editingSchedule.TrainID}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <button onClick={() => handleSave(schedule.ScheduleID)}>Save</button>
// // // //                     <button onClick={handleCancel} style={{ marginLeft: '5px' }}>Cancel</button>
// // // //                   </td>
// // // //                 </>
// // // //               ) : (
// // // //                 <>
// // // //                   <td>{schedule.ScheduleID}</td>
// // // //                   <td>{schedule.TransitLineName}</td>
// // // //                   <td>{schedule.TravelTime}</td>
// // // //                   <td>{schedule.ArrivalDateTime.split('T')[0]}</td>
// // // //                   <td>{schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5)}</td>
// // // //                   <td>{schedule.DepartureDateTime.split('T')[0]}</td>
// // // //                   <td>{schedule.DepartureDateTime.split('T')[1]?.substring(0, 5)}</td>
// // // //                   <td>{schedule.TrainID}</td>
// // // //                   <td>
// // // //                     <button onClick={() => handleEditClick(schedule)} style={{ marginRight: '5px' }}>
// // // //                       Edit
// // // //                     </button>
// // // //                     {schedule.ReservationCount === 0 ? (
// // // //                       <button onClick={() => handleDelete(schedule.ScheduleID)}>Delete</button>
// // // //                     ) : (
// // // //                       <button disabled title="Cannot delete. Reservations exist.">Delete</button>
// // // //                     )}
// // // //                   </td>
// // // //                 </>
// // // //               )}
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>

// // // //       {/* Search Train Schedules by Station Section */}
// // // //       <h3>Search Train Schedules by Station (Origin or Destination)</h3>
// // // //       <div style={{ marginBottom: '20px' }}>
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Enter station name to filter schedules"
// // // //           value={stationName}
// // // //           onChange={(e) => setStationName(e.target.value)}
// // // //           style={{ padding: '10px', marginRight: '10px' }}
// // // //         />
// // // //         <button onClick={fetchSchedulesByStation}>Search Schedules by Station</button>
// // // //       </div>

// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Schedule ID</th>
// // // //             <th>Transit Line Name</th>
// // // //             <th>Travel Time</th>
// // // //             <th>Arrival Date</th>
// // // //             <th>Arrival Time</th>
// // // //             <th>Departure Date</th>
// // // //             <th>Departure Time</th>
// // // //             <th>Train ID</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {filteredSchedules.map((schedule) => (
// // // //             <tr key={schedule.ScheduleID}>
// // // //               <td>{schedule.ScheduleID}</td>
// // // //               <td>{schedule.TransitLineName}</td>
// // // //               <td>{schedule.TravelTime}</td>
// // // //               <td>{schedule.ArrivalDateTime.split('T')[0]}</td>
// // // //               <td>{schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5)}</td>
// // // //               <td>{schedule.DepartureDateTime.split('T')[0]}</td>
// // // //               <td>{schedule.DepartureDateTime.split('T')[1]?.substring(0, 5)}</td>
// // // //               <td>{schedule.TrainID}</td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ManageSchedulesTab;


// // // // import React, { useState, useEffect } from 'react';
// // // // import axiosInstance from '../utils/axiosInstance';

// // // // const ManageSchedulesTab = () => {
// // // //   const [schedules, setSchedules] = useState([]);
// // // //   const [editingSchedule, setEditingSchedule] = useState(null);
// // // //   const [error, setError] = useState('');
// // // //   const [stationName, setStationName] = useState('');
// // // //   const [originSchedules, setOriginSchedules] = useState([]);
// // // //   const [destinationSchedules, setDestinationSchedules] = useState([]);

// // // //   useEffect(() => {
// // // //     fetchSchedules();
// // // //   }, []);

// // // //   // Fetch all train schedules
// // // //   const fetchSchedules = async () => {
// // // //     try {
// // // //       const response = await axiosInstance.get('/customer-rep/train-schedules');
// // // //       setSchedules(response.data.trainSchedules);
// // // //       setError('');
// // // //     } catch (err) {
// // // //       console.error('Error fetching schedules:', err);
// // // //       setError('Failed to fetch schedules.');
// // // //     }
// // // //   };

// // // //   // Handle edit button click
// // // //   const handleEditClick = (schedule) => {
// // // //     setEditingSchedule({
// // // //       ...schedule,
// // // //       ArrivalDate: schedule.ArrivalDateTime.split('T')[0],
// // // //       ArrivalTime: schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5),
// // // //       DepartureDate: schedule.DepartureDateTime.split('T')[0],
// // // //       DepartureTime: schedule.DepartureDateTime.split('T')[1]?.substring(0, 5),
// // // //     });
// // // //   };

// // // //   // Handle input change for editable fields
// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setEditingSchedule((prev) => {
// // // //       const updatedSchedule = {
// // // //         ...prev,
// // // //         [name]: value,
// // // //       };

// // // //       // Automatically calculate travel time if arrival or departure changes
// // // //       if (name === 'ArrivalDate' || name === 'ArrivalTime' || name === 'DepartureDate' || name === 'DepartureTime') {
// // // //         const arrivalDateTime = `${updatedSchedule.ArrivalDate}T${updatedSchedule.ArrivalTime}:00`;
// // // //         const departureDateTime = `${updatedSchedule.DepartureDate}T${updatedSchedule.DepartureTime}:00`;

// // // //         if (updatedSchedule.ArrivalDate && updatedSchedule.ArrivalTime && updatedSchedule.DepartureDate && updatedSchedule.DepartureTime) {
// // // //           const arrival = new Date(arrivalDateTime);
// // // //           const departure = new Date(departureDateTime);

// // // //           // Calculate the travel time in hours and minutes
// // // //           const diffMs = Math.abs(arrival - departure);
// // // //           const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
// // // //           const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

// // // //           updatedSchedule.TravelTime = `${diffHours}:${diffMinutes < 10 ? '0' : ''}${diffMinutes}`;
// // // //         }
// // // //       }

// // // //       return updatedSchedule;
// // // //     });
// // // //   };

// // // //   // Handle save button click for updating the schedule
// // // //   const handleSave = async (scheduleId) => {
// // // //     try {
// // // //       const updatedSchedule = {
// // // //         ...editingSchedule,
// // // //         ArrivalDateTime: `${editingSchedule.ArrivalDate}T${editingSchedule.ArrivalTime}:00`,
// // // //         DepartureDateTime: `${editingSchedule.DepartureDate}T${editingSchedule.DepartureTime}:00`,
// // // //       };
// // // //       await axiosInstance.put(`/customer-rep/train-schedules/${scheduleId}`, updatedSchedule);
// // // //       setEditingSchedule(null);
// // // //       fetchSchedules(); // Re-fetch schedules to reflect the updates
// // // //     } catch (err) {
// // // //       console.error('Error updating schedule:', err);
// // // //       setError('Failed to update train schedule.');
// // // //     }
// // // //   };

// // // //   // Handle cancel button click to cancel editing
// // // //   const handleCancel = () => {
// // // //     setEditingSchedule(null);
// // // //   };

// // // //   // Handle delete button click for removing a schedule
// // // //   const handleDelete = async (scheduleId) => {
// // // //     try {
// // // //       await axiosInstance.delete(`/customer-rep/train-schedules/${scheduleId}`);
// // // //       setSchedules(schedules.filter((schedule) => schedule.ScheduleID !== scheduleId));
// // // //     } catch (err) {
// // // //       console.error('Error deleting schedule:', err);
// // // //       setError('Failed to delete train schedule.');
// // // //     }
// // // //   };

// // // //   // Fetch schedules by station name (origin and destination)
// // // //   const fetchSchedulesByStation = async () => {
// // // //     if (!stationName) {
// // // //       setError("Please enter a station name.");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const response = await axiosInstance.get('/customer-rep/schedules-by-station', {
// // // //         params: { stationName },
// // // //       });
// // // //       setOriginSchedules(response.data.originSchedules);
// // // //       setDestinationSchedules(response.data.destinationSchedules);
// // // //       if (response.data.originSchedules.length === 0 && response.data.destinationSchedules.length === 0) {
// // // //         setError("No schedules found for this station.");
// // // //       } else {
// // // //         setError("");
// // // //       }
// // // //     } catch (err) {
// // // //       console.error('Error fetching schedules by station:', err);
// // // //       setError('Failed to fetch schedules for the specified station.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Manage Train Schedules</h2>
// // // //       {error && <p className="error">{error}</p>}

// // // //       {/* Manage Train Schedules Section */}
// // // //       <h3>Manage Train Schedules (Edit/Delete)</h3>
// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Schedule ID</th>
// // // //             <th>Transit Line Name</th>
// // // //             <th>Travel Time</th>
// // // //             <th>Arrival Date</th>
// // // //             <th>Arrival Time</th>
// // // //             <th>Departure Date</th>
// // // //             <th>Departure Time</th>
// // // //             <th>Train ID</th>
// // // //             <th>Actions</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {schedules.map((schedule) => (
// // // //             <tr key={schedule.ScheduleID}>
// // // //               {editingSchedule && editingSchedule.ScheduleID === schedule.ScheduleID ? (
// // // //                 <>
// // // //                   <td>{schedule.ScheduleID}</td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="TransitLineName"
// // // //                       value={editingSchedule.TransitLineName}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>{editingSchedule.TravelTime}</td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="date"
// // // //                       name="ArrivalDate"
// // // //                       value={editingSchedule.ArrivalDate}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="time"
// // // //                       name="ArrivalTime"
// // // //                       value={editingSchedule.ArrivalTime}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="date"
// // // //                       name="DepartureDate"
// // // //                       value={editingSchedule.DepartureDate}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="time"
// // // //                       name="DepartureTime"
// // // //                       value={editingSchedule.DepartureTime}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <input
// // // //                       type="text"
// // // //                       name="TrainID"
// // // //                       value={editingSchedule.TrainID}
// // // //                       onChange={handleInputChange}
// // // //                     />
// // // //                   </td>
// // // //                   <td>
// // // //                     <button onClick={() => handleSave(schedule.ScheduleID)}>Save</button>
// // // //                     <button onClick={handleCancel} style={{ marginLeft: '5px' }}>Cancel</button>
// // // //                   </td>
// // // //                 </>
// // // //               ) : (
// // // //                 <>
// // // //                   <td>{schedule.ScheduleID}</td>
// // // //                   <td>{schedule.TransitLineName}</td>
// // // //                   <td>{schedule.TravelTime}</td>
// // // //                   <td>{schedule.ArrivalDateTime.split('T')[0]}</td>
// // // //                   <td>{schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5)}</td>
// // // //                   <td>{schedule.DepartureDateTime.split('T')[0]}</td>
// // // //                   <td>{schedule.DepartureDateTime.split('T')[1]?.substring(0, 5)}</td>
// // // //                   <td>{schedule.TrainID}</td>
// // // //                   <td>
// // // //                     <button onClick={() => handleEditClick(schedule)} style={{ marginRight: '5px' }}>
// // // //                       Edit
// // // //                     </button>
// // // //                     {schedule.ReservationCount === 0 ? (
// // // //                       <button onClick={() => handleDelete(schedule.ScheduleID)}>Delete</button>
// // // //                     ) : (
// // // //                       <button disabled title="Cannot delete. Reservations exist.">Delete</button>
// // // //                     )}
// // // //                   </td>
// // // //                 </>
// // // //               )}
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>

// // // //       {/* Search Train Schedules by Station Section */}
// // // //       <h3>Search Train Schedules by Station (Origin or Destination)</h3>
// // // //       <div style={{ marginBottom: '20px' }}>
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Enter station name"
// // // //           value={stationName}
// // // //           onChange={(e) => setStationName(e.target.value)}
// // // //           style={{ padding: '10px', marginRight: '10px' }}
// // // //         />
// // // //         <button onClick={fetchSchedulesByStation}>Search Schedules by Station</button>
// // // //       </div>

// // // //       <h4>Schedules with Station as Origin</h4>
// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Schedule ID</th>
// // // //             <th>Transit Line Name</th>
// // // //             <th>Travel Time</th>
// // // //             <th>Arrival Date</th>
// // // //             <th>Arrival Time</th>
// // // //             <th>Departure Date</th>
// // // //             <th>Departure Time</th>
// // // //             <th>Train ID</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {originSchedules.length > 0 ? (
// // // //             originSchedules.map((schedule) => (
// // // //               <tr key={schedule.ScheduleID}>
// // // //                 <td>{schedule.ScheduleID}</td>
// // // //                 <td>{schedule.TransitLineName}</td>
// // // //                 <td>{schedule.TravelTime}</td>
// // // //                 <td>{schedule.ArrivalDateTime.split('T')[0]}</td>
// // // //                 <td>{schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5)}</td>
// // // //                 <td>{schedule.DepartureDateTime.split('T')[0]}</td>
// // // //                 <td>{schedule.DepartureDateTime.split('T')[1]?.substring(0, 5)}</td>
// // // //                 <td>{schedule.TrainID}</td>
// // // //               </tr>
// // // //             ))
// // // //           ) : (
// // // //             <tr>
// // // //               <td colSpan="8">No schedules found with station as origin.</td>
// // // //             </tr>
// // // //           )}
// // // //         </tbody>
// // // //       </table>

// // // //       <h4>Schedules with Station as Destination</h4>
// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Schedule ID</th>
// // // //             <th>Transit Line Name</th>
// // // //             <th>Travel Time</th>
// // // //             <th>Arrival Date</th>
// // // //             <th>Arrival Time</th>
// // // //             <th>Departure Date</th>
// // // //             <th>Departure Time</th>
// // // //             <th>Train ID</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {destinationSchedules.length > 0 ? (
// // // //             destinationSchedules.map((schedule) => (
// // // //               <tr key={schedule.ScheduleID}>
// // // //                 <td>{schedule.ScheduleID}</td>
// // // //                 <td>{schedule.TransitLineName}</td>
// // // //                 <td>{schedule.TravelTime}</td>
// // // //                 <td>{schedule.ArrivalDateTime.split('T')[0]}</td>
// // // //                 <td>{schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5)}</td>
// // // //                 <td>{schedule.DepartureDateTime.split('T')[0]}</td>
// // // //                 <td>{schedule.DepartureDateTime.split('T')[1]?.substring(0, 5)}</td>
// // // //                 <td>{schedule.TrainID}</td>
// // // //               </tr>
// // // //             ))
// // // //           ) : (
// // // //             <tr>
// // // //               <td colSpan="8">No schedules found with station as destination.</td>
// // // //             </tr>
// // // //           )}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ManageSchedulesTab;


// // // import React, { useState, useEffect } from 'react';
// // // import axiosInstance from '../utils/axiosInstance';

// // // const ManageSchedulesTab = () => {
// // //   const [schedules, setSchedules] = useState([]);
// // //   const [stations, setStations] = useState([]);
// // //   const [newSchedule, setNewSchedule] = useState({
// // //     transitLineName: '',
// // //     travelTime: '',
// // //     arrivalDateTime: '',
// // //     departureDateTime: '',
// // //     trainID: '',
// // //     stops: []
// // //   });
// // //   const [error, setError] = useState('');

// // //   useEffect(() => {
// // //     fetchSchedules();
// // //     fetchStations();
// // //   }, []);

// // //   // Fetch all train schedules
// // //   const fetchSchedules = async () => {
// // //     try {
// // //       const response = await axiosInstance.get('/customer-rep/train-schedules');
// // //       setSchedules(response.data.trainSchedules);
// // //       setError('');
// // //     } catch (err) {
// // //       console.error('Error fetching schedules:', err);
// // //       setError('Failed to fetch schedules.');
// // //     }
// // //   };

// // //   // Fetch all available stations for stops selection
// // //   const fetchStations = async () => {
// // //     try {
// // //       const response = await axiosInstance.get('/stations');
// // //       setStations(response.data.stations);
// // //     } catch (err) {
// // //       console.error('Error fetching stations:', err);
// // //     }
// // //   };

// // //   // Handle input change for new schedule form
// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setNewSchedule((prev) => ({
// // //       ...prev,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   // Handle stops selection
// // //   const handleStopSelection = (e) => {
// // //     const stationID = parseInt(e.target.value);
// // //     const isChecked = e.target.checked;

// // //     setNewSchedule((prev) => {
// // //       const updatedStops = isChecked
// // //         ? [...prev.stops, { stationID, arrivalDateTime: '', departureDateTime: '' }]
// // //         : prev.stops.filter((stop) => stop.stationID !== stationID);

// // //       return { ...prev, stops: updatedStops };
// // //     });
// // //   };

// // //   // Handle arrival and departure date-time changes for each stop
// // //   const handleStopDateTimeChange = (stationID, field, value) => {
// // //     setNewSchedule((prev) => {
// // //       const updatedStops = prev.stops.map((stop) => {
// // //         if (stop.stationID === stationID) {
// // //           return { ...stop, [field]: value };
// // //         }
// // //         return stop;
// // //       });
// // //       return { ...prev, stops: updatedStops };
// // //     });
// // //   };

// // //   // Handle save button click for adding the new schedule
// // //   const handleAddSchedule = async () => {
// // //     try {
// // //       await axiosInstance.post('/customer-rep/train-schedules', newSchedule);
// // //       setNewSchedule({
// // //         transitLineName: '',
// // //         travelTime: '',
// // //         arrivalDateTime: '',
// // //         departureDateTime: '',
// // //         trainID: '',
// // //         stops: []
// // //       });
// // //       fetchSchedules(); // Re-fetch schedules to reflect the new addition
// // //       setError('');
// // //     } catch (err) {
// // //       console.error('Error adding train schedule:', err);
// // //       setError('Failed to add train schedule.');
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Manage Train Schedules</h2>
// // //       {error && <p className="error">{error}</p>}
      
// // //       {/* Add Train Schedule Form */}
// // //       <div style={{ marginBottom: '20px' }}>
// // //         <h3>Add Train Schedule</h3>
// // //         <input
// // //           type="text"
// // //           name="transitLineName"
// // //           placeholder="Transit Line Name"
// // //           value={newSchedule.transitLineName}
// // //           onChange={handleInputChange}
// // //         />
// // //         <input
// // //           type="text"
// // //           name="travelTime"
// // //           placeholder="Travel Time (HH:MM)"
// // //           value={newSchedule.travelTime}
// // //           onChange={handleInputChange}
// // //         />
// // //         <input
// // //           type="datetime-local"
// // //           name="arrivalDateTime"
// // //           placeholder="Arrival DateTime"
// // //           value={newSchedule.arrivalDateTime}
// // //           onChange={handleInputChange}
// // //         />
// // //         <input
// // //           type="datetime-local"
// // //           name="departureDateTime"
// // //           placeholder="Departure DateTime"
// // //           value={newSchedule.departureDateTime}
// // //           onChange={handleInputChange}
// // //         />
// // //         <input
// // //           type="text"
// // //           name="trainID"
// // //           placeholder="Train ID"
// // //           value={newSchedule.trainID}
// // //           onChange={handleInputChange}
// // //         />

// // //         <h4>Select Stops</h4>
// // //         {stations.map((station) => (
// // //           <div key={station.StationID}>
// // //             <label>
// // //               <input
// // //                 type="checkbox"
// // //                 value={station.StationID}
// // //                 onChange={handleStopSelection}
// // //               />
// // //               {station.StationName}
// // //             </label>
// // //             {newSchedule.stops.some((stop) => stop.stationID === station.StationID) && (
// // //               <div>
// // //                 <input
// // //                   type="datetime-local"
// // //                   placeholder="Arrival DateTime"
// // //                   onChange={(e) =>
// // //                     handleStopDateTimeChange(station.StationID, 'arrivalDateTime', e.target.value)
// // //                   }
// // //                 />
// // //                 <input
// // //                   type="datetime-local"
// // //                   placeholder="Departure DateTime"
// // //                   onChange={(e) =>
// // //                     handleStopDateTimeChange(station.StationID, 'departureDateTime', e.target.value)
// // //                   }
// // //                 />
// // //               </div>
// // //             )}
// // //           </div>
// // //         ))}

// // //         <button onClick={handleAddSchedule}>Add Schedule</button>
// // //       </div>

// // //       {/* Train Schedules Table */}
// // //       <table>
// // //         <thead>
// // //           <tr>
// // //             <th>Schedule ID</th>
// // //             <th>Transit Line Name</th>
// // //             <th>Travel Time</th>
// // //             <th>Arrival DateTime</th>
// // //             <th>Departure DateTime</th>
// // //             <th>Train ID</th>
// // //             <th>Actions</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {schedules.map((schedule) => (
// // //             <tr key={schedule.ScheduleID}>
// // //               <td>{schedule.ScheduleID}</td>
// // //               <td>{schedule.TransitLineName}</td>
// // //               <td>{schedule.TravelTime}</td>
// // //               <td>{schedule.ArrivalDateTime}</td>
// // //               <td>{schedule.DepartureDateTime}</td>
// // //               <td>{schedule.TrainID}</td>
// // //               <td>
// // //                 {/* You can implement edit and delete buttons here */}
// // //               </td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default ManageSchedulesTab;

// // import React, { useState, useEffect } from 'react';
// // import axiosInstance from '../utils/axiosInstance';

// // const ManageSchedulesTab = () => {
// //   const [schedules, setSchedules] = useState([]);
// //   const [stations, setStations] = useState([]);
// //   const [newSchedule, setNewSchedule] = useState({
// //     transitLineName: '',
// //     travelTime: '',
// //     arrivalDateTime: '',
// //     departureDateTime: '',
// //     trainID: '',
// //     stops: []
// //   });
// //   const [searchStationName, setSearchStationName] = useState('');
// //   const [searchedSchedules, setSearchedSchedules] = useState([]);
// //   const [editingSchedule, setEditingSchedule] = useState(null);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     fetchSchedules();
// //     fetchStations();
// //   }, []);

// //   // Fetch all train schedules
// //   const fetchSchedules = async () => {
// //     try {
// //       const response = await axiosInstance.get('/customer-rep/train-schedules');
// //       setSchedules(response.data.trainSchedules);
// //       setError('');
// //     } catch (err) {
// //       console.error('Error fetching schedules:', err);
// //       setError('Failed to fetch schedules.');
// //     }
// //   };

// //   // Fetch all available stations for stops selection
// //   const fetchStations = async () => {
// //     try {
// //       const response = await axiosInstance.get('/stations');
// //       setStations(response.data.stations);
// //     } catch (err) {
// //       console.error('Error fetching stations:', err);
// //     }
// //   };

// //   // Handle input change for new schedule form
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewSchedule((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   // Handle stops selection
// //   const handleStopSelection = (e) => {
// //     const stationID = parseInt(e.target.value);
// //     const isChecked = e.target.checked;

// //     setNewSchedule((prev) => {
// //       const updatedStops = isChecked
// //         ? [...prev.stops, { stationID, arrivalDateTime: '', departureDateTime: '' }]
// //         : prev.stops.filter((stop) => stop.stationID !== stationID);

// //       return { ...prev, stops: updatedStops };
// //     });
// //   };

// //   // Handle arrival and departure date-time changes for each stop
// //   const handleStopDateTimeChange = (stationID, field, value) => {
// //     setNewSchedule((prev) => {
// //       const updatedStops = prev.stops.map((stop) => {
// //         if (stop.stationID === stationID) {
// //           return { ...stop, [field]: value };
// //         }
// //         return stop;
// //       });
// //       return { ...prev, stops: updatedStops };
// //     });
// //   };

// //   // Handle save button click for adding the new schedule
// //   const handleAddSchedule = async () => {
// //     try {
// //       await axiosInstance.post('/customer-rep/train-schedules', newSchedule);
// //       setNewSchedule({
// //         transitLineName: '',
// //         travelTime: '',
// //         arrivalDateTime: '',
// //         departureDateTime: '',
// //         trainID: '',
// //         stops: []
// //       });
// //       fetchSchedules(); // Re-fetch schedules to reflect the new addition
// //       setError('');
// //     } catch (err) {
// //       console.error('Error adding train schedule:', err);
// //       setError('Failed to add train schedule.');
// //     }
// //   };

// //   // Handle search for schedules by station name
// //   const handleSearchSchedules = async () => {
// //     if (!searchStationName) {
// //       setError('Please enter a station name to search.');
// //       return;
// //     }
// //     try {
// //       const response = await axiosInstance.get(`/customer-rep/train-schedules/station?stationName=${searchStationName}`);
// //       setSearchedSchedules(response.data.trainSchedules);
// //       setError('');
// //     } catch (err) {
// //       console.error('Error searching schedules:', err);
// //       setError('Failed to search schedules.');
// //     }
// //   };

// //   // Handle edit button click
// //   const handleEditClick = (schedule) => {
// //     setEditingSchedule({
// //       ...schedule,
// //       ArrivalDate: schedule.ArrivalDateTime.split('T')[0],
// //       ArrivalTime: schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5),
// //       DepartureDate: schedule.DepartureDateTime.split('T')[0],
// //       DepartureTime: schedule.DepartureDateTime.split('T')[1]?.substring(0, 5),
// //     });
// //   };

// //   // Handle input change for editable fields
// //   const handleEditInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setEditingSchedule((prev) => {
// //       const updatedSchedule = {
// //         ...prev,
// //         [name]: value,
// //       };
      
// //       // Automatically calculate travel time if arrival or departure changes
// //       if (name === 'ArrivalDate' || name === 'ArrivalTime' || name === 'DepartureDate' || name === 'DepartureTime') {
// //         const arrivalDateTime = `${updatedSchedule.ArrivalDate}T${updatedSchedule.ArrivalTime}:00`;
// //         const departureDateTime = `${updatedSchedule.DepartureDate}T${updatedSchedule.DepartureTime}:00`;

// //         if (updatedSchedule.ArrivalDate && updatedSchedule.ArrivalTime && updatedSchedule.DepartureDate && updatedSchedule.DepartureTime) {
// //           const arrival = new Date(arrivalDateTime);
// //           const departure = new Date(departureDateTime);
          
// //           // Calculate the travel time in hours and minutes
// //           const diffMs = Math.abs(arrival - departure);
// //           const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
// //           const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

// //           updatedSchedule.TravelTime = `${diffHours}:${diffMinutes < 10 ? '0' : ''}${diffMinutes}`;
// //         }
// //       }

// //       return updatedSchedule;
// //     });
// //   };

// //   // Handle save button click for updating the schedule
// //   const handleSave = async (scheduleId) => {
// //     try {
// //       const updatedSchedule = {
// //         ...editingSchedule,
// //         ArrivalDateTime: `${editingSchedule.ArrivalDate}T${editingSchedule.ArrivalTime}:00`,
// //         DepartureDateTime: `${editingSchedule.DepartureDate}T${editingSchedule.DepartureTime}:00`,
// //       };
// //       await axiosInstance.put(`/customer-rep/train-schedules/${scheduleId}`, updatedSchedule);
// //       setEditingSchedule(null);
// //       fetchSchedules(); // Re-fetch schedules to reflect the updates
// //     } catch (err) {
// //       console.error('Error updating schedule:', err);
// //       setError('Failed to update train schedule.');
// //     }
// //   };

// //   // Handle cancel button click to cancel editing
// //   const handleCancel = () => {
// //     setEditingSchedule(null);
// //   };

// //   // Handle delete button click for removing a schedule
// //   const handleDelete = async (scheduleId) => {
// //     try {
// //       await axiosInstance.delete(`/customer-rep/train-schedules/${scheduleId}`);
// //       setSchedules(schedules.filter((schedule) => schedule.ScheduleID !== scheduleId));
// //     } catch (err) {
// //       console.error('Error deleting schedule:', err);
// //       setError('Failed to delete train schedule.');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Manage Train Schedules</h2>
// //       {error && <p className="error">{error}</p>}

// //       {/* Add Train Schedule Form */}
// //       <div style={{ marginBottom: '20px' }}>
// //         <h3>Add Train Schedule</h3>
// //         <input
// //           type="text"
// //           name="transitLineName"
// //           placeholder="Transit Line Name"
// //           value={newSchedule.transitLineName}
// //           onChange={handleInputChange}
// //         />
// //         <input
// //           type="text"
// //           name="travelTime"
// //           placeholder="Travel Time (HH:MM)"
// //           value={newSchedule.travelTime}
// //           onChange={handleInputChange}
// //         />
// //         <input
// //           type="datetime-local"
// //           name="arrivalDateTime"
// //           placeholder="Arrival DateTime"
// //           value={newSchedule.arrivalDateTime}
// //           onChange={handleInputChange}
// //         />
// //         <input
// //           type="datetime-local"
// //           name="departureDateTime"
// //           placeholder="Departure DateTime"
// //           value={newSchedule.departureDateTime}
// //           onChange={handleInputChange}
// //         />
// //         <input
// //           type="text"
// //           name="trainID"
// //           placeholder="Train ID"
// //           value={newSchedule.trainID}
// //           onChange={handleInputChange}
// //         />

// //         <h4>Select Stops</h4>
// //         {stations.map((station) => (
// //           <div key={station.StationID}>
// //             <label>
// //               <input
// //                 type="checkbox"
// //                 value={station.StationID}
// //                 onChange={handleStopSelection}
// //               />
// //               {station.StationName}
// //             </label>
// //             {newSchedule.stops.some((stop) => stop.stationID === station.StationID) && (
// //               <div>
// //                 <input
// //                   type="datetime-local"
// //                   placeholder="Arrival DateTime"
// //                   onChange={(e) =>
// //                     handleStopDateTimeChange(station.StationID, 'arrivalDateTime', e.target.value)
// //                   }
// //                 />
// //                 <input
// //                   type="datetime-local"
// //                   placeholder="Departure DateTime"
// //                   onChange={(e) =>
// //                     handleStopDateTimeChange(station.StationID, 'departureDateTime', e.target.value)
// //                   }
// //                 />
// //               </div>
// //             )}
// //           </div>
// //         ))}

// //         <button onClick={handleAddSchedule}>Add Schedule</button>
// //       </div>

// //       {/* Search Train Schedules by Station */}
// //       <div style={{ marginBottom: '20px' }}>
// //         <h3>Search Train Schedules by Station (Origin or Destination)</h3>
// //         <input
// //           type="text"
// //           placeholder="Enter station name to filter"
// //           value={searchStationName}
// //           onChange={(e) => setSearchStationName(e.target.value)}
// //         />
// //         <button onClick={handleSearchSchedules}>Search Schedules by Station</button>
// //       </div>

// //       {/* Display Train Schedules */}
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Schedule ID</th>
// //             <th>Transit Line Name</th>
// //             <th>Travel Time</th>
// //             <th>Arrival Date</th>
// //             <th>Arrival Time</th>
// //             <th>Departure Date</th>
// //             <th>Departure Time</th>
// //             <th>Train ID</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {searchedSchedules.length > 0
// //             ? searchedSchedules.map((schedule) => (
// //                 <tr key={schedule.ScheduleID}>
// //                   <td>{schedule.ScheduleID}</td>
// //                   <td>{schedule.TransitLineName}</td>
// //                   <td>{schedule.TravelTime}</td>
// //                   <td>{schedule.ArrivalDateTime.split('T')[0]}</td>
// //                   <td>{schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5)}</td>
// //                   <td>{schedule.DepartureDateTime.split('T')[0]}</td>
// //                   <td>{schedule.DepartureDateTime.split('T')[1]?.substring(0, 5)}</td>
// //                   <td>{schedule.TrainID}</td>
// //                   <td>
// //                     <button onClick={() => handleEditClick(schedule)} style={{ marginRight: '5px' }}>
// //                       Edit
// //                     </button>
// //                     {schedule.ReservationCount === 0 ? (
// //                       <button onClick={() => handleDelete(schedule.ScheduleID)}>Delete</button>
// //                     ) : (
// //                       <button disabled title="Cannot delete. Reservations exist.">Delete</button>
// //                     )}
// //                   </td>
// //                 </tr>
// //               ))
// //             : schedules.map((schedule) => (
// //                 <tr key={schedule.ScheduleID}>
// //                   {editingSchedule && editingSchedule.ScheduleID === schedule.ScheduleID ? (
// //                     <>
// //                       <td>{schedule.ScheduleID}</td>
// //                       <td>
// //                         <input
// //                           type="text"
// //                           name="TransitLineName"
// //                           value={editingSchedule.TransitLineName}
// //                           onChange={handleEditInputChange}
// //                         />
// //                       </td>
// //                       <td>{editingSchedule.TravelTime}</td>
// //                       <td>
// //                         <input
// //                           type="date"
// //                           name="ArrivalDate"
// //                           value={editingSchedule.ArrivalDate}
// //                           onChange={handleEditInputChange}
// //                         />
// //                       </td>
// //                       <td>
// //                         <input
// //                           type="time"
// //                           name="ArrivalTime"
// //                           value={editingSchedule.ArrivalTime}
// //                           onChange={handleEditInputChange}
// //                         />
// //                       </td>
// //                       <td>
// //                         <input
// //                           type="date"
// //                           name="DepartureDate"
// //                           value={editingSchedule.DepartureDate}
// //                           onChange={handleEditInputChange}
// //                         />
// //                       </td>
// //                       <td>
// //                         <input
// //                           type="time"
// //                           name="DepartureTime"
// //                           value={editingSchedule.DepartureTime}
// //                           onChange={handleEditInputChange}
// //                         />
// //                       </td>
// //                       <td>
// //                         <input
// //                           type="text"
// //                           name="TrainID"
// //                           value={editingSchedule.TrainID}
// //                           onChange={handleEditInputChange}
// //                         />
// //                       </td>
// //                       <td>
// //                         <button onClick={() => handleSave(schedule.ScheduleID)}>Save</button>
// //                         <button onClick={handleCancel} style={{ marginLeft: '5px' }}>Cancel</button>
// //                       </td>
// //                     </>
// //                   ) : (
// //                     <>
// //                       <td>{schedule.ScheduleID}</td>
// //                       <td>{schedule.TransitLineName}</td>
// //                       <td>{schedule.TravelTime}</td>
// //                       <td>{schedule.ArrivalDateTime.split('T')[0]}</td>
// //                       <td>{schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5)}</td>
// //                       <td>{schedule.DepartureDateTime.split('T')[0]}</td>
// //                       <td>{schedule.DepartureDateTime.split('T')[1]?.substring(0, 5)}</td>
// //                       <td>{schedule.TrainID}</td>
// //                       <td>
// //                         <button onClick={() => handleEditClick(schedule)} style={{ marginRight: '5px' }}>
// //                           Edit
// //                         </button>
// //                         {schedule.ReservationCount === 0 ? (
// //                           <button onClick={() => handleDelete(schedule.ScheduleID)}>Delete</button>
// //                         ) : (
// //                           <button disabled title="Cannot delete. Reservations exist.">Delete</button>
// //                         )}
// //                       </td>
// //                     </>
// //                   )}
// //                 </tr>
// //               ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // // export default ManageSchedulesTab;
// // import React, { useState, useEffect } from 'react';
// // import axiosInstance from '../utils/axiosInstance';

// // const ManageSchedulesTab = () => {
// //   const [schedules, setSchedules] = useState([]);
// //   const [stations, setStations] = useState([]);
// //   const [newSchedule, setNewSchedule] = useState({
// //     transitLineName: '',
// //     travelTime: '',
// //     arrivalDateTime: '',
// //     departureDateTime: '',
// //     trainID: '',
// //     stops: []
// //   });
// //   const [showAddScheduleForm, setShowAddScheduleForm] = useState(false);
// //   const [searchStationName, setSearchStationName] = useState('');
// //   const [searchedSchedules, setSearchedSchedules] = useState([]);
// //   const [editingSchedule, setEditingSchedule] = useState(null);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     fetchSchedules();
// //     fetchStations();
// //   }, []);

// //   // Fetch all train schedules
// //   const fetchSchedules = async () => {
// //     try {
// //       const response = await axiosInstance.get('/customer-rep/train-schedules');
// //       setSchedules(response.data.trainSchedules);
// //       setError('');
// //     } catch (err) {
// //       console.error('Error fetching schedules:', err);
// //       setError('Failed to fetch schedules.');
// //     }
// //   };

// //   // Fetch all available stations for stops selection
// //   const fetchStations = async () => {
// //     try {
// //       const response = await axiosInstance.get('/stations');
// //       setStations(response.data.stations);
// //     } catch (err) {
// //       console.error('Error fetching stations:', err);
// //     }
// //   };

// //   // Handle input change for new schedule form
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewSchedule((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   // Handle stops selection
// //   const handleStopSelection = (e) => {
// //     const stationID = parseInt(e.target.value);
// //     const isChecked = e.target.checked;

// //     setNewSchedule((prev) => {
// //       const updatedStops = isChecked
// //         ? [...prev.stops, { stationID, arrivalDateTime: '', departureDateTime: '' }]
// //         : prev.stops.filter((stop) => stop.stationID !== stationID);

// //       return { ...prev, stops: updatedStops };
// //     });
// //   };

// //   // Handle arrival and departure date-time changes for each stop
// //   const handleStopDateTimeChange = (stationID, field, value) => {
// //     setNewSchedule((prev) => {
// //       const updatedStops = prev.stops.map((stop) => {
// //         if (stop.stationID === stationID) {
// //           return { ...stop, [field]: value };
// //         }
// //         return stop;
// //       });
// //       return { ...prev, stops: updatedStops };
// //     });
// //   };

// //   // Handle save button click for adding the new schedule
// //   const handleAddSchedule = async () => {
// //     try {
// //       await axiosInstance.post('/customer-rep/train-schedules', newSchedule);
// //       setNewSchedule({
// //         transitLineName: '',
// //         travelTime: '',
// //         arrivalDateTime: '',
// //         departureDateTime: '',
// //         trainID: '',
// //         stops: []
// //       });
// //       setShowAddScheduleForm(false);
// //       fetchSchedules(); // Re-fetch schedules to reflect the new addition
// //       setError('');
// //     } catch (err) {
// //       console.error('Error adding train schedule:', err);
// //       setError('Failed to add train schedule.');
// //     }
// //   };

// //   // Handle search for schedules by station name
// //   const handleSearchSchedules = async () => {
// //     if (!searchStationName) {
// //       setError('Please enter a station name to search.');
// //       return;
// //     }
// //     try {
// //       const response = await axiosInstance.get(`/customer-rep/train-schedules/station?stationName=${searchStationName}`);
// //       setSearchedSchedules(response.data.trainSchedules);
// //       setError('');
// //     } catch (err) {
// //       console.error('Error searching schedules:', err);
// //       setError('Failed to search schedules.');
// //     }
// //   };

// //   // Handle edit button click
// //   const handleEditClick = (schedule) => {
// //     setEditingSchedule({
// //       ...schedule,
// //       ArrivalDate: schedule.ArrivalDateTime.split('T')[0],
// //       ArrivalTime: schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5),
// //       DepartureDate: schedule.DepartureDateTime.split('T')[0],
// //       DepartureTime: schedule.DepartureDateTime.split('T')[1]?.substring(0, 5),
// //     });
// //   };

// //   // Handle input change for editable fields
// //   const handleEditInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setEditingSchedule((prev) => {
// //       const updatedSchedule = {
// //         ...prev,
// //         [name]: value,
// //       };
      
// //       // Automatically calculate travel time if arrival or departure changes
// //       if (name === 'ArrivalDate' || name === 'ArrivalTime' || name === 'DepartureDate' || name === 'DepartureTime') {
// //         const arrivalDateTime = `${updatedSchedule.ArrivalDate}T${updatedSchedule.ArrivalTime}:00`;
// //         const departureDateTime = `${updatedSchedule.DepartureDate}T${updatedSchedule.DepartureTime}:00`;

// //         if (updatedSchedule.ArrivalDate && updatedSchedule.ArrivalTime && updatedSchedule.DepartureDate && updatedSchedule.DepartureTime) {
// //           const arrival = new Date(arrivalDateTime);
// //           const departure = new Date(departureDateTime);
          
// //           // Calculate the travel time in hours and minutes
// //           const diffMs = Math.abs(arrival - departure);
// //           const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
// //           const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

// //           updatedSchedule.TravelTime = `${diffHours}:${diffMinutes < 10 ? '0' : ''}${diffMinutes}`;
// //         }
// //       }

// //       return updatedSchedule;
// //     });
// //   };

// //   // Handle save button click for updating the schedule
// //   const handleSave = async (scheduleId) => {
// //     try {
// //       const updatedSchedule = {
// //         ...editingSchedule,
// //         ArrivalDateTime: `${editingSchedule.ArrivalDate}T${editingSchedule.ArrivalTime}:00`,
// //         DepartureDateTime: `${editingSchedule.DepartureDate}T${editingSchedule.DepartureTime}:00`,
// //       };
// //       await axiosInstance.put(`/customer-rep/train-schedules/${scheduleId}`, updatedSchedule);
// //       setEditingSchedule(null);
// //       fetchSchedules(); // Re-fetch schedules to reflect the updates
// //     } catch (err) {
// //       console.error('Error updating schedule:', err);
// //       setError('Failed to update train schedule.');
// //     }
// //   };

// //   // Handle cancel button click to cancel editing
// //   const handleCancel = () => {
// //     setEditingSchedule(null);
// //   };

// //   // Handle delete button click for removing a schedule
// //   const handleDelete = async (scheduleId) => {
// //     try {
// //       await axiosInstance.delete(`/customer-rep/train-schedules/${scheduleId}`);
// //       setSchedules(schedules.filter((schedule) => schedule.ScheduleID !== scheduleId));
// //     } catch (err) {
// //       console.error('Error deleting schedule:', err);
// //       setError('Failed to delete train schedule.');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Manage Train Schedules</h2>
// //       {error && <p className="error">{error}</p>}

// //       {/* Button to toggle Add Train Schedule Form */}
// //       <div style={{ marginBottom: '20px' }}>
// //         <button onClick={() => setShowAddScheduleForm(!showAddScheduleForm)}>
// //           {showAddScheduleForm ? 'Hide Add Train Schedule' : 'Add Train Schedule'}
// //         </button>
// //       </div>

// //       {/* Add Train Schedule Form */}
// //       {showAddScheduleForm && (
// //         <div style={{ marginBottom: '20px' }}>
// //           <h3>Add Train Schedule</h3>
// //           <input
// //             type="text"
// //             name="transitLineName"
// //             placeholder="Transit Line Name"
// //             value={newSchedule.transitLineName}
// //             onChange={handleInputChange}
// //           />
// //           <input
// //             type="text"
// //             name="travelTime"
// //             placeholder="Travel Time (HH:MM)"
// //             value={newSchedule.travelTime}
// //             onChange={handleInputChange}
// //           />
// //           <input
// //             type="datetime-local"
// //             name="arrivalDateTime"
// //             placeholder="Arrival DateTime"
// //             value={newSchedule.arrivalDateTime}
// //             onChange={handleInputChange}
// //           />
// //           <input
// //             type="datetime-local"
// //             name="departureDateTime"
// //             placeholder="Departure DateTime"
// //             value={newSchedule.departureDateTime}
// //             onChange={handleInputChange}
// //           />
// //           <input
// //             type="text"
// //             name="trainID"
// //             placeholder="Train ID"
// //             value={newSchedule.trainID}
// //             onChange={handleInputChange}
// //           />

// //           <h4>Select Stops</h4>
// //           {stations.map((station) => (
// //             <div key={station.StationID}>
// //               <label>
// //                 <input
// //                   type="checkbox"
// //                   value={station.StationID}
// //                   onChange={handleStopSelection}
// //                 />
// //                 {station.StationName}
// //               </label>
// //               {newSchedule.stops.some((stop) => stop.stationID === station.StationID) && (
// //                 <div>
// //                   <input
// //                     type="datetime-local"
// //                     placeholder="Arrival DateTime"
// //                     onChange={(e) =>
// //                       handleStopDateTimeChange(station.StationID, 'arrivalDateTime', e.target.value)
// //                     }
// //                   />
// //                   <input
// //                     type="datetime-local"
// //                     placeholder="Departure DateTime"
// //                     onChange={(e) =>
// //                       handleStopDateTimeChange(station.StationID, 'departureDateTime', e.target.value)
// //                     }
// //                   />
// //                 </div>
// //               )}
// //             </div>
// //           ))}

// //           <button onClick={handleAddSchedule}>Add Schedule</button>
// //         </div>
// //       )}

// //       {/* Display All Train Schedules */}
// //       <div style={{ marginBottom: '20px' }}>
// //         <h3>Current Train Schedules</h3>
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Schedule ID</th>
// //               <th>Transit Line Name</th>
// //               <th>Travel Time</th>
// //               <th>Arrival Date</th>
// //               <th>Arrival Time</th>
// //               <th>Departure Date</th>
// //               <th>Departure Time</th>
// //               <th>Train ID</th>
// //               <th>Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {schedules.map((schedule) => (
// //               <tr key={schedule.ScheduleID}>
// //                 {editingSchedule && editingSchedule.ScheduleID === schedule.ScheduleID ? (
// //                   <>
// //                     <td>{schedule.ScheduleID}</td>
// //                     <td>
// //                       <input
// //                         type="text"
// //                         name="TransitLineName"
// //                         value={editingSchedule.TransitLineName}
// //                         onChange={handleEditInputChange}
// //                       />
// //                     </td>
// //                     <td>{editingSchedule.TravelTime}</td>
// //                     <td>
// //                       <input
// //                         type="date"
// //                         name="ArrivalDate"
// //                         value={editingSchedule.ArrivalDate}
// //                         onChange={handleEditInputChange}
// //                       />
// //                     </td>
// //                     <td>
// //                       <input
// //                         type="time"
// //                         name="ArrivalTime"
// //                         value={editingSchedule.ArrivalTime}
// //                         onChange={handleEditInputChange}
// //                       />
// //                     </td>
// //                     <td>
// //                       <input
// //                         type="date"
// //                         name="DepartureDate"
// //                         value={editingSchedule.DepartureDate}
// //                         onChange={handleEditInputChange}
// //                       />
// //                     </td>
// //                     <td>
// //                       <input
// //                         type="time"
// //                         name="DepartureTime"
// //                         value={editingSchedule.DepartureTime}
// //                         onChange={handleEditInputChange}
// //                       />
// //                     </td>
// //                     <td>
// //                       <input
// //                         type="text"
// //                         name="TrainID"
// //                         value={editingSchedule.TrainID}
// //                         onChange={handleEditInputChange}
// //                       />
// //                     </td>
// //                     <td>
// //                       <button onClick={() => handleSave(schedule.ScheduleID)}>Save</button>
// //                       <button onClick={handleCancel} style={{ marginLeft: '5px' }}>Cancel</button>
// //                     </td>
// //                   </>
// //                 ) : (
// //                   <>
// //                     <td>{schedule.ScheduleID}</td>
// //                     <td>{schedule.TransitLineName}</td>
// //                     <td>{schedule.TravelTime}</td>
// //                     <td>{schedule.ArrivalDateTime.split('T')[0]}</td>
// //                     <td>{schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5)}</td>
// //                     <td>{schedule.DepartureDateTime.split('T')[0]}</td>
// //                     <td>{schedule.DepartureDateTime.split('T')[1]?.substring(0, 5)}</td>
// //                     <td>{schedule.TrainID}</td>
// //                     <td>
// //                       <button onClick={() => handleEditClick(schedule)} style={{ marginRight: '5px' }}>
// //                         Edit
// //                       </button>
// //                       {schedule.ReservationCount === 0 ? (
// //                         <button onClick={() => handleDelete(schedule.ScheduleID)}>Delete</button>
// //                       ) : (
// //                         <button disabled title="Cannot delete. Reservations exist.">Delete</button>
// //                       )}
// //                     </td>
// //                   </>
// //                 )}
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* Search Train Schedules by Station */}
// //       <div style={{ marginBottom: '20px' }}>
// //         <h3>Search Train Schedules by Station (Origin or Destination)</h3>
// //         <input
// //           type="text"
// //           placeholder="Enter station name to filter"
// //           value={searchStationName}
// //           onChange={(e) => setSearchStationName(e.target.value)}
// //         />
// //         <button onClick={handleSearchSchedules}>Search Schedules by Station</button>
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Schedule ID</th>
// //               <th>Transit Line Name</th>
// //               <th>Travel Time</th>
// //               <th>Arrival Date</th>
// //               <th>Arrival Time</th>
// //               <th>Departure Date</th>
// //               <th>Departure Time</th>
// //               <th>Train ID</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {searchedSchedules.map((schedule) => (
// //               <tr key={schedule.ScheduleID}>
// //                 <td>{schedule.ScheduleID}</td>
// //                 <td>{schedule.TransitLineName}</td>
// //                 <td>{schedule.TravelTime}</td>
// //                 <td>{schedule.ArrivalDateTime.split('T')[0]}</td>
// //                 <td>{schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5)}</td>
// //                 <td>{schedule.DepartureDateTime.split('T')[0]}</td>
// //                 <td>{schedule.DepartureDateTime.split('T')[1]?.substring(0, 5)}</td>
// //                 <td>{schedule.TrainID}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ManageSchedulesTab;

// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../utils/axiosInstance';

// const ManageSchedulesTab = () => {
// //   const [schedules, setSchedules] = useState([]);
// //   const [stations, setStations] = useState([]);
// //   const [trains, setTrains] = useState([]);
// //   const [newSchedule, setNewSchedule] = useState({
// //     transitLineName: '',
// //     travelTime: '',
// //     arrivalDateTime: '',
// //     departureDateTime: '',
// //     trainID: '',
// //     stops: []
// //   });
// //   const [showAddScheduleForm, setShowAddScheduleForm] = useState(false);
// //   const [searchStationName, setSearchStationName] = useState('');
// //   const [searchedSchedules, setSearchedSchedules] = useState([]);
// //   const [editingSchedule, setEditingSchedule] = useState(null);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     fetchSchedules();
// //     fetchStations();
// //     fetchTrains();
// //   }, []);

// //   // Fetch all train schedules
// //   const fetchSchedules = async () => {
// //     try {
// //       const response = await axiosInstance.get('/customer-rep/train-schedules');
// //       setSchedules(response.data.trainSchedules);
// //       setError('');
// //     } catch (err) {
// //       console.error('Error fetching schedules:', err);
// //       setError('Failed to fetch schedules.');
// //     }
// //   };

// //   // Fetch all available stations for stops selection
// //   const fetchStations = async () => {
// //     try {
// //       const response = await axiosInstance.get('/stations');
// //       setStations(response.data.stations);
// //     } catch (err) {
// //       console.error('Error fetching stations:', err);
// //     }
// //   };

// //   // Fetch all available trains for TrainID dropdown
// //   const fetchTrains = async () => {
// //     try {
// //       const response = await axiosInstance.get('/customer-rep/trains');
// //       setTrains(response.data.trains);
// //     } catch (err) {
// //       console.error('Error fetching trains:', err);
// //     }
// //   };

// //   // Handle input change for new schedule form
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewSchedule((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   // Handle stops selection
// //   const handleStopSelection = (e) => {
// //     const stationID = parseInt(e.target.value);
// //     const isChecked = e.target.checked;

// //     setNewSchedule((prev) => {
// //       const updatedStops = isChecked
// //         ? [...prev.stops, { stationID, arrivalDateTime: '', departureDateTime: '' }]
// //         : prev.stops.filter((stop) => stop.stationID !== stationID);

// //       return { ...prev, stops: updatedStops };
// //     });
// //   };

// //   // Handle arrival and departure date-time changes for each stop
// //   const handleStopDateTimeChange = (stationID, field, value) => {
// //     setNewSchedule((prev) => {
// //       const updatedStops = prev.stops.map((stop) => {
// //         if (stop.stationID === stationID) {
// //           return { ...stop, [field]: value };
// //         }
// //         return stop;
// //       });
// //       return { ...prev, stops: updatedStops };
// //     });
// //   };

// //   // Handle save button click for adding the new schedule
// //   const handleAddSchedule = async () => {
// //     try {
// //       await axiosInstance.post('/customer-rep/train-schedules', newSchedule);
// //       setNewSchedule({
// //         transitLineName: '',
// //         travelTime: '',
// //         arrivalDateTime: '',
// //         departureDateTime: '',
// //         trainID: '',
// //         stops: []
// //       });
// //       setShowAddScheduleForm(false);
// //       fetchSchedules(); // Re-fetch schedules to reflect the new addition
// //       setError('');
// //     } catch (err) {
// //       console.error('Error adding train schedule:', err);
// //       setError('Failed to add train schedule.');
// //     }
// //   };

// //   // Handle search for schedules by station name
// //   const handleSearchSchedules = async () => {
// //     if (!searchStationName) {
// //       setError('Please enter a station name to search.');
// //       return;
// //     }
// //     try {
// //       const response = await axiosInstance.get(`/customer-rep/train-schedules/station?stationName=${searchStationName}`);
// //       setSearchedSchedules(response.data.trainSchedules);
// //       setError('');
// //     } catch (err) {
// //       console.error('Error searching schedules:', err);
// //       setError('Failed to search schedules.');
// //     }
// //   };

// const [schedules, setSchedules] = useState([]);
//   const [stations, setStations] = useState([]);
//   const [transitLines, setTransitLines] = useState([]);
//   const [newSchedule, setNewSchedule] = useState({
//     transitLineName: '',
//     travelTime: '',
//     arrivalDateTime: '',
//     departureDateTime: '',
//     trainID: '',
//     stops: []
//   });
//   const [showAddScheduleForm, setShowAddScheduleForm] = useState(false);
//   const [searchStationName, setSearchStationName] = useState('');
//   const [searchedSchedules, setSearchedSchedules] = useState([]);
//   const [editingSchedule, setEditingSchedule] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchSchedules();
//     fetchStations();
//     fetchTransitLines(); // Fetch available transit lines for dropdown
//   }, []);

//   // Fetch all train schedules
//   const fetchSchedules = async () => {
//     try {
//       const response = await axiosInstance.get('/customer-rep/train-schedules');
//       setSchedules(response.data.trainSchedules);
//       setError('');
//     } catch (err) {
//       console.error('Error fetching schedules:', err);
//       setError('Failed to fetch schedules.');
//     }
//   };

//   // Fetch all available stations for stops selection
//   const fetchStations = async () => {
//     try {
//       const response = await axiosInstance.get('/stations');
//       setStations(response.data.stations);
//     } catch (err) {
//       console.error('Error fetching stations:', err);
//     }
//   };

//   // Fetch all available transit lines for selection
//   const fetchTransitLines = async () => {
//     try {
//       const response = await axiosInstance.get('/transit-lines');
//       setTransitLines(response.data.transitLines);
//     } catch (err) {
//       console.error('Error fetching transit lines:', err);
//     }
//   };

//   // Handle input change for new schedule form
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewSchedule((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle stops selection
//   const handleStopSelection = (e) => {
//     const stationID = parseInt(e.target.value);
//     const isChecked = e.target.checked;

//     setNewSchedule((prev) => {
//       const updatedStops = isChecked
//         ? [...prev.stops, { stationID, arrivalDateTime: '', departureDateTime: '' }]
//         : prev.stops.filter((stop) => stop.stationID !== stationID);

//       return { ...prev, stops: updatedStops };
//     });
//   };

//   // Handle arrival and departure date-time changes for each stop
//   const handleStopDateTimeChange = (stationID, field, value) => {
//     setNewSchedule((prev) => {
//       const updatedStops = prev.stops.map((stop) => {
//         if (stop.stationID === stationID) {
//           return { ...stop, [field]: value };
//         }
//         return stop;
//       });
//       return { ...prev, stops: updatedStops };
//     });
//   };

//   // Handle save button click for adding the new schedule
//   const handleAddSchedule = async () => {
//     try {
//       await axiosInstance.post('/customer-rep/train-schedules', newSchedule);
//       setNewSchedule({
//         transitLineName: '',
//         travelTime: '',
//         arrivalDateTime: '',
//         departureDateTime: '',
//         trainID: '',
//         stops: []
//       });
//       setShowAddScheduleForm(false);
//       fetchSchedules(); // Re-fetch schedules to reflect the new addition
//       setError('');
//     } catch (err) {
//       console.error('Error adding train schedule:', err);
//       setError('Failed to add train schedule.');
//     }
//   };

//   // Handle search for schedules by station name
//   const handleSearchSchedules = async () => {
//     if (!searchStationName) {
//       setError('Please enter a station name to search.');
//       return;
//     }
//     try {
//       const response = await axiosInstance.get(`/customer-rep/train-schedules/station?stationName=${searchStationName}`);
//       setSearchedSchedules(response.data.trainSchedules);
//       setError('');
//     } catch (err) {
//       console.error('Error searching schedules:', err);
//       setError('Failed to search schedules.');
//     }
//   };

//   // Handle edit button click
//   const handleEditClick = (schedule) => {
//     setEditingSchedule({
//       ...schedule,
//       ArrivalDate: schedule.ArrivalDateTime.split('T')[0],
//       ArrivalTime: schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5),
//       DepartureDate: schedule.DepartureDateTime.split('T')[0],
//       DepartureTime: schedule.DepartureDateTime.split('T')[1]?.substring(0, 5),
//     });
//   };

//   // Handle input change for editable fields
//   const handleEditInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditingSchedule((prev) => {
//       const updatedSchedule = {
//         ...prev,
//         [name]: value,
//       };
      
//       // Automatically calculate travel time if arrival or departure changes
//       if (name === 'ArrivalDate' || name === 'ArrivalTime' || name === 'DepartureDate' || name === 'DepartureTime') {
//         const arrivalDateTime = `${updatedSchedule.ArrivalDate}T${updatedSchedule.ArrivalTime}:00`;
//         const departureDateTime = `${updatedSchedule.DepartureDate}T${updatedSchedule.DepartureTime}:00`;

//         if (updatedSchedule.ArrivalDate && updatedSchedule.ArrivalTime && updatedSchedule.DepartureDate && updatedSchedule.DepartureTime) {
//           const arrival = new Date(arrivalDateTime);
//           const departure = new Date(departureDateTime);
          
//           // Calculate the travel time in hours and minutes
//           const diffMs = Math.abs(arrival - departure);
//           const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
//           const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

//           updatedSchedule.TravelTime = `${diffHours}:${diffMinutes < 10 ? '0' : ''}${diffMinutes}`;
//         }
//       }

//       return updatedSchedule;
//     });
//   };

//   // Handle save button click for updating the schedule
//   const handleSave = async (scheduleId) => {
//     try {
//       const updatedSchedule = {
//         ...editingSchedule,
//         ArrivalDateTime: `${editingSchedule.ArrivalDate}T${editingSchedule.ArrivalTime}:00`,
//         DepartureDateTime: `${editingSchedule.DepartureDate}T${editingSchedule.DepartureTime}:00`,
//       };
//       await axiosInstance.put(`/customer-rep/train-schedules/${scheduleId}`, updatedSchedule);
//       setEditingSchedule(null);
//       fetchSchedules(); // Re-fetch schedules to reflect the updates
//     } catch (err) {
//       console.error('Error updating schedule:', err);
//       setError('Failed to update train schedule.');
//     }
//   };

//   // Handle cancel button click to cancel editing
//   const handleCancel = () => {
//     setEditingSchedule(null);
//   };

//   // Handle delete button click for removing a schedule
//   const handleDelete = async (scheduleId) => {
//     try {
//       await axiosInstance.delete(`/customer-rep/train-schedules/${scheduleId}`);
//       setSchedules(schedules.filter((schedule) => schedule.ScheduleID !== scheduleId));
//     } catch (err) {
//       console.error('Error deleting schedule:', err);
//       setError('Failed to delete train schedule.');
//     }
//   };

//   return (
//     // <div>
//     //   <h2>Manage Train Schedules</h2>
//     //   {error && <p className="error">{error}</p>}

//     //   {/* Button to toggle Add Train Schedule Form */}
//     //   <div style={{ marginBottom: '20px' }}>
//     //     <button onClick={() => setShowAddScheduleForm(!showAddScheduleForm)}>
//     //       {showAddScheduleForm ? 'Hide Add Train Schedule' : 'Add Train Schedule'}
//     //     </button>
//     //   </div>

//     //   {/* Add Train Schedule Form */}
//     //   {showAddScheduleForm && (
//     //     <div style={{ marginBottom: '20px' }}>
//     //       <h3>Add Train Schedule</h3>
//     //       <input
//     //         type="text"
//     //         name="transitLineName"
//     //         placeholder="Transit Line Name"
//     //         value={newSchedule.transitLineName}
//     //         onChange={handleInputChange}
//     //       />
//     //       <input
//     //         type="text"
//     //         name="travelTime"
//     //         placeholder="Travel Time (HH:MM)"
//     //         value={newSchedule.travelTime}
//     //         onChange={handleInputChange}
//     //       />
//     //       <input
//     //         type="datetime-local"
//     //         name="arrivalDateTime"
//     //         placeholder="Arrival DateTime"
//     //         value={newSchedule.arrivalDateTime}
//     //         onChange={handleInputChange}
//     //       />
//     //       <input
//     //         type="datetime-local"
//     //         name="departureDateTime"
//     //         placeholder="Departure DateTime"
//     //         value={newSchedule.departureDateTime}
//     //         onChange={handleInputChange}
//     //       />
//     //       <select
//     //         name="trainID"
//     //         value={newSchedule.trainID}
//     //         onChange={handleInputChange}
//     //       >
//     //         <option value="">Select Train ID</option>
//     //         {trains.map((train) => (
//     //           <option key={train.TrainID} value={train.TrainID}>
//     //             {train.TrainID}
//     //           </option>
//     //         ))}
//     //       </select>

//     //       <h4>Select Stops</h4>
//     //       {stations.map((station) => (
//     //         <div key={station.StationID}>
//     //           <label>
//     //             <input
//     //               type="checkbox"
//     //               value={station.StationID}
//     //               onChange={handleStopSelection}
//     //             />
//     //             {station.StationName}
//     //           </label>
//     //           {newSchedule.stops.some((stop) => stop.stationID === station.StationID) && (
//     //             <div>
//     //               <input
//     //                 type="datetime-local"
//     //                 placeholder="Arrival DateTime"
//     //                 onChange={(e) =>
//     //                   handleStopDateTimeChange(station.StationID, 'arrivalDateTime', e.target.value)
//     //                 }
//     //               />
//     //               <input
//     //                 type="datetime-local"
//     //                 placeholder="Departure DateTime"
//     //                 onChange={(e) =>
//     //                   handleStopDateTimeChange(station.StationID, 'departureDateTime', e.target.value)
//     //                 }
//     //               />
//     //             </div>
//     //           )}
//     //         </div>
//     //       ))}

//     //       <button onClick={handleAddSchedule}>Add Schedule</button>
//     //     </div>
//     //   )}
// <div>
//       <h2>Manage Train Schedules</h2>
//       {error && <p className="error">{error}</p>}

//       {/* Button to toggle Add Train Schedule Form */}
//       <div style={{ marginBottom: '20px' }}>
//         <button onClick={() => setShowAddScheduleForm(!showAddScheduleForm)}>
//           {showAddScheduleForm ? 'Hide Add Train Schedule' : 'Add Train Schedule'}
//         </button>
//       </div>

//       {/* Add Train Schedule Form */}
//       {showAddScheduleForm && (
//         <div style={{ marginBottom: '20px' }}>
//           <h3>Add Train Schedule</h3>
//           <select
//             name="transitLineName"
//             value={newSchedule.transitLineName}
//             onChange={handleInputChange}
//           >
//             <option value="">Select Transit Line</option>
//             {transitLines.map((line) => (
//               <option key={line.TransitLineName} value={line.TransitLineName}>
//                 {line.TransitLineName}
//               </option>
//             ))}
//           </select>
//           <input
//             type="text"
//             name="travelTime"
//             placeholder="Travel Time (HH:MM)"
//             value={newSchedule.travelTime}
//             onChange={handleInputChange}
//           />
//           <input
//             type="datetime-local"
//             name="arrivalDateTime"
//             placeholder="Arrival DateTime"
//             value={newSchedule.arrivalDateTime}
//             onChange={handleInputChange}
//           />
//           <input
//             type="datetime-local"
//             name="departureDateTime"
//             placeholder="Departure DateTime"
//             value={newSchedule.departureDateTime}
//             onChange={handleInputChange}
//           />
//           <select
//             name="trainID"
//             value={newSchedule.trainID}
//             onChange={handleInputChange}
//           >
//             <option value="">Select Train ID</option>
//             {stations.map((train) => (
//               <option key={train.TrainID} value={train.TrainID}>
//                 {train.TrainID}
//               </option>
//             ))}
//           </select>

//           <h4>Select Stops</h4>
//           {stations.map((station) => (
//             <div key={station.StationID}>
//               <label>
//                 <input
//                   type="checkbox"
//                   value={station.StationID}
//                   onChange={handleStopSelection}
//                 />
//                 {station.StationName}
//               </label>
//               {newSchedule.stops.some((stop) => stop.stationID === station.StationID) && (
//                 <div>
//                   <input
//                     type="datetime-local"
//                     placeholder="Arrival DateTime"
//                     onChange={(e) =>
//                       handleStopDateTimeChange(station.StationID, 'arrivalDateTime', e.target.value)
//                     }
//                   />
//                   <input
//                     type="datetime-local"
//                     placeholder="Departure DateTime"
//                     onChange={(e) =>
//                       handleStopDateTimeChange(station.StationID, 'departureDateTime', e.target.value)
//                     }
//                   />
//                 </div>
//               )}
//             </div>
//           ))}

//           <button onClick={handleAddSchedule}>Add Schedule</button>
//         </div>
//       )}

//       {/* Display All Train Schedules */}
//       <div style={{ marginBottom: '20px' }}>
//         <h3>Current Train Schedules</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Schedule ID</th>
//               <th>Transit Line Name</th>
//               <th>Travel Time</th>
//               <th>Arrival Date</th>
//               <th>Arrival Time</th>
//               <th>Departure Date</th>
//               <th>Departure Time</th>
//               <th>Train ID</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {schedules.map((schedule) => (
//               <tr key={schedule.ScheduleID}>
//                 {editingSchedule && editingSchedule.ScheduleID === schedule.ScheduleID ? (
//                   <>
//                     <td>{schedule.ScheduleID}</td>
//                     <td>
//                       <input
//                         type="text"
//                         name="TransitLineName"
//                         value={editingSchedule.TransitLineName}
//                         onChange={handleEditInputChange}
//                       />
//                     </td>
//                     <td>{editingSchedule.TravelTime}</td>
//                     <td>
//                       <input
//                         type="date"
//                         name="ArrivalDate"
//                         value={editingSchedule.ArrivalDate}
//                         onChange={handleEditInputChange}
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="time"
//                         name="ArrivalTime"
//                         value={editingSchedule.ArrivalTime}
//                         onChange={handleEditInputChange}
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="date"
//                         name="DepartureDate"
//                         value={editingSchedule.DepartureDate}
//                         onChange={handleEditInputChange}
//                       />
//                     </td>
//                     <td>
//                       <input
//                         type="time"
//                         name="DepartureTime"
//                         value={editingSchedule.DepartureTime}
//                         onChange={handleEditInputChange}
//                       />
//                     </td>
//                     <td>
//                       <select
//                         name="TrainID"
//                         value={editingSchedule.TrainID}
//                         onChange={handleEditInputChange}
//                       >
//                         <option value="">Select Train ID</option>
//                         {trains.map((train) => (
//                           <option key={train.TrainID} value={train.TrainID}>
//                             {train.TrainID}
//                           </option>
//                         ))}
//                       </select>
//                     </td>
//                     <td>
//                       <button onClick={() => handleSave(schedule.ScheduleID)}>Save</button>
//                       <button onClick={handleCancel} style={{ marginLeft: '5px' }}>Cancel</button>
//                     </td>
//                   </>
//                 ) : (
//                   <>
//                     <td>{schedule.ScheduleID}</td>
//                     <td>{schedule.TransitLineName}</td>
//                     <td>{schedule.TravelTime}</td>
//                     <td>{schedule.ArrivalDateTime.split('T')[0]}</td>
//                     <td>{schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5)}</td>
//                     <td>{schedule.DepartureDateTime.split('T')[0]}</td>
//                     <td>{schedule.DepartureDateTime.split('T')[1]?.substring(0, 5)}</td>
//                     <td>{schedule.TrainID}</td>
//                     <td>
//                       <button onClick={() => handleEditClick(schedule)} style={{ marginRight: '5px' }}>
//                         Edit
//                       </button>
//                       {schedule.ReservationCount === 0 ? (
//                         <button onClick={() => handleDelete(schedule.ScheduleID)}>Delete</button>
//                       ) : (
//                         <button disabled title="Cannot delete. Reservations exist.">Delete</button>
//                       )}
//                     </td>
//                   </>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Search Train Schedules by Station */}
//       <div style={{ marginBottom: '20px' }}>
//   <h3>Search Train Schedules by Station (Origin or Destination)</h3>
//   <select
//     value={searchStationName}
//     onChange={(e) => setSearchStationName(e.target.value)}
//   >
//     <option value="">Select Station</option>
//     {stations.map((station) => (
//       <option key={station.StationID} value={station.StationName}>
//         {station.StationName}
//       </option>
//     ))}
//   </select>
//   <button onClick={handleSearchSchedules}>Search Schedules by Station</button>
//   {/* Render search results */}
//   <table>
//     <thead>
//       <tr>
//         <th>Schedule ID</th>
//         <th>Transit Line Name</th>
//         <th>Travel Time</th>
//         <th>Arrival Date</th>
//         <th>Arrival Time</th>
//         <th>Departure Date</th>
//         <th>Departure Time</th>
//         <th>Train ID</th>
//       </tr>
//     </thead>
//     <tbody>
//       {searchedSchedules.map((schedule) => (
//         <tr key={schedule.ScheduleID}>
//           <td>{schedule.ScheduleID}</td>
//           <td>{schedule.TransitLineName}</td>
//           <td>{schedule.TravelTime}</td>
//           <td>{schedule.ArrivalDateTime.split('T')[0]}</td>
//           <td>{schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5)}</td>
//           <td>{schedule.DepartureDateTime.split('T')[0]}</td>
//           <td>{schedule.DepartureDateTime.split('T')[1]?.substring(0, 5)}</td>
//           <td>{schedule.TrainID}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
//       </div>
//     </div>
//   );
// };

// export default ManageSchedulesTab;


import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';

const ManageSchedulesTab = () => {
  const [schedules, setSchedules] = useState([]);
  const [stations, setStations] = useState([]);
  const [trains, setTrains] = useState([]);
  const [transitLines, setTransitLines] = useState([]);
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    transitLineName: '',
    travelTime: '',
    arrivalDateTime: '',
    departureDateTime: '',
    trainID: '',
    stops: []
  });
  const [showAddScheduleForm, setShowAddScheduleForm] = useState(false);
  const [searchStationName, setSearchStationName] = useState('');
  const [searchedSchedules, setSearchedSchedules] = useState([]);
  const [editingSchedule, setEditingSchedule] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSchedules();
    fetchStations();
    fetchTrains(); // Fetch available trains for dropdown
    fetchTransitLines(); // Fetch available transit lines for dropdown
  }, []);

  // Fetch all train schedules
  const fetchSchedules = async () => {
    try {
      const response = await axiosInstance.get('/customer-rep/train-schedules');
      setSchedules(response.data.trainSchedules);
      setError('');
    } catch (err) {
      console.error('Error fetching schedules:', err);
      setError('Failed to fetch schedules.');
    }
  };

  // Fetch all available stations for stops selection
  const fetchStations = async () => {
    try {
      const response = await axiosInstance.get('/stations');
      setStations(response.data.stations);
    } catch (err) {
      console.error('Error fetching stations:', err);
    }
  };

  // Fetch all available trains for TrainID dropdown
  const fetchTrains = async () => {
    try {
      const response = await axiosInstance.get('/customer-rep/trains');
      setTrains(response.data.trains);
    } catch (err) {
      console.error('Error fetching trains:', err);
    }
  };

  // Fetch all available transit lines for selection
  const fetchTransitLines = async () => {
    try {
      const response = await axiosInstance.get('/transit-lines');
      setTransitLines(response.data.transitLines);
    } catch (err) {
      console.error('Error fetching transit lines:', err);
    }
  };

  // Handle input change for new schedule form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSchedule((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle stops selection
  const handleStopSelection = (e) => {
    const stationID = parseInt(e.target.value);
    const isChecked = e.target.checked;

    setNewSchedule((prev) => {
      const updatedStops = isChecked
        ? [...prev.stops, { stationID, arrivalDateTime: '', departureDateTime: '' }]
        : prev.stops.filter((stop) => stop.stationID !== stationID);

      return { ...prev, stops: updatedStops };
    });
  };

  // Handle arrival and departure date-time changes for each stop
  const handleStopDateTimeChange = (stationID, field, value) => {
    setNewSchedule((prev) => {
      const updatedStops = prev.stops.map((stop) => {
        if (stop.stationID === stationID) {
          return { ...stop, [field]: value };
        }
        return stop;
      });
      return { ...prev, stops: updatedStops };
    });
  };

  // Handle save button click for adding the new schedule
  const handleAddSchedule = async () => {
    try {
      await axiosInstance.post('/customer-rep/train-schedules', newSchedule);
      setNewSchedule({
        transitLineName: '',
        travelTime: '',
        arrivalDateTime: '',
        departureDateTime: '',
        trainID: '',
        stops: []
      });
      setShowAddScheduleForm(false);
      fetchSchedules(); // Re-fetch schedules to reflect the new addition
      setError('');
    } catch (err) {
      console.error('Error adding train schedule:', err);
      setError('Failed to add train schedule.');
    }
  };

const handleSearchSchedules = async () => {
    if (!searchStationName) {
      setError('Please select a station to search.');
      setSearchTriggered(false);
      return;
    }

    setSearchTriggered(true);
    try {
      const response = await axiosInstance.get(`/customer-rep/train-schedules/station?stationName=${searchStationName}`);
      setSearchedSchedules(response.data.trainSchedules);
      setError('');
    } catch (err) {
      console.error('Error searching schedules:', err);
      setError('Failed to search schedules.');
    }
  };

  // Handle edit button click
  const handleEditClick = (schedule) => {
    setEditingSchedule({
      ...schedule,
      ArrivalDate: schedule.ArrivalDateTime.split('T')[0],
      ArrivalTime: schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5),
      DepartureDate: schedule.DepartureDateTime.split('T')[0],
      DepartureTime: schedule.DepartureDateTime.split('T')[1]?.substring(0, 5),
    });
  };

  // Handle input change for editable fields
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingSchedule((prev) => {
      const updatedSchedule = {
        ...prev,
        [name]: value,
      };
      
      // Automatically calculate travel time if arrival or departure changes
      if (name === 'ArrivalDate' || name === 'ArrivalTime' || name === 'DepartureDate' || name === 'DepartureTime') {
        const arrivalDateTime = `${updatedSchedule.ArrivalDate}T${updatedSchedule.ArrivalTime}:00`;
        const departureDateTime = `${updatedSchedule.DepartureDate}T${updatedSchedule.DepartureTime}:00`;

        if (updatedSchedule.ArrivalDate && updatedSchedule.ArrivalTime && updatedSchedule.DepartureDate && updatedSchedule.DepartureTime) {
          const arrival = new Date(arrivalDateTime);
          const departure = new Date(departureDateTime);
          
          // Calculate the travel time in hours and minutes
          const diffMs = Math.abs(arrival - departure);
          const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
          const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

          updatedSchedule.TravelTime = `${diffHours}:${diffMinutes < 10 ? '0' : ''}${diffMinutes}`;
        }
      }

      return updatedSchedule;
    });
  };

  // Handle save button click for updating the schedule
  const handleSave = async (scheduleId) => {
    try {
      const updatedSchedule = {
        ...editingSchedule,
        ArrivalDateTime: `${editingSchedule.ArrivalDate}T${editingSchedule.ArrivalTime}:00`,
        DepartureDateTime: `${editingSchedule.DepartureDate}T${editingSchedule.DepartureTime}:00`,
      };
      await axiosInstance.put(`/customer-rep/train-schedules/${scheduleId}`, updatedSchedule);
      setEditingSchedule(null);
      fetchSchedules(); // Re-fetch schedules to reflect the updates
    } catch (err) {
      console.error('Error updating schedule:', err);
      setError('Failed to update train schedule.');
    }
  };

  // Handle cancel button click to cancel editing
  const handleCancel = () => {
    setEditingSchedule(null);
  };

  // Handle delete button click for removing a schedule
  const handleDelete = async (scheduleId) => {
    try {
      await axiosInstance.delete(`/customer-rep/train-schedules/${scheduleId}`);
      setSchedules(schedules.filter((schedule) => schedule.ScheduleID !== scheduleId));
    } catch (err) {
      console.error('Error deleting schedule:', err);
      setError('Failed to delete train schedule.');
    }
  };

  return (
    <div>
      <h2>Manage Train Schedules</h2>
      {error && <p className="error">{error}</p>}

      {/* Button to toggle Add Train Schedule Form */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setShowAddScheduleForm(!showAddScheduleForm)}>
          {showAddScheduleForm ? 'Hide Add Train Schedule' : 'Add Train Schedule'}
        </button>
      </div>

      {/* Add Train Schedule Form */}
      {showAddScheduleForm && (
        <div style={{ marginBottom: '20px' }}>
          <h3>Add Train Schedule</h3>
          <select
            name="transitLineName"
            value={newSchedule.transitLineName}
            onChange={handleInputChange}
          >
            <option value="">Select Transit Line</option>
            {transitLines.map((line) => (
              <option key={line.TransitLineName} value={line.TransitLineName}>
                {line.TransitLineName}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="travelTime"
            placeholder="Travel Time (HH:MM)"
            value={newSchedule.travelTime}
            onChange={handleInputChange}
          />
          <input
            type="datetime-local"
            name="arrivalDateTime"
            placeholder="Arrival DateTime"
            value={newSchedule.arrivalDateTime}
            onChange={handleInputChange}
          />
          <input
            type="datetime-local"
            name="departureDateTime"
            placeholder="Departure DateTime"
            value={newSchedule.departureDateTime}
            onChange={handleInputChange}
          />
          <select
            name="trainID"
            value={newSchedule.trainID}
            onChange={handleInputChange}
          >
            <option value="">Select Train ID</option>
            {trains.map((train) => (
              <option key={train.TrainID} value={train.TrainID}>
                {train.TrainID}
              </option>
            ))}
          </select>

          <h4>Select Stops</h4>
          {stations.map((station) => (
            <div key={station.StationID}>
              <label>
                <input
                  type="checkbox"
                  value={station.StationID}
                  onChange={handleStopSelection}
                />
                {station.StationName}
              </label>
              {newSchedule.stops.some((stop) => stop.stationID === station.StationID) && (
                <div>
                  <input
                    type="datetime-local"
                    placeholder="Arrival DateTime"
                    onChange={(e) =>
                      handleStopDateTimeChange(station.StationID, 'arrivalDateTime', e.target.value)
                    }
                  />
                  <input
                    type="datetime-local"
                    placeholder="Departure DateTime"
                    onChange={(e) =>
                      handleStopDateTimeChange(station.StationID, 'departureDateTime', e.target.value)
                    }
                  />
                </div>
              )}
            </div>
          ))}

          <button onClick={handleAddSchedule}>Add Schedule</button>
        </div>
      )}

      {/* Display All Train Schedules */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Current Train Schedules</h3>
        <table>
          <thead>
            <tr>
              <th>Schedule ID</th>
              <th>Transit Line Name</th>
              <th>Travel Time</th>
              <th>Arrival Date</th>
              <th>Arrival Time</th>
              <th>Departure Date</th>
              <th>Departure Time</th>
              <th>Train ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule) => (
              <tr key={schedule.ScheduleID}>
                {editingSchedule && editingSchedule.ScheduleID === schedule.ScheduleID ? (
                  <>
                    <td>{schedule.ScheduleID}</td>
                    <td>
                      <input
                        type="text"
                        name="TransitLineName"
                        value={editingSchedule.TransitLineName}
                        onChange={handleEditInputChange}
                      />
                    </td>
                    <td>{editingSchedule.TravelTime}</td>
                    <td>
                      <input
                        type="date"
                        name="ArrivalDate"
                        value={editingSchedule.ArrivalDate}
                        onChange={handleEditInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        name="ArrivalTime"
                        value={editingSchedule.ArrivalTime}
                        onChange={handleEditInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        name="DepartureDate"
                        value={editingSchedule.DepartureDate}
                        onChange={handleEditInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        name="DepartureTime"
                        value={editingSchedule.DepartureTime}
                        onChange={handleEditInputChange}
                      />
                    </td>
                    <td>
                      <select
                        name="TrainID"
                        value={editingSchedule.TrainID}
                        onChange={handleEditInputChange}
                      >
                        <option value="">Select Train ID</option>
                        {trains.map((train) => (
                          <option key={train.TrainID} value={train.TrainID}>
                            {train.TrainID}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <button onClick={() => handleSave(schedule.ScheduleID)}>Save</button>
                      <button onClick={handleCancel} style={{ marginLeft: '5px' }}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{schedule.ScheduleID}</td>
                    <td>{schedule.TransitLineName}</td>
                    <td>{schedule.TravelTime}</td>
                    <td>{schedule.ArrivalDateTime.split('T')[0]}</td>
                    <td>{schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5)}</td>
                    <td>{schedule.DepartureDateTime.split('T')[0]}</td>
                    <td>{schedule.DepartureDateTime.split('T')[1]?.substring(0, 5)}</td>
                    <td>{schedule.TrainID}</td>
                    <td>
                      <button onClick={() => handleEditClick(schedule)} style={{ marginRight: '5px' }}>
                        Edit
                      </button>
                      {schedule.ReservationCount === 0 ? (
                        <button onClick={() => handleDelete(schedule.ScheduleID)}>Delete</button>
                      ) : (
                        <button disabled title="Cannot delete. Reservations exist.">Delete</button>
                      )}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Search Train Schedules by Station */}
      <div style={{ marginBottom: '20px' }}>
      <h3>Search Train Schedules by Station (Origin or Destination)</h3>
      <select
        value={searchStationName}
        onChange={(e) => setSearchStationName(e.target.value)}
      >
        <option value="">Select Station</option>
        {stations.map((station) => (
          <option key={station.StationID} value={station.StationName}>
            {station.StationName}
          </option>
        ))}
      </select>
      <button onClick={handleSearchSchedules}>Search Schedules by Station</button>

      {/* Render search results */}
      {searchTriggered && (
        searchedSchedules.length > 0 ? (
          <table style={{ marginTop: '20px' }}>
            <thead>
              <tr>
                <th>Schedule ID</th>
                <th>Transit Line Name</th>
                <th>Travel Time</th>
                <th>Arrival Date</th>
                <th>Arrival Time</th>
                <th>Departure Date</th>
                <th>Departure Time</th>
                <th>Train ID</th>
              </tr>
            </thead>
            <tbody>
              {searchedSchedules.map((schedule) => (
                <tr key={schedule.ScheduleID}>
                  <td>{schedule.ScheduleID}</td>
                  <td>{schedule.TransitLineName}</td>
                  <td>{schedule.TravelTime}</td>
                  <td>{schedule.ArrivalDateTime.split('T')[0]}</td>
                  <td>{schedule.ArrivalDateTime.split('T')[1]?.substring(0, 5)}</td>
                  <td>{schedule.DepartureDateTime.split('T')[0]}</td>
                  <td>{schedule.DepartureDateTime.split('T')[1]?.substring(0, 5)}</td>
                  <td>{schedule.TrainID}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="error" style={{ color: 'red' }}>No train schedules found for the selected station.</p>
        )
      )}
    </div>
    </div>
  );
};

export default ManageSchedulesTab;

