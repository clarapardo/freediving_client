import './Sponsors.css'
import { Row, Col, Container } from 'react-bootstrap'
// import NatGeo from './img/sponsors/NatGeo.png'


const Sponsors = () => {

    return (

        <div className="Sponsors">
            <Row>
                <Col>
                    <a href="https://www.nationalgeographic.com.es/">
                        <div className="eachSponsor-div">
                            <img src="./img/sponsors/NatGeo.png" alt="natGeo" />
                        </div>
                    </a>
                </Col>
                <Col>
                    <a href="https://es.aqualung.com/es">
                        <div className="eachSponsor-div">
                            <img src="./img/sponsors/Aqualung.png" alt="aqualung" />
                        </div>
                    </a>
                </Col>
                <Col>
                    <a href="https://www.isotecnic.it/en/">
                        <div className="eachSponsor-div">
                            <img src="./img/sponsors/Isotta.png" alt="isotta" />
                        </div>
                    </a>
                </Col>
                <Col>
                    <a href="https://alpinawatches.com/">
                        <div className="eachSponsor-div">
                            <img src="./img/sponsors/Alpina_Watches.png" alt="aplina watches" />
                        </div>
                    </a>
                </Col>
            </Row>


        </div>
    )
}

export default Sponsors