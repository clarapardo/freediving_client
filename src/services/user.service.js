import axios from 'axios'
import { useParams } from 'react-router-dom'

class UserService {

    constructor() {

        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`
        })
    }

    updateUser = ({ userId, userData }) => {
        return this.app.put(`/${userId}/updateBasics`, userData)
    }

}

const userService = new UserService()

export default userService