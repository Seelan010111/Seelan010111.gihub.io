import React from 'react';
import {Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import background from '../assets/laptop.jpg';

const Styles = styled.div`
.jumbo {
        background: url(${background}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height:900px;
        position: relative;
        z-index: -2;
}
    .overlay {
        background-color:  #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

`;


export const Jumbotron = () =>  (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1><font size="20" face="Arial"> <strong> Hello World ! </strong></font></h1>
                <p> <font size="5" face="Apple Chancery"> I am a Full stack Mobile Engineer , Looking for my next Adventure!</font></p>
            </Container>
        </Jumbo>
    </Styles>


)
