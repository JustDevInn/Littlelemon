import React, { useState, useEffect } from 'react';
import '../components/main.css';

function BookingForm({ availableTimes, initializeTimes, updateTimes, submitForm }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('17:00');
  const [showTimeSelection, setShowTimeSelection] = useState(true);
  const [confirmationMessage, setConfirmationMessage] = useState(null);
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

  const handleConfirmReservation = async () => {
    const confirmation = `Your reservation has been confirmed for: ${selectedDate}, ${selectedTime} ${formData.guests} - persons Occasion: ${formData.occasion}`;
    
    try {
      const formDataToSubmit = {
        date: selectedDate,
        time: selectedTime,
        guests: formData.guests,
        occasion: formData.occasion,
      };

      const isSubmitted = await submitForm(formDataToSubmit); // Call submitForm with form data

      if (isSubmitted) {
        setConfirmationMessage(confirmation);
        console.log('Reservation data sent successfully:', formDataToSubmit);
      } else {
        console.error('Error submitting booking data');
      }
    } catch (error) {
      console.error('Error submitting booking data:', error);
    }
  };

  useEffect(() => {
    initializeTimes(); // Initialize available times when the component mounts
  }, [initializeTimes]);

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
              <div className="time-button-container">
                {availableTimes && availableTimes.length > 0 ? (
                  availableTimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeChange(time)}
                      className={selectedTime === time ? 'selected' : ''}
                    >
                      {time}
                    </button>
                  ))
                ) : (
                  <p>No available times.</p>
                )}
              </div>
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
