// src/components/Cart.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Cart = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {state.cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          state.cart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cart;
