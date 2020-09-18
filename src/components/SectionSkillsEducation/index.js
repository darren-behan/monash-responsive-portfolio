import React, { useState, useEffect } from 'react';
import './index.css';
import { Container, Row } from 'react-bootstrap';
import AOS  from 'aos';
import VizSensor from 'react-visibility-sensor';

function SectionSkillsEducation() {
  const [barViz, setState] = useState(false);
  useEffect(() => {
    // Initializing AOS => https://michalsnik.github.io/aos/
    AOS.init({
      duration: 1200,
    });

    // This is to animate the skills graph on scroll and when the graph is within the viewport, rather than page load
    // Pass an element into this function to calculate where in the viewport it is position
  //   const isInViewport = (el) => {
  //     const rect = el.getBoundingClientRect();
  //     return (
  //       rect.top >= 0 &&
  //       rect.left >= 0 &&
  //       rect.bottom <=
  //         (window.innerHeight || document.documentElement.clientHeight) &&
  //       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //     );
  //   }
  //   // Retrieving div with a class of "bar"
    // const bar = document.querySelector(".bar");
  //   // Adding the event scroll to the document
  //   // Passing the bar element into the isInViewport function
  //   // If true, adding a class to the element
  //   document.addEventListener("scroll", function () {
  //     if (isInViewport(bar)) {
  //       bar.classList.add("animate");
  //     }
  //   });
  }, [])

  return (
    <section id="section-skills">
      <Container className="d-flex justify-content-center">
        <Row>
          <div className="col-md-6 flex">
            <h2 data-aos="fade-right">Skills</h2>
            <div className="header-bar" data-aos="fade-left"></div>
              <div className="graph-cont" data-aos="fade-right">
              <VizSensor>
                {({isVisible}) =>
                  <div className={`bar bar1 ${isVisible ? "animate" : ""}`}>
                    <span><i className="fab fa-html5"></i></span>
                    <span>90%</span>
                  </div>
                }
              </VizSensor>
              <VizSensor>
                {({isVisible}) =>
                  <div className={`bar bar2 ${isVisible ? "animate" : ""}`}>
                    <span><i className="fab fa-css3"></i></span>
                    <span>90%</span>
                  </div>
                }
              </VizSensor>
              <VizSensor>
                {({isVisible}) =>
                  <div className={`bar bar3 ${isVisible ? "animate" : ""}`}>
                    <span><i className="fab fa-js"></i></span>
                    <span>70%</span>
                  </div>
                }
              </VizSensor>
              <VizSensor>
                {({isVisible}) =>
                  <div className={`bar bar4 ${isVisible ? "animate" : ""}`}>
                    <span><i className="fab fa-node-js"></i></span>
                    <span>70%</span>
                  </div>
                }
              </VizSensor>
              <VizSensor>
                {({isVisible}) =>
                  <div className={`bar bar5 ${isVisible ? "animate" : ""}`}>
                    <span><i className="fab fa-react"></i></span>
                    <span>60%</span>
                  </div>
                }
              </VizSensor>
              <VizSensor>
                {({isVisible}) =>
                  <div className={`bar bar6 ${isVisible ? "animate" : ""}`}>
                    <span><i className="fab fa-github"></i></span>
                    <span>80%</span>
                  </div>
                }
              </VizSensor>
            </div>
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