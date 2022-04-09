import React from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate  } from 'react-router-dom';
const Item = ({ products }) => {
    const navigate=useNavigate();
   
    return (
        <>
            <Card onClick={() => navigate(`/item/${products.id}`)} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={products.image} />
                <Card.Body>
                    <Card.Title>{products.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>


                </Card.Body>
                <Card.Footer></Card.Footer>

            </Card>
        </>

    )
}

export default Item