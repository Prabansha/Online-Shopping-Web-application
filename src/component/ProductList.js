// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
//import ProductService from '../services/ProductService';
//import ProductService from '../services/ProductService';
import ProductService from '../services/ProductService';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products', error));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <a href={`/products/${product.id}`}>{product.name}</a> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
