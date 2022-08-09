import './checkoutPage.css'
import { Row, Col, Container, Button, Form } from 'react-bootstrap'

import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CheckoutForm from '../../../components/00. General/CheckoutForm/CheckoutForm'
const stripePromise = loadStripe("pk_test_51LUnwvCJGUzgwzbBPxbQE9R3593eLuJOtmQfEDsG665kIG9PhWHyEgMeFZF6iOouQdMz1g7DsYSIW032q70i1Ew50036XmtW1m")


const CheckoutPage = () => {

    
    return (
        <div className="CheckoutPage">
            <h1>SOY EL CHECKOUT</h1>

            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>

        </div>
    )
}

export default CheckoutPage