import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greetings}) => {
  return (
      <>
        <h1>{greetings}</h1>
        <ItemCount/>
      </>
    

  )
}

export default ItemListContainer