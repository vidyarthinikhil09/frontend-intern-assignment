import React, { useState } from 'react'; // Import useState
// Import your user icon
import userIcon from './asset/man.png'; 
import logo from './asset/logo.png'; 
import CartDropdown from './CartDropDown'; // Import the new component

// 1. Receive 'cart' and 'removeFromCart'
const Header = ({ cart = [], removeFromCart }) => {
  // 2. Add state for dropdown visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-[#0f0e17] border-b border-[#a7a9be]/20 shadow-md">
      <div className="container mx-auto max-w-7xl p-4 flex justify-between items-center">
        
        {/* --- LOGO AND TITLE --- */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl md:text-2xl font-bold text-[#fffffe]">
            Mini Product Dashboard
          </h1>
        </div>
        
        {/* --- ICONS (CART + USER) --- */}
        <div className="flex items-center gap-6">
          {/* 3. Cart Icon and Counter (Wrapper is now for positioning) */}
          <div className="relative">
            {/* 4. This div handles the click to toggle */}
            <div 
              className="relative cursor-pointer" 
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <span className="text-2xl">🛒</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-[#ff8906] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
            
            {/* 5. Conditionally render the dropdown */}
            {isCartOpen && <CartDropdown cart={cart} removeFromCart={removeFromCart} />}
          </div>
          
          {/* 6. User Icon */}
          <img 
            src={userIcon} 
            alt="User Profile" 
            className="w-8 h-8 cursor-pointer"
          />
        </div>
        
      </div>
    </header>
  );
};

export default Header;