import React, { useState } from 'react'
import { Button,Card } from 'react-bootstrap';

const ItemCount = ({products,stock}) => {

    
    
    const [initial, setInitial]=useState(1);

    const add =()=>{
        if(stock>0) alert(`Se agrego ${initial} unidad/es del producto seleccionado al carrito`);
        else alert("no hay stock disponible")
    }
    const plus =()=>{
        if(initial<stock)setInitial(initial+1);
        
        
    }
    const min =()=>{
        if (initial>1)setInitial(initial-1);
    }
  return (
      <>
                <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{products.name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary"onClick={min}>-</Button>{initial}<Button variant="primary"onClick={plus}>+</Button>
                
            </Card.Body>
            <Card.Footer> <Button variant="primary" onClick={add}>Add to Cart</Button></Card.Footer>
               
            </Card>
      </>

  )
}

export default ItemCount