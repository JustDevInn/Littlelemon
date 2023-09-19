import React from 'react'
import {Link } from "react-router-dom";
import './main.css'

const CallToAction = () => {
  return (
    <main>
      <div className='main-container'>
      <div className='main-element'>
        <article>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>Little Lemon was a fine-dining vegan bistro located in the Silver Lake neighborhood of Los Angeles, California.[1][2] It was founded by electronic musician and animal rights activist Moby.[3] In July 2020, local plant-based investors took over operations of the restaurant.[4] The restaurant served organic, vegan, Mediterranean-inspired dishes and has a retail section with art and books, curated by Moby himself.[2][3] Moby's vision was to create a space that includes various aspects of society that he cares about. The restaurant closed down in December 2022.[5]</p>
          <li><Link to="/bookingpage"><button>Reserve a table</button></Link></li>
        </article>
        <img className="article-img" src="restauranfood.jpg" alt="chef"/>
      </div>
      </div>
    </main>
  )
}

export default CallToAction