import './galleryPage.css'
import { useEffect, useState } from 'react'
import photographyService from '../../../services/photography.service'
import PhotoCard from '../../../components/03. Gallery/PhotoCard/PhotoCard'
import { Row, Col, Container } from 'react-bootstrap'
import { PulseLoader } from 'react-spinners'


const GalleryPage = () => {

    const [allPhotos, setAllPhotos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        photographyService
            .getAllPhotos()
            .then(({ data }) => {
                setAllPhotos(data)

                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="GalleryPage">

            <Row>

                <Col md={3} style={{ position: 'relative' }}>
                    <div className="gallery-description sticky-top" style={{ top: '40px' }}>
                        <h2>Gallery</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum natus numquam facere temporibus atque ullam enim et sequi eveniet quaerat, tempore, quisquam at nesciunt sit qui! Quisquam, sapiente earum. Obcaecati.</p>
                        <img className="signature" src='/img/signature0.png' />
                    </div>
                </Col>

                <Col md={9}>
                    {isLoading
                        ?
                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
                            <PulseLoader size={8} color={'#1a2a30'} speedMultiplier={0.6} />
                        </div>
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