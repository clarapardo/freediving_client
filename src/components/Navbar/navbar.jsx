import './Navbar.css'
import { Navbar, Container, Nav, NavDropdown, Button, Modal } from 'react-bootstrap'


const BCTNavbar = () => {


    return (
        <div className="div-navbar">
            <Navbar collapseOnSelect expand="lg" className="BCTNavbar">

                <Navbar.Brand href="/">BCT</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='BCTNavbar-links'>
                        <Nav.Link href="#####">Gallery</Nav.Link>
                        <Nav.Link href="#####">Services</Nav.Link>
                        <Nav.Link href="#####">About me</Nav.Link>
                        <Nav.Link href="#####">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )

}

export default BCTNavbar