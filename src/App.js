import React from 'react';
import './App.css';
import SectionHome from './components/SectionHome';
import Header from './components/Header';
import { Col, Row, Container } from 'react-bootstrap';
import { Element } from 'react-scroll';

function App() {
  return (
    <>
    <div className=".container-fluid">
      <SectionHome />
      <Header />

      <Element
      name="about"
      >
        <section id="section-about">
          <div className="container d-flex justify-content-center">
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
                    <img src="./assets/img/profile-pic.png" alt="profile-pic"/>
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
          </div>
        </section>
      </Element>

      <Element
      name="skills"
      >
        <section id="section-skills">
          <div className="container d-flex justify-content-center">
            <Row>
              <div className="col-md-6 flex">
                <h2 data-aos="fade-right">Skills</h2>
                <div className="header-bar" data-aos="fade-left"></div>
                  <div className="graph-cont" data-aos="fade-right">
                  <div className="bar bar1">
                    <span><i className="fab fa-html5"></i></span>
                    <span>90%</span>
                  </div>
                  <div className="bar bar2">
                    <span><i className="fab fa-css3"></i></span>
                    <span>90%</span>
                  </div>
                  <div className="bar bar3">
                    <span><i className="fab fa-js"></i></span>
                    <span>70%</span>
                  </div>
                  <div className="bar bar4">
                    <span><i className="fab fa-node-js"></i></span>
                    <span>70%</span>
                  </div>
                  <div className="bar bar5">
                    <span><i className="fab fa-react"></i></span>
                    <span>60%</span>
                  </div>
                  <div className="bar bar6">
                    <span><i className="fab fa-github"></i></span>
                    <span>80%</span>
                  </div>
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
          </div>
        </section>
      </Element>

      <Element
      name="career"
      >
        <section id="section-career">
          <div className="container d-flex justify-content-center">
            <Row>
              <div className="career col-md-12 flex">
                <h2 data-aos="fade-right">Career</h2>
                <div className="header-bar" data-aos="fade-left"></div>
                <div className="career-line z-depth-1">
                  <div className="col-md-12">
                    <ul className="timeline">
                      <li data-aos="fade-down-left">
                        <div className="direction-r">
                          <div className="flag-wrapper justify-content-sm-center">
                            <span className="hexa"></span>
                            <button
                              className="btn btn-outline-primary d-flex align-items-center button-md"
                              type="button"
                              data-toggle="collapse"
                              data-target="#multiCollapseExample1"
                              aria-expanded="false"
                              aria-controls="multiCollapseExample1"
                            >
                              NetSuite ERP Support Coordinator
                            </button>
                            <span className="time-wrapper"
                              ><span className="time"
                                >March 2019 - Present</span
                              ></span
                            >
                          </div>
                          <div
                            className="collapse multi-collapse"
                            id="multiCollapseExample1"
                          >
                            <div className="desc">
                              <ul>
                                <li><strong>Employer:</strong> REA Group</li>
                                <li>
                                  Developing Javascript scripts along with test
                                  scripts using Jasmine to deliver business
                                  requirements
                                </li>
                                <li>
                                  Translating business requirements into clear,
                                  concise, testable and accurate user stories &
                                  process flows
                                </li>
                                <li>
                                  Ensuring that requirements are understood
                                  through story kickoffs and constant
                                  communication using a variety of analysis and
                                  documentation techniques including the
                                  application of visualization techniques to
                                  underpin a joint understanding of processes and
                                  data
                                </li>
                                <li>
                                  Coordinate Netsuite upgrades including,
                                  development and execution of test cases to
                                  ensure upgrades occur without any business
                                  disruption
                                </li>
                                <li>
                                  Maintain/Update Netsuite/Adaptive account and
                                  organization structures, workflows and processes
                                </li>
                                <li>
                                  Supporting internal stakeholders as the main
                                  contact for all requests and enhancements for
                                  the companies ERP system (NetSuite)
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li data-aos="fade-down-right">
                        <div className="direction-l">
                          <div className="flag-wrapper justify-content-sm-center">
                            <span className="hexa"></span>
                            <button
                              className="btn btn-outline-primary d-flex align-items-center button-md"
                              type="button"
                              data-toggle="collapse"
                              data-target="#multiCollapseExample2"
                              aria-expanded="false"
                              aria-controls="multiCollapseExample2"
                            >
                              Accounts Payable Officer
                            </button>
                            <span className="time-wrapper"
                              ><span className="time"
                                >August 2018 - March 2019</span
                              ></span
                            >
                          </div>
                          <div
                            className="collapse multi-collapse"
                            id="multiCollapseExample2"
                          >
                            <div className="desc">
                              <ul>
                                <li><strong>Employer:</strong> REA Group</li>
                                <li>
                                  Process all new & existing invoices requiring
                                  payment by directing these to the relevant
                                  requisitioners
                                </li>
                                <li>
                                  Performing weekly domestic and international pay
                                  runs for an international organization
                                </li>
                                <li>
                                  Generating data for the processing of monthly
                                  accruals throughout the organization
                                </li>
                                <li>
                                  Daily receipting tasks of all payments received
                                </li>
                                <li>
                                  General support for the accounts receivables
                                  department
                                </li>
                                <li>
                                  Supporting the various vendors and internal
                                  stakeholders on a daily basis
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li data-aos="fade-down-left">
                        <div className="direction-r">
                          <div className="flag-wrapper justify-content-sm-center">
                            <span className="hexa"></span>
                            <button
                              className="btn btn-outline-primary d-flex align-items-center button-md"
                              type="button"
                              data-toggle="collapse"
                              data-target="#multiCollapseExample3"
                              aria-expanded="false"
                              aria-controls="multiCollapseExample3"
                            >
                              Customer Credit Controller
                            </button>
                            <span className="time-wrapper"
                              ><span className="time"
                                >August 2017 - August 2018</span
                              ></span
                            >
                          </div>
                          <div
                            className="collapse multi-collapse"
                            id="multiCollapseExample3"
                          >
                            <div className="desc">
                              <ul>
                                <li><strong>Employer:</strong> REA Group</li>
                                <li>Overseen a ledger of 3,000+ accounts</li>
                                <li>
                                  Timely and effective collection of all debts and
                                  customers payments
                                </li>
                                <li>Negotiating payment plans</li>
                                <li>
                                  Resolving queries both internally and externally
                                  around outstanding invoices
                                </li>
                                <li>Posting and allocating daily receipts</li>
                                <li>
                                  Checking customer’s credit ratings with our
                                  external partners
                                </li>
                                <li>
                                  Process Improvement by delivering a new CRM
                                  (Zendesk) to increase our level of service with
                                  our customers and provide reporting on customer
                                  behaviours
                                </li>
                                <li>
                                  Weekly Project catch ups and reporting to ensure
                                  implemented changes are successfully impacting
                                  our customers and internal stakeholders
                                </li>
                                <li>
                                  Communication with internal & external
                                  stakeholders for process changes, requirements
                                  for further development and any assistance
                                  required within the credit process
                                </li>
                                <li>
                                  Process and user journey mapping to enable
                                  further discovery for process improvement and
                                  automation
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li data-aos="fade-down-right">
                        <div className="direction-l">
                          <div className="flag-wrapper justify-content-sm-center">
                            <span className="hexa"></span>
                            <button
                              className="btn btn-outline-primary d-flex align-items-center button-md"
                              type="button"
                              data-toggle="collapse"
                              data-target="#multiCollapseExample4"
                              aria-expanded="false"
                              aria-controls="multiCollapseExample4"
                            >
                              Customer Experience Consultant
                            </button>
                            <span className="time-wrapper"
                              ><span className="time"
                                >August 2016 - August 2017</span
                              ></span
                            >
                          </div>
                          <div
                            className="collapse multi-collapse"
                            id="multiCollapseExample4"
                          >
                            <div className="desc">
                              <ul>
                                <li><strong>Employer:</strong> REA Group</li>
                                <li>
                                  Assisting in the development of current
                                  processes like implementing Zendesk and a
                                  Salesforce CRM
                                </li>
                                <li>Process and User Journey Mapping</li>
                                <li>
                                  Internal stakeholder interviews translated into
                                  data and further workshopping
                                </li>
                                <li>
                                  Communicate findings to wider team and
                                  management
                                </li>
                                <li>
                                  Knowledge Sharing across Digital Marketing,
                                  Products, Programming, Accounts
                                </li>
                                <li>Maintaining 48 hour SLA's</li>
                                <li>
                                  Delivering high levels of customer service to
                                  internal and external stakeholders
                                </li>
                                <li>
                                  Day-to-day tasks such as Resourcing & assisting
                                  all queues
                                </li>
                                <li>Inbound calls, web chat and email replies</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </section>
      </Element>
      
      <Element
      name="portfolio"
      >
        <section id="section-portfolio">
          <Container>
            <Row>
              <div className="portfolio col-md-12 flex">
                <h2 data-aos="fade-right">Portfolio</h2>
                <div className="header-bar" data-aos="fade-left"></div>
                <Row id="portfolio-row">
                </Row>
              </div>
            </Row>
          </Container>
        </section>
      </Element>

      <Element
      name="contact"
      >
        <section id="section-contact">
          <Container>
            <Row>
              <div className="portfolio col-md-12 flex">
                <h2 data-aos="fade-right">Contact Me</h2>
                <div className="header-bar" data-aos="fade-left"></div>
                <form id="contact-form">
                  <Row>
                    <div className="col-md-12">
                      <input type="hidden" name="contact_number" />
                      <input name="user_name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                      <input name="user_email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                      <input name="message"
                        type="text"
                        id="message-form-control"
                        className="form-control"
                        placeholder="Message"
                      />
                      <button id="button-submit" type="submit" value="submit" className="btn btn-primary">
                        Send Email
                      </button>
                    </div>
                  </Row>
                </form>
              </div>
            </Row>
          </Container>
        </section>
      </Element>
    </div>
    </>
  );
}

export default App;
