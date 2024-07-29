import axios from 'axios';

const API_URL = '/api/cart';

const addToCart = (product) => {
  return axios.post(`${API_URL}/add`, product);
};

const getCartItems = () => {
  return axios.get(`${API_URL}/items`);
};

const removeFromCart = (id) => {
  return axios.delete(`${API_URL}/remove/${id}`);
};

const CartService = {
  addToCart,
  getCartItems,
  removeFromCart,
};

export default CartService;
