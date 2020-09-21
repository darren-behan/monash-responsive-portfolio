import React from 'react';
import './App.css';
import SectionHome from './components/SectionHome';
import Header from './components/Header';
import About from './components/SectionAbout';
import SkillsEducation from './components/SectionSkillsEducation';
import Career from './components/SectionCareer';
import PortfolioSection from './components/SectionPortfolio';
import { Row, Container } from 'react-bootstrap';
import { Element } from 'react-scroll';

function App() {
  return (
    <>
    <div className=".container-fluid">
      <SectionHome />
      <Header />
      <Element name="about"></Element>
      <About />
      <Element name="career"></Element>
      <Career />
      <Element name="skills"></Element>
      <SkillsEducation />
      <Element name="portfolio"></Element>
      <PortfolioSection />
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
