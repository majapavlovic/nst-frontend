import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/Navbar.css';


const AppNavbar: React.FC = () => {
    return (
        <Navbar className="navbar" sticky="top">
            <Container>
                <Navbar.Brand href="/">University Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to="/members">
                            <Nav.Link>Members</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/departments">
                            <Nav.Link>Departments</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/subjects">
                            <Nav.Link>Subjects</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
