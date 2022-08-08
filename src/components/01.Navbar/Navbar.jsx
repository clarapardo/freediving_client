import './Navbar.css'
import { Navbar, Container, Nav, NavDropdown, Button, Modal } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useLocation, NavLink } from 'react-router-dom'


const GlassyNavbar = () => {

    let location = useLocation()

    const [invisible, setInvisible] = useState(true)

    const controlNavbar = () => {

        // if (typeof window !== 'undefined') {
        (window.location.pathname !== '/') ? setInvisible(true) : setInvisible(false)
        // }
    }

    useEffect(() => {
        setInvisible(window.location.pathname === '/')
    }, [location])


    return (
        <div className={`div-navbar ${invisible && 'hidden'}`}>
            <Navbar collapseOnSelect expand="lg" className="BCTNavbar">

                <NavLink to="/">BCT</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='BCTNavbar-links'>
                        <NavLink to="/gallery">Gallery</NavLink>
                        <NavLink to="#####">Services</NavLink>
                        <NavLink to="#####">About me</NavLink>
                        <NavLink to="#####">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )

}

export default GlassyNavbar