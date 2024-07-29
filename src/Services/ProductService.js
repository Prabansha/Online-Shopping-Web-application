import axios from 'axios';


const API_URL = '/api/products';

const getProducts = () => {
  return axios.get(API_URL);
};

const getProductById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const ProductService = {
  getProducts,
  getProductById,
};

export default ProductService;
