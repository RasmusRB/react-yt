import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    text-decoration: none;
    margin-left: 1%;
    margin-right: 1%;
    &:hover {
    color: white;
    }
  }
`;

const NavigationBar = () => {
    return (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand>Veteranportalen</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/"><strong>Home</strong></Link>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/about">About</Link>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/contact">Contact</Link>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/events">Events</Link>
                            </Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles >
    )
}

export default NavigationBar;