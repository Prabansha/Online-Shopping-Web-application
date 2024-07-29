// src/components/Order.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Order = () => {
  const { state } = useContext(AppContext);

  return (
    <div>
      <h2>Your Order</h2>
      {state.cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div>
          <h3>Order Summary</h3>
          <ul>
            {state.cart.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p>Total: ${state.cart.reduce((total, item) => total + item.price, 0)}</p>
        </div>
      )}
    </div>
  );
};

export default Order;
