import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <img src="" alt="Restaurant" width={100} height={150}/>
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
      <ul>
      <h5>Contact</h5>
        <li>Adress</li>
        <li>Phone number</li>
        <li>Email</li>
      </ul>

      {/* Third link column */}
      <ul>
      <h5>Social media links</h5>
        <li><a href="https://www.facebook.com/">Facebook</a></li>
        <li><a href="https://www.instagram.com/">Instagram</a></li>
        <li><a href="https://www.youtube.com/">YouTube</a></li>
      </ul>
    </footer>
  )
}

export default Footer