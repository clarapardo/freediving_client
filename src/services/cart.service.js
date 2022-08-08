import axios from 'axios'
import { useParams } from 'react-router-dom'

class CartService {

    constructor() {

        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/cart`
        })
    }

    getCart = (userId) => {
        return this.app.get(`/${userId}/getCart`)
    }

    addItem = ({ userId, idPhoto }) => {
        return this.app.put(`/${userId}/addItem`, { idPhoto })
    }

    removeItem = ({ userId, idPhoto }) => {
        return this.app.put(`/${userId}/removeItem`, { idPhoto })
    }

    deleteCart = (userId) => {
        return this.app.delete(`/${userId}/removeCart`)
    }

}

const cartService = new CartService()

export default cartService