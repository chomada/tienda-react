import React from 'react'
import { Button } from 'react-bootstrap';


const ItemCount = ({ initial,setInitial,stock }) => {
    


    

   
    const plus = () => {
        if (initial < stock) setInitial(initial + 1);


    }
    const min = () => {
        if (initial > 1) setInitial(initial - 1);
    }
    return (
        <>
         <Button variant="primary" onClick={min}>-</Button>{initial}<Button variant="primary" onClick={plus}>+</Button>
    </>
       
    )
}

export default ItemCount