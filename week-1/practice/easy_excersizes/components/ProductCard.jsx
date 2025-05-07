import React from "react";

const ProductCard = (props) => {
  return (
    <div>
      <h3>{props.itemType}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default ProductCard;
