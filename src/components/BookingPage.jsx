import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, initializeTimes, updateTimes }) {
  return (
    <div>
      <BookingForm
        availableTimes={availableTimes}
        initializeTimes={initializeTimes}
        updateTimes={updateTimes}
      />
    </div>
  );
}

export default BookingPage;
