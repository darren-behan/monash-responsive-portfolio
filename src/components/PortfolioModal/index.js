import React, { useContext } from 'react';
import './index.css';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import DataAreaContext from '../../utils/DataAreaContext';

function PortfolioModal(props) {
  const { portfolioObject } = useContext(DataAreaContext);
  console.log(portfolioObject);

  return (
    <Modal {...props} 
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          { portfolioObject.name }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={6}>
              <img src={ portfolioObject.image } className="modal-img-responsive" alt="portfolio"/>
            </Col>
            <Col xs={12} md={12} lg={6}>
              <div style={{ textAlign: "center" }}>
                <i class={ portfolioObject.html }></i>
                <i class={ portfolioObject.css }></i>
                <i class={ portfolioObject.js }></i>
                <i class={ portfolioObject.node }></i>
                <i class={ portfolioObject.react }></i>
                <br/>
                <a href={ portfolioObject.github } target="_blank" rel="noopener noreferrer" className="project-fa">
                  <i className="fab fa-github"></i>
                </a>
                <br/>
                <a href={ portfolioObject.app } target="_blank" rel="noopener noreferrer" className="project-fa">
                  View App here
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PortfolioModal