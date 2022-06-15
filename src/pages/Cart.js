import React, { useContext } from "react";
import CartContext from "../context/CardContext";

const Cart = () => {
  const { cartListItems, totalPrice, removeProduct } = useContext(CartContext);
  console.log("items desde check: ", cartListItems);

  return (
    <>
      <div className="table-responsive">
        <h2 className="m-4">Productos agregados</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Quitar</th>
            </tr>
          </thead>
          <tbody>
            {cartListItems.map((item) => {
              const { id, title, image, price } = item;
              // const { id, title, image, price, amount } = item;

              return (
                <tr key={id}>
                  <td>
                    <img
                      src={`/${image}`}
                      style={{ width: "100px", height: "auto" }}
                    ></img>
                  </td>
                  <td className="pt-5">{title}</td>
                  <td className="pt-5">$ {price}</td>
                  {/* tengo que hacer que se sume el precio segun la cantidad elegida  */}
                  {/* <td className="pt-5">{amount}</td> */}
                  <td className="pt-5">5</td>
                  <td className="pt-5">$ 2000</td>
                  <td className="text-center pt-5">
                    <i className="fa-solid fa-trash" style={{cursor: "pointer"}} onClick={() => removeProduct(id)}></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
        <h2 className="text-center">Total</h2>
        <p>$ {totalPrice}</p>
        </div>
        <button className="btn btn-secondary">Completar compra</button>
      </div>
    </>
  );
};

export default Cart;
