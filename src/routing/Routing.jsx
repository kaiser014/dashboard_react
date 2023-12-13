import React from 'react'
import { Col, Row } from 'react-bootstrap';
import {Routes, Route} from 'react-router-dom';
import Home from '../component/Home/Home';
import NavbarLinks from '../component/Navbar/NavbarLinks';
const Routing = () => {
  return (
    <div className='container-fluid'>
        <Row>
          <Col xl={2} className='p-0'>
            <NavbarLinks />
          </Col>
          <Col xl={10}>
            <Row>
              <Col xl={9}>
              <Routes>
                <Route path='/' element={<Home />}></Route>
              </Routes>
              </Col>
              <Col xl={3}>

              </Col>
            </Row>
          </Col>
        </Row>
    </div>
  )
}

export default Routing;