import { useState, useRef, useEffect } from "react"
import { Row, Col, Container } from 'react-bootstrap'
import './Sponsors2.css'

const sponsors = ['./img/sponsors/NatGeo.png', './img/sponsors/Alpina_Watches.png', './img/sponsors/Aqualung.png', './img/sponsors/BraveDivers.png', './img/sponsors/GoPro.png', './img/sponsors/Isotta.png', './img/sponsors/Padi.png']
const colors = ["#0088FE", "#00C49F", "#FFBB28"];

const Sponsors2 = () => {

    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null)

    const resetTimeout = () => {

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    const newIndex = () => {

        return index === sponsors.length - 1 ? 0 : index + 1
    }

    useEffect(() => {

        resetTimeout()

        timeoutRef.current = setTimeout(() => {
            setIndex(newIndex())
            sponsors.push(sponsors[index])
            // sponsors.shift()
        }, 12000)

        console.log(index)

        return () => resetTimeout()

    }, [index])



    return (
        <div>
            {/* <Row> */}
            {/* {sponsors.map((image, index) => (
                // <Col lg={3} md={6} xs={6} key={index}>
                < div key={index} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    <h1>{sponsors[index]}</h1>
                    <h1>{index}</h1>

                    <a href={"https://www.nationalgeographic.com.es/"}>
                        <img src={sponsors[index]} alt="natGeo" />
                    </a>
                </div>
                // </Col>

            ))
            } */}
            <div className="slideshow">
                <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {sponsors.map((image, index) => (
                        <div className="slide" key={index}>
                            <a href={"https://www.nationalgeographic.com.es/"}>
                                <img src={image} alt="natGeo" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* </Row> */}

        </div >

    )
}

export default Sponsors2