import './checkoutPage.css'
import { Row, Col, Container, Button, Form } from 'react-bootstrap'
import { AuthContext } from '../../../contexts/auth.context'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CheckoutForm from '../../../components/00. General/CheckoutForm/CheckoutForm'
import { useContext, useState, useEffect } from 'react'
import cartService from '../../../services/cart.service'
import CheckoutCartItemCard from '../../../components/00. General/CheckoutCartItemCard/CheckoutCartItemCard'

const stripePromise = loadStripe("pk_test_51LUnwvCJGUzgwzbBPxbQE9R3593eLuJOtmQfEDsG665kIG9PhWHyEgMeFZF6iOouQdMz1g7DsYSIW032q70i1Ew50036XmtW1m")

const CheckoutPage = () => {

    const { user, isLoggedIn } = useContext(AuthContext)
    const [cartItems, setCartItems] = useState(null)

    useEffect(() => {
        getCartData()
    }, [])


    const getCartData = () => {
        cartService
            .getCart(user?._id)
            .then(({ data }) => setCartItems(data.items))
            .catch(err => console.log(err))
    }

    return (
        <div className="CheckoutPage">

            <div className="glassy-checkOut">

                <Container>
                    <h2 style={{ fontFamily: 'JORGE', textTransform: 'uppercase' }}>Shopping Cart</h2>


                    <Row>

                        <Col md={8}>
                            <section className="deliveryAddress-info">
                                <div className="sectionHeader">
                                    <div><p>1</p></div>
                                    <h6>Delivery address</h6>
                                </div>

                                <Row>
                                    <Col>
                                        <Form.Label>Email address*</Form.Label>
                                        <Form.Control type="email" placeholder="example@example.com" name="email1" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Confirm email address*</Form.Label>
                                        <Form.Control type="email" placeholder="example@example.com" name="email1" />
                                    </Col>

                                </Row>

                            </section>

                            <section className="payment-info">

                                <div className="sectionHeader">
                                    <div><p>2</p></div>
                                    <h6>Payment information</h6>
                                </div>

                                <p>Choose a payment method</p>
                                <div className='paymentMethods-btns'>
                                    <Button variant='dark' style={{ margin: '0px 20px', width: '175px' }}>Credit card</Button>
                                    <Button variant='dark' style={{ margin: '0px 20px', width: '175px' }}><img src="/img/apple-white.png" style={{ filter: 'invert(1)', width: '14px', marginBottom: '5px', marginRight: '5px' }} />Pay</Button>
                                </div>

                                <hr />

                                <Row>
                                    <Col>
                                        <Form.Control type="text" placeholder="First Name*" name="name" />
                                    </Col>

                                    <Col>
                                        <Form.Control type="text" placeholder="Last Name*" name="name" />
                                    </Col>
                                </Row>

                                <Elements stripe={stripePromise}>
                                    <CheckoutForm />
                                </Elements>

                            </section>

                        </Col>



                        <Col md={4}>

                            <div className="orderSummary">
                                <Container>

                                    {!cartItems
                                        ?
                                        <h1>ESTOY CARGANDO</h1>
                                        :
                                        <>
                                            {
                                                cartItems?.length !== 0
                                                    ?
                                                    <>
                                                        {cartItems?.map(elm => <CheckoutCartItemCard item={elm} />)}
                                                    </>
                                                    :
                                                    <h6>Cart is empty.</h6>
                                            }
                                        </>
                                    }

                                    <Row>
                                        <Col><h5>Total</h5></Col>
                                        <Col><h5>${cartItems?.reduce((acc, curr) => acc + curr.price, 0)}</h5></Col>
                                    </Row>

                                    <Button variant='dark'>Confirm order</Button>

                                </Container>

                            </div>

                        </Col>


                    </Row>
                </Container>

            </div>

        </div >
    )
}




export default CheckoutPage