import React from 'react';
// import { Col, Row } from 'react-bootstrap';
import PopularActivityCard from './Popular_Activity_Card/PopularActivityCard';
import './popularactivity.css';
const PopularActivity = () => {
  return (
    <div className='popular-activity'>
      <div className='title'>
        <h5>Popular Activities</h5>
      </div>
      {/* <div className='popular-activity-content'>
        <div className='grid-container'>
          <div class="item1"><PopularActivityCard /></div>
          <div class="item2"><PopularActivityCard /></div>
          <div class="item3">
            <div className='sub-item'>
              <PopularActivityCard />
              <PopularActivityCard />
            </div>
          </div>  
          <div class="item4"><PopularActivityCard /></div>
          <div class="item5"><PopularActivityCard /></div>
          <div class="item5"><PopularActivityCard /></div>
        </div>
      </div> */}
      <div id="outer-grid">
        <div><PopularActivityCard /></div>
        <div className='grid-column'><PopularActivityCard /></div>
        <div id="inner-grid" className='grid-column'>
          <div><PopularActivityCard /></div>
          <div><PopularActivityCard /></div>
          <div className='grid-wide'><PopularActivityCard /></div>
        </div>
        <div><PopularActivityCard /></div>
      </div>
    </div>
  )
}

export default PopularActivity;