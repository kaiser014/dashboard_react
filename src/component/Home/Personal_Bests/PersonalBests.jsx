import React from 'react';
import './personalbests.css';
import BestsItem from './Personal_Bests_Item/BestsItem';
const PersonalBests = () => {
  return (
    <div>
      <div className='title'>
          <h5>Personal Bests</h5>
      </div>
      <BestsItem />
    </div>
  )
}

export default PersonalBests;