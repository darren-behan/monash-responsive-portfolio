import React from 'react';
import { Row, Container } from 'react-bootstrap';
import './index.css';

function Contact() {
  return (
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
  )
}

export default Contact;
