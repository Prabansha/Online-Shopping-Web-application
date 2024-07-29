import React, { createContext, useReducer } from 'react';

const initialState = {
  cart: [],
  order: [],
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SET_ORDERS':
      return { ...state, orders: action.payload };
    default:
      return state;
  }
};

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;