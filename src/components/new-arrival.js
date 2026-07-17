import '../App.css';
import { useState,useEffect } from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';




export default function NewArrivals(){


  return(
    <>
    {/* arrival-section */}
      <div className='new-arrivals-section'>
        <div className='NAheading'>
          <h1>New Arrivals</h1>
          <button>Shop All</button>
        </div>
        {/* card-1 */}
        <div className='NAcard-row'>
          <div className='NAcard'>
            <div className='NA-img1'>

            </div>
            <div id='card1'style={{width:'100%'}}>
              <p>Ficus Lyrata</p>
              <p>$35.99</p>
            </div>
            <div>
              <button>Add to Cart</button>
            </div>
            
          </div>
          {/* Card2 */}
          <div className='NAcard'>
            <div className='NA-img2'>
              
            </div>
            <div style={{width:'100%'}}>
              <p>Ficus Lyrata</p>
              <p>$35.99</p>
            </div>
            <div>
              <button>Add to Cart</button>
            </div>
          </div> 
            
          {/* Card3 */}
          <div className='NAcard'>
            <div className='NA-img3'>
              
            </div>
            <div style={{width:'100%'}}>
              <p>Ficus Lyrata</p>
              <p>$35.99</p>
            </div>
            <div>
              <button>Add to Cart</button>
            </div>
          </div>
          {/* Card4 */}
          <div className="NAcard">
            <div className='NA-img4'>
              
            </div>
            <div style={{width:'100%'}}>
              <p>Ficus Lyrata</p>
              <p>$35.99</p>
            </div>
            <div>
              <button>Add to Cart</button>
            </div>
          </div>                              
        </div>
      </div>
    </>
  )
}