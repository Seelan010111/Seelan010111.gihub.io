import React from  'react';
import {  Row, Col, Image, Container } from 'react-bootstrap';

export const Contact = () => (

    <Container>
    <Row>
      <Col xs={6} md={4}>
            <p>
                <a href="https://www.facebook.com/seelan.norwell">
                    <Image src="/assets/social1.jpg" />
                </a>
            </p>
      </Col>
      <Col xs={6} md={3}>
            <p>
                <a href="https://twitter.com/enal_eeS">
                    <Image src="/assets/social2.jpeg"  />
                </a>
            </p>
        <Image  />
      </Col>
      <Col xs={6} md={4}>
            <p>
                <a href="https://linkedin.com/in/norwell-sigwebela-a55376150">
                    <Image src="/assets/social3.png" />
                </a>
            </p>
      </Col>
    </Row>
  </Container>
)


