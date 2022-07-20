import './Sponsors.css'

import { useState, useRef, useEffect } from "react"
import { Row, Col, Container } from 'react-bootstrap'

// const sponsors = ['./img/sponsors/NatGeo.png', './img/sponsors/Alpina_Watches.png', './img/sponsors/AqualungMini.png', './img/sponsors/GoPro.png', './img/sponsors/Isotta.png', './img/sponsors/Padi.png']
const sponsors = [
    { image: './img/sponsors/NatGeo.png', link: "https://www.nationalgeographic.com.es/" },
    { image: './img/sponsors/Alpina_Watches.png', link: "https://www.alpinawatches.com/" },
    { image: './img/sponsors/AqualungMini.png', link: "https://es.aqualung.com/es" },
    { image: './img/sponsors/GoPro.png', link: "https://gopro.com/es/es/" },
    { image: './img/sponsors/Isotta.png', link: "https://www.isotecnic.it/en/" },
    { image: './img/sponsors/Padi.png', link: "https://www.padi.com/es" },
]


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

                {sponsorsCopy.map((sponsor, index) => (

                    <div className="slide" key={index}>
                        <a href={sponsor.link}>
                            <img src={sponsor.image} alt="sponsorLogo" />
                        </a>
                    </div>

                ))}

            </div>
        </div>
    )
}



export default Sponsors