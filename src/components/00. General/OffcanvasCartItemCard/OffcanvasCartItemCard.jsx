import './OffcanvasCartItemCard.css'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import cartService from '../../../services/cart.service'
import { AuthContext } from '../../../contexts/auth.context'
import { useContext } from 'react'

const OffcanvasCartItemCard = ({ item, getCartData }) => {

    const { user, isLoggedIn } = useContext(AuthContext)

    console.log('7777', item)


    const handleDelete = (idPhoto) => {

        const userId = user._id

        cartService
            .removeItem({ userId, idPhoto })
            .then(() => {
                getCartData()
                console.log('LO HE BORRADO :)')
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="OffcanvasCartItemCard">
            <Row style={{ height: '100%' }}>

                <Col md={3}>
                    {/* <Link to={`/photoDetails/${item._id}`}> */}
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src={item.photoUrl} alt={item.title} className="img-offcanvas" />
                    </div>
                    {/* </Link> */}
                </Col>

                <Col md={9}>
                    <div className='d-flex justify-content-between'>
                        <h6>{item.title}</h6>
                        <p>${item.price}</p>
                    </div>
                    <p>{item.dimensions[0]}x{item.dimensions[1]} cm</p>
                    <Button onClick={() => handleDelete(item._id)}>
                        <p>Remove</p>
                    </Button>
                </Col>

            </Row >

        </div >
    )
}


export default OffcanvasCartItemCard