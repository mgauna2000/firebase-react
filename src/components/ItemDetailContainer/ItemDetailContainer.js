import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
// import productos from "../../utils/productos";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"
import db from "../../utils/firebaseConfig";


const ItemDetailContainer = () => {

  const { id } = useParams()

  const [product, setProduct] = useState({});



  useEffect(() => {
    // console.log("producto filtrado por: ", productFilter)
      // setProduct(productFilter)
      getProduct()
      .then((prod) => {
        setProduct(prod)
      })
  }, [id]);

  const getProduct = async () => {
    const docRef = doc(db, "productos", id)
    const docSnaptshop = await getDoc(docRef)
    let product = docSnaptshop.data()
    product.id = docSnaptshop.id
    return product
  }

  // const productFilter = productos.find((product) => {
  //   return product.id == id
  // })

  return (
    <>
      <div className="container">
        <ItemDetail data={product} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
