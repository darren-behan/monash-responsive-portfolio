import React from 'react';
import './App.css';
import { Col, Row, Container } from "./components/Grid";

function App() {
  return (
    <>
    <div class=".container-fluid">
      <section id="home" class="d-flex align-items-center">
        <Container>
          <Row>
            <div class="d-flex justify-content-center col-md-12">
              <p class="intro">
                Hello, I'm <span class="name">Darren Behan</span>.
                <br />
                I'm a full-stack web developer.
              </p>
            </div>
            <div class="d-flex justify-content-center col-md-12">
              <button
                type="button"
                class="btn btn-outline-primary d-flex align-items-center btn-home"
              >
                <div>View my work</div>
                <i class="fa fa-arrow-right"></i>
              </button>
            </div>
          </Row>
        </Container>
      </section>

      <header class="sticky-top" id="header">
        <nav
          id="navbar"
          class="navbar navbar-expand-lg navbar-expand-md navbar-light"
        >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-nav"
            aria-controls="navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"
              ><i class="fas fa-bars" style={{ color: "#fff", fontSize: "28px" }}></i
            ></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-nav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.linkedin.com/in/darren-behan/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="https://github.com/darren-behan" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#section-contact"
                  id="nav-icon-contact"
                >
                  <i class="fas fa-envelope"></i>
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.instagram.com/darren_behan/"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <ul class="nav nav-pills navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#section-about" id="nav-about">
                  About
                </a>
              </li>
              <li class="nav-item" id="nav-centre">
                <a class="nav-link" href="#section-skills" id="nav-skills">
                  Skills
                </a>
              </li>
              <li class="nav-item" id="nav-centre">
                <a class="nav-link" href="#section-skills" id="nav-education">
                  Education
                </a>
              </li>
              <li class="nav-item" id="nav-centre">
                <a class="nav-link" href="#section-career" id="nav-career">
                  Career
                </a>
              </li>
              <li class="nav-item" id="nav-centre">
                <a
                  class="nav-link"
                  href="#section-portfolio"
                  id="nav-portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#section-contact" id="nav-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section id="section-about">
        <div class="container d-flex justify-content-center">
          <Row>
            <div class="about flex">
              <h2 data-aos="fade-right" class="aos-init aos-animate">About</h2>
              <div
                class="header-bar aos-init aos-animate"
                data-aos="fade-left"
              ></div>
              <div class="d-flex flex-wrap">
                <div
                  class="col-lg-4 col-md-6 order-lg-0 bio-text-left aos-init aos-animate"
                  data-aos="fade-right"
                >
                  <p>
                    Full Stack Web Developer utilising an extensive customer
                    service and finance background to build complex web apps
                    with a seamless user experience.
                  </p>
                </div>
                <div
                  class="col-lg-4 col-md-12 order-first order-md-first order-lg-1 profile-pic aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <img src="./assets/img/profile-pic.png" alt="profile-pic"/>
                  <div
                    class="d-flex justify-content-center col-md-12 button-sm"
                  >
                    <button
                      type="button"
                      class="btn btn-outline-primary d-flex align-items-center button-md"
                    >
                      <a class="button-md" href="./assets/img/cv.pdf" target="_blank"
                        >Download CV</a
                      >
                    </button>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-6 order-lg-2 bio-text-right aos-init aos-animate"
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

      <section id="section-skills">
        <div class="container d-flex justify-content-center">
          <Row>
            <div class="col-md-6 flex">
              <h2 data-aos="fade-right">Skills</h2>
              <div class="header-bar" data-aos="fade-left"></div>
                <div class="graph-cont" data-aos="fade-right">
                <div class="bar bar1">
                  <span><i class="fab fa-html5"></i></span>
                  <span>90%</span>
                </div>
                <div class="bar bar2">
                  <span><i class="fab fa-css3"></i></span>
                  <span>90%</span>
                </div>
                <div class="bar bar3">
                  <span><i class="fab fa-js"></i></span>
                  <span>70%</span>
                </div>
                <div class="bar bar4">
                  <span><i class="fab fa-node-js"></i></span>
                  <span>70%</span>
                </div>
                <div class="bar bar5">
                  <span><i class="fab fa-react"></i></span>
                  <span>60%</span>
                </div>
                <div class="bar bar6">
                  <span><i class="fab fa-github"></i></span>
                  <span>80%</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 flex">
              <h2 data-aos="fade-left">Education</h2>
              <div class="header-bar" data-aos="fade-right"></div>
              <div
                class="col-md col-sm"
                id="education-column"
                data-aos="fade-left"
              >
                <div class="course">
                  <h4>Full-stack Web Development Bootcamp</h4>
                  <h5>Monash University - 2020</h5>
                </div>
                <div class="course">
                  <h4>Bachelor of Arts, Honors Degree in Accounting</h4>
                  <h5>Institute of Technology, Carlow - 2011</h5>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </section>

      <section id="section-career">
        <div class="container d-flex justify-content-center">
          <Row>
            <div class="career col-md-12 flex">
              <h2 data-aos="fade-right">Career</h2>
              <div class="header-bar" data-aos="fade-left"></div>
              <div class="career-line z-depth-1">
                <div class="col-md-12">
                  <ul class="timeline">
                    <li data-aos="fade-down-left">
                      <div class="direction-r">
                        <div class="flag-wrapper justify-content-sm-center">
                          <span class="hexa"></span>
                          <button
                            class="btn btn-outline-primary d-flex align-items-center button-md"
                            type="button"
                            data-toggle="collapse"
                            data-target="#multiCollapseExample1"
                            aria-expanded="false"
                            aria-controls="multiCollapseExample1"
                          >
                            NetSuite ERP Support Coordinator
                          </button>
                          <span class="time-wrapper"
                            ><span class="time"
                              >March 2019 - Present</span
                            ></span
                          >
                        </div>
                        <div
                          class="collapse multi-collapse"
                          id="multiCollapseExample1"
                        >
                          <div class="desc">
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
                      <div class="direction-l">
                        <div class="flag-wrapper justify-content-sm-center">
                          <span class="hexa"></span>
                          <button
                            class="btn btn-outline-primary d-flex align-items-center button-md"
                            type="button"
                            data-toggle="collapse"
                            data-target="#multiCollapseExample2"
                            aria-expanded="false"
                            aria-controls="multiCollapseExample2"
                          >
                            Accounts Payable Officer
                          </button>
                          <span class="time-wrapper"
                            ><span class="time"
                              >August 2018 - March 2019</span
                            ></span
                          >
                        </div>
                        <div
                          class="collapse multi-collapse"
                          id="multiCollapseExample2"
                        >
                          <div class="desc">
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
                      <div class="direction-r">
                        <div class="flag-wrapper justify-content-sm-center">
                          <span class="hexa"></span>
                          <button
                            class="btn btn-outline-primary d-flex align-items-center button-md"
                            type="button"
                            data-toggle="collapse"
                            data-target="#multiCollapseExample3"
                            aria-expanded="false"
                            aria-controls="multiCollapseExample3"
                          >
                            Customer Credit Controller
                          </button>
                          <span class="time-wrapper"
                            ><span class="time"
                              >August 2017 - August 2018</span
                            ></span
                          >
                        </div>
                        <div
                          class="collapse multi-collapse"
                          id="multiCollapseExample3"
                        >
                          <div class="desc">
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
                      <div class="direction-l">
                        <div class="flag-wrapper justify-content-sm-center">
                          <span class="hexa"></span>
                          <button
                            class="btn btn-outline-primary d-flex align-items-center button-md"
                            type="button"
                            data-toggle="collapse"
                            data-target="#multiCollapseExample4"
                            aria-expanded="false"
                            aria-controls="multiCollapseExample4"
                          >
                            Customer Experience Consultant
                          </button>
                          <span class="time-wrapper"
                            ><span class="time"
                              >August 2016 - August 2017</span
                            ></span
                          >
                        </div>
                        <div
                          class="collapse multi-collapse"
                          id="multiCollapseExample4"
                        >
                          <div class="desc">
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

      <section id="section-portfolio">
        <Container>
          <Row>
            <div class="portfolio col-md-12 flex">
              <h2 data-aos="fade-right">Portfolio</h2>
              <div class="header-bar" data-aos="fade-left"></div>
              <Row id="portfolio-row">
              </Row>
            </div>
          </Row>
        </Container>
      </section>

      <section id="section-contact">
        <Container>
          <Row>
            <div class="portfolio col-md-12 flex">
              <h2 data-aos="fade-right">Contact Me</h2>
              <div class="header-bar" data-aos="fade-left"></div>
              <form id="contact-form">
                <Row>
                  <div class="col-md-12">
                    <input type="hidden" name="contact_number" />
                    <input name="user_name"
                      type="text"
                      class="form-control"
                      placeholder="Name"
                    />
                    <input name="user_email"
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                    <input name="message"
                      type="text"
                      id="message-form-control"
                      class="form-control"
                      placeholder="Message"
                    />
                    <button id="button-submit" type="submit" value="submit" class="btn btn-primary">
                      Send Email
                    </button>
                  </div>
                </Row>
              </form>
            </div>
          </Row>
        </Container>
      </section>
    </div>
    </>
  );
}

export default App;
