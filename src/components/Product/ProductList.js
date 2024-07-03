import React from 'react';
import useFetchProducts from '../../hooks/useFetchProducts';
import { useCart } from '../../context/CartContext';
import '../../components/Product/Product.css';

const ProductList = () => {
  const { data: products } = useFetchProducts('https://fakestoreapi.com/products');
  const { addToCart } = useCart();
  return (
     
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} style={{ width: '110px', height: '110px' }} alt={product.title}       />
          <h3>{product.title.slice(0, 10)}</h3>
          <p>{product.description.slice(0, 60)}</p>
          <p>Rs.{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
