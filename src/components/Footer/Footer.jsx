import './Footer.css'

import { Row, Col, Container } from 'react-bootstrap'

import Subfooter from './Subfooter/Subfooter'
import ContactMeForm from './ContactMe-Form/ContactMe-Form'


const Footer = () => {

    return (
        <div className='footer-div'>
            <Container>

                <Row>
                    <Col md={3} className="left-column">
                        <ul>
                            <li><a href='#####'>Gallery</a></li>
                            <li><a href='#####'>Services</a></li>
                            <li><a href='#####'>About me</a></li>
                        </ul>
                        <p>My contacts!</p>
                        <p>Tenerife, Spain</p>
                        <p>+34 111 111 111</p>
                        <p>bct@bct.com</p>
                    </Col>

                    <Col md={{ span: 4, offset: 1 }} className="center-column">
                        <img src="/img/logo.png" />
                        <h3>BCT</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div className="social-media-links">
                            <a href='#####'>
                                <div className="social-media-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <circle cx="256" cy="255.833" r="80"></circle>
                                        <path d="M177.805 176.887c21.154-21.154 49.28-32.93 79.195-32.93s58.04 11.838 79.195 32.992c13.422 13.42 23.01 29.55 28.232 47.55H448.5v-113c0-26.51-20.49-47-47-47h-288c-26.51 0-49 20.49-49 47v113h85.072c5.222-18 14.81-34.19 28.233-47.614zM416.5 147.7c0 7.07-5.73 12.8-12.8 12.8h-38.4c-7.07 0-12.8-5.73-12.8-12.8v-38.4c0-7.07 5.73-12.8 12.8-12.8h38.4c7.07 0 12.8 5.73 12.8 12.8v38.4zm-80.305 187.58c-21.154 21.153-49.28 32.678-79.195 32.678s-58.04-11.462-79.195-32.616c-21.115-21.115-32.76-49.842-32.803-78.842H64.5v143c0 26.51 22.49 49 49 49h288c26.51 0 47-22.49 47-49v-143h-79.502c-.043 29-11.687 57.664-32.803 78.78z"></path></svg>
                                </div>
                            </a>
                            <a href='#####'>
                                <div className="social-media-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64z"></path></svg>
                                </div>
                            </a>
                        </div>
                    </Col>

                    <Col md={{ span: 3, offset: 1 }} className="right-column">
                        <ContactMeForm />
                    </Col>

                </Row>

                <Subfooter />
            </Container>
        </div>
    )
}

export default Footer