import React, { useEffect, useState } from "react";
// import { CardList } from "../CardList/CardList";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
// import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../utils/firebaseConfig";

const ItemList = () => {

  const [producto, setProducto] = useState([]);

  const { category } = useParams()

  useEffect(() => {
    getProducts()
    .then((productos) => {
     category ? filterByCategory() : setProducto(productos)
    })
  }, [category])

  const getProducts = async () => {
    const productSnapshot = await getDocs(collection(db, "productos"));
    // console.log("productos: ", productSnapshot)
    const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data()
      product.id = doc.id
      // console.log("doc: ", product)
      return  product
    })
    //seguir viendo desde falta 40 min para que finalize
    // console.log("productList: ", productList)
    return productList
  }

  const filterByCategory = async () => {
    const productRef = collection(db, "productos")
    const queryResult = query(productRef, where("category", "==", category))
    const querySnapshot = await getDocs(queryResult)
    const productList = querySnapshot.docs.map((doc) => {
      let product = doc.data()
      product.id = doc.id
      return product
    })
    console.log("producto filtrado: ", productList)
    return setProducto(productList)
  }

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 my-4 g-4 grid">
        {producto.map(({ title, price, image, stock, id }) => {
          return (
            <div className="container" key={id}>
              <ItemListContainer
                title={title}
                price={price}
                image={image}
                stock={stock}
                id={id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
