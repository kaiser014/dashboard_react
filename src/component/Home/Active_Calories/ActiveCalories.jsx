import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './activecalories.css';
const ActiveCalories = () => {
    const percentage = 85;
  return (
    <div>
        <div className='active-calories-card'>
            <div className='card-heading'>
                <h6>Active Calories</h6>
            </div>
            <div className='active-calories-progressbar'>
                <div className='ac-progressbar'>
                    <div className='ac-circular-progressbar'>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={10} styles={buildStyles({strokeLinecap: "butt", textColor: "#493971", pathColor: "#493971"})} />
                    </div>
                </div>
                <div className='ac-content'>
                    <ul>
                        <li><span>Today:</span> 400</li>
                        <li><span>This Week:</span> 3500</li>
                        <li><span>This Month:</span> 14000</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ActiveCalories;