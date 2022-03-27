import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ greetings }) => {

    const [products, setProducts] = useState([]);

    const stock = 10;

    useEffect(() => {

        (async () => {
            try {
                const response = await fetch('/data.json');

                const data = await response.json();

                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        })()

    }, [])



    return (
        <>
            <h1>{greetings}</h1>
            <ItemList
                products={products}
                stock={stock}
            />
        </>


    )
}

export default ItemListContainer