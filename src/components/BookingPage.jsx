// import React from 'react'
// import Bookingform from './Bookingform'

// const BookingPage = () => {
//   return (
//     <Bookingform/>
//   )
// }

// export default BookingPage

import React from 'react';
import BookingForm from './Bookingform';

function BookingPage({ availableTimes, initializeTimes, updateTimes }) {
  return (
    <div>
      {/* Pass state and state-changing functions to the BookingForm component */}
      <BookingForm
        availableTimes={availableTimes}
        initializeTimes={initializeTimes}
        updateTimes={updateTimes}
      />
    </div>
  );
}

export default BookingPage;
