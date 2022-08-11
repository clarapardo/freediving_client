import './photoDetailsPage.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { Container, Row, Col, Button, Dropdown, Accordion } from 'react-bootstrap'
import photographyService from '../../../services/photography.service'
import cartService from './../../../services/cart.service'
import { AuthContext } from './../../../contexts/auth.context'
import { PulseLoader } from 'react-spinners'



const PhotoDetailsPage = ({ setShow }) => {

    const { idPhoto } = useParams()
    const { user, isLoggedIn } = useContext(AuthContext)

    const [photoData, setPhotoData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {

        photographyService
            .getOnePhoto(idPhoto)
            .then(({ data }) => {
                setPhotoData(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    const handleAddToCart = () => {

        const userId = user._id

        cartService
            .addItem({ userId, idPhoto })
            .then(() => {
                setShow(true)
            })
            .catch(err => console.log(err))
    }


    return (

        <Container className="PhotoDetailsPage">
            {isLoading
                ?
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
                    <PulseLoader size={8} color={'#1a2a30'} speedMultiplier={0.6} />
                </div>
                :
                <Container>
                    <Row>

                        <Col md={6}>
                            <img src={photoData.photoUrl} />
                        </Col>
                        <Col md={{ span: 5, offset: 1 }}>
                            <h3>{photoData.title.toUpperCase()}</h3>
                            <h6>${photoData.price}</h6>
                            <p className="taxes">Taxes included.</p>

                            <p>{photoData.dimensions[0]}x{photoData.dimensions[1]} cm</p>
                            <p className="description">{photoData.description}</p>

                            <div className="location">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                                    <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                                </svg>
                                <p>{photoData.location}</p>
                            </div>

                            <Button onClick={handleAddToCart}>Add to cart</Button>

                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className="accordionHeader">DELIVERY</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </Col>

                    </Row>

                </Container>
            }
        </ Container>
    )
}


export default PhotoDetailsPage