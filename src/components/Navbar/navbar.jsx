import './Navbar.css'
import { Navbar, Container, Nav, NavDropdown, Button, Modal } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils'

const BCTNavbar = () => {

    const [invisible, setInvisible] = useState(true)

    const controlNavbar = () => {

        if (typeof window !== 'undefined') {

            (window.scrollY < (window.innerHeight + 500)) ? setInvisible(true) : setInvisible(false)

        }
    }

    useEffect(() => {

        if (typeof window !== 'undefined') {

            window.addEventListener('scroll', controlNavbar)

            return () => {
                window.removeEventListener('scroll', controlNavbar)
            }
        }

    }, [window.scrollY])

    return (
        <div className={`div-navbar ${invisible && 'hidden'}`}>
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