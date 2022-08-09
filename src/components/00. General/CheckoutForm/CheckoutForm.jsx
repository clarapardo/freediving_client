import './CheckoutForm.css'
import { Row, Col, Container, Button, Form, Card } from 'react-bootstrap'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'

const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })

        if (!error) {

            const { id } = paymentMethod
            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/cart/checkout`, {
                id,
                amount: 120000
            })

            console.log(data)
            elements.getElement(CardElement).clear()
        }

    }

    return (

        <Form onSubmit={handleSubmit}>
            <CardElement />
            <Button type="submit">BUY</Button>
        </Form>
    )
}

export default CheckoutForm