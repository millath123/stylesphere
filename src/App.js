import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home';
import Cart from '../src/pages/Cart';
import {CartProvider} from '../src/context/CartContext'


export default function App() {
  return (
    <BrowserRouter>
     <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </CartProvider> 
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
