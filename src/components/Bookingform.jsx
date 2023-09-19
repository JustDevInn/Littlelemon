import React, { useState } from 'react';
import '../components/main.css';

function BookingForm({ availableTimes, initializeTimes, updateTimes }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('17:00'); // Default value
  const [showTimeSelection, setShowTimeSelection] = useState(true);
  const [confirmationMessage, setConfirmationMessage] = useState(null); // Initially no message
  const [formData, setFormData] = useState({
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Birthday',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    updateTimes(newDate);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    setShowTimeSelection(false);
  };

  const handleReturnToTimeSelection = () => {
    setSelectedTime('');
    setShowTimeSelection(true);
  };

  const handleConfirmReservation = () => {
    // Create the confirmation message based on the form data
    const confirmation = <div className="confirmation-message">
    Your reservation has been confirmed for: <br/>
   {selectedDate}, {selectedTime} <br/>
     {formData.guests}
     - persons <br/> Occasion: {formData.occasion}
  </div>
    setConfirmationMessage(confirmation);
  };

  return (
    <div className='bookingformcontainer'>
      {confirmationMessage ? (
        <div className='confirmation-message'>{confirmationMessage}</div>
      ) : (
        <form className='bookingform'>
          <h1>Restaurant Reservation</h1>
          <label htmlFor='res-date'>Choose date</label>
          <input
            type='date'
            id='date'
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
          {showTimeSelection ? (
            <>
              <label htmlFor='res-time'>Available Times</label>
              <ul>
                {availableTimes.map((time) => (
                  <li key={time}>
                    <button
                      onClick={() => handleTimeChange(time)}
                      className={selectedTime === time ? 'selected' : ''}
                    >
                      {time}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <p>You have selected: {selectedTime}</p>
              <button onClick={handleReturnToTimeSelection}>Change Time</button>
            </>
          )}
          <label htmlFor='guests'>Number of guests</label>
          <input
            type='number'
            id='guests'
            value={formData.guests}
            onChange={handleInputChange}
            min='1'
            max='10'
            required
          />
          <br />
          <label htmlFor='occasion'>Occasion</label>
          <select
            id='occasion'
            value={formData.occasion}
            onChange={handleInputChange}
          >
            <option value='Birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
            <option value='Undefined'>Undefined</option>
          </select>
          <button type='button' onClick={handleConfirmReservation}>
            Confirm reservation
          </button>
        </form>
      )}
    </div>
  );
}

export default BookingForm;
