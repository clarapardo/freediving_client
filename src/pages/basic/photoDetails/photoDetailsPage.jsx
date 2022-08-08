import './photoDetailsPage.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap'
import photographyService from '../../../services/photography.service'



const PhotoDetailsPage = () => {

    const { idPhoto } = useParams()
    const [photoData, setPhotoData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const [show, setShow] = useState(false)


    useEffect(() => {

        photographyService
            .getOnePhoto(idPhoto)
            .then(({ data }) => {
                setPhotoData(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])


    const handleDropdown = () => {

        show ? setShow(false) : setShow(true)

    }


    return (

        <Container className="PhotoDetailsPage">
            {isLoading
                ?
                <h2>ESTOY CARGANDO</h2>
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

                            <Button>Add to cart</Button>


                            <div className="dropdown">
                                <div className="dropdown-header" onClick={handleDropdown}>
                                    <h6>DELIVERY</h6>
                                    {show
                                        ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    }
                                </div>
                                <p className={show ? '' : "hide"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, animi ad laboriosam nihil fuga ex tempore voluptatum dolor earum dolorum eaque consequatur explicabo maxime voluptates doloremque sapiente dolorem illo soluta.</p>
                            </div>

                        </Col>

                    </Row>

                </Container>
            }
        </ Container>
    )
}


export default PhotoDetailsPage