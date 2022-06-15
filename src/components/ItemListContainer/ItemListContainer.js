import React, { Fragment } from "react";
// import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";
import CartContext from '../../context/CardContext'
import { useContext } from "react";

const ItemListContainer = ({ image, title, price, id }) => {

  // console.log("producto: ", id)

  const { addProductToCart } = useContext(CartContext)

  return (
    <Fragment>
      <div className="col">
        <div className="card">
          <img src={`/${image}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">${price}</p>
            {/* <ItemCount stock={5} initial={1}/> */}
            <button type="button" className="btn btn-secondary">
              <Link to={`/productos/${id}`}>
              ver detalle
              </Link>
            </button>
            <button type="button" className="btn btn-secondary m-3" onClick={() => addProductToCart({ image, title, price, id })}>
              {/* <Link to={}> */}
              Agregar producto
              {/* </Link> */}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemListContainer;
