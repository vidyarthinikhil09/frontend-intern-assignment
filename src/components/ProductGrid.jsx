import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onCardClick }) => {
  return (
    // UPDATED: From 'grid-cols-auto-fill' to explicit responsive columns
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onCardClick={onCardClick} 
        />
      ))}
    </div>
  );
};

export default ProductGrid;