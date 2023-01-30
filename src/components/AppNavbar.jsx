import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'


const AppNavbar = () => {
    return (
        <div>
            
            <Navbar className='pnav  fixed-top bg-info' expand="xl">
           
                <div className='nav d-flex justify-content-between fixed-top '>
                    <div className='nav1 text-danger'>E-commerce</div>
                  <div className='nav2'>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
                            <Nav.Link as={Link} to="/Login" className='text-black'>Login</Nav.Link>
                            <Nav.Link as={Link} to="/Purchases" className='text-black'>Purchases</Nav.Link>
                            <Nav.Link className='text-black'>DetailProduct</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                    </div></div>
            </Navbar>
        

        </div>
    );
};

export default AppNavbar;