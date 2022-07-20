import './Services-preview.css'
import { Row, Col, Container } from 'react-bootstrap'
import { useState } from 'react'
import ServicesCarousel from './ServicesCarousel/ServicesCarousel'



const ServicesPreview = () => {

    return (
        <div className="ServicesPreview">
            <Row>
                <Col>
                    <Container>
                        <h2>My services.</h2>
                        <hr />
                        <button> contact me </button>
                    </Container>
                </Col>

                <Col>
                    <ServicesCarousel />
                </Col>
            </Row>
        </div>
    )
}



export default ServicesPreview