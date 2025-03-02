// import React from "react";

// const CustomerDashboard = () => {
//   return (
//     <div>
//       <h1>Customer Dashboard</h1>
//       <nav>
//         <ul>
//           <li><a href="/search-trains">Search Trains</a></li>
//           <li><a href="/my-reservations">My Reservations</a></li>
//           <li><a href="/faqs">FAQs</a></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default CustomerDashboard;

// CustomerDashboard.js
import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import TrainSchedulesTab from '../tabs/TrainSchedulesTab';
import MyReservationsTab from '../tabs/MyReservationsTab';
import TravelItineraryTab from '../tabs/TravelItineraryTab';
import AskQuestionTab from '../tabs/AskQuestionTab';

const CustomerDashboard = () => {
  const [currentTab, setCurrentTab] = useState('trainSchedules');
  const [stations, setStations] = useState([]);
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetchStations();
    fetchTrains();
  }, []);

  // Fetch all available stations
  const fetchStations = async () => {
    try {
      const response = await axiosInstance.get('/stations');
      setStations(response.data.stations);
    } catch (err) {
      console.error('Error fetching stations:', err);
    }
  };

  // Fetch all available trains
  const fetchTrains = async () => {
    try {
      const response = await axiosInstance.get('/customer-rep/trains');
      setTrains(response.data.trains);
    } catch (err) {
      console.error('Error fetching trains:', err);
    }
  };

  return (
    <div>
      <h2>Customer Dashboard</h2>

      <div className="tabs">
        <button onClick={() => setCurrentTab('trainSchedules')}>Train Schedules Search & Book</button>
        <button onClick={() => setCurrentTab('myReservations')}>My Reservations</button>
        <button onClick={() => setCurrentTab('travelItinerary')}>Travel Itinerary</button>
        <button onClick={() => setCurrentTab('askQuestion')}>Ask a Question</button>
      </div>

      <div className="tab-content">
        {currentTab === 'trainSchedules' && <TrainSchedulesTab stations={stations} />}
        {currentTab === 'myReservations' && <MyReservationsTab />}
        {currentTab === 'travelItinerary' && <TravelItineraryTab />}
        {currentTab === 'askQuestion' && <AskQuestionTab />}
      </div>
    </div>
  );
};

export default CustomerDashboard;
