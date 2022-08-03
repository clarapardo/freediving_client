import './NavbarHero.css'
import { Navbar, Container, Nav, NavDropdown, Button, Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react'


const Navbar2 = () => {


    return (

        <Navbar collapseOnSelect expand="lg" className="navbarHero">

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='navbarHero-links'>
                    <Nav.Link href="#####" data-aos="fade-down">Gallery</Nav.Link>
                    <Nav.Link href="#####" data-aos="fade-down">Services</Nav.Link>
                    <Nav.Link href="#####" data-aos="fade-down">About me</Nav.Link>
                    <Nav.Link href="#####" data-aos="fade-down">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>

    )
}

export default Navbar2