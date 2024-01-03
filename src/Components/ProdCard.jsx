import React from "react";
import { useDispatch } from "react-redux";
import { addItems, calculateTotalAmount } from "../Redux/cartSlice";

const ProdCard = ({ thumbnail, price, title }) => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(addItems({ thumbnail, price, title }));
    dispatch(calculateTotalAmount());
  }
  return (
    <div className="card">
      <img src={thumbnail} alt="prod_image" />
      <p>{title}</p>
      <p>${price}</p>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default ProdCard;
