import React from 'react';
import './main.css';

const Specials = () => {
  return (
    <div className='specials-container'>
      <div className='specials-header'>
        <h1>Specials</h1>
        <button className='special-button'>On the menu</button>
      </div>
      <div className='specials-cards'>
      {/* Card 1 */}
        <div className='specials-card'>
          <img className="specials-img" src="greeksalad.jpg" alt="greek-salad"/>
          <div className='card-text'>
          <div className='specials-title-price'>
            <h5>Greek salad</h5>
            <p style={{color:'red'}}>$5,99</p>
            </div>
          <p>Greek salad or horiatiki is a popular salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, feta cheese,and olives and dressed with salt, Greek oregano, and olive oil.</p>
          <h5>Order & Delivery</h5>
          </div>
        </div>
        {/* Card 2 */}
        <div className='specials-card'>
          <img className="specials-img" src="bruchetta.svg" alt="greek-salad"/>
          <div className='card-text'>
          <div className='specials-title-price'>
            <h5>Bruscetta</h5>
            <p style={{color:'red'}}>$5,99</p>
            </div>
          <p>Bruschetta (/bruːˈskɛtə/,[1] /bruːˈʃɛtə/,[2] Italian pronunciation: [bruˈsketta] i) is an antipasto from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt.</p>
          <h5>Order & Delivery</h5>
          </div>
        </div>
        {/* Card 3 */}
        <div className='specials-card'>
          <img className="specials-img" src="lemondessert.jpg" alt="greek-salad"/>
          <div className='card-text'>
          <div className='specials-title-price'>
            <h5>Lemon Dessert</h5>
            <p style={{color:'red'}}>$5,99</p>
            </div>
          <p>This is a list of lemon dishes and drinks, in which lemon is used as a primary ingredient. Lemon is a small evergreen tree native to Asia, and the tree's ellipsoidal yellow fruit. </p>
          <h5>Order & Delivery</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Specials