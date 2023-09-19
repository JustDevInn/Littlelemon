import React, { useReducer } from 'react';
import BookingPage from './BookingPage';

// Define a reducer function to update availableTimes based on the selected date
function availableTimesReducer(state, action) {
  // For now, return the same available times regardless of the date
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
}

function Main() {
  // Initialize the state using useReducer
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  // Create a function to initialize the availableTimes state
  function initializeTimes() {
    dispatch({ type: 'INITIALIZE' });
  }

  // Create a function to update the availableTimes state based on the selected date
  function updateTimes(selectedDate) {
    // For now, dispatch a state change with the selected date
    dispatch({ type: 'UPDATE', selectedDate });
  }

  return (
    <div>
      {/* Pass state and state-changing functions to the BookingPage component */}
      <BookingPage
        availableTimes={availableTimes}
        initializeTimes={initializeTimes}
        updateTimes={updateTimes}
      />
    </div>
  );
}

export default Main;
