import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ greetings }) => {

    const [personaje, setPersonaje] = useState([]);

    const {id}=useParams();
    const stock = 10;

    useEffect(() => {

        (async () => {

            try {

                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

                const data = await response.json();

                setPersonaje(data);
            } catch (error) {
                console.log(error);
            }

        })()

    }, [id])

    return (
        <>
            <h1>{greetings}</h1>
            <ItemDetail
                personaje={personaje}
                stock={stock}

            />
        </>

    )
}

export default ItemDetailContainer;
