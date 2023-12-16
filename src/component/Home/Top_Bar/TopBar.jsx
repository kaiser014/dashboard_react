import React from 'react';
import './topbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMessage } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
  return (
    <div>
      <div className='top-bar'>
        <div>
            <a><FontAwesomeIcon icon={faBell}/></a>
        </div>
        <div>
            <a><FontAwesomeIcon icon={faMessage}/></a>
        </div>
        <div className='topbar-username'>
            <h6>Kelsey Miller</h6>
        </div>
        <div className='topbar-profilepic'>
            <img src='https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw4df1cda7/Homepage/ourrange/7_Accessory_1920x1628.jpg' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default TopBar;