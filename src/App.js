import './App.css';
import Header from '../src/components/Header/Header'
import ProductList from '../src/components/Product/ProductList';
import Cart from '../src/components/Cart/Cart';
import { CartProvider } from '../src/context/CartContext';


function App() {
  return (
    <>
    <CartProvider>
    <Header/>
    <ProductList/>
    <Cart/>
    </CartProvider>
    </>
   
  );
}

export default App;
