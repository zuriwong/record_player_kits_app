import React from 'react';
import { ProductData } from '../data/productData';

interface HeaderProps {
  productData: ProductData;
  onAddToCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ productData, onAddToCart }) => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="product-title">{productData.name}</h1>
        <h2 className="product-subtitle">{productData.subtitle}</h2>
        <div className="price">{productData.price}</div>
        <div className="shipping">{productData.shipping}</div>
        <button className="add-to-cart-btn" onClick={onAddToCart}>
          Add to cart
        </button>
      </div>
    </header>
  );
};

export default Header;