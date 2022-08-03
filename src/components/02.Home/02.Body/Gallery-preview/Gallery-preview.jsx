import './Gallery-preview.css'
import { Row, Col, Container, Button } from 'react-bootstrap'

const column1 = ['./img/gallery/06.jpg', './img/gallery/11.png']
const column2 = ['./img/gallery/13.jpg', './img/gallery/14.jpg']
const column3 = ['./img/gallery/16.jpg', './img/gallery/17.jpg']


const GalleryPreview = () => {

    return (

        <div className="Gallery">
            <div className="line-gallery"></div>
            <Container>
                <Row>
                    <Col lg={6} className="gallery-imgs">

                        <Row>
                            <Col>
                                {column1.map(elm => <div key={elm} className="gallery-preview-pic-div" style={{ backgroundImage: `url(${elm})` }}></div>)}
                            </Col>
                            <Col className="middle-gallery-preview">
                                {column2.map(elm => <div key={elm} className="gallery-preview-pic-div" style={{ backgroundImage: `url(${elm})` }}></div>)}
                            </Col>
                            <Col>
                                {column3.map(elm => {
                                    return (
                                        <div key={elm} className="gallery-preview-pic-div" style={{ backgroundImage: `url(${elm})` }}>
                                            <img src={elm} style={{ opacity: 0 }} />
                                        </div>
                                    )
                                })}
                            </Col>
                        </Row>

                    </Col>

                    <Col lg={{ span: 5, offset: 1 }} className="gallery-text">
                        <h2>Dive in.</h2>
                        <h2>Explore the world.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus modi tempora illum sapiente quod iusto atque, inventore dignissimos culpa molestias debitis. Omnis repudiandae suscipit eligendi! At perspiciatis dignissimos sequi autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi harum totam temporibus consequatur necessitatibus, tenetur, possimus dicta cumque ea iste officia dignissimos veniam aut maxime, quibusdam doloribus dolore obcaecati. Et.</p>

                        <Button variant="info" className="gallery-preview-btn">see gallery </Button>
                    </Col>

                </Row>
            </Container>

        </div>

    )

}

export default GalleryPreview