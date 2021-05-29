import React from 'react';
import {
  Container, Row, Col, Button
} from 'reactstrap';

export default function Header() {
  return (
  <div className="hero-image">
    <Container>
      <Row>
        <Col>
          <div className="hero-text">
            <h2>Create | Code | Capture</h2>
            <p>I specialize in all things visual, focusing my efforts on web development, graphic design, and videography.</p>
            <Button color='secondary' href="mailto:robertncole1@gmail.com">Email Me</Button>
          </div>
        </Col>
        <Col>
          <img className="mac-image" src="https://robcolecreative.com/wp-content/uploads/2020/01/macbook-mockups2-980x551.png"/>
        </Col>
      </Row>
    </Container>
  </div>
  );
}
