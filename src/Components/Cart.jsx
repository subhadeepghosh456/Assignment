import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const totalItems = useSelector((store) => store.cartinfo.items);
  const totalAmount = useSelector((store) => store.cartinfo.totalAmount);
  return (
    <div className="cart-container">
      <h1 className="">Cart</h1>
      <div className="cart-info">
        <p>Total Amount:-${totalAmount}</p>
        <p>Total Item:-{totalItems.length}</p>
      </div>
      <div className="home-container">
        {totalItems.map((item, index) => {
          return (
            <div className="card" key={index}>
              <img src={item.thumbnail} alt="prod_image" />
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
