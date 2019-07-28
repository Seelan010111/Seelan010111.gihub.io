import React from 'react';
import {Container} from 'react-bootstrap';
import './Home.css';
import ControlledCarousel from './Carousel';
import {Jumbotron} from './Jumbotron';



export const Home = () => (
    <React.Fragment>
          <Jumbotron />
    <Container>
    <ControlledCarousel />
    </Container>
    </React.Fragment>

)