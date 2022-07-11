import './ContactMe-Form.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactMeForm = () => {

    return (
        <Form>
            <h5>let's talk</h5>
            {/* <h5>leave a message</h5> */}

            <p>To request more info, contact me directly or fill out the form and I will get back to you promptly</p>


            <Form.Group className="mb-3" controlId="name">
                <Form.Control type="email" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
                <Form.Control type="text" placeholder="Message" />
            </Form.Group>
            <Button variant="warning" type="submit">Send message</Button>
        </Form>
    )

}

export default ContactMeForm