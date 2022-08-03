import './ServicesCarousel.css'
import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'


const ServicesCarousel = () => {

    return (
        <>
            < Carousel fade >

                <Carousel.Item>
                    <div className="d-block service-div" style={{ backgroundImage: 'url(https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2021/2/13/wq5nac0qqwtakxolrdsn/lorena-gonzalez-freediving)' }}>
                        <h3 className='service-title'>Photography.</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="d-block service-div" style={{ backgroundImage: 'url(https://www.apneatotal.com/wp-content/uploads/2020/03/2015-08-31-02.05.26-1024x683.jpg)' }}>
                        <h3 className='service-title'>Training.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="d-block service-div" style={{ backgroundImage: 'url(https://www.reefoasisdiveclub.com/photos/media-items/carousel_35fdb_lg.jpg)' }}>
                        <h3 className='service-title'>Events.</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </Carousel.Item>

            </Carousel >
        </>
    )
}



export default ServicesCarousel
