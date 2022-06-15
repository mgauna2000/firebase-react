import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList/ItemList";
import productsItems from "../utils/productos";
import { useParams } from "react-router-dom";

const ProductsList = () => {

    const [products, setProducts] = useState([]);

    const { category } = useParams()

    useEffect( () => {
        setProducts([])
        getProducts()
        .then( (response) => {
            // console.log("Then : Respuesta Promesa: ", response)
            // setProducts(response)
            filterByCategory(response)
        })
    }, [category])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(productsItems);
          }, 1000);
        });
      };

    const filterByCategory = (array) => {
        return array.map((item) => {
            if(item.category == category) {
                return setProducts(products => [...products, item])
            }
        })
    }

  return (
    <>
          <ItemList products={products}/>
    </>
  )
}

export default ProductsList