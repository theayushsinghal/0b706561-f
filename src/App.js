import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import { FilterProvider } from "./context/FilterContext";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Context Providers */}
      <FilterProvider>
        <CartProvider>
          {/* Header */}
          <Header />
          
          {/* Main Content */}
          <main className="flex-grow bg-gray-50">
            {/* Hero Section */}
            <section className="bg-indigo-700 text-white py-12">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Find Your Perfect Product</h1>
                    <p className="text-lg md:text-xl mb-6 text-indigo-100">
                      Browse our collection of high-quality products at affordable prices.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-white text-indigo-700 font-medium py-3 px-6 rounded-lg hover:bg-indigo-100 transition-colors duration-300 flex items-center">
                        Shop Now
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20" className="ml-2">
                          <rect width="256" height="256" fill="none"/>
                          <path d="M64,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H56A8,8,0,0,1,64,216Zm40-8H88a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Zm112,0H152a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm-56,0a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16ZM208,32H48A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,160H48V48H208V192Z" fill="currentColor"/>
                        </svg>
                      </button>
                      <button className="border-2 border-white text-white font-medium py-3 px-6 rounded-lg hover:bg-white hover:text-indigo-700 transition-colors duration-300">
                        View Categories
                      </button>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-md">
                      <div className="absolute inset-0 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
                      <img 
                        src=<img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxoZXJvJTJCc2hvcHBpbmclMkJpbWFnZSUyQndpdGglMkJwcm9kdWN0JTJCZGlzcGxheXxlbnwwfHx8fDE3NDY3MDM3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="hero shopping image with product display" /> 
                        alt="Featured products"
                        className="relative z-10 w-full h-auto rounded-lg shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Product Listing */}
            <section className="py-12">
              <ProductList />
            </section>
            
            {/* Features Section */}
            <section className="bg-white py-12">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Why Shop With Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Feature 1 */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
                    <div className="bg-indigo-100 p-3 rounded-full mb-4 text-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32"><rect width="256" height="256" fill="none"/><circle cx="220" cy="184" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="36" cy="184" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="84" cy="184" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="196" y1="184" x2="108" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M156,184V56a8,8,0,0,1,8-8h0a48,48,0,0,1,48,48v8h0a32,32,0,0,1,32,32v48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M116,184V72H20a8,8,0,0,0-8,8V184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
                    <p className="text-gray-600">On all orders over $50. International shipping available.</p>
                  </div>
                  
                  {/* Feature 2 */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
                    <div className="bg-indigo-100 p-3 rounded-full mb-4 text-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32"><rect width="256" height="256" fill="none"/><line x1="216" y1="128" x2="40" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="88" x2="128" y2="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="96 48 128 16 160 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="168" x2="128" y2="240" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="160 208 128 240 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
                    <p className="text-gray-600">30 day return policy with no hassle returns and exchanges.</p>
                  </div>
                  
                  {/* Feature 3 */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
                    <div className="bg-indigo-100 p-3 rounded-full mb-4 text-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32"><rect width="256" height="256" fill="none"/><line x1="128" y1="132" x2="128" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="172" r="16"/><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Secure Checkout</h3>
                    <p className="text-gray-600">Our payments are secured with 256-bit encryption.</p>
                  </div>
                  
                  {/* Feature 4 */}
                  <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
                    <div className="bg-indigo-100 p-3 rounded-full mb-4 text-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32"><rect width="256" height="256" fill="none"/><rect x="48" y="120" width="88" height="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M208,188v12a8,8,0,0,1-8,8H180" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="208" y1="116" x2="208" y2="140" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M184,48h16a8,8,0,0,1,8,8V72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="116" y1="48" x2="140" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M48,76V56a8,8,0,0,1,8-8H68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Contact our support team anytime for assistance.</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Newsletter Section */}
            <section className="bg-indigo-50 py-16">
              <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Stay Updated</h2>
                    <p className="text-gray-600">Subscribe to our newsletter for exclusive offers and updates</p>
                  </div>
                  <form className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-grow px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-indigo-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors duration-300 whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    By subscribing, you agree to our Privacy Policy and to receive marketing emails.
                  </p>
                </div>
              </div>
            </section>
          </main>
          
          {/* Footer */}
          <footer className="bg-gray-800 text-gray-200 py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and description */}
                <div className="col-span-1">
                  <a href="/" className="text-xl font-bold text-white flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24" className="mr-2">
                      <rect width="256" height="256" fill="none"/>
                      <rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                      <path d="M168,88a40,40,0,0,1-80,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                    </svg>
                    ShopReact
                  </a>
                  <p className="text-sm text-gray-400 mb-6">
                    Providing high-quality products for your everyday needs. Shop with confidence on our secure platform.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M168,88H152a24,24,0,0,0-24,24V224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="144" x2="160" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><path d="M88,176S32.85,144,40.78,56c0,0,39.66,40,87.22,48V88c0-22,18-40.27,40-40a40.74,40.74,0,0,1,36.67,24H240l-32,32c-4.26,66.84-60.08,120-128,120-32,0-40-12-40-12S72,200,88,176Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="32" y="32" width="192" height="192" rx="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="180" cy="76" r="16"/></svg>
                    </a>
                  </div>
                </div>
                
                {/* Shop links */}
                <div className="col-span-1">
                  <h3 className="text-lg font-semibold mb-4">Shop</h3>
                  <ul className="space-y-2">
                    <li><a href="/products" className="text-gray-400 hover:text-white">All Products</a></li>
                    <li><a href="/categories" className="text-gray-400 hover:text-white">Categories</a></li>
                    <li><a href="/deals" className="text-gray-400 hover:text-white">Deals & Discounts</a></li>
                    <li><a href="/new-arrivals" className="text-gray-400 hover:text-white">New Arrivals</a></li>
                    <li><a href="/bestsellers" className="text-gray-400 hover:text-white">Best Sellers</a></li>
                  </ul>
                </div>
                
                {/* Customer Service links */}
                <div className="col-span-1">
                  <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                  <ul className="space-y-2">
                    <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
                    <li><a href="/shipping" className="text-gray-400 hover:text-white">Shipping Information</a></li>
                    <li><a href="/returns" className="text-gray-400 hover:text-white">Returns & Exchanges</a></li>
                    <li><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
                    <li><a href="/size-guide" className="text-gray-400 hover:text-white">Size Guide</a></li>
                  </ul>
                </div>
                
                {/* About links */}
                <div className="col-span-1">
                  <h3 className="text-lg font-semibold mb-4">About</h3>
                  <ul className="space-y-2">
                    <li><a href="/about" className="text-gray-400 hover:text-white">Our Story</a></li>
                    <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
                    <li><a href="/sustainability" className="text-gray-400 hover:text-white">Sustainability</a></li>
                    <li><a href="/careers" className="text-gray-400 hover:text-white">Careers</a></li>
                    <li><a href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-400">
                  &copy; {new Date().getFullYear()} ShopReact. All rights reserved.
                </p>
                <div className="mt-4 md:mt-0 flex items-center">
                  <span className="text-sm text-gray-400 mr-4">Payment Methods:</span>
                  <div className="flex space-x-3">
                    <span className="text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="18"><rect width="256" height="256" fill="none"/><line x1="160" y1="108" x2="188" y2="108" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="168" y1="148" x2="188" y2="148" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="100" cy="120" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M69.34,164c4.91-11.73,17.23-20,30.66-20s25.75,8.26,30.66,20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    </span>
                    <span className="text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="18"><rect width="256" height="256" fill="none"/><line x1="160" y1="108" x2="188" y2="108" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="168" y1="148" x2="188" y2="148" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="100" cy="120" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M69.34,164c4.91-11.73,17.23-20,30.66-20s25.75,8.26,30.66,20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    </span>
                    <span className="text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="18"><rect width="256" height="256" fill="none"/><path d="M144,128a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,144,32H84a8,8,0,0,0-7.76,6.06l-36,144A8,8,0,0,0,48,192H79.51a8,8,0,0,0,7.76-6.06l13-51.88A8,8,0,0,1,108,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M87.27,185.94l-7,28.12A8,8,0,0,0,88,224h31.51a8,8,0,0,0,7.76-6.06l9-35.88A8,8,0,0,1,144,176h32a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,176,80H120a8,8,0,0,0-7.76,6.06l-12,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    </span>
                    <span className="text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="18"><rect width="256" height="256" fill="none"/><path d="M144,128a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,144,32H84a8,8,0,0,0-7.76,6.06l-36,144A8,8,0,0,0,48,192H79.51a8,8,0,0,0,7.76-6.06l13-51.88A8,8,0,0,1,108,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M87.27,185.94l-7,28.12A8,8,0,0,0,88,224h31.51a8,8,0,0,0,7.76-6.06l9-35.88A8,8,0,0,1,144,176h32a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,176,80H120a8,8,0,0,0-7.76,6.06l-12,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          
          {/* Shopping Cart Overlay */}
          <Cart />
        </CartProvider>
      </FilterProvider>
    </div>
  );
};

export default App;