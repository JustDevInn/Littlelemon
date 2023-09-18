import React from 'react'
import './main.css'

const Main = () => {
  return (
    <main>

{/* Little Lemon Hero 1 */}
      <div className='main-container'>
      <div className='main-element'>
        <article>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>lorem  ipson this story is about the little lemon restaurant with its amazing menu of fresh foods.</p>
          <button>Reserve a table</button>
        </article>
        <img className="article-img" src="restauranfood.jpg" alt="chef"/>
      </div>
      </div>



{/* Specials */}
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
          <p>lorem ipsum this is a very elngthy text with all kinds of words just to give the p tag xome volume. very good.</p>
          <h5>Order & Delivery</h5>
          </div>
        </div>
        {/* Card 2 */}
        <div className='specials-card'>
          <img className="specials-img" src="bruchetta.svg" alt="greek-salad"/>
          <div className='card-text'>
          <div className='specials-title-price'>
            <h5>Greek salad</h5>
            <p style={{color:'red'}}>$5,99</p>
            </div>
          <p>lorem ipsum this is a very elngthy text with all kinds of words just to give the p tag xome volume. very good.</p>
          <h5>Order & Delivery</h5>
          </div>
        </div>
        {/* Card 3 */}
        <div className='specials-card'>
          <img className="specials-img" src="lemondessert.jpg" alt="greek-salad"/>
          <div className='card-text'>
          <div className='specials-title-price'>
            <h5>Greek salad</h5>
            <p style={{color:'red'}}>$5,99</p>
            </div>
          <p>lorem ipsum this is a very elngthy text with all kinds of words just to give the p tag xome volume. very good.</p>
          <h5>Order & Delivery</h5>
          </div>
        </div>
      </div>
    </div>



    {/* Testimonials */}
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

    {/* Little Lemon Hero 2 */}
    <div className='hero2'>
      <div className='hero2-text'>
        <article>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>lorem  ipson this story is about the little lemon restaurant with its amazing menu of fresh foods.</p>
        </article>
      </div>
      <div className='hero2-images'>
        <img src="chef2.jpg" alt="chef" className='hero2-image1'/>
        <img src="restaurantchef.jpg" alt="chef" className='hero2-image2'/>
      </div>
    </div>
    </main>
  )
}

export default Main