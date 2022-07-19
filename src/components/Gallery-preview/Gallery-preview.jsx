import './Gallery-preview.css'
import { Row, Col, Container } from 'react-bootstrap'

const column1 = ['./img/gallery/06.jpg', './img/gallery/11.png']
const column2 = ['./img/gallery/13.jpg', './img/gallery/14.jpg']
const column3 = ['./img/gallery/16.jpg', './img/gallery/17.jpg']


const Gallery = () => {

    return (

        <div className="Gallery">
            <div className="line-gallery"></div>
            <Container>
                <Row>
                    <Col lg={5} className="gallery-text">
                        <h2>Dive in.</h2>
                        <h2>Explore the world.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus modi tempora illum sapiente quod iusto atque, inventore dignissimos culpa molestias debitis. Omnis repudiandae suscipit eligendi! At perspiciatis dignissimos sequi autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi harum totam temporibus consequatur necessitatibus, tenetur, possimus dicta cumque ea iste officia dignissimos veniam aut maxime, quibusdam doloribus dolore obcaecati. Et.</p>

                        <button className="cta">
                            <span className="hover-underline-animation"> see gallery </span>
                            <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                                <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                            </svg>
                        </button>
                    </Col>

                    <Col lg={{ span: 6, offset: 1 }} className="gallery-imgs">

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
                        {/* <img src="img/gallery/gallery-preview.png" alt="UPY2022" /> */}
                    </Col>

                </Row>
            </Container>

        </div>

    )

}

export default Gallery