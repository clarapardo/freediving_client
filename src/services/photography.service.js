import axios from 'axios'
import { useParams } from 'react-router-dom'

class PhotographyService {

    constructor() {

        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/photography`
        })
    }

    getAllPhotos = () => {
        return this.app.get('/allPhotos')
    }

    getOnePhoto = (idPhoto) => {
        return this.app.get(`/onePhoto/${idPhoto}`)
    }

    addPhoto = (photoDetails) => {
        return this.app.post('/addPhoto', photoDetails)
    }

    updatePhoto = (photoDetails) => {
        const { idPhoto } = useParams()
        return this.app.put(`/updatePhoto/${idPhoto}`, photoDetails)
    }

    updatePhoto = () => {
        const { idPhoto } = useParams()
        return this.app.delete(`/deletePhoto/${idPhoto}`)
    }
}

const photographyService = new PhotographyService()

export default photographyService