import React from 'react';
import './index.css';
import { Nav, Navbar } from 'react-bootstrap';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function Header() {
  const handleAboutLinkClicked = (e) => {
    e.preventDefault();
    scroller.scrollTo('about', {
      smooth: true,
    });
  }

  const handleSkillsLinkClicked = (e) => {
    e.preventDefault();
    scroller.scrollTo('skills', {
      smooth: true,
    });
  }

  const handleCareerLinkClicked = (e) => {
    e.preventDefault();
    scroller.scrollTo('career', {
      smooth: true,
    });
  }

  const handlePortfolioLinkClicked = (e) => {
    e.preventDefault();
    scroller.scrollTo('portfolio', {
      smooth: true,
    });
  }

  const handleContactLinkClicked = (e) => {
    e.preventDefault();
    scroller.scrollTo('contact', {
      smooth: true,
    });
  }

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
            <Nav.Link activeKey="1" className="nav-link" href="about" id="nav-about" onClick={handleAboutLinkClicked} style={{color: '#ffffff', fontWeight: 400}}>
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link activeKey="2" className="nav-link" href="career" id="nav-career" onClick={handleCareerLinkClicked} style={{ color: '#ffffff', fontWeight: 400 }}>
              Career
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" href="skills" id="nav-skills" onClick={handleSkillsLinkClicked} style={{color: '#ffffff', fontWeight: 400}}>
              Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" href="education" id="nav-education" onClick={handleSkillsLinkClicked} style={{color: '#ffffff', fontWeight: 400}}>
              Education
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" href="portfolio" id="nav-portfolio" onClick={handlePortfolioLinkClicked} style={{color: '#ffffff', fontWeight: 400}}>
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" href="contact" id="nav-contact" onClick={handleContactLinkClicked} style={{color: '#ffffff', fontWeight: 400}}>
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;