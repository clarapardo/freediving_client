import './NavbarHero.css'
import { Navbar, Container, Nav, NavDropdown, Button, Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar2 = () => {


    return (

        <Navbar collapseOnSelect expand="lg" className="navbarHero">

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='navbarHero-links'>
                    <NavLink to="/gallery" data-aos="fade-down">Gallery</NavLink>
                    <NavLink to="#####" data-aos="fade-down">Services</NavLink>
                    <NavLink to="#####" data-aos="fade-down">About me</NavLink>
                    <NavLink to="#####" data-aos="fade-down">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>

        </Navbar>

    )
}

export default Navbar2