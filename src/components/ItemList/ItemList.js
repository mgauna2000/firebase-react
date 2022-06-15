import React from "react";
// import { CardList } from "../CardList/CardList";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
// import ItemListContainer from '../ItemListContainer/ItemListContainer'

const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 my-4 g-4 grid">
        {products.map(({ title, price, image, stock, id }) => {
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
