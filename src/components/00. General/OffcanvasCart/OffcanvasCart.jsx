import './OffcanvasCart.css'
import { Offcanvas, Button, Container } from 'react-bootstrap'
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import cartService from '../../../services/cart.service'
import { AuthContext } from '../../../contexts/auth.context'
import OffcanvasCartItemCard from '../OffcanvasCartItemCard/OffcanvasCartItemCard'

const OffcanvasCart = ({ show, setShow }) => {

    const { user, isLoggedIn } = useContext(AuthContext)
    const [cartItems, setCartItems] = useState(null)

    useEffect(() => {
        getCartData()
    }, [user, show])


    const getCartData = () => {
        cartService
            .getCart(user?._id)
            .then(({ data }) => {
                console.log('--------', data)
                setCartItems(data.items)
            })
            .catch(err => console.log(err))
    }

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div className="OffcanvasCart">
            {!user
                ?
                <h1>ESTOY CARGANDO</h1>
                :
                <Offcanvas show={show} onHide={handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>CART</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Container>

                            {cartItems?.length === 0
                                ?
                                <p>Your cart is currently empty.</p>
                                :
                                <>
                                    {cartItems?.map(elm => {
                                        return <OffcanvasCartItemCard item={elm} getCartData={getCartData} />
                                    })}

                                    <div className="subtotal-offcanvas">
                                        <hr />
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h4>SUBTOTAL</h4>
                                            {console.log('))))))', cartItems)}
                                            <h6>${cartItems?.reduce((acc, curr) => acc + curr.price, 0)}</h6>
                                        </div>
                                        <p>Taxes and discount codes calculated at checkout</p>
                                        <Link to='#####'>
                                            <Button variant='dark'>CHECK OUT</Button>
                                        </Link>
                                    </div>
                                </>
                            }
                        </Container>

                    </Offcanvas.Body>
                </Offcanvas>
            }
        </div>
    )
}

export default OffcanvasCart