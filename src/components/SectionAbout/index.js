import React, { useEffect } from 'react';
import './index.css';
import { Container, Row } from 'react-bootstrap';
import AOS  from 'aos';

function SectionAbout() {
  useEffect(() => {
    // Initializing AOS => https://michalsnik.github.io/aos/
    AOS.init({
      duration: 1200,
    });
  }, [])

  return (
    <section id="section-about">
      <Container className="d-flex justify-content-center">
        <Row>
          <div className="about flex">
            <h2 data-aos="fade-right" className="aos-init aos-animate">About</h2>
            <div
              className="header-bar aos-init aos-animate"
              data-aos="fade-left"
            ></div>
            <div className="d-flex flex-wrap">
              <div
                className="col-lg-4 col-md-6 order-lg-0 bio-text-left aos-init aos-animate"
                data-aos="fade-right"
              >
                <p>
                  Full Stack Web Developer utilising an extensive customer
                  service and finance background to build complex web apps
                  with a seamless user experience.
                </p>
              </div>
              <div
                className="col-lg-4 col-md-12 order-first order-md-first order-lg-1 profile-pic aos-init aos-animate"
                data-aos="fade-up"
              >
                <img src="../../assets/img/profile-pic.png" alt="profile"/>
                <div
                  className="d-flex justify-content-center col-md-12 button-sm"
                >
                  <button
                    type="button"
                    className="btn btn-outline-primary d-flex align-items-center button-md"
                  >
                    <a className="button-md" href="./assets/img/cv.pdf" target="_blank"
                      >Download CV</a
                    >
                  </button>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 order-lg-2 bio-text-right aos-init aos-animate"
                data-aos="fade-left"
              >
                <p>
                  Currently enrolled in Monash Universities Full Stack Web
                  Development Bootcamp where I’m developing technical skills
                  in CSS, JavaScript, React.js Node.js, API, MongoDB and
                  responsive web design.
                </p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default SectionAbout;