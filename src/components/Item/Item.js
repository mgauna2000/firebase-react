import React, { useEffect } from 'react'
import producto from '../../utils/producto'
import ItemCount from '../ItemCount/ItemCount'

const Item = () => {

  useEffect(() => {
    fetch('../../services/product-services')
    .then((response) => {
      return response.json()
    })
    .then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 my-4 g-4 grid">
      <div className="card">
          <img src={`./${producto.image}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{producto.title}</h5>
            <p className="card-text">${producto.price}</p>
            <ItemCount stock={5} initial={1}/>
            <button type="button" className="btn btn-secondary">
              Añadir al carrito
            </button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Item