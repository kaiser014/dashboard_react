import React from 'react';
import './friendsactivity.css';
import FriendsCard from './Friends_Card/FriendsCard';

const FriendsActivity = () => {
  return (
    <div className='friends-activity-heading'>
        <div className='title'>
            <h5>Friends Activity</h5>
        </div>
        <div>
            <FriendsCard />
            <FriendsCard />
        </div>
    </div>
  )
}

export default FriendsActivity;