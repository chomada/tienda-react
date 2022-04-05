import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ greetings }) => {

    const [personaje, setPersonaje] = useState([]);


    useEffect(() => {

        (async () => {

            try {

                const response = await fetch('https://rickandmortyapi.com/api/character/8');

                const data = await response.json();

                setPersonaje(data);
            } catch (error) {
                console.log(error);
            }

        })()

    }, [])

    return (
        <>
            <h1>{greetings}</h1>
            <ItemDetail
                personaje={personaje}

            />
        </>

    )
}

export default ItemDetailContainer;