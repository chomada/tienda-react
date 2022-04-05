import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';

const ItemDetail = ({ personaje }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={personaje.image} />
                <Card.Body>
                    <Card.Title>{personaje.name}</Card.Title>
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

export default ItemDetail