import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import products from "../data/products.json";

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>products List</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
            <img src={product.image} alt={product.name} style={{ width: "100px" }} />
            <h4>{product.name}</h4>
            <p>{product.price} JD</p>
            <button onClick={() => dispatch(addToCart(product))}>Move to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;