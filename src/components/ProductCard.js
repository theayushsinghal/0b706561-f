import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  
  // Format price with 2 decimal places
  const formattedPrice = product.price.toFixed(2);
  
  // Calculate discount percentage if applicable
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image with badges */}
      <div className="relative overflow-hidden h-48 sm:h-64">
        {/* Product image */}
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M168,88a40,40,0,0,1-80,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          </div>
        )}
        
        {/* Sale badge */}
        {hasDiscount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discountPercentage}% OFF
          </div>
        )}
        
        {/* New badge */}
        {product.isNew && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}
        
        {/* Quick actions */}
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-2 px-3 transition-transform duration-300 flex justify-center ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <button 
            onClick={() => addToCart(product)}
            className="text-white text-sm font-medium hover:text-indigo-300 transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><path d="M20,32H40L76.75,164.28A16,16,0,0,0,92.16,176H191a16,16,0,0,0,15.42-11.72L232,72H51.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="88" cy="220" r="20"/><circle cx="192" cy="220" r="20"/></svg>
            <span className="ml-2">Quick Add</span>
          </button>
        </div>
      </div>
      
      {/* Product details */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category */}
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
          {product.category}
        </p>
        
        {/* Title */}
        <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-1 line-clamp-2 flex-grow">
          {product.title}
        </h3>
        
        {/* Rating */}
        {product.rating && (
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < Math.floor(product.rating) ? (
                    <span>★</span>
                  ) : i < Math.ceil(product.rating) && product.rating % 1 !== 0 ? (
                    <span>⯨</span>
                  ) : (
                    <span className="text-gray-300">★</span>
                  )}
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              ({product.reviewCount || 0})
            </span>
          </div>
        )}
        
        {/* Price */}
        <div className="flex items-baseline mt-1">
          <span className="text-base font-semibold text-gray-900">
            ${formattedPrice}
          </span>
          {hasDiscount && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
      
      {/* Add to cart button */}
      <div className="px-4 pb-4">
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
        >
          <span>Add to Cart</span>
          <span className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="144 96 96 96 96 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="160" x2="96" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;