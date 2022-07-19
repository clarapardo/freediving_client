import './Sponsors.css'

import { useState, useRef, useEffect } from "react"
import { Row, Col, Container } from 'react-bootstrap'

const sponsors = ['./img/sponsors/NatGeo.png', './img/sponsors/Alpina_Watches.png', './img/sponsors/AqualungMini.png', './img/sponsors/GoPro.png', './img/sponsors/Isotta.png', './img/sponsors/Padi.png']


const Sponsors = () => {

    const sponsorsCopy = [...sponsors, ...sponsors]

    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null)

    const resetTimeout = () => {

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    const newIndex = () => {

        if (index === sponsorsCopy.length - (sponsors.length)) {

            // cuando este en la mitad, index a cero, y sin transición
            document.getElementById('aux').classList.replace('slideshowSlider', 'slideshowSlider-2')
            return 0

        } else {
            document.getElementById('aux').classList.add('slideshowSlider')
            return (index + 1)
        }
    }

    useEffect(() => {

        resetTimeout()

        timeoutRef.current = setTimeout(() => {
            setIndex(newIndex())
        }, 5000)

        return () => resetTimeout()

    }, [index])



    return (
        <div className="slideshow">
            <div className="slideshowSlider" id="aux" style={{ transform: `translate3d(${-index * 25}%, 0, 0)` }}>

                {sponsorsCopy.map((image, index) => (

                    <div className="slide" key={index}>
                        <a href={"https://www.nationalgeographic.com.es/"}>
                            <img src={image} alt="natGeo" />
                        </a>
                    </div>

                ))}

            </div>
        </div>
    )
}



export default Sponsors