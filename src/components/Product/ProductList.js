import React from 'react';
import useFetchProducts from '../../hooks/useFetchProducts';
import { useCart } from '../../context/CartContext';
import '../../components/Product/Product.css';
import LandingPage from '../Header/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = () => {
  const { data: products } = useFetchProducts('https://fakestoreapi.com/products');
  const { addToCart } = useCart();

  return (
    <div>
      <div><LandingPage /></div>
      <div className="container product-list-container">
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="product-card">
                <img src={product.image} className="img-fluid product-image" alt={product.title} />
                <h3>{product.title.slice(0, 10)}</h3>
                <p>{product.description.slice(0, 60)}</p>
                <p>Rs.{product.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
