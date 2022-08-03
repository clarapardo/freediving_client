import './Sponsors3.css'
import { Row, Col, Container } from 'react-bootstrap'
// import NatGeo from './img/sponsors/NatGeo.png'


const Sponsors3 = () => {

    return (

        <div className="Sponsors3">
            <Row>
                <Col lg={3} md={6} xs={6}>
                    <div className="eachSponsor-div">
                        <a href="https://www.nationalgeographic.com.es/">
                            <img src="./img/sponsors/NatGeo.png" alt="natGeo" />
                        </a>
                    </div>
                </Col>
                <Col lg={3} md={6} xs={6}>
                    <div className="eachSponsor-div">
                        <a href="https://es.aqualung.com/es">
                            <img src="./img/sponsors/Aqualung.png" alt="aqualung" />
                        </a>
                    </div>
                </Col>
                <Col lg={3} md={6} xs={6}>
                    <div className="eachSponsor-div">
                        <a href="https://www.isotecnic.it/en/">
                            <img src="./img/sponsors/Isotta.png" alt="isotta" />
                        </a>
                    </div>
                </Col>
                <Col lg={3} md={6} xs={6}>
                    <div className="eachSponsor-div">
                        <a href="https://alpinawatches.com/">
                            <img src="./img/sponsors/Alpina_Watches.png" alt="aplina watches" />
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Sponsors3