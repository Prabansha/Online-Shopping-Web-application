import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './component/ProductList';
import ProductDetails from './component/ProductDetails';
import Cart from './component/Cart';
import Order from './component/Order';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;
