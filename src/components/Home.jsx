import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Jumbotron, Row, Col, Image, Button, Containerl, Container} from 'react-bootstrap';
import './Home.css';
import ControlledCarousel from './Carousel';

export default class Home extends Component {

    render(){
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col sm={11}>
                        <Jumbotron>
                            <h1>Hello World!</h1>
                            <p>
                                My name is Norwell Seelan Sigwebela. I am a Full stack Software Engineer<br />
                            </p>
                            <Link to="/about">
                                <Button variant="primary">About</Button>
                            </Link>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <ControlledCarousel />
                </Row>
            </Container>
        );
    }
}