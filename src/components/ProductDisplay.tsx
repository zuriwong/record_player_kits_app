import React from 'react';
import { VinylRecord } from '../data/productData';

interface ProductDisplayProps {
  vinylRecords: VinylRecord[];
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ vinylRecords }) => {
  return (
    <div className="product-display">
      {/* Product image is now the page background */}
    </div>
  );
};

export default ProductDisplay;