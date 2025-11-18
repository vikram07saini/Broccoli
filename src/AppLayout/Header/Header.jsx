import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram, IoMdClose } from "react-icons/io";
import { FaBasketballBall } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import vegetable from "../../assets/Images/vegetable.png";
import CartSidebar from "../../Pages/CartSidebar/CartSidebar";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowSearch(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) && !e.target.closest('.mobile-menu-toggle')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCartItem = (item) => {
  };

  return (
    <>
      <div className={`header-main hidden lg:flex justify-between px-4 lg:px-8 xl:px-16 py-2 transition-all duration-300 ${
        scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100 '
      }`}>
        <div className="location-div flex gap-4 lg:gap-7">
          <div className="location">
            <h3 className="text-sm lg:text-base font-bold text-gray-800 hover:text-green-5911 cursor-pointer">
              15/A,Nest Tower,NYC
            </h3>
          </div>
          <div className="mail">
            <h3 className="text-sm lg:text-base font-bold text-gray-800 hover:text-green-5911 cursor-pointer">
              BruCode@gmail.com
            </h3>
          </div>
        </div>
        
        <div className="language-div flex gap-3 lg:gap-5 items-center">
          <div className="language">
            <h3 className="text-sm lg:text-base font-bold text-gray-800 hover:text-green-5911 cursor-pointer">
              English
            </h3>
          </div>
          <div className="headerupper-icon">
            <div className="flex gap-2 lg:gap-4">
              <Link className="hover:text-green-5911 text-gray-800" to="#">
                <FaFacebookF size={14} />
              </Link>
              <Link className="hover:text-green-5911 text-gray-800" to="#">
                <FaTwitter size={14} />
              </Link>
              <Link className="hover:text-green-5911 text-gray-800" to="#">
                <IoLogoInstagram size={14} />
              </Link>
              <Link className="hover:text-green-5911 text-gray-800" to="#">
                <FaBasketballBall size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className={` hidden lg:block transition-all duration-300 ${
        scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
      }`} />
      
      <div className={`navbar flex justify-between shadow-md items-center p-4 lg:p-6 sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}>
        <div className="website-name">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-5911">
            Broccoli
          </h1>
        </div>
        <div className="navbar-options hidden lg:block">
          <ul className="home-options flex gap-6 xl:gap-8 text-lg xl:text-xl">
            <li className="relative">
              <Link
                className={`hover:text-green-5911 font-bold ${
                  window.location.pathname === "/" ? "text-green-5911" : "text-gray-800"
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                className={`hover:text-green-5911 font-bold ${
                  window.location.pathname === "/About" ? "text-green-5911" : "text-gray-800"
                }`}
                to="/About"
              >
                About
              </Link>
            </li>
            <li className="relative">
              <Link
                className={`hover:text-green-5911 font-bold ${
                  window.location.pathname === "/Shop" ? "text-green-5911" : "text-gray-800"
                }`}
                to="/Shop"
              >
                Shop
              </Link>
            </li>
            <li className="relative">
              <Link
                className={`hover:text-green-5911 font-bold ${
                  window.location.pathname === "/News" ? "text-green-5911" : "text-gray-800"
                }`}
                to="/News"
              >
                News
              </Link>
            </li>
            <li className="relative group">
              <Link
                className={`hover:text-green-5911 font-bold ${
                  window.location.pathname === "/Pages" ? "text-green-5911" : "text-gray-800"
                }`}
                to="/Pages"
              >
                Pages+
              </Link>
              <div className="absolute left-0 top-full mt-2 bg-black text-white border-t-4 border-green-5911 w-80 p-4 gap-4 grid grid-cols-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div>
                  <ul>
                    <h4 className="bg-gray-200 font-semibold text-black p-2 text-sm">
                      Inner Pages
                    </h4>
                    <Link to="/Gallery">
                      <li className="p-2 text-sm hover:text-green-5911">Gallery</li>
                    </Link>
                    <Link to="/Expert">
                      <li className="p-2 text-sm hover:text-green-5911">Team</li>
                    </Link>
                  </ul>
                </div>
                <div>
                  <ul>
                    <h4 className="bg-gray-200 font-semibold text-black p-2 text-sm">
                      Inner Pages
                    </h4>
                    <Link to="/GoogleLocation">
                      <li className="p-2 text-sm hover:text-green-5911">Google Map Locations</li>
                    </Link>
                    <Link to="/Contact">
                      <li className="p-2 text-sm hover:text-green-5911">Contact</li>
                    </Link>
                  </ul>
                </div>
                <div className="col-span-2">
                  <ul>
                    <h4 className="bg-gray-200 text-black p-2 font-semibold text-sm">
                      Shop pages
                    </h4>
                    <Link to="/Shop">
                      <li className="p-2 text-sm hover:text-green-5911">Shop</li>
                    </Link>
                    <Link to="/ShopDetails">
                      <li className="p-2 text-sm hover:text-green-5911">Shop-Details</li>
                    </Link>
                  </ul>
                </div>
                <div className="col-span-2 flex justify-center">
                  <img className="h-24 w-40 mt-4 object-cover" src={vegetable} alt="Vegetables" />
                </div>
              </div>
            </li>
            <li>
              <Link
                className={`hover:text-green-5911 font-bold ${
                  window.location.pathname === "/Contact" ? "text-green-5911" : "text-gray-800"
                }`}
                to="/Contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <div className="quotebtn">
            <Link to="/Contact">
            <button className="text-lg broccoli-green p-2 px-4 border-none font-bold cursor-pointer bg-green-5911 hover:bg-green-900 text-white transition-all duration-300 ease-in-out rounded">
              Get A QUOTE
            </button>
            </Link>
          </div>
          
          <div className="navbar-icons flex gap-4 text-xl">
            <div className="relative" ref={containerRef}>
              <i
                onClick={() => setShowSearch(!showSearch)}
                className="cursor-pointer hover:text-green-5911 text-gray-800"
              >
                {showSearch ? <IoMdClose /> : <IoIosSearch />}
              </i>
              {showSearch && (
                <div className="absolute right-0 top-12 bg-white p-2 shadow-2xl rounded-lg z-50">
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="search.."
                    className="border border-gray-300 bg-white rounded-full px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-green-5911 text-gray-800"
                  />
                </div>
              )}
            </div>
            
            <div className="user relative group">
              <i className="cursor-pointer hover:text-green-5911 text-gray-800">
                <IoMdPerson />
              </i>
              <ul className="absolute right-0 top-12 bg-black text-white p-4 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-40">
                <Link to="/SignIn">
                  <li className="p-2 hover:text-green-5911 text-sm whitespace-nowrap">SignIn</li>
                </Link>
                <Link to="/Register">
                  <li className="p-2 hover:text-green-5911 text-sm whitespace-nowrap">Register</li>
                </Link>
                <Link to="/MyAccount">
                  <li className="p-2 hover:text-green-5911 text-sm whitespace-nowrap">Your Account</li>
                </Link>
              </ul>
            </div>
            
            <div onClick={() => setCartOpen(true)} className="cursor-pointer">
              <i className="hover:text-green-5911 text-gray-800">
                <FaShoppingCart />
              </i>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden items-center gap-4">
          <div onClick={() => setCartOpen(true)} className="cursor-pointer">
            <i className="hover:text-green-5911 text-xl text-gray-800">
              <FaShoppingCart />
            </i>
          </div>
          <button
            className="mobile-menu-toggle text-2xl hover:text-green-5911 transition-colors text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto"
        >
          <div className="bg-green-5911 text-white p-4 sticky top-0">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Broccoli Menu</h1>
              <button
                className="text-2xl hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <HiX />
              </button>
            </div>
          </div>
          <div className="bg-gray-50 p-4 border-b">
            <div className="space-y-2 text-sm text-gray-800">
              <div className="flex items-center gap-2">
                <span>15/A, Nest Tower, NYC</span>
              </div>
              <div className="flex items-center gap-2">
                <span>BruCode@gmail.com</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200">
              <div className="language">
                <span className="font-semibold text-gray-800">English</span>
              </div>
              <div className="social-icons flex gap-3">
                <Link className="hover:text-green-5911 text-gray-800" to="#">
                  <FaFacebookF size={16} />
                </Link>
                <Link className="hover:text-green-5911 text-gray-800" to="#">
                  <FaTwitter size={16} />
                </Link>
                <Link className="hover:text-green-5911 text-gray-800" to="#">
                  <IoLogoInstagram size={16} />
                </Link>
                <Link className="hover:text-green-5911 text-gray-800" to="#">
                  <FaBasketballBall size={16} />
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 border-b">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="w-full border border-gray-300 rounded-full px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-green-5911 text-gray-800"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <IoIosSearch size={20} />
              </div>
            </div>
          </div>
          <div className="p-4 space-y-1">
            <Link
              to="/"
              className="block py-3 px-4 hover:bg-green-50 hover:text-green-5911 font-semibold rounded-lg transition-colors text-lg text-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/About"
              className="block py-3 px-4 hover:bg-green-50 hover:text-green-5911 font-semibold rounded-lg transition-colors text-lg text-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/Shop"
              className="block py-3 px-4 hover:bg-green-50 hover:text-green-5911 font-semibold rounded-lg transition-colors text-lg text-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/News"
              className="block py-3 px-4 hover:bg-green-50 hover:text-green-5911 font-semibold rounded-lg transition-colors text-lg text-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
            
            <div className="space-y-1">
              <div className="py-3 px-4 font-semibold text-gray-700 text-lg">Pages+</div>
              <div className="pl-6 space-y-1 border-l-2 border-green-5911 ml-4">
                <Link to="/Gallery" onClick={() => setMobileMenuOpen(false)}>
                  <div className="py-2 px-4 hover:text-green-5911 rounded-lg transition-colors text-gray-700">Gallery</div>
                </Link>
                <Link to="/Expert" onClick={() => setMobileMenuOpen(false)}>
                  <div className="py-2 px-4 hover:text-green-5911 rounded-lg transition-colors text-gray-700">Team</div>
                </Link>
                <Link to="/GoogleLocation" onClick={() => setMobileMenuOpen(false)}>
                  <div className="py-2 px-4 hover:text-green-5911 rounded-lg transition-colors text-gray-700">Google Map Locations</div>
                </Link>
                <Link to="/Contact" onClick={() => setMobileMenuOpen(false)}>
                  <div className="py-2 px-4 hover:text-green-5911 rounded-lg transition-colors text-gray-700">Contact</div>
                </Link>
                <Link to="/Shop" onClick={() => setMobileMenuOpen(false)}>
                  <div className="py-2 px-4 hover:text-green-5911 rounded-lg transition-colors text-gray-700">Shop</div>
                </Link>
                <Link to="/ShopDetails" onClick={() => setMobileMenuOpen(false)}>
                  <div className="py-2 px-4 hover:text-green-5911 rounded-lg transition-colors text-gray-700">Shop Details</div>
                </Link>
              </div>
            </div>

            <Link
              to="/Contact"
              className="block py-3 px-4 hover:bg-green-50 hover:text-green-5911 font-semibold rounded-lg transition-colors text-lg text-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="p-4 border-t border-gray-200">
            <h3 className="font-semibold text-lg mb-3 text-gray-800">My Account</h3>
            <div className="space-y-2">
              <Link to="/SignIn" onClick={() => setMobileMenuOpen(false)}>
                <div className="py-3 px-4 hover:bg-green-50 hover:text-green-5911 rounded-lg transition-colors border border-gray-200 text-gray-700">
                  Sign In
                </div>
              </Link>
              <Link to="/Register" onClick={() => setMobileMenuOpen(false)}>
                <div className="py-3 px-4 hover:bg-green-50 hover:text-green-5911 rounded-lg transition-colors border border-gray-200 text-gray-700">
                  Register
                </div>
              </Link>
              <Link to="/MyAccount" onClick={() => setMobileMenuOpen(false)}>
                <div className="py-3 px-4 hover:bg-green-50 hover:text-green-5911 rounded-lg transition-colors border border-gray-200 text-gray-700">
                  Your Account
                </div>
              </Link>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <h3 className="font-semibold text-lg mb-3 text-gray-800">Cart</h3>
            <div 
              className="py-3 px-4 hover:bg-green-50 hover:text-green-5911 rounded-lg transition-colors border border-gray-200 text-gray-700 cursor-pointer"
              onClick={() => {
                setCartOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              View Cart
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 bg-gray-50 sticky bottom-0">
            <Link to="/Contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full py-4 bg-green-5911 hover:bg-green-900 text-white font-bold rounded-lg transition-colors text-lg">
                Get A QUOTE
              </button>
            </Link>
          </div>
        </div>
      )}
      
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;