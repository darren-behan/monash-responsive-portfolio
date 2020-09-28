import React from 'react';
import './index.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar id="navbar"  className="justify-content-start" expand="md" sticky="top">
      <Nav.Item>
        <Nav.Link 
          href="https://www.linkedin.com/in/darren-behan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link 
          href="https://github.com/darren-behan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link 
          href="https://www.instagram.com/darren_behan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </Nav.Link>
      </Nav.Item>
      <Navbar.Toggle className="toggle-icon ml-auto" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav variant="pills">
          <Nav.Item>
            <Link to="/about" className="nav-link" id="nav-about" style={{color: '#ffffff', fontWeight: 400}}>
              About
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/career" className="nav-link" id="nav-career" style={{ color: '#ffffff', fontWeight: 400 }}>
              Career
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/skills" className="nav-link" id="nav-skills" style={{color: '#ffffff', fontWeight: 400}}>
              Skills
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/skills" className="nav-link" href="education" id="nav-education" style={{color: '#ffffff', fontWeight: 400}}>
              Education
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/portfolio" className="nav-link" href="portfolio" id="nav-portfolio" style={{color: '#ffffff', fontWeight: 400}}>
              Portfolio
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/contact" className="nav-link" href="contact" id="nav-contact" style={{color: '#ffffff', fontWeight: 400}}>
              Contact
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;