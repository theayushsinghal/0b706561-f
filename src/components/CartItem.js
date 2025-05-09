import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart, deleteFromCart } = useCart();

  // Calculate the item subtotal
  const itemSubtotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="flex items-center py-4 border-b border-gray-200 last:border-b-0">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mr-4">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M168,88a40,40,0,0,1-80,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
          <button 
            onClick={() => deleteFromCart(item)}
            className="text-red-500 hover:text-red-700 ml-4"
            aria-label="Remove item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><line x1="216" y1="60" x2="40" y2="60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="88" y1="20" x2="168" y2="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          </button>
        </div>
        
        <p className="mt-1 text-sm text-gray-500">
          {item.category}
          {item.size && <span> / {item.size}</span>}
          {item.color && <span> / {item.color}</span>}
        </p>
        
        <div className="mt-2 flex justify-between items-center">
          <div className="flex items-center border border-gray-300 rounded">
            <button
              onClick={() => removeFromCart(item)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="px-3 py-1 text-gray-900">{item.quantity}</span>
            <button
              onClick={() => addToCart(item)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">${itemSubtotal}</p>
            <p className="text-xs text-gray-500">${item.price.toFixed(2)} each</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;