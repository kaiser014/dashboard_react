import React from 'react';
import './bestsitem.css';
import { Row, Col } from 'react-bootstrap';
const BestsItem = () => {
  return (
    <div>
        <div className='single-item'>
            <h5>Fastest 5K Run: 22min</h5>
            <img src='https://cdn-icons-png.flaticon.com/512/6669/6669767.png' alt='cycling'/> 
        </div>
        <div className='double-item'>
            <Row>
                <Col lg={12} xl={6}>
                    <div className='di-item di-item1'>
                        <p>Longest Distance Cycle: 4 miles</p>
                        <div className='di-item-image'>
                            <img src='https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw4df1cda7/Homepage/ourrange/7_Accessory_1920x1628.jpg' alt=''/>
                        </div>
                    </div>
                </Col>
                <Col lg={12} xl={6}>
                    <div className='di-item di-item2'>
                        <p>Longest Rollers-Skating: 2 hours</p>
                        <div className='di-item-image'>
                            <img src='https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw4df1cda7/Homepage/ourrange/7_Accessory_1920x1628.jpg' alt=''/>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default BestsItem;