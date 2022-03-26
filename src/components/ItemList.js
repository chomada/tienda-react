import React from 'react'
import ItemCount from './ItemCount'

const ItemList = ({products,stock}) => {


  return (
    <>
            <div>
                {products.map(prod => {
                     return <ItemCount 
                     products={prod}
                     stock={stock}/>
                })}
            </div>
        </>
  )
}

export default ItemList