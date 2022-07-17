import './NavbarHero.css'
import { Navbar, Container, Nav, NavDropdown, Button, Modal } from 'react-bootstrap'


const Navbar2 = () => {

    return (

        <Navbar collapseOnSelect expand="lg" className="navbarHero">

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='navbarHero-links'>
                    <Nav.Link href="#####">Gallery</Nav.Link>
                    <Nav.Link href="#####">Services</Nav.Link>
                    <Nav.Link href="#####">About me</Nav.Link>
                    <Nav.Link href="#####">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>

    )
}

export default Navbar2