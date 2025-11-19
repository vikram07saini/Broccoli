import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const CartSidebar = ({ isOpen, onClose }) => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem("Cart_data")) || [];
    setCartData(storedCart);
  }, [isOpen]);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const subtotal = cartData.reduce((acc, item) => acc + item.Price, 0);

  const handleRemoveItem = (indexToRemove) => {
    const updatedCart = cartData.filter((_, i) => i !== indexToRemove);
    setCartData(updatedCart);
    sessionStorage.setItem("Cart_data", JSON.stringify(updatedCart));
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-all duration-300 z-40
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 lg:w-[400px] z-50 bg-white text-black shadow-2xl 
          transition-transform duration-300 ease-out overflow-y-auto
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 sm:p-5 border-b sticky top-0 bg-white z-10">
          <h2 className="text-xl sm:text-2xl font-bold">Your Cart</h2>
          <button 
            onClick={onClose} 
            className="text-2xl sm:text-3xl font-bold hover:text-gray-600 transition-colors"
            aria-label="Close cart"
          >
            &times;
          </button>
        </div>
        <div className="p-4 sm:p-5">
          {cartData.length === 0 ? (
            <p className="text-center text-gray-500 mt-8 sm:mt-10">Your cart is empty</p>
          ) : (
            cartData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between mt-4 sm:mt-5 border border-gray-300 p-3 shadow-md rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 flex-1">
                  <img
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px] object-cover rounded-md"
                    src={item.img}
                    alt={item.Productname}
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm sm:text-base">{item.Productname}</p>
                    <p className="text-green-5911 font-bold text-sm sm:text-base">${item.Price}</p>
                    <p className="line-through text-gray-400 text-xs sm:text-sm">
                      ${item.ActualPrice}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="text-gray-500 hover:text-red-600 text-lg sm:text-xl p-1 transition-colors"
                  aria-label={`Remove ${item.Productname} from cart`}
                >
                  <RxCross2 />
                </button>
              </div>
            ))
          )}
        </div>
        <div className="p-4 sm:p-5 border-t bg-white sticky bottom-0">
          <div className="flex justify-between mb-3 sm:mb-4">
            <p className="font-bold text-base sm:text-lg">Subtotal:</p>
            <p className="font-bold text-base sm:text-lg text-green-5911">
              ${subtotal.toFixed(2)}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button className="flex-1 border p-3 bg-green-5911 font-bold text-white cursor-pointer hover:bg-black transition-all duration-300 text-sm sm:text-base rounded">
              VIEW CART
            </button>
            <button className="flex-1 border p-3 bg-black font-bold text-white cursor-pointer hover:bg-green-5911 transition-all duration-300 text-sm sm:text-base rounded">
              CHECKOUT
            </button>
          </div>

          <p className="text-xs sm:text-sm text-center mt-3 sm:mt-4 text-gray-500">
            Free Shipping on All Orders Over $100!
          </p>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;