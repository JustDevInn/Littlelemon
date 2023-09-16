import React from 'react'
import './nav.css';

const Nav = () => {
  return (
    <nav>
    <img
  src="../assets/Logo.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
    <h2>LITTLE LEMON</h2>
      <ul className='nav-links'>
      <li><a href="/">Home</a></li>
      <li><a href="/">About</a></li>
      <li><a href="/">Menu</a></li>
      <li><a href="/">Reservations</a></li>
      <li><a href="/">Order-online</a></li>
      <li><a href="/">Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav