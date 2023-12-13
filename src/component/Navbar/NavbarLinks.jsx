import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbarlinks.css';
import { faHome, faPersonRunning, faSliders, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
const NavbarLinks = () => {
  return (
    <div className='navbar-background'>
      <Navbar>
        <div className='text-center py-2'>
          <Navbar.Brand href="#home">Logo Area</Navbar.Brand>
        </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"><span className='navlink-icon'><FontAwesomeIcon icon={faHome}/></span><span className='navlink-name'>Home</span></Nav.Link>
              <Nav.Link href="#profile"><span className='navlink-icon'><FontAwesomeIcon icon={faUserAlt}/></span><span className='navlink-name'>Profile</span></Nav.Link>
              <Nav.Link href="#schedule"><span className='navlink-icon'><FontAwesomeIcon icon={faCalendarAlt}/></span><span className='navlink-name'>Schedule</span></Nav.Link>
              <Nav.Link href="#activities"><span className='navlink-icon'><FontAwesomeIcon icon={faPersonRunning}/></span><span className='navlink-name'>Activities</span></Nav.Link>
              <Nav.Link href="#settings"><span className='navlink-icon'><FontAwesomeIcon icon={faSliders}/></span><span className='navlink-name'>Settings</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarLinks;