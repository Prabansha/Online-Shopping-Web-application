// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import ProductList from './component/ProductList';
import ProductDetails from './component/ProductDetails';
import Cart from './component/Cart';
import Order from './component/Order';
import AppProvider from './context/AppContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Note the change from Switch to Routes


const HomePage = () => (
  <div>
    <header>
      <h1>Welcome to Our E-Commerce Store</h1>
      <p>Discover the best products at unbeatable prices!</p>
    </header>
    <ProductList />
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/order" component={Order} />
        </Routes>
      </AppProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
