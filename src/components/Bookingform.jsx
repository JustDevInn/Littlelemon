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
    guests: 0,
    occasion: 'Select',
  });

  // State for validation
  const [validDate, setValidDate] = useState(true); // Initially valid
  const [validGuests, setValidGuests] = useState(true); // Initially valid
  const [validOccasion, setValidOccasion] = useState(true); // Initially valid
  const [isDateFieldFocused, setIsDateFieldFocused] = useState(false); // Track focus state

  // Validation functions
  const validateDate = () => {
    const date = formData.date;
    if (date) {
      setValidDate(true);
    } else {
      setValidDate(false);
    }
  };

  const validateGuests = () => {
    const guests = formData.guests;
    if (guests >= 1 && guests <= 10) {
      setValidGuests(true);
    } else {
      setValidGuests(false);
    }
  };

  const validateOccasion = () => {
    const occasion = formData.occasion;
    if (occasion !== 'Select') {
      setValidOccasion(true);
    } else {
      setValidOccasion(false);
    }
  };

  // Event handler for date input
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    updateTimes(newDate);
    validateDate(); // Validate the date input
  };

  // Event handler for guests input
  const handleGuestsChange = (e) => {
    handleInputChange(e);
    validateGuests();
  };

  // Event handler for occasion dropdown
  const handleOccasionChange = (e) => {
    handleInputChange(e);
    validateOccasion();
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
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
    // Validate all fields before submitting
    validateDate();
    validateGuests();
    validateOccasion();

    if (validDate && validGuests && validOccasion) {
      const confirmation = `Your reservation has been confirmed for: ${selectedDate}, ${selectedTime} ${formData.guests} - persons Occasion: ${formData.occasion}`;

      try {
        const formDataToSubmit = {
          date: selectedDate,
          time: selectedTime,
          guests: formData.guests,
          occasion: formData.occasion,
        };

        const isSubmitted = await submitForm(formDataToSubmit);

        if (isSubmitted) {
          setConfirmationMessage(confirmation);
          console.log('Reservation data sent successfully:', formDataToSubmit);
        } else {
          console.error('Error submitting booking data');
        }
      } catch (error) {
        console.error('Error submitting booking data:', error);
      }
    }
  };

  useEffect(() => {
    initializeTimes();
  }, [initializeTimes]);

  // Event handler for date input focus
  const handleDateFieldFocus = () => {
    setIsDateFieldFocused(true);
  };

  // Event handler for date input blur
  const handleDateFieldBlur = () => {
    setIsDateFieldFocused(false);
  };

  return (
    <div className='bookingformcontainer'>
      {confirmationMessage ? (
        <div className='confirmation-message'>{confirmationMessage}</div>
      ) : (
        <form className='bookingform'>
          <h1>Restaurant Reservation</h1>
          <label htmlFor='date'>Choose date</label>
          <input
            type='date'
            id='date'
            value={formData.date}
            onChange={handleDateChange}
            onFocus={handleDateFieldFocus}
            onBlur={handleDateFieldBlur}
            required
          />
          {!validDate && !isDateFieldFocused && (
            <p className='validation-message'>Please choose a date.</p>
          )}
          {showTimeSelection ? (
            <>
              <label htmlFor='time'>Available Times</label>
              <div className="time-button-container">
                {availableTimes && availableTimes.length > 0 ? (
                  availableTimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeChange(time)}
                      className={selectedTime === time ? 'selected' : ''}
                      required
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
            onChange={handleGuestsChange}
            min='1'
            max='10'
            required
          />
          {!validGuests && (
            <p className='validation-message'>Number of guests must be between 1 and 10.</p>
          )}
          <label htmlFor='occasion'>Occasion</label>
          <select
            id='occasion'
            value={formData.occasion}
            onChange={handleOccasionChange}
            required
          >
            <option value='Select'>Select..</option>
            <option value='Birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
            <option value='Undefined'>Undefined</option>
          </select>
          {!validOccasion && (
            <p className='validation-message'>Please select an occasion.</p>
          )}
          <button type='button' aria-label="On Click" onClick={handleConfirmReservation}>
            Confirm reservation
          </button>
        </form>
      )}
    </div>
  );
}

export default BookingForm;
