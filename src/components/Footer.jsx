import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <img src="restaurant.jpg" alt="Restaurant" width={200} height={300} style={{borderRadius:12}}/>
      {/* First link column */}
      <ul className='footer-links'>
      <h5>Doormat navigation</h5>
      <li><a href="/">Home</a></li>
      <li><a href="/">About</a></li>
      <li><a href="/">Menu</a></li>
      <li><a href="/">Reservations</a></li>
      <li><a href="/">Order-online</a></li>
      <li><a href="/">Login</a></li>
      </ul>

      {/* Second link column */}
      <ul className='footer-links'>
      <h5>Contact</h5>
        <li>Adress</li>
        <li>Phone number</li>
        <li>Email</li>
      </ul>

      {/* Third link column */}
      <ul className='footer-links'>
      <h5>Social media links</h5>
        <li><a href="https://www.facebook.com/">Facebook</a></li>
        <li><a href="https://www.instagram.com/">Instagram</a></li>
        <li><a href="https://www.youtube.com/">YouTube</a></li>
      </ul>
    </footer>
  )
}

export default Footer