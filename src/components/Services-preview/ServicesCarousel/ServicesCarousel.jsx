import './ServicesCarousel.css'

import { useState } from 'react'

const slides = [
    { url: "https://freedivenusa.com/wp-content/uploads/2021/02/freedivecourses.png", title: "beach" },
    { url: "https://images.squarespace-cdn.com/content/v1/61512ed12f44185361758475/1633487185481-ZT3Y7VESYQGB0QYIC7H5/DSC03027+%281%29.jpg", title: "boat" },
    { url: "https://freedivenusa.com/wp-content/uploads/2021/02/freedivecourses.png", title: "forest" }]


const ServicesCarousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }


    return (
        <>
            <div className="sliderStyles">

                <div>
                    <div onClick={goToPrevious} className="leftArrowStyles">❰</div>
                    <div onClick={goToNext} className="rightArrowStyles">❱</div>
                </div>

                {/* <div className="services">
                    <div style={{ backgroundImage: `url('${slides[currentIndex].url}')` }} className="slideStyles"></div>
                    <div style={{ backgroundImage: `url('${slides[1].url}')` }} className="slideStyles"></div>
                </div> */}

                {slides.map((service, index) => (

                    <div className="slide" key={index}>
                        <img src={service.url} alt="sponsorLogo" />
                    </div>

                ))}

            </div>
        </>
    )
}

export default ServicesCarousel