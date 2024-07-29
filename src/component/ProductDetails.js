import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import ProductService from '../services/ProductService';
//import { AppContext } from '../context/AppContext';
import ProductService from '../services/ProductService';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    ProductService.getProductById(id).then(response => setProduct(response.data));
  }, [id]);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetails;
