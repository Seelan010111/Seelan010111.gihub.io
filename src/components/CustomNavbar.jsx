import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, NavItem, Row, Col} from 'react-bootstrap';


export default class CustomNavbar extends Component {
    render(){
        return (
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
              <Link to="/">
                <img
                    alt=""
                    src={process.env.PUBLIC_URL + '/assets/logo.png'} 
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {' Norwell Seelan Sigwebela'}
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" variant="tabs" defaultActiveKey="/">
                    <Row>
                        <Col>
                            <Nav.Item>
                                <Link  eventKey="1" to="/"> Home </Link>
                            </Nav.Item>
                        </Col >
                        <Col>
                            <Nav.Item>
                                <Link eventKey="2" to="/about"> About </Link>
                            </Nav.Item>
                        </Col>
                        <Col>
                        <Nav.Item>
                            <Link  eventKey="3" to="/news"> News </Link>
                        </Nav.Item>
                        </Col>
                    </Row>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}