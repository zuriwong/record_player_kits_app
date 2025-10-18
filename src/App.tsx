import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProductDisplay from './components/ProductDisplay';
import { productData } from './data/productData';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    // In a real app, this would add the item to a cart
    console.log('Added to cart! Total items:', cartCount + 1);
  };

  return (
    <div className="app">
      <Navbar />
      <Header
        productData={productData}
        onAddToCart={handleAddToCart}
      />
      <div className="description">
        <div className="container">
          <p className="description-text">
            {productData.description}
          </p>
        </div>
      </div>

      <div className="product-image-section">
        <img 
          src="/images/city_black.png" 
          alt="City Black Vinyl Starter Kit" 
          className="product-image"
        />
      </div>

      <ProductDisplay vinylRecords={productData.vinylRecords} />

      <div className="included-items">
        <div className="container">
          <h3 className="included-title">What's Included</h3>
          <div className="items-grid">
            <div className="item-box">
              <div className="item-icon">🎵</div>
              <h4>Fluance RT82 Turntable</h4>
              <p>High-quality belt-driven turntable with adjustable counterweight</p>
            </div>
            <div className="item-box">
              <div className="item-icon">🔊</div>
              <h4>Fluance Ai41 Speakers</h4>
              <p>Powered bookshelf speakers with exceptional sound quality</p>
            </div>
            <div className="item-box">
              <div className="item-icon">📀</div>
              <h4>5 Curated Vinyl Records</h4>
              <p>Handpicked selection of jazz, hip-hop, and electronic albums</p>
            </div>
            <div className="item-box">
              <div className="item-icon">🔌</div>
              <h4>Premium Audio Cables</h4>
              <p>High-quality RCA and speaker cables for optimal sound</p>
            </div>
            <div className="item-box">
              <div className="item-icon">🧽</div>
              <h4>Record Cleaning Kit</h4>
              <p>Brush and cleaning solution to maintain your vinyl collection</p>
            </div>
            <div className="item-box">
              <div className="item-icon">⚖️</div>
              <h4>Turntable Setup Guide</h4>
              <p>Step-by-step instructions for perfect setup and calibration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;