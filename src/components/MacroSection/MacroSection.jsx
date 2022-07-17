import './MacroSection.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MacroSection = () => {

    return (
        <Container className="MacroSection">
            <div className="title">
                <h2>Macro photography.</h2>
                <div className="line"></div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates, laboriosam veritatis atque reprehenderit aut dignissimos, ipsum, ex neque alias ad velit laudantium nesciunt a. Nemo nisi exercitationem sit laudantium!</p>
            <div>
                <Row>
                    <Col lg={4} xs={12} className="macrophoto-row">
                        <div className="black-div">
                            <div className="macrophoto-subtitle">
                                <h5>Diamond squid.</h5>
                            </div>
                            <img className="left-macrophoto" src='/img/JELLYFISH-NObg.png' />
                        </div>
                    </Col>
                    <Col lg={4} xs={12} className="macrophoto-row">
                        <div className="black-div">
                            <div className="macrophoto-subtitle">
                                <h5>Seahorse.</h5>
                            </div>
                            <img className="middle-macrophoto" src='/img/fish-noBG.png' />
                        </div>
                    </Col>
                    <Col lg={4} xs={12} className="macrophoto-row">
                        <div className="black-div">
                            <div className="macrophoto-subtitle">
                                <h5>Colorful predation.</h5>
                            </div>
                            <img className="right-macrophoto" src='/img/colorfulPredation-noBG.png' />
                        </div>
                    </Col>
                </Row>

            </div>
            <Link to='#####'>View all pictures</Link>
        </Container>
    )

}

export default MacroSection