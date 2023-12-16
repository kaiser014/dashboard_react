import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPersonRunning, faSliders, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import './navbarlinks.css';

const NavbarLinks = () => {
  return (
    <div className='navbar-background'>
      <Navbar>
        <div className='text-center py-2'>
          <Navbar.Brand to="/">
            <img src='https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg' alt='logo'/>
          </Navbar.Brand>
        </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/'}><span className='navlink-icon'><FontAwesomeIcon icon={faHome}/></span><span className='navlink-name'>Home</span></Nav.Link>
              <Nav.Link as={Link} to={'/profile'}><span className='navlink-icon'><FontAwesomeIcon icon={faUserAlt}/></span><span className='navlink-name'>Profile</span></Nav.Link>
              <Nav.Link as={Link} to={'/schedule'}><span className='navlink-icon'><FontAwesomeIcon icon={faCalendarAlt}/></span><span className='navlink-name'>Schedule</span></Nav.Link>
              <Nav.Link as={Link} to={'/activities'}><span className='navlink-icon'><FontAwesomeIcon icon={faPersonRunning}/></span><span className='navlink-name'>Activities</span></Nav.Link>
              <Nav.Link as={Link} to={'/settings'}><span className='navlink-icon'><FontAwesomeIcon icon={faSliders}/></span><span className='navlink-name'>Settings</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarLinks;