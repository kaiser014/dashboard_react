import React from 'react';
import './homepage.css';
import PopularActivity from './Popular_Activity/PopularActivity';
import { Col, Row } from 'react-bootstrap';
import WeeklySchedule from './Weekly_Schedule/WeeklySchedule';
import PersonalBests from './Personal_Bests/PersonalBests';
const Home = () => {
  return (
    <div className='homepage'>
      <section className='homepage-section'>
        <PopularActivity />
        <div className='weekly-personal'>
          <Row>
            <Col md={7} lg={7}>
              <WeeklySchedule />
            </Col>
            <Col md={5} lg={5}>
              <PersonalBests />
            </Col>
          </Row>
        </div>
      </section>
    </div>
  )
}

export default Home;