import React from 'react';
import { Button } from 'react-bootstrap';
import './weeklyitem.css';
const WeeklyItem = (props) => {
  const { itemtitle, day, date } = props;
  return (
    <div className='weekly-item-section'>
        <div className='weekly-date'>
            <h2>{date}</h2>
            <h6>{day}</h6>
        </div>
        <div className='weekly-content'>
            <h5>{itemtitle}</h5>
            <img src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw4df1cda7/Homepage/ourrange/7_Accessory_1920x1628.jpg" alt='cycle'/>
            <img src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw4df1cda7/Homepage/ourrange/7_Accessory_1920x1628.jpg" alt='cycle'/>
            <img src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw4df1cda7/Homepage/ourrange/7_Accessory_1920x1628.jpg" alt='cycle'/>
            <img src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw4df1cda7/Homepage/ourrange/7_Accessory_1920x1628.jpg" alt='cycle'/>
        </div>
        <div className='weekly-button'>
            <Button className='btn weekly-btn'>Join</Button>
        </div>
    </div>
  )
}

export default WeeklyItem;