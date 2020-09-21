import React from 'react';
import './index.css';
import { Button, Nav } from 'react-bootstrap';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function Navbar() {
  const handleAboutLinkClicked = () => {
    scroller.scrollTo('about', {
      smooth: true,
    });
  }

  const handleSkillsLinkClicked = () => {
    scroller.scrollTo('skills', {
      smooth: true,
    });
  }

  const handleCareerLinkClicked = () => {
    scroller.scrollTo('career', {
      smooth: true,
    });
  }

  const handlePortfolioLinkClicked = () => {
    scroller.scrollTo('portfolio', {
      smooth: true,
    });
  }

  const handleContactLinkClicked = () => {
    scroller.scrollTo('contact', {
      smooth: true,
    });
  }

  return (
    <Element
      name="header"
    >
      <header id="header">
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-expand-md navbar-light"
        >
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-nav"
            aria-controls="navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"
              ><i className="fas fa-bars" style={{ color: "#fff", fontSize: "28px" }}></i
            ></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbar-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/darren-behan/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="https://github.com/darren-behan" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#section-contact"
                  id="nav-icon-contact"
                  onClick={handleContactLinkClicked}
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.instagram.com/darren_behan/"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <ul className="nav nav-pills navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#section-about" id="nav-about" onClick={handleAboutLinkClicked}>
                  About
                </a>
              </li>
              <li className="nav-item" id="nav-centre">
                <a className="nav-link" href="#section-career" id="nav-career" onClick={handleCareerLinkClicked}>
                  Career
                </a>
              </li>
              <li className="nav-item" id="nav-centre">
                <a className="nav-link" href="#section-skills" id="nav-skills" onClick={handleSkillsLinkClicked}>
                  Skills
                </a>
              </li>
              <li className="nav-item" id="nav-centre">
                <a className="nav-link" href="#section-skills" id="nav-education" onClick={handleSkillsLinkClicked}>
                  Education
                </a>
              </li>
              <li className="nav-item" id="nav-centre">
                <a
                  className="nav-link"
                  href="#section-portfolio"
                  id="nav-portfolio"
                  onClick={handlePortfolioLinkClicked}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-contact" id="nav-contact" onClick={handleContactLinkClicked}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Element>
  )
}

export default Navbar;