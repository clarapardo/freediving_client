import './Services-preview.css'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { useState } from 'react'
import ServicesCarousel from './ServicesCarousel/ServicesCarousel'



const ServicesPreview = () => {

    return (
        <div className="ServicesPreview">
            <Container className="servicesPreview-container">
                <Row className="services-carousel-preview">
                    <Col className="text-column">
                        <Container>
                            <h2>Services.</h2>
                            <hr />
                            <p style={{ color: 'white', textAlign: 'justify' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique dignissimos debitis voluptates, minus consectetur rem quam iure sit voluptas optio dolor ipsa facilis autem necessitatibus inventore natus, voluptatem voluptate! Dolorem.</p>
                            <Button className="services-preview-btn" variant="info"> contact me </Button>
                        </Container>
                    </Col>

                    <Col className="carosel-column">
                        <ServicesCarousel />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}



export default ServicesPreview