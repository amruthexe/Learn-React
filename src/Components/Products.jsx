import React from "react";

const Products = () => {
  const Products = {
    name: "iphone",
    price: "1000",
    avaliablity: "in stock",
  };
  return (
    <div>
      <h1>Products</h1>
      <p>name:{Products.name}</p>
      <p>price:{Products.price}</p>
      <p>avaliablity:{Products.avaliablity}</p>
    </div>
  );
};

export default Products;
