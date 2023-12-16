import React from 'react';
import './home.css';
import PopularActivity from '../../component/Home/Popular_Activity/PopularActivity';
import { Col, Row } from 'react-bootstrap';
import WeeklySchedule from '../../component/Home/Weekly_Schedule/WeeklySchedule';
import PersonalBests from '../../component/Home/Personal_Bests/PersonalBests';
import TopBar from '../../component/Home/Top_Bar/TopBar';
import ActiveCalories from '../../component/Home/Active_Calories/ActiveCalories';
import FriendsActivity from '../../component/Home/Friends_Activity/FriendsActivity';

const Home = () => {
  return (
    <div className='homepage'>
      <section className='homepage-section large-device'>
        <Row>
          <Col md={12} lg={8} xl={9}>
            <div className='homepage-left'>
              <PopularActivity />
              <div className='weekly-personal'>
                <Row className='flex-direction'>
                  <Col md={7} lg={7} xl={7}>
                    <WeeklySchedule />
                  </Col>
                  <Col md={5} lg={5} xl={5}>
                    <PersonalBests />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col md={12} lg={4} xl={3}>
            <div className='homepage-right'>
              <TopBar />
              <ActiveCalories />
              <FriendsActivity />
            </div>
          </Col>
        </Row>
      </section>
      <section className='mobile-homepage-section mobile-device py-2'>
        <div className='m-item'>
          <TopBar />
          <ActiveCalories />
          <PersonalBests />
        </div>
        <div className='m-item'>
          <PopularActivity />
          <WeeklySchedule />
        </div>
      </section>
    </div>
  )
}

export default Home;