import React from 'react';

const CartDropdown = ({ cart, removeFromCart }) => {
  // Calculate the total price
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    // The dropdown container
    <div className="absolute top-12 right-0 w-80 bg-[#1a1a2e] border border-[#a7a9be]/20 rounded-lg shadow-lg z-20">
      
      {cart.length === 0 ? (
        // Show if cart is empty
        <p className="p-4 text-center text-[#a7a9be]">Your cart is empty.</p>
      ) : (
        // Show if cart has items
        <>
          {/* List of items */}
          <div className="max-h-64 overflow-y-auto">
            {cart.map(item => (
              <div key={item.id} className="flex items-center gap-3 p-3 border-b border-[#a7a9be]/10">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-contain bg-white rounded" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#fffffe] truncate">{item.title}</p>
                  <p className="text-xs text-[#a7a9be]">${item.price}</p>
                </div>
                {/* Remove button */}
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-300 font-bold text-lg"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          
          {/* Footer with Total and Checkout */}
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-[#fffffe]">Total:</span>
              <span className="text-lg font-bold text-[#f25f4c]">${total.toFixed(2)}</span>
            </div>
            <button className="w-full px-4 py-2 rounded-lg text-[#fffffe] font-semibold transition-all bg-[#ff8906] hover:bg-[#ff8906]/80">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDropdown;