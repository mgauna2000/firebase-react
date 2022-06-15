import React, { useState, useEffect }from "react";
import ItemList from "../ItemList/ItemList";
import productsItems from "../../utils/productos";
// import Item from "../Item/Item";
// import ItemListContainer from "../ItemListContainer/ItemListContainer";

export const CardList = () => {

  const [products, setProducts] = useState([]);

  

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsItems);
      }, 1000);
    });
  };

    useEffect( () => {
        getProducts()
        .then( (response) => {
            // console.log("Then : Respuesta Promesa: ", response)
            setProducts(response)
        })
        .catch( (err) => {
            console.log("Catch: Fallo la llamada.", err)
        })
        .finally( () => {
            console.log("Finally: termino la promesa")
        })
    }, [])

  return (
    <>
          <ItemList products={products}/>
    </>
  );
};
