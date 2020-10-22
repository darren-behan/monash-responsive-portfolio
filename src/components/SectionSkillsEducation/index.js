import React, { useEffect } from 'react';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';
import AOS  from 'aos';

function SectionSkillsEducation() {
  useEffect(() => {
    // Initializing AOS => https://michalsnik.github.io/aos/
    AOS.init({
      duration: 1200,
    });
  }, [])

  return (
    <section id="skills">
      <Container className="d-flex justify-content-center">
        <Row>
          <div className="col-md-6 flex">
            <h2 data-aos="fade-right">Skills</h2>
            <div className="header-bar" data-aos="fade-left"></div>
              <Row className="featurette"
              data-aos="fade-right"
              >
                <Col lg={4} style={{ marginBottom: "20px" }}>
                  <div class="featurette-icon">
                    <i class="fab fa-uikit"></i>
                  </div>
                  <h4>UI</h4>
                  <p>React, Javascript, jQuery, AJAX, Bootstrap, CSS3, HTML5</p>
                </Col>
                <Col lg={4} style={{ marginBottom: "20px" }}>
                  <div class="featurette-icon">
                    <i class="fas fa-server"></i>
                  </div>
                  <h4>Server</h4>
                  <p>Node &amp; Express</p>
                </Col>
                <Col lg={4} style={{ marginBottom: "20px" }}>
                  <div class="featurette-icon">
                    <i class="fas fa-database"></i>
                  </div>
                  <h4>Databases</h4>
                  <p>MongoDB &amp; MySQL</p>
                </Col>
              </Row>
          </div>
          <div className="col-md-6 flex">
            <h2 data-aos="fade-left">Education</h2>
            <div className="header-bar" data-aos="fade-right"></div>
            <div
              className="col-md col-sm"
              id="education-column"
              data-aos="fade-left"
            >
              <div className="course">
                <h4>Full-stack Web Development Bootcamp</h4>
                <h5>Monash University - 2020</h5>
              </div>
              <div className="course">
                <h4>Bachelor of Arts, Honors Degree in Accounting</h4>
                <h5>Institute of Technology, Carlow - 2011</h5>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default SectionSkillsEducation;