import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'


const AppNavbar = () => {
    return (
        <div>
            
            <Navbar className='pnav  fixed-top bg-info' expand="xl">
           
                <div className='nav d-flex justify-content-between fixed-top '>
                <Navbar.Brand as={Link} to='/' className='nav1 text-danger' >E-commerce</Navbar.Brand>
                  <div className='nav2'>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/Login" className='l1 text-black'><i class="fa-solid fa-user fa-3x"></i></Nav.Link>
                            <Nav.Link as={Link} to="/Purchases" className='l1 text-black'><i class="fa-solid fa-box-archive fa-3x"></i></Nav.Link>
                            <Nav.Link className='l1 text-black'><i class="fa-solid fa-cart-shopping fa-3x"></i></Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                    </div></div>
            </Navbar>
        

        </div>
    );
};

export default AppNavbar;