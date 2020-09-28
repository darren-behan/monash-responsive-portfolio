import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
    
function NoMatch() {
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1>Oooops, Page Not Found <span role="img" aria-label="emoji">🧐</span></h1>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default NoMatch;