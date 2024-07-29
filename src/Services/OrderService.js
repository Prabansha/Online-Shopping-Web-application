import axios from 'axios';

const API_URL = '/api/orders';

const createOrder = (order) => {
  return axios.post(`${API_URL}/create`, order);
};

const getOrders = () => {
  return axios.get(`${API_URL}/all`);
};

const getOrderById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const OrderService = {
  createOrder,
  getOrders,
  getOrderById,
};

export default OrderService;
