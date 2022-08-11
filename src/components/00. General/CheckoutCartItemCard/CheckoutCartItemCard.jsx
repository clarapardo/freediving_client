import './CheckoutCartItemCard.css'
import { Row, Col, Button } from 'react-bootstrap'

const CheckoutCartItemCard = ({ item }) => {

    return (
        <div className="CheckoutCartItemCard">

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
                </Col>

            </Row >

        </div>
    )

}

export default CheckoutCartItemCard