import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Footer from "./footer";
import Navbar1 from "./navbar";
import Panel from "./panel";

function App() {

  function handleMobileSeeMore() {
    window.location.replace('/seemore')
  }

  function handleLaptopSeeMore() {
    window.location.replace('/laptop')
  }

  return (
    <div>
      <header>
        <Navbar1 />
        <Panel />
      </header>

      <Container className="p-3">
        {/* Your hero section content */}
      </Container>

      <Container className="p-3">
        <p className="lead">You are on Gadaget Bax. You can shop on Gadaget Bax with fast delivery. <a href="#">Click here to go to gadagetbax.np</a></p>
      </Container>

      <Container className="p-3">
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>Mobile</Card.Title>
                <Button onClick={handleMobileSeeMore} variant="primary">See more</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>Laptop</Card.Title>
                <Button onClick={handleLaptopSeeMore} variant="primary">See more</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>Watch</Card.Title>
                <Button variant="primary">See more</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Repeat the pattern for other boxes */}
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default App;