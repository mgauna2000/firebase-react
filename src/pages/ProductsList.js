import React from "react";
import ItemList from "../components/ItemList/ItemList";
// import productsItems from "../utils/productos";
// import { useParams } from "react-router-dom";
// import { collection, getDocs, query, where } from "firebase/firestore"
// import db from "../utils/firebaseConfig";


const ProductsList = () => {

    // const [products, setProducts] = useState([]);

    // const { category } = useParams()

    // useEffect( () => {
    //     setProducts([])
    //     filterByCategory()
    //     .then( (response) => {
    //         // console.log("Then : Respuesta Promesa: ", response)
    //         // setProducts(response)
    //         setProducts(response)
    //     })
    // }, [category])

    // const getProducts = async () => {
    //   const productSnapshot = await getDocs(collection(db, "productos"));
    //   // console.log("productos: ", productSnapshot)
    //   const productList = productSnapshot.docs.map((doc) => {
    //     let product = doc.data()
    //     product.id = doc.id
    //     // console.log("doc: ", product)
    //     return  product
    //   })
    //   //seguir viendo desde falta 40 min para que finalize
    //   // console.log("productList: ", productList)
    //   return productList
    // }

    // const filterByCategory = (array) => {
    //     return array.map((item) => {
    //         if(item.category == category) {
    //             return setProducts(products => [...products, item])
    //         }
    //     })
    // }

    // const filterByCategory = async () => {
    //   const productRef = collection(db, "productos")
    //   const queryResult = query(productRef, where("category", "==", category))
    //   const querySnapshot = await getDocs(queryResult)
    //   const productList = querySnapshot.docs.map((doc) => {
    //     let product = doc.data()
    //     product.id = doc.id
    //     return product
    //   })
    //   console.log("producto filtrado: ", productList)
    //   return productList
    // }

    
  return (
    <>
          <ItemList />
    </>
  )
}

export default ProductsList