import React from 'react'
import { Col, Row } from 'react-bootstrap';
import {Routes, Route} from 'react-router-dom';
import NavbarLinks from '../component/Navbar/NavbarLinks';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Schedule from '../pages/Schedule/Schedule';
import Activity from '../pages/Activity/Activity';
import Settings from '../pages/Settings/Settings';

const Routing = () => {
  return (
    <div className='container-fluid'>
        <Row>
          <Col md={2} lg={2} xl={2} className='col-2 p-0'>
            <NavbarLinks />
          </Col>
          <Col md={10} lg={10} xl={10} className='col-10'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/schedule' element={<Schedule />} />
                <Route path='/activities' element={<Activity />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
          </Col>
        </Row>
    </div>
  )
}

export default Routing;