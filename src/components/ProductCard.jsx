import React from 'react';
// No CSS import

const ProductCard = ({ product, onCardClick }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onClick={() => onCardClick(product)}
    >
      <div className="w-full h-48 p-4 bg-white flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2" title={product.title}>
          {product.title}
        </h3>

        <div className="flex items-center my-2">
          <span className="text-[#ff8906]">⭐</span> 
          <span className="ml-1.5 text-sm font-bold text-[#fffffe]">{product.rating.rate}</span>
          <span className="ml-2 text-sm text-[#a7a9be]">({product.rating.count} reviews)</span>
        </div>
        
        <p className="text-xl font-bold text-blue-600 dark:text-blue-400 mt-auto">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;