import './AboutMe-preview.css'
import { Row, Col, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import NumProjectsCounter from './Counters/NumProjectsCounter'
import PBCounter from './Counters/PBCounter'

const AboutMePreview = () => {

    const [currentScrollHeight, setCurrentScrollHeight] = useState(0)
    const [opacity, setOpacity] = useState(1)

    const [scrollDirection, setScrollDirection] = useState('down')


    useEffect(() => {
        calcScrollDirection()
        changeOpacity()
    })

    const calcScrollDirection = () => {
        window.onscroll = () => {
            const newScrollHeight = Math.ceil(window.scrollY / 10)
            // newScrollHeight > currentScrollHeight && newScrollHeight !== currentScrollHeight
            //     ?
            //     setScrollDirection('down')
            //     :
            //     setScrollDirection('up')


            if (newScrollHeight > currentScrollHeight && newScrollHeight !== currentScrollHeight) {
                setScrollDirection('down')
            } else if (newScrollHeight < currentScrollHeight && newScrollHeight !== currentScrollHeight) {
                setScrollDirection('up')
            } else if (newScrollHeight === currentScrollHeight) {
                //
            }


            setCurrentScrollHeight(newScrollHeight)
            // console.log('--------', newScrollHeight)
        }
    }


    const changeOpacity = () => {

        // console.log('-----------', scrollDirection)
        // console.log('xxxx', window.innerHeight)

        if (scrollDirection === 'down' && window.scrollY > window.innerHeight / 3) {

            let scrollHeight = window.scrollY - window.innerHeight
            let value = 1 - Math.min(scrollHeight * 20) / 10000
            setOpacity(value)
        }

        if (scrollDirection === 'up' && window.scrollY < window.innerHeight * 4 / 3) {
            // console.log('ESTOY EN LA SEGUNDAAAAA')
            let scrollHeight = window.scrollY - window.innerHeight * 4 / 3
            let value = -Math.min(scrollHeight * 70) / 10000

            // console.log('--------', value)
            setOpacity(value)

        }


        // console.log('OPACITY: ', value)
    }

    return (

        <div className="AboutMe-preview" style={{ background: `rgba(3, 61, 118, ${opacity})` }}>
            <Container>

                <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatibus modi debitis sequi dicta ab sint magnam, aliquid delectus doloribus consectetur ipsam voluptate quibusdam quos, expedita, pariatur saepe minima esse.</h2>


                <Row>

                    <Col className="leftCol-AboutMe">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus ipsum in amet explicabo maiores assumenda dolorem ab sapiente corrupti, optio esse voluptas tempore nesciunt adipisci quo! Ea dolorum unde explicabo? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus ipsum in amet explicabo maiores assumenda dolorem ab sapiente corrupti, optio esse voluptas tempore nesciunt adipisci quo! Ea dolorum unde explicabo?</p>
                        <br />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus ipsum in amet explicabo maiores assumenda dolorem ab sapiente corrupti, optio esse voluptas tempore nesciunt adipisci quo! Ea dolorum unde explicabo?</p>

                        <div className="counters">
                            <NumProjectsCounter />
                            <PBCounter />
                            <article>OWP5 (certifications)</article>
                        </div>

                    </Col>

                    <Col>
                        <div className="aboutMe-pic">
                            <img src='img/UPY2022.jpg' />
                            <p>Underwater Photograph of the Year, 2022</p>
                        </div>

                    </Col>

                </Row>
            </Container>
        </div>
    )
}


export default AboutMePreview
