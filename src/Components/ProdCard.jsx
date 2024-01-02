import React from "react";

const ProdCard = ({ thumbnail, price, title }) => {
  return (
    <div className="card">
      <img src={thumbnail} alt="prod_image" />
      <p>{title}</p>
      <p>${price}</p>
      <button>Add</button>
    </div>
  );
};

export default ProdCard;
