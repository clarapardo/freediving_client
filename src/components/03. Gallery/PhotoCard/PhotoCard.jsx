import './PhotoCard.css'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const PhotoCard = (photoData) => {

    return (
        <Link to={`/photoDetails/${photoData._id}`} className="PhotoCard" style={{ ...styles[photoData.gridSize] }}>
            <img src={photoData.photoUrl} />
        </Link>
    )
}


const styles = {
    square: {
        gridRowEnd: 'span 15'
    },
    small: {
        gridRowEnd: 'span 10'
    },
    medium: {
        gridRowEnd: 'span 20'
    },
    large: {
        gridRowEnd: 'span 30'
    },
    extralarge: {
        gridRowEnd: 'span 40'
    }
}

export default PhotoCard