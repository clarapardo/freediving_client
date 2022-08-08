import './form.newPhoto.css'
import { Form, Button, Container } from 'react-bootstrap'
import { useState } from "react"
import photographyService from '../../../services/photography.service'
import { useNavigate } from 'react-router-dom'


const NewPhotoForm = () => {

    const navigate = useNavigate()

    const [newPhotoData, setNewPhotoData] = useState({
        title: '',
        description: '',
        price: 0,
        dimensions: [0, 0],
        photoUrl: '',
        location: ''
    })


    const handleInputChange = e => {

        const { name, value } = e.currentTarget

        if (name === 'dimension0' || name === 'dimension1') {

            let newArr = [...newPhotoData.dimensions]
            newArr[name.substr(-1)] = value * 1
            setNewPhotoData({ ...newPhotoData, dimensions: newArr })

        } else {
            setNewPhotoData({ ...newPhotoData, [name]: value })
        }
    }


    const handleSubmit = e => {
        e.preventDefault()

        photographyService
            .addPhoto(newPhotoData)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    const { title, description, price, dimensions, photoUrl, location } = newPhotoData

    return (
        <Container className="NewPhotoForm">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter a title" name="title" value={title} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter description" name="description" value={description} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter location" name="location" value={location} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" value={price} name="price" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="dimensions">
                    <Form.Label>Dimensions</Form.Label>
                    <Form.Control type="number" value={dimensions[0]} name="dimension0" onChange={handleInputChange} />
                    <Form.Control type="number" value={dimensions[1]} name="dimension1" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="photoUrl">
                    <Form.Label>Photo link</Form.Label>
                    <Form.Control type="text" placeholder="Link" value={photoUrl} name="photoUrl" onChange={handleInputChange} />
                </Form.Group>

                <Button variant="warning" type="submit">Add</Button>
            </Form>
        </Container>
    )
}


export default NewPhotoForm