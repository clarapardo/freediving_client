import './ServicesCarousel.css'

import { useState } from 'react'

const slides = [
    { url: "https://q-xx.bstatic.com/xdata/images/hotel/840x460/78809294.jpg?k=cf850d507a9671cf7ff85d598435ea329a28cd4f1b1abc25c1892c91156d36ad&o=", title: "beach" },
    { url: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2015/01/26/1331701578013_6/freediving-christ-of-the-abyss-statue", title: "boat" },
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
                    <div onClick={goToPrevious} className={(currentIndex === 0) ? "leftArrowStyles hide" : "leftArrowStyles"}>❰</div>
                    <div onClick={goToNext} className={(currentIndex === slides.length - 1) ? "rightArrowStyles hide" : "rightArrowStyles"}>❱</div>
                </div>

                {slides.map((service, index) => (

                    <div className={(index > currentIndex + 1 || index < currentIndex) ? "slide hide" : "slide"} key={index} style={{ backgroundImage: `url('${service.url})`, height: '100px' }}>
                        <h6 style={{ color: 'white' }}>{`${index} - ${currentIndex}`}</h6>
                    </div>

                ))}

            </div>
        </>
    )
}

export default ServicesCarousel