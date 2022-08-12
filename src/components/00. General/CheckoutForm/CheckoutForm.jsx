import './CheckoutForm.css'
import { Row, Col, Container, Button, Form, Card } from 'react-bootstrap'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'

const CheckoutForm = ({ emails, setEmailConfirmationMessage, totalAmount }) => {

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (emails[0] === undefined || emails[1] === undefined) {
            setEmailConfirmationMessage("Please fill in the fields.")
            return
        } else if (emails[0].length !== 0 && emails[1].length !== 0 && emails[0] !== emails[1]) {
            setEmailConfirmationMessage("The emails don't match.")
            return

        } else {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement)
            })

            if (!error) {

                const { id } = paymentMethod
                const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/cart/checkout`, {
                    id,
                    amount: totalAmount * 100
                })

                console.log(data)
                elements.getElement(CardElement).clear()
            }
        }


    }

    return (

        <Form onSubmit={handleSubmit}>
            <CardElement />
            <div>
                <Button variant='dark' type='submit' className='submitCheckout-btn'>Confirm order</Button>
            </div>
        </Form>
    )
}

export default CheckoutForm