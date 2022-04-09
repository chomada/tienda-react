import React, { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = ({ greetings }) => {

    const [products, setProducts] = useState([]);
    const {id}= useParams();
    

    useEffect(() => {

        (async () => {
            try {
                const listado=[];
                for (let i = 1; i < 43; i++) {
                    let response = await fetch(`https://rickandmortyapi.com/api/character/?page=${i}`);
                    let data = await response.json();
                    const personajes = data.results;
                    personajes.forEach(element => listado.push(element)
                        
                    );
                
                 }
                 const personajesFiltrados = listado.filter(personaje => personaje.species === id)
                 setProducts(personajesFiltrados)
                 
                  
               
            } catch (error) {
                console.log(error);
            }
                
        })()

    }, [id])



    return (
        <>
            <h1>{greetings}</h1>
            <ItemList
                products={products}
                
            />
        </>


    )
}

export default ItemListContainer