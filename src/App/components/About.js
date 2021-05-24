import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function About() {
  return (
  <>
    <Container>
      <Row>
        <Col>
          <div>
            <h2>Hello! I’m Rob.</h2>
            <p>My skillset is made for all things visual. While I tend to favor graphic and web design, my first love is video production. My background consists of a Bachelor’s Degree in Broadcast Production and Master’s Degree in Web Design and Online Communication. I am highly trained in producing visual content in multiple forms for many different clients. Let me help you elevate your marketing!</p>
          </div></Col>
        <Col className="bio-img">
          <img className="bio-pic" src="https://robcolecreative.com/wp-content/uploads/2021/05/bio-square.jpg"/>
        </Col>
      </Row>
    </Container>
  </>
  );
}
