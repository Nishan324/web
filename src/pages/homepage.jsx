import React from 'react';
import Navbar1 from "./navbar";
import Footer from "./footer";
import Panel from "./panel";
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  function handleSeeMoreClick(category) {
    window.location.href = `/seemore/${category}`;
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
                <Button onClick={() => handleSeeMoreClick('apple')} variant="primary">See more</Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>Laptop</Card.Title>
                <Button onClick={() => handleSeeMoreClick('samsung')} variant="primary">See more</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>Watch</Card.Title>
                <Button onClick={() => handleSeeMoreClick('microsoft')} variant="primary">See more</Button>
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