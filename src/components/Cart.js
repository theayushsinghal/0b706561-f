import React from "react";
import CartItem from "./CartItem";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { items, totalItems, totalPrice, isCartOpen, toggleCart, clearCart } = useCart();
  
  // Format price with 2 decimal places
  const formattedTotalPrice = totalPrice.toFixed(2);

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={toggleCart}
      ></div>
      
      {/* Cart panel */}
      <div className={`absolute top-0 right-0 w-full max-w-md h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full">
          {/* Cart header */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-medium text-gray-900">Shopping Cart ({totalItems})</h2>
            <button 
              onClick={toggleCart}
              className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Close cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Cart content */}
          <div className="flex-1 px-4 py-6 overflow-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
                <p className="mt-1 text-sm text-gray-500">Start shopping to add items to your cart</p>
                <button 
                  onClick={toggleCart}
                  className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div>
                <div className="flow-root">
                  <ul className="-my-6">
                    {items.map((item) => (
                      <li key={item.id} className="py-2">
                        <CartItem item={item} />
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <button
                    onClick={clearCart}
                    className="text-sm text-indigo-600 hover:text-indigo-500 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Clear cart
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Cart footer with totals */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 px-4 py-6 bg-gray-50">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <p>Subtotal</p>
                <p>${formattedTotalPrice}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900 mt-4 mb-6">
                <p>Total</p>
                <p>${formattedTotalPrice}</p>
              </div>
              <div>
                <button
                  type="button"
                  className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Checkout
                </button>
                <div className="mt-4 flex justify-center text-sm text-center text-gray-500">
                  <p>
                    or{" "}
                    <button
                      type="button"
                      className="text-indigo-600 font-medium hover:text-indigo-500"
                      onClick={toggleCart}
                    >
                      Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;