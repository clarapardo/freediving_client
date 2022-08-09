import './CartIcon.css'
import { useState, useEffect, useContext } from 'react'
import cartService from '../../../services/cart.service'
import { AuthContext } from '../../../contexts/auth.context'
import { useLocation } from 'react-router-dom'


const CartIcon = ({ show, setShow }) => {

    let location = useLocation()
    const [invisible, setInvisible] = useState(true)

    useEffect(() => {
        setInvisible(window.location.pathname === '/')
    }, [location])

    return (
        <>
            {!invisible && <div className="CartIcon" onClick={() => setShow(true)} style={{ cursor: 'pointer' }}>
                <img src='/img/cart-empty.png' alt="cart empty" />
            </div >}
        </>
    )
}

export default CartIcon