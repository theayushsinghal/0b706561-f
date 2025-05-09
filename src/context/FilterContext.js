import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import { products } from "../data/products";

// Create the filter context
const FilterContext = createContext();

// Initial state
const initialState = {
  allProducts: [],
  filteredProducts: [],
  filters: {
    category: "all",
    priceRange: { min: 0, max: 1000 },
    searchQuery: "",
    sort: "featured" // Options: featured, price-asc, price-desc, name-asc, name-desc
  }
};

// Filter reducer
const filterReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload,
        filteredProducts: action.payload
      };
    
    case "SET_CATEGORY_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          category: action.payload
        }
      };
    
    case "SET_PRICE_RANGE":
      return {
        ...state,
        filters: {
          ...state.filters,
          priceRange: action.payload
        }
      };
    
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        filters: {
          ...state.filters,
          searchQuery: action.payload
        }
      };
    
    case "SET_SORT":
      return {
        ...state,
        filters: {
          ...state.filters,
          sort: action.payload
        }
      };
    
    case "RESET_FILTERS":
      return {
        ...state,
        filters: {
          ...initialState.filters
        }
      };
    
    case "UPDATE_FILTERED_PRODUCTS":
      return {
        ...state,
        filteredProducts: action.payload
      };
      
    default:
      return state;
  }
};

// Provider component
export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  
  // Initialize products on component mount
  useEffect(() => {
    dispatch({ type: "INITIALIZE_PRODUCTS", payload: products });
    
    // Extract unique categories
    const uniqueCategories = ["all", ...new Set(products.map(product => product.category))];
    setCategories(uniqueCategories);
    
    // Determine min and max prices
    if (products.length > 0) {
      const prices = products.map(product => product.price);
      const minPrice = Math.floor(Math.min(...prices));
      const maxPrice = Math.ceil(Math.max(...prices));
      setPriceRange({ min: minPrice, max: maxPrice });
      
      // Set initial price range filter
      dispatch({ 
        type: "SET_PRICE_RANGE", 
        payload: { min: minPrice, max: maxPrice } 
      });
    }
  }, []);
  
  // Apply filters whenever filter state changes
  useEffect(() => {
    applyFilters();
  }, [state.filters, state.allProducts]);
  
  // Filter and sort products based on current filters
  const applyFilters = () => {
    let filteredResults = [...state.allProducts];
    const { category, priceRange, searchQuery, sort } = state.filters;
    
    // Filter by category
    if (category !== "all") {
      filteredResults = filteredResults.filter(
        product => product.category === category
      );
    }
    
    // Filter by price range
    filteredResults = filteredResults.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredResults = filteredResults.filter(
        product => 
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    switch (sort) {
      case "price-asc":
        filteredResults.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredResults.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filteredResults.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        filteredResults.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "featured":
      default:
        // For featured, we might want to prioritize items marked as featured
        // Assuming products have a "featured" boolean property
        filteredResults.sort((a, b) => {
          // If both are featured or both are not, maintain original order
          if ((a.featured && b.featured) || (!a.featured && !b.featured)) {
            return 0;
          }
          // Featured items come first
          return a.featured ? -1 : 1;
        });
        break;
    }
    
    dispatch({ type: "UPDATE_FILTERED_PRODUCTS", payload: filteredResults });
  };
  
  // Filter action creators
  const setCategoryFilter = (category) => {
    dispatch({ type: "SET_CATEGORY_FILTER", payload: category });
  };
  
  const setPriceRangeFilter = (range) => {
    dispatch({ type: "SET_PRICE_RANGE", payload: range });
  };
  
  const setSearchQuery = (query) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: query });
  };
  
  const setSortOption = (sortOption) => {
    dispatch({ type: "SET_SORT", payload: sortOption });
  };
  
  const resetFilters = () => {
    dispatch({ type: "RESET_FILTERS" });
  };
  
  // Context value with state and actions
  const value = {
    products: state.filteredProducts,
    allProducts: state.allProducts,
    filters: state.filters,
    categories,
    priceRange,
    setCategoryFilter,
    setPriceRangeFilter,
    setSearchQuery,
    setSortOption,
    resetFilters
  };
  
  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};

// Custom hook for using filter context
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};

export default FilterContext;