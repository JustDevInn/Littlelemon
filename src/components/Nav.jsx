import React from 'react'
import {Link } from "react-router-dom";
import './nav.css';

const Nav = () => {
  return (
    <nav>
    <a href="/">
    <img
  src="Logo.svg"
  alt="triangle with all three sides equal"
  height="87"
  width="100" />
  </a>
    <h2>LITTLE LEMON</h2>
      <ul className='nav-links'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/">About</Link></li>
      <li><Link to="/specials">Menu</Link></li>
      <li><Link to="/bookingpage">Reservations</Link></li>
      <li><Link to="/">Order-online</Link></li>
      <li><Link to="/">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Nav