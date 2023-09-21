import React, { useReducer, useEffect } from 'react';
import BookingPage from './BookingPage';
import BookingForm from './BookingForm'; 
import { useNavigate } from 'react-router-dom';

function availableTimesReducer(state, action) {
  if (action.type === 'INITIALIZE') {
    return [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ];
  } else if (action.type === 'UPDATE') {
    return [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ];
  }
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);
  const navigate = useNavigate();

  function initializeTimes() {
    dispatch({ type: 'INITIALIZE' });
  }

  function updateTimes(selectedDate) {
    dispatch({ type: 'UPDATE', selectedDate });
  }

  async function submitForm(formData) {
    try {
      const isSubmitted = await window.submitAPI(formData);

      if (isSubmitted) {
        navigate('/confirmation');
      } else {
        console.error('Error submitting booking data');
      }
    } catch (error) {
      console.error('Error submitting booking data:', error);
    }
  }

  useEffect(() => {
    const apiScript = document.createElement('script');
    apiScript.src = 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js';
    apiScript.async = true;

    apiScript.addEventListener('load', () => {
      initializeTimes();
    });

    document.head.appendChild(apiScript);
  }, []);

  return (
    <div>
      <BookingPage
        availableTimes={availableTimes}
        initializeTimes={initializeTimes}
        updateTimes={updateTimes}
      />
      <BookingForm
        submitForm={submitForm}
        initializeTimes={initializeTimes} // Pass initializeTimes as a prop
      />
    </div>
  );
}

export default Main;
