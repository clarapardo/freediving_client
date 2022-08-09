import './galleryPage.css'
import { useEffect, useState } from 'react'
import photographyService from '../../../services/photography.service'
import PhotoCard from '../../../components/03. Gallery/PhotoCard/PhotoCard'
import { Row, Col, Container } from 'react-bootstrap'


const GalleryPage = () => {

    const [allPhotos, setAllPhotos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        photographyService
            .getAllPhotos()
            .then(({ data }) => {
                setAllPhotos(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="GalleryPage">

            <Row>

                <Col md={3} >
                    <div className="gallery-description">
                        <h2>Gallery</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum natus numquam facere temporibus atque ullam enim et sequi eveniet quaerat, tempore, quisquam at nesciunt sit qui! Quisquam, sapiente earum. Obcaecati.</p>
                        <img className="signature" src='/img/signature0.png' />
                    </div>
                </Col>

                <Col md={9}>
                    {isLoading
                        ?
                        <h2>ESTOY CARGANDO</h2>
                        :
                        <>
                            <div className='grid-container '>
                                {allPhotos?.map(elm => <PhotoCard {...elm} key={elm._id} />)}
                            </div>
                        </>}
                </Col>
            </Row>


        </div >
    )
}



export default GalleryPage