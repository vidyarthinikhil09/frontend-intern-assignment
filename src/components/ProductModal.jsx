import React from 'react';

// 1. Receive 'onAddToCart' as a prop
const ProductModal = ({ product, onClose, onAddToCart }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-40 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[#1a1a2e] rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row gap-6 p-6 border border-[#a7a9be]/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-[#a7a9be] hover:text-[#fffffe] text-3xl"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="w-full md:w-1/3 flex-shrink-0 bg-white p-4 rounded-lg flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-64 md:max-h-full object-contain"
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-col">
          <h2 className="text-2xl font-bold mb-2 text-[#fffffe]">
            {product.title}
          </h2>
          
          <p className="capitalize text-[#e53170] text-sm font-medium mb-4">
            {product.category}
          </p>

          <div className="flex items-center mb-4">
            <span className="text-[#ff8906]">⭐</span> 
            <span className="ml-1.5 text-sm font-bold text-[#fffffe]">{product.rating.rate}</span>
            <span className="ml-2 text-sm text-[#a7a9be]">({product.rating.count} reviews)</span>
          </div>

          <p className="text-base text-[#a7a9be] mb-6 flex-grow">
            {product.description}
          </p>

          <div className="flex justify-between items-center mt-auto">
            <p className="text-3xl font-extrabold text-[#f25f4c]">
              ${product.price}
            </p>
            
            {/* 2. Add the onClick event handler */}
            <button
              onClick={() => onAddToCart(product)}
              className="px-6 py-2 rounded-lg text-[#fffffe] font-semibold transition-all bg-[#ff8906] hover:bg-[#ff8906]/80"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;