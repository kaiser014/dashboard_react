import React from 'react';
import WeeklyItem from './Weekly_Item/WeeklyItem';
import './weeklyschedule.css';
const WeeklySchedule = () => {
  return (
    <div>
        <div className='title'>
            <h5>Weekly Schedule</h5>
        </div>
        <div className='weekly-schedule-content wsc-item1'>
            <WeeklyItem itemtitle="Swimming" date="13" day="mon"/>
        </div>
        <div className='weekly-schedule-content wsc-item2'>
            <WeeklyItem itemtitle="Yoga" date="15" day="wed"/>
        </div>
        <div className='weekly-schedule-content wsc-item3'>
            <WeeklyItem itemtitle="Tennis" date="17" day="fri"/>
        </div>
        <div className='weekly-schedule-content wsc-item4'>
            <WeeklyItem itemtitle="Hiking" date="18" day="sat"/>
        </div>
    </div>
  )
}

export default WeeklySchedule;