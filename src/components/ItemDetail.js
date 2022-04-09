import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import ItemCount from './ItemCount'


const ItemDetail = ({ personaje,stock }) => {
    


    const [initial, setInitial] = useState(1);
    
    const [buy,setBuy]=useState(false);
    const add = () => {
        setBuy(true)
        if (stock > 0) alert(`Se agrego ${initial} unidad/es del producto seleccionado al carrito`);
        else alert("no hay stock disponible")
    }
    const terminate=()=>{
        alert("Ir al carrito")

    }

    return (
        <>
        <Card   style={{ width: '18rem' }}>
             <Card.Img variant="top" src={personaje.image} /> 
            <Card.Body>
                <Card.Title>{personaje.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
              {buy?  <Button variant="primary" onClick={terminate}>Go to cart</Button>:
              <ItemCount 
               initial={initial}
               setInitial={setInitial}
               stock={stock}/>
              }

            </Card.Body>
            {buy?null:<Card.Footer> <Button variant="primary" onClick={add}>Add to Cart</Button></Card.Footer>}

        </Card>
    </>
       
    )
}

export default ItemDetail