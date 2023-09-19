import React from 'react';
import './main.css';

const CustomersSay = () => {
  return (
    <div className='testimonials'>
    <div className='tesimonials-header'>
      <h1>Testimonials</h1>
    </div>
    {/* Testimonial cards */}
    <div className='testimonials-cards'>
    {/* card 1 */}
      <div className='testimonials-card'>
        <p>Rating</p>
      <div className='testominials-img-photo'>
        <img className="testimonials-img" src="logo.svg" alt="testomial person" width={70} height={70}/>
        <p>Photo</p>
      </div>
        <p>User profile</p>
      </div>
      {/* card 2 */}
      <div className='testimonials-card'>
        <p>Rating</p>
      <div className='testominials-img-photo'>
        <img className="testimonials-img" src="logo.svg" alt="testomial person" width={70} height={70}/>
        <p>Photo</p>
      </div>
        <p>User profile</p>
      </div>
      {/* card 3 */}
      <div className='testimonials-card'>
        <p>Rating</p>
      <div className='testominials-img-photo'>
        <img className="testimonials-img" src="logo.svg" alt="testomial person" width={70} height={70}/>
        <p>Photo</p>
      </div>
        <p>User profile</p>
      </div>
      {/* card 4 */}
      <div className='testimonials-card'>
        <p>Rating</p>
      <div className='testominials-img-photo'>
        <img className="testimonials-img" src="logo.svg" alt="testomial person" width={70} height={70}/>
        <p>Photo</p>
      </div>
        <p>User profile</p>
      </div>
    </div>
  </div>

  )
}

export default CustomersSay