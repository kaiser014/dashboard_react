import React from 'react';
import './popularactivitycard.css';
const PopularActivityCard = () => {
  return (
    <div className='card-item'>
        <div className='card-item-content'>
            <div className='card-item-overlay'></div>
            <img src='https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw4df1cda7/Homepage/ourrange/7_Accessory_1920x1628.jpg' alt='Cycle'/>
        </div>
        <div className='content-details'>
          <h6>Cycling</h6>
        </div>
    </div>
  )
}

export default PopularActivityCard;