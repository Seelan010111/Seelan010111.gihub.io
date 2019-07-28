import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar,Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    a, .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;
        &:hover {
             color: white ;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                <img
                    src="/assets/seelan.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Brand href="/">Seelan Norwell Sigwebela</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" defaultActiveKey="/">
                    <Nav.Item>
                        <Row>
                            <Col>
                                <Nav.Item>
                                    <Link  eventKey="1" to="/"> <strong>Home</strong> </Link>
                                </Nav.Item>
                            </Col >
                            <Col>
                                <Nav.Item>
                                    <Link eventKey="2" to="/about"> <strong> Career </strong> </Link>
                                </Nav.Item>
                            </Col>
                            <Col>
                                <Nav.Item>
                                    <Link  eventKey="3" to="/contact"> <strong> Contact </strong> </Link>
                                </Nav.Item>
                            </Col>
                         </Row>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>



)