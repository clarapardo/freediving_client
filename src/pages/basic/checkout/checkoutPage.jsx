import './checkoutPage.css'
import { Row, Col, Container, Button, Form } from 'react-bootstrap'
import { AuthContext } from '../../../contexts/auth.context'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CheckoutForm from '../../../components/00. General/CheckoutForm/CheckoutForm'
import { useContext, useState, useEffect } from 'react'
import cartService from '../../../services/cart.service'
import CheckoutCartItemCard from '../../../components/00. General/CheckoutCartItemCard/CheckoutCartItemCard'
import { Link } from 'react-router-dom'

const stripePromise = loadStripe("pk_test_51LUnwvCJGUzgwzbBPxbQE9R3593eLuJOtmQfEDsG665kIG9PhWHyEgMeFZF6iOouQdMz1g7DsYSIW032q70i1Ew50036XmtW1m")


const CheckoutPage = () => {

    const { user, isLoggedIn } = useContext(AuthContext)
    const [cartItems, setCartItems] = useState(null)
    const [emails, setEmails] = useState([])
    const [validationMessages, setValidationMessages] = useState([])
    const [userName, setUserName] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const [isIOS, setIsIOS] = useState(true)


    useEffect(() => {
        getCartData()
        getTotalAmount()
        getDevice()
    }, [])

    useEffect(() => {
        getTotalAmount()
    }, [cartItems])


    const getCartData = () => {
        cartService
            .getCart(user?._id)
            .then(({ data }) => setCartItems(data.items))
            .catch(err => console.log(err))
    }

    const getTotalAmount = () => {
        let amount = cartItems?.reduce((acc, curr) => acc + curr.price, 0)
        setTotalAmount(amount)
    }

    const getDevice = () => {

        const IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
        if (!IOS) {
            setIsIOS(false)
        }
    }


    const handleInputs = e => {

        const { name, value } = e.currentTarget

        if (name === 'email0') {
            let newArr = [...emails]
            newArr[0] = value
            setEmails(newArr)
        } else if (name === 'email1') {
            let newArr = [...emails]
            newArr[1] = value
            setEmails(newArr)
        } else if (name === 'firstName') {
            let newArr = [...userName]
            newArr[0] = value
            setUserName(newArr)
        } else if (name === 'lastName') {
            let newArr = [...userName]
            newArr[1] = value
            setUserName(newArr)
        }
    }


    return (
        <div className="CheckoutPage">

            <Link to='/gallery'>
                <Button className="goBackCheckout-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg> Back to gallery</Button>
            </Link>

            <Link to='/'>
                <img src="/img/logo.png" className="logo_checkout" />
                <h5>Rafael Fernandez</h5>
            </Link>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <video style={{ position: 'absolute' }} src="https://exposure.accelerator.net/production/photos/ibfuae6jxdl4f5qe8x81cnt3weo0vkkxgyva/original.mp4;/resize(1920,_,fit)/crf(20).mp4" autoPlay muted loop playsInline></video>

                <div className="glassy-checkOut" style={{ position: 'absolute' }}>

                    <Container>

                        <Row>

                            <Col md={8}>
                                <h2 style={{ fontFamily: 'JORGE', textTransform: 'uppercase' }}>Shopping Cart</h2>
                                <section className="deliveryAddress-info">
                                    <div className="sectionHeader">
                                        <div><p>1</p></div>
                                        <h6>Delivery address</h6>
                                    </div>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <Form.Label>Email address *</Form.Label>
                                                <Form.Control type="email" placeholder="example@example.com" name="email0" onChange={handleInputs} id="email0" />
                                            </Col>
                                            <Col>
                                                <Form.Label>Confirm email address *</Form.Label>
                                                <Form.Control type="email" placeholder="example@example.com" name="email1" onChange={handleInputs} id="email1" />
                                            </Col>
                                            {validationMessages[0] ? <p style={{ fontWeight: 'bold', color: 'greenyellow', margin: '0' }}>{validationMessages[0]}</p> : ''}
                                        </Row>
                                    </Container>
                                </section>

                                <section className="payment-info">
                                    <div className="sectionHeader">
                                        <div><p>2</p></div>
                                        <h6>Payment information</h6>
                                    </div>
                                    <Container>

                                        <p>Choose a payment method:</p>
                                        <div className='paymentMethods-btns'>
                                            <Button variant='dark' style={{ margin: '0px 20px', width: '175px' }}>Credit card</Button>
                                            {isIOS && <Button variant='none' onClick={() => alert('not yet implemented :)')} style={{ margin: '0px 20px', width: '175px', border: '1px solid black' }}><img src="/img/apple-white.png" style={{ filter: 'invert(1)', width: '14px', marginBottom: '5px', marginRight: '5px' }} />Pay</Button>}
                                            {!isIOS && <Button variant='none' onClick={() => alert('not yet implemented :)')} style={{ margin: '0px 20px', width: '175px', border: '1px solid black' }}><img src="/img/google.png" style={{ filter: 'invert(1)', width: '14px', marginBottom: '5px', marginRight: '5px' }} />Pay</Button>}
                                        </div>

                                        <hr />

                                        <Row>
                                            <Col>
                                                <Form.Control type="text" placeholder="First Name *" name="firstName" onChange={handleInputs} />
                                            </Col>
                                            <Col>
                                                <Form.Control type="text" placeholder="Last Name *" name="lastName" onChange={handleInputs} />
                                            </Col>
                                        </Row>
                                        {validationMessages[1] ? <p style={{ fontWeight: 'bold', color: 'greenyellow', margin: '0' }}>{validationMessages[1]}</p> : ''}


                                        <Elements stripe={stripePromise}>
                                            <CheckoutForm emails={emails} userName={userName} validationMessages={validationMessages} setValidationMessages={setValidationMessages} totalAmount={totalAmount} />
                                        </Elements>
                                    </Container>

                                </section>

                            </Col>

                            <Col md={4}>

                                <div className="orderSummary">
                                    <Container>
                                        {!cartItems
                                            ?
                                            <h1>ESTOY CARGANDO</h1>
                                            :
                                            <div className="allItemsInCartCheckout">
                                                {cartItems?.length !== 0
                                                    ?
                                                    <>
                                                        {cartItems?.map(elm => <CheckoutCartItemCard item={elm} />)}
                                                    </>
                                                    :
                                                    <h6>Cart is empty.</h6>
                                                }
                                            </div>
                                        }
                                    </Container>

                                    <div className="totalCheckout">
                                        <h5>Total</h5>
                                        <h5>${totalAmount}</h5>
                                    </div>

                                </div>

                            </Col>

                        </Row>
                    </Container>

                </div>
            </div>

        </div >
    )
}




export default CheckoutPage