import React from 'react'
import ItemCount from './ItemCount';

const ItemList = ({ products }) => {
  

  return (
    <>
      <div>
        {products.map(prod => {
          return <ItemCount
          
            products={prod}
             />
        })}
      </div>
    </>
  )
}

export default ItemList