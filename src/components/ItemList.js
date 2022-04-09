import React from 'react'
import Item from './Item';

const ItemList = ({ products }) => {
  

  return (
    <>
      <div>
        {products.map(prod => {
          return <Item
          
            products={prod}
             />
        })}
      </div>
    </>
  )
}

export default ItemList