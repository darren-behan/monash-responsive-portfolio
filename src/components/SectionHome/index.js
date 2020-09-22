import React from 'react';
import './index.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function SectionHome() {
  // When you click the 'View my work' button, the viewport scrolls down to the navigation menu and stops once that meets the top of the viewport
  const handleButtonClicked = () => {
    scroller.scrollTo('header', {
      smooth: true,
    });
  }

  return (
    <section id="home" className="d-flex align-items-center">
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center">
            <p className="intro">
              Hello, I'm <span className="name">Darren Behan</span>.
              <br />
              I'm a full-stack web developer.
            </p>
          </Col>
          <Col md={12} className="d-flex justify-content-center">
            <Button
              type="button"
              className="btn btn-outline-primary d-flex align-items-center btn-home"
              onClick={handleButtonClicked}
            >
              <div>View my work</div>
              <i className="fa fa-arrow-right"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SectionHome;