import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../redux/cartSlice";

const  Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>The cart is empty</p> : 
        cartItems.map((item) => (
          <div key={item.id} style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
            <h4>{item.name}</h4>
            <p>{item.price} JD</p>
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) =>
                dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
              }
            />
            <button onClick={() => dispatch(removeFromCart(item.id))}>removal</button>
          </div>
        ))
      }
    </div>
  );
};

export default Cart;