import React from "react";

const ItemCount = ({amount, updateAmount, stock, setShowButton}) => {

    const addCount = () => {
        if(amount < stock) {
            updateAmount(amount + 1)
        }
    }

    const removeCount = () => {
        if(amount > 1) {
            updateAmount(amount - 1)
        }
    }

  return (
    <>
      <div className="container m-1">
        <div className="row align-items">
          <div className="col-5">
            <button className="btn btn-primary" onClick={removeCount}>-</button>
          </div>
          <div className="col-2">
            <p>{amount}</p>
          </div>
          <div className="col-5">
            <button className="btn btn-primary" onClick={addCount}>+</button>
          </div>
        </div>
        <button
              type="button"
              onClick={() => setShowButton(true)}
              className="btn btn-dark btn-add"
            >
              Agregar al carrito
            </button>
      </div>
    </>
  );
};

export default ItemCount;
