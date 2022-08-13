import './CheckoutForm.css'
import { Row, Col, Container, Button, Form, Card } from 'react-bootstrap'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import userService from '../../../services/user.service'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/auth.context'

const CheckoutForm = ({ emails, userName, validationMessages, setValidationMessages, totalAmount }) => {

    const { user, isLoggedIn } = useContext(AuthContext)
    const stripe = useStripe()
    const elements = useElements()


    console.log('USER |||||||||||||||', user._id)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setValidationMessages([])

        if (emails[0] === undefined || emails[1] === undefined) {
            let newArr = [...validationMessages]
            newArr[0] = "Please fill in the fields."
            setValidationMessages(newArr)
            return

        } else if (emails[0].length !== 0 && emails[1].length !== 0 && emails[0] !== emails[1]) {
            let newArr = [...validationMessages]
            newArr[0] = "The emails don't match."
            setValidationMessages(newArr)
            return
        }

        if (userName[0] === undefined || userName[1] === undefined) {
            let newArr = [...validationMessages]
            newArr[1] = "Please fill in the fields."
            setValidationMessages(newArr)
            return
        }


        userService
            .updateUser({ userId: user._id, userData: { email: emails[0], firstName: userName[0], lastName: userName[1] } })
            .then(() => console.log('YA SE HA ACTUALIZADO'))
            .catch(err => console.log(err))




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