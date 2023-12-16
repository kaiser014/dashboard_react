import React from 'react';
import './friendscard.css';

const FriendsCard = () => {
  return (
    <div className='friends-card'>
        <div className='fc-heading'>
            <img src='https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw4df1cda7/Homepage/ourrange/7_Accessory_1920x1628.jpg' alt='' />
            <span>Jane</span>
        </div>
        <div className='fc-image'>
            <img src='https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw4df1cda7/Homepage/ourrange/7_Accessory_1920x1628.jpg' alt='' />
        </div>
        <div className='fc-content'>
            <p>We completed the 30-Day Running Streak Challenge</p>
        </div>
    </div>
  )
}

export default FriendsCard;