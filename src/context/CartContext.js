import React, { createContext, useContext, useReducer, useEffect } from "react";

// Create the cart context
const CartContext = createContext();

// Initial state
const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  isCartOpen: false
};

// Cart reducer for handling various cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );
      
      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price
        };
      } else {
        // Add new item
        const newItem = {
          ...action.payload,
          quantity: 1
        };
        
        return {
          ...state,
          items: [...state.items, newItem],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price
        };
      }
    }
    
    case "REMOVE_ITEM": {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );
      
      if (existingItemIndex >= 0) {
        const item = state.items[existingItemIndex];
        
        if (item.quantity > 1) {
          // Reduce quantity
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity - 1
          };
          
          return {
            ...state,
            items: updatedItems,
            totalItems: state.totalItems - 1,
            totalPrice: state.totalPrice - item.price
          };
        } else {
          // Remove item completely
          return {
            ...state,
            items: state.items.filter(item => item.id !== action.payload.id),
            totalItems: state.totalItems - 1,
            totalPrice: state.totalPrice - item.price
          };
        }
      }
      return state;
    }
    
    case "DELETE_ITEM": {
      const item = state.items.find(item => item.id === action.payload.id);
      
      if (item) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
          totalItems: state.totalItems - item.quantity,
          totalPrice: state.totalPrice - (item.price * item.quantity)
        };
      }
      return state;
    }
    
    case "CLEAR_CART":
      return {
        ...initialState,
        isCartOpen: state.isCartOpen
      };
      
    case "TOGGLE_CART":
      return {
        ...state,
        isCartOpen: !state.isCartOpen
      };
      
    default:
      return state;
  }
};

// Provider component
export const CartProvider = ({ children }) => {
  // Initialize from localStorage if available
  const loadCartFromStorage = () => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : initialState;
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return initialState;
    }
  };

  const [cartState, dispatch] = useReducer(cartReducer, loadCartFromStorage());

  // Save to localStorage when cart changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartState));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cartState]);

  // Cart actions
  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_ITEM", payload: product });
  };

  const deleteFromCart = (product) => {
    dispatch({ type: "DELETE_ITEM", payload: product });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  // Context value with state and actions
  const value = {
    items: cartState.items,
    totalItems: cartState.totalItems,
    totalPrice: cartState.totalPrice,
    isCartOpen: cartState.isCartOpen,
    addToCart,
    removeFromCart,
    deleteFromCart,
    clearCart,
    toggleCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook for using cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartContext;