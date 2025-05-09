import React, { useState, useEffect } from "react";
import { useFilter } from "../context/FilterContext";

const FilterBar = () => {
  const { 
    categories, 
    filters, 
    priceRange, 
    setCategoryFilter, 
    setPriceRangeFilter, 
    setSearchQuery, 
    setSortOption,
    resetFilters 
  } = useFilter();
  
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [currentPriceRange, setCurrentPriceRange] = useState({ min: filters.priceRange.min, max: filters.priceRange.max });
  const [searchText, setSearchText] = useState(filters.searchQuery);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  // When price range from context changes (like on reset), update local state
  useEffect(() => {
    setCurrentPriceRange({ min: filters.priceRange.min, max: filters.priceRange.max });
  }, [filters.priceRange]);
  
  // When search query from context changes (like on reset), update local state
  useEffect(() => {
    setSearchText(filters.searchQuery);
  }, [filters.searchQuery]);
  
  // Apply price filter with debounce
  const applyPriceFilter = () => {
    setPriceRangeFilter(currentPriceRange);
  };
  
  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  
  // Submit search when user presses Enter
  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(searchText);
    }
  };
  
  // Submit search when search input loses focus
  const handleSearchBlur = () => {
    setIsSearchFocused(false);
    if (searchText !== filters.searchQuery) {
      setSearchQuery(searchText);
    }
  };
  
  // Handle mobile filter toggle
  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm mb-6">
      {/* Search and sort bar - always visible */}
      <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200">
        <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
          <div className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ${isSearchFocused ? "text-indigo-600" : "text-gray-500"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18"><rect width="256" height="256" fill="none"/><rect x="48" y="120" width="88" height="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M208,188v12a8,8,0,0,1-8,8H180" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="208" y1="116" x2="208" y2="140" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M184,48h16a8,8,0,0,1,8,8V72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="116" y1="48" x2="140" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M48,76V56a8,8,0,0,1,8-8H68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          </div>
          <input
            type="search"
            className={`block w-full p-2 pl-10 text-sm border rounded-lg focus:ring-2 focus:outline-none ${
              isSearchFocused
                ? "border-indigo-500 focus:ring-indigo-500"
                : "border-gray-300 focus:ring-indigo-300"
            }`}
            placeholder="Search products..."
            value={searchText}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={handleSearchBlur}
          />
        </div>
        
        <div className="flex items-center">
          <div className="flex items-center mr-6">
            <label htmlFor="sort-select" className="mr-2 text-sm font-medium text-gray-700 whitespace-nowrap">
              Sort by:
            </label>
            <select
              id="sort-select"
              className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg block w-full p-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={filters.sort}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
          
          {/* Mobile filter toggle */}
          <button
            type="button"
            className="sm:hidden inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={toggleMobileFilter}
          >
            {isMobileFilterOpen ? "Hide filters" : "Show filters"}
            <span className="ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><rect x="48" y="120" width="88" height="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M208,188v12a8,8,0,0,1-8,8H180" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="208" y1="116" x2="208" y2="140" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M184,48h16a8,8,0,0,1,8,8V72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="116" y1="48" x2="140" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M48,76V56a8,8,0,0,1,8-8H68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
            </span>
          </button>
        </div>
      </div>
      
      {/* Filter options - visible on desktop or when toggled on mobile */}
      <div className={`p-4 ${isMobileFilterOpen ? "block" : "hidden sm:block"}`}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Category filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
            <div className="space-y-1 max-h-48 overflow-y-auto pr-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    id={`category-${category}`}
                    name="category"
                    type="radio"
                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    checked={filters.category === category}
                    onChange={() => setCategoryFilter(category)}
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="ml-2 text-sm text-gray-700 capitalize"
                  >
                    {category === "all" ? "All Categories" : category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Price Range filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-gray-500 text-xs mr-1">$</span>
                  <input 
                    type="number" 
                    className="w-20 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                    min={priceRange.min}
                    max={currentPriceRange.max}
                    value={currentPriceRange.min}
                    onChange={(e) => {
                      const value = Math.max(Number(e.target.value), priceRange.min);
                      setCurrentPriceRange({...currentPriceRange, min: value});
                    }}
                    onBlur={applyPriceFilter}
                  />
                </div>
                <span className="text-gray-500 mx-2">to</span>
                <div className="flex items-center">
                  <span className="text-gray-500 text-xs mr-1">$</span>
                  <input 
                    type="number" 
                    className="w-20 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                    min={currentPriceRange.min}
                    max={priceRange.max}
                    value={currentPriceRange.max}
                    onChange={(e) => {
                      const value = Math.min(Number(e.target.value), priceRange.max);
                      setCurrentPriceRange({...currentPriceRange, max: value});
                    }}
                    onBlur={applyPriceFilter}
                  />
                </div>
              </div>
              
              <div className="px-1">
                <div className="relative">
                  <input
                    type="range"
                    min={priceRange.min}
                    max={priceRange.max}
                    value={currentPriceRange.min}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value <= currentPriceRange.max) {
                        setCurrentPriceRange({...currentPriceRange, min: value});
                      }
                    }}
                    onMouseUp={applyPriceFilter}
                    onTouchEnd={applyPriceFilter}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider-thumb-min"
                  />
                  <input
                    type="range"
                    min={priceRange.min}
                    max={priceRange.max}
                    value={currentPriceRange.max}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= currentPriceRange.min) {
                        setCurrentPriceRange({...currentPriceRange, max: value});
                      }
                    }}
                    onMouseUp={applyPriceFilter}
                    onTouchEnd={applyPriceFilter}
                    className="absolute top-0 w-full h-2 bg-transparent appearance-none pointer-events-none range-slider-thumb-max"
                  />
                </div>
                
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>${priceRange.min}</span>
                  <span>${priceRange.max}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional filters could go here */}
          <div className="sm:col-span-1">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Quick Filters</h3>
            <div className="space-y-2">
              <button 
                onClick={() => setPriceRangeFilter({ min: priceRange.min, max: 50 })}
                className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 mr-2"
              >
                Under $50
              </button>
              <button 
                onClick={() => setPriceRangeFilter({ min: 50, max: 150 })}
                className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 mr-2"
              >
                $50 - $150
              </button>
              <button 
                onClick={() => setPriceRangeFilter({ min: 150, max: priceRange.max })}
                className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                $150+
              </button>
              
              <div className="pt-2">
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center px-3 py-1 border border-indigo-600 text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-50 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Reset All Filters
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="14" height="14"><rect width="256" height="256" fill="none"/><rect x="48" y="120" width="88" height="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M208,188v12a8,8,0,0,1-8,8H180" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="208" y1="116" x2="208" y2="140" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M184,48h16a8,8,0,0,1,8,8V72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="116" y1="48" x2="140" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M48,76V56a8,8,0,0,1,8-8H68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;