import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ProductGrid from './components/ProductGrid';
import Loader from './components/Loader';
import ProductModal from './components/ProductModal';
import Pagination from './components/Pagination';

const PRODUCTS_PER_PAGE = 9;

function App() {
  // ... (all existing states are correct)
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState([]);

  // ... (all useEffects are correct)
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Data fetching failed. Please try again.');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortOrder]);

  // ... (all product processing logic is correct)
  const processedProducts = products
    .filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
    .sort((a, b) => {
      if (sortOrder === 'lowToHigh') return a.price - b.price;
      if (sortOrder === 'highToLow') return b.price - a.price;
      return 0;
    });

  const totalPages = Math.ceil(processedProducts.length / PRODUCTS_PER_PAGE);
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = processedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  const handleAddToCart = (productToAdd) => {
    if (cart.find(item => item.id === productToAdd.id)) {
      alert("Item is already in your cart!");
      return;
    }
    setCart(prevCart => [...prevCart, productToAdd]);
    alert("Item added to cart!");
    closeModal();
  };
  
  // --- NEW "REMOVE FROM CART" FUNCTION ---
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };
  // --- END ---
  
  // ... (renderContent function is correct)
  const renderContent = () => {
    if (isLoading) {
      return <Loader />;
    }
    if (error) {
      return (
        <div className="text-center text-red-300 bg-red-900/30 p-4 rounded-lg">
          Error: {error}
        </div>
      );
    }
    if (currentProducts.length === 0) {
      return (
        <p className="text-center text-xl text-[#a7a9be] py-10">
          No products match your criteria.
        </p>
      );
    }
    return (
      <>
        <ProductGrid products={currentProducts} onCardClick={openModal} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </>
    );
  };

  return (
    <div className="min-h-screen">
      {/* 1. Pass the new function to the Header */}
      <Header cart={cart} removeFromCart={removeFromCart} />
      
      <main className="container mx-auto max-w-7xl p-4">
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        {renderContent()}
      </main>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={closeModal}
          onAddToCart={handleAddToCart} 
        />
      )}
    </div>
  );
}

export default App;