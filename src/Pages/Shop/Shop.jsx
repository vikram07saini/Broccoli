import React, { useState } from "react";
import { IoGridSharp } from "react-icons/io5";
import { FaGripLines } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../../assets/Images/shopImg1.png";
import img2 from "../../assets/Images/ShopImg2.png";
import img3 from "../../assets/Images/ShopImg3.png";
import img4 from "../../assets/Images/ShopImg4.png";
import img5 from "../../assets/Images/ShopImg5.png";
import img6 from "../../assets/Images/kiwiimg.png";
import img7 from "../../assets/Images/mushroomimg.png";
import img8 from "../../assets/Images/broccoliimg.png";
import img9 from "../../assets/Images/orangeimg.png";
import img1page3 from "../../assets/Images/img1page3.jpg";
import img2page3 from "../../assets/Images/img2page3.jpg";
import img3page3 from "../../assets/Images/img3page3.jpg";
import img4page3 from "../../assets/Images/img4page3.jpg";
import img5page3 from "../../assets/Images/img5page3.jpg";
import img6page3 from "../../assets/Images/img6page3.jpg";
import img7page3 from "../../assets/Images/img7page3.jpg";
import img8page3 from "../../assets/Images/img8page3.jpg";
import img9page3 from "../../assets/Images/img9page3.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CartSidebar from "../CartSidebar/CartSidebar";

const Shop = () => {
  const [isShopVegetableOpen, SetShopVegetableOpen] = useState(true);
  const [isColVegetableOpen, SetColVegetableOpen] = useState(false);
  const [SecondPageOpen, SetSecondPageOpen] = useState(false);
  const [isThirdPageOpen, SetThirdpageOpen] = useState(false);
  const [ActivePage, SetActivePage] = useState(1);
  const [PriceFilter, SetPriceFilter] = useState("All");
  const [sortOption, SetSortOption] = useState("default");
  const [activeProductIndex, setActiveProductIndex] = useState(null);

  const sortProducts = (products) => {
    let sortedProducts = [...products];
    if (sortOption === "lowToHigh") {
      sortedProducts.sort((a, b) => a.Price - b.Price);
    } else if (sortOption === "highToLow") {
      sortedProducts.sort((a, b) => b.Price - a.Price);
    } else if (sortOption === "rating") {
      sortedProducts.sort((a, b) => {
        const ratingA = parseFloat(a.rating.split(":")[1]);
        const ratingB = parseFloat(b.rating.split(":")[1]);
        return ratingB - ratingA;
      });
    } else if (sortOption === "new") {
      sortedProducts = [...products].reverse();
    }
    return sortedProducts;
  };

  const handleCartItem = (item) => {
    const existingCart = JSON.parse(sessionStorage.getItem("Cart_data")) || [];
    const updatedCart = [...existingCart, item];
    sessionStorage.setItem("Cart_data", JSON.stringify(updatedCart));
    console.log("Added to cart:", item);
  };

  const filterByPrice = (products) => {
    if (PriceFilter === "All") return products;
    const [min, max] = PriceFilter.split("-").map(Number);
    return products.filter((item) => item.Price >= min && item.Price <= max);
  };

  const ShopVegetable = [
    {
      img: img1,
      rating: "Rating:5",
      Productname: "Red Hot Tomato",
      Price: 30.0,
      ActualPrice: 162.0,
    },
    {
      img: img2,
      rating: "Rating:5",
      Productname: "Vegetable Juices",
      Price: 25.0,
      ActualPrice: 85.0,
    },
    {
      img: img3,
      rating: "Rating:4",
      Productname: "Orange Fresh Juice",
      Price: 75.0,
      ActualPrice: 92.0,
    },
    {
      img: img4,
      rating: "Rating:4",
      Productname: "Poltry farm meat",
      Price: 78.0,
      ActualPrice: 85.0,
    },
    {
      img: img5,
      rating: "Rating:3",
      Productname: "Fresh Butter Cake",
      Price: 150.0,
      ActualPrice: 180.0,
    },
    {
      img: img6,
      rating: "Rating:5",
      Productname: "Orange Sliced Mix",
      Price: 152.0,
      ActualPrice: 158.0,
    },
    {
      img: img7,
      rating: "Rating:3",
      Productname: "Red Hot Tomato",
      Price: 20.0,
      ActualPrice: 192.0,
    },
    {
      img: img8,
      rating: "Rating:3",
      Productname: "Red Hot Tomato",
      Price: 129.0,
      ActualPrice: 192.0,
    },
    {
      img: img9,
      rating: "Rating:3",
      Productname: "Red Hot Tomato",
      Price: 129.0,
      ActualPrice: 162.0,
    },
    {
      img: img4,
      rating: "Rating:3",
      Productname: "Red Hot Tomato",
      Price: 159.0,
      ActualPrice: 172.0,
    },
  ];

  const SecondPage = [
    {
      img: img2page3,
      rating: "Rating:5",
      Productname: "Red Hot Tomato",
      Price: 149.0,
      ActualPrice: 162.0,
    },
    {
      img: img8,
      rating: "Rating:5",
      Productname: "Vegetable Juices",
      Price: 62.0,
      ActualPrice: 85.0,
    },
    {
      img: img2,
      rating: "Rating:4",
      Productname: "Orange Fresh Juice",
      Price: 20.0,
      ActualPrice: 92.0,
    },
    {
      img: img2page3,
      rating: "Rating:4",
      Productname: "Poltry farm meat",
      Price: 78.0,
      ActualPrice: 85.0,
    },
    {
      img: img5,
      rating: "Rating:3",
      Productname: "Fresh Butter Cake",
      Price: 10.0,
      ActualPrice: 180.0,
    },
    {
      img: img3,
      rating: "Rating:5",
      Productname: "Orange Sliced Mix",
      Price: 152.0,
      ActualPrice: 158.0,
    },
    {
      img: img8page3,
      rating: "Rating:3",
      Productname: "Red Hot Tomato",
      Price: 189.0,
      ActualPrice: 192.0,
    },
    {
      img: img1,
      rating: "Rating:3",
      Productname: "Red Hot Tomato",
      Price: 129.0,
      ActualPrice: 192.0,
    },
    {
      img: img9,
      rating: "Rating:3",
      Productname: "Red Hot Tomato",
      Price: 50.0,
      ActualPrice: 162.0,
    },
    {
      img: img4page3,
      rating: "Rating:3",
      Productname: "Red Hot Tomato",
      Price: 159.0,
      ActualPrice: 172.0,
    },
  ];

  const ThirdPage = [
    {
      img: img1page3,
      rating: "Rating:5",
      Productname: "Red Hot Tomato",
      Price: 149.0,
      ActualPrice: 162.0,
    },
    {
      img: img2page3,
      rating: "Rating:5",
      Productname: "Vegetable Juices",
      Price: 62.0,
      ActualPrice: 85.0,
    },
    {
      img: img3page3,
      rating: "Rating:4",
      Productname: "Orange Fresh Juice",
      Price: 75.0,
      ActualPrice: 92.0,
    },
    {
      img: img4page3,
      rating: "Rating:4",
      Productname: "Poltry farm meat",
      Price: 78.0,
      ActualPrice: 85.0,
    },
    {
      img: img5page3,
      rating: "Rating:3",
      Productname: "Fresh Butter Cake",
      Price: 150.0,
      ActualPrice: 180.0,
    },
    {
      img: img6page3,
      rating: "Rating:5",
      Productname: "Orange Sliced Mix",
      Price: 152.0,
      ActualPrice: 158.0,
    },
    {
      img: img7page3,
      rating: "Rating:3",
      Productname: "Red Hot Tomato",
      Price: 189.0,
      ActualPrice: 192.0,
    },
    {
      img: img8page3,
      rating: "Rating:3",
      Productname: "Red Hot Tomato",
      Price: 129.0,
      ActualPrice: 192.0,
    },
    {
      img: img9page3,
      rating: "Rating:3",
      Productname: "Red Hot Tomato",
      Price: 129.0,
      ActualPrice: 162.0,
    },
  ];

  const colVegetable = [
    {
      img: img4,
      rating: "Rating:5",
      Productname: "Red Hot Tomato",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid, deleniti non et ut dolorem!",
      Price: 50.0,
      ActualPrice: 172.0,
    },
    {
      img: img6,
      rating: "Rating:3",
      Productname: "Red Hot Tomato",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid, deleniti non et ut dolorem!",
      Price: 89.0,
      ActualPrice: 172.0,
    },
    {
      img: img7,
      rating: "Rating:2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid, deleniti non et ut dolorem!",
      Productname: "Red Hot Tomato",
      Price: 159.0,
      ActualPrice: 172.0,
    },
    {
      img: img1,
      rating: "Rating:4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid, deleniti non et ut dolorem!",
      Productname: "Red Hot Tomato",
      Price: 120.0,
      ActualPrice: 172.0,
    },
    {
      img: img2,
      rating: "Rating:5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid, deleniti non et ut dolorem!",
      Productname: "Red Hot Tomato",
      Price: 159.0,
      ActualPrice: 172.0,
    },
    {
      img: img8,
      rating: "Rating:5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid, deleniti non et ut dolorem!",
      Productname: "Red Hot Tomato",
      Price: 29.0,
      ActualPrice: 172.0,
    },
    {
      img: img1,
      rating: "Rating:3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid, deleniti non et ut dolorem!",
      Productname: "Red Hot Tomato",
      Price: 60.0,
      ActualPrice: 172.0,
    },
    {
      img: img3,
      rating: "Rating:4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt, aliquid, deleniti non et ut dolorem!",
      Productname: "Red Hot Tomato",
      Price: 19.0,
      ActualPrice: 172.0,
    },
  ];

  const icons = [
    {
      icon1: <FaShoppingCart />,
      icon2: <FaEye />,
      icon3: <CiHeart />,
    },
  ];

  const [cartData, setCartData] = useState({
    img: ShopVegetable.img1,
    rating: ShopVegetable.rating,
    Productname: ShopVegetable.Productname,
    Price: ShopVegetable.Price,
    ActualPrice: ShopVegetable.ActualPrice,
  });
  const ProductCard = ({ item, index }) => (
    <div 
      className="relative group border-2 border-gray-300 bg-white hover:shadow-2xl shadow-teal-900 transform transition duration-300 hover:-translate-y-2 hover:scale-105 overflow-hidden rounded-lg"
      onTouchStart={() => setActiveProductIndex(index)}
      onTouchEnd={() => setTimeout(() => setActiveProductIndex(null), 150)}
      onMouseEnter={() => setActiveProductIndex(index)}
      onMouseLeave={() => setActiveProductIndex(null)}
    >
      <img
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover mx-auto"
        src={item.img}
        alt={item.Productname}
      />
      <div className={`
        absolute inset-0 bg-black/10 flex items-center justify-center 
        transition-opacity duration-300
        ${activeProductIndex === index ? 'opacity-100' : 'opacity-0'}
        lg:group-hover:opacity-100
      `}>
        <div className="flex text-xl sm:text-2xl lg:text-3xl gap-3 sm:gap-4 lg:gap-5">
          <button
            onClick={() => handleCartItem(item)}
            className="hover:text-green-5911 bg-white shadow-xl p-2 rounded-full transition-colors duration-200 active:scale-95"
          >
            {icons[0].icon1}
          </button>
          <button className="hover:text-green-5911 bg-white shadow-xl p-2 rounded-full transition-colors duration-200 active:scale-95">
            {icons[0].icon2}
          </button>
          <button className="hover:text-green-5911 bg-white shadow-xl p-2 rounded-full transition-colors duration-200 active:scale-95">
            {icons[0].icon3}
          </button>
        </div>
      </div>

      <hr className="border-gray-300 mt-3" />
      <div className="flex flex-col items-center p-3 sm:p-4">
        <p className="font-bold text-sm sm:text-base">{item.rating}</p>
        <p className="font-bold text-sm sm:text-base text-center">{item.Productname}</p>
      </div>
      <div className="flex gap-3 sm:gap-4 justify-center mb-3">
        <p className="font-bold text-sm sm:text-base">${item.Price}</p>
        <p className="line-through text-gray-500 text-sm sm:text-base">
          ${item.ActualPrice}
        </p>
      </div>
    </div>
  );

  const ProductCardList = ({ item, index }) => (
    <div 
      className="flex flex-col lg:flex-row gap-4 lg:gap-8 border-2 border-gray-300 hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 hover:scale-105 p-4 lg:p-6 w-full max-w-6xl rounded-lg"
      onTouchStart={() => setActiveProductIndex(index)}
      onTouchEnd={() => setTimeout(() => setActiveProductIndex(null), 150)}
      onMouseEnter={() => setActiveProductIndex(index)}
      onMouseLeave={() => setActiveProductIndex(null)}
    >
      <img
        className="w-full lg:w-64 h-48 lg:h-56 object-cover rounded-lg"
        src={item.img}
        alt={item.Productname}
      />
      <div className="flex-1 p-2 lg:p-4">
        <p className="font-bold text-lg lg:text-xl">{item.Productname}</p>
        <p className="font-semibold text-sm lg:text-base">{item.rating}</p>
        <p className="w-full text-sm lg:text-base font-semibold pt-3 lg:pt-6">
          {item.description}
        </p>
        <p className="text-green-5911 font-bold pt-3 lg:pt-6 text-lg lg:text-xl">${item.Price}</p>
        <p className="font-bold line-through text-sm lg:text-base">${item.ActualPrice}</p>
        <div className={`
          flex text-xl lg:text-2xl gap-3 lg:gap-5 pt-4 lg:pt-6 
          transition-all duration-300
          ${activeProductIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
          lg:group-hover:opacity-100 lg:group-hover:translate-y-0
        `}>
          <button
            onClick={() => handleCartItem(item)}
            className="hover:text-green-5911 border-1 border-white shadow-xl p-2 rounded-full transition-colors duration-200 active:scale-95"
          >
            {icons[0].icon1}
          </button>
          <button className="hover:text-green-5911 border-1 border-white shadow-xl p-2 rounded-full transition-colors duration-200 active:scale-95">
            {icons[0].icon2}
          </button>
          <button className="hover:text-green-5911 border-1 border-white shadow-xl p-2 rounded-full transition-colors duration-200 active:scale-95">
            {icons[0].icon3}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-10">
        <div className="flex gap-3 sm:gap-5 text-xl sm:text-2xl">
          <button
            onClick={() => {
              SetShopVegetableOpen(true);
              SetColVegetableOpen(false);
            }}
            className={`p-2 sm:p-3 rounded-lg transition-colors ${
              isShopVegetableOpen ? 'bg-green-5911 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <IoGridSharp />
          </button>
          <button
            onClick={() => {
              SetColVegetableOpen(true);
              SetShopVegetableOpen(false);
            }}
            className={`p-2 sm:p-3 rounded-lg transition-colors ${
              isColVegetableOpen ? 'bg-green-5911 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <FaGripLines />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
          <p className="font-bold text-sm sm:text-base lg:text-xl text-center sm:text-left">
            Showing 1-10 of 18 Results
          </p>
          <select 
            className="border-2 border-gray-300 p-2 font-semibold text-sm sm:text-base rounded-lg w-full sm:w-auto"
            value={sortOption}
            onChange={(e) => SetSortOption(e.target.value)}
          >
            <option value="default">Default Sorting</option>
            <option value="rating">Sort By Rating</option>
            <option value="new">Sort By New Arrival</option>
            <option value="lowToHigh">Sort by Price: Low to High</option>
            <option value="highToLow">Sort by Price: High to Low</option>
          </select>
        </div>
        <div className="border-2 border-gray-300 p-2 rounded-lg w-full sm:w-auto">
          <select
            className="font-semibold text-sm sm:text-base bg-transparent w-full"
            value={PriceFilter}
            onChange={(e) => SetPriceFilter(e.target.value)}
          >
            <option value="All">Filter By Price</option>
            <option value="10-30">$10 - $30</option>
            <option value="30-60">$30 - $60</option>
            <option value="60-90">$60 - $90</option>
            <option value="90-200">$90 - $200</option>
          </select>
        </div>
      </div>
      {isShopVegetableOpen && (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mb-8">
          {sortProducts(filterByPrice(ShopVegetable)).map((item, index) => (
            <ProductCard key={index} item={item} index={index} />
          ))}
        </div>
      )}
      {isColVegetableOpen && (
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mb-8 items-center">
          {sortProducts(filterByPrice(colVegetable)).map((item, index) => (
            <ProductCardList key={index} item={item} index={index} />
          ))}
        </div>
      )}
      {SecondPageOpen && (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mb-8">
          {sortProducts(filterByPrice(SecondPage)).map((item, index) => (
            <ProductCard key={index} item={item} index={index} />
          ))}
        </div>
      )}
      {isThirdPageOpen && (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mb-8">
          {sortProducts(filterByPrice(ThirdPage)).map((item, index) => (
            <ProductCard key={index} item={item} index={index} />
          ))}
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-5">
        <button
          onClick={() => {
            if (ActivePage > 1) {
              const newPage = ActivePage - 1;
              SetActivePage(newPage);
              if (newPage === 1) {
                SetShopVegetableOpen(true);
                SetSecondPageOpen(false);
                SetThirdpageOpen(false);
              } else if (newPage === 2) {
                SetSecondPageOpen(true);
                SetShopVegetableOpen(false);
                SetThirdpageOpen(false);
              } else if (newPage === 3) {
                SetThirdpageOpen(true);
                SetShopVegetableOpen(false);
                SetSecondPageOpen(false);
              }
            }
          }}
          className={`border border-gray-300 p-2 sm:p-3 lg:p-4 font-bold cursor-pointer transition-all duration-300 ease-in-out rounded-lg text-sm sm:text-base ${
            ActivePage === 1
              ? "bg-green-5911 text-white"
              : "bg-white text-black hover:bg-green-5911 hover:text-white"
          }`}
        >
          <RiArrowLeftDoubleLine />
        </button>

        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`border border-gray-300 p-2 sm:p-3 lg:p-4 font-bold cursor-pointer transition-all duration-300 ease-in-out rounded-lg text-sm sm:text-base ${
              ActivePage === page
                ? "bg-green-5911 text-white"
                : "bg-white text-black hover:bg-green-5911 hover:text-white"
            }`}
            onClick={() => {
              if (page === 1) {
                SetSecondPageOpen(false);
                SetColVegetableOpen(false);
                SetShopVegetableOpen(true);
                SetThirdpageOpen(false);
              } else if (page === 2) {
                SetSecondPageOpen(true);
                SetColVegetableOpen(false);
                SetShopVegetableOpen(false);
                SetThirdpageOpen(false);
              } else if (page === 3) {
                SetSecondPageOpen(false);
                SetColVegetableOpen(false);
                SetShopVegetableOpen(false);
                SetThirdpageOpen(true);
              }
              SetActivePage(page);
            }}
          >
            {page}
          </button>
        ))}

        <button className="border border-gray-300 p-2 sm:p-3 lg:p-4 font-bold cursor-pointer transition-all duration-300 ease-in-out rounded-lg text-sm sm:text-base bg-white text-black hover:bg-green-5911 hover:text-white">
          ...
        </button>

        <button
          className="border border-gray-300 p-2 sm:p-3 lg:p-4 font-bold cursor-pointer transition-all duration-300 ease-in-out rounded-lg text-sm sm:text-base bg-white text-black hover:bg-green-5911 hover:text-white"
          onClick={() => SetActivePage(10)}
        >
          10
        </button>

        <button
          onClick={() => {
            if (ActivePage < 3) {
              const newPage = ActivePage + 1;
              SetActivePage(newPage);
              if (newPage === 1) {
                SetShopVegetableOpen(true);
                SetSecondPageOpen(false);
                SetThirdpageOpen(false);
              } else if (newPage === 2) {
                SetSecondPageOpen(true);
                SetShopVegetableOpen(false);
                SetThirdpageOpen(false);
              } else if (newPage === 3) {
                SetThirdpageOpen(true);
                SetShopVegetableOpen(false);
                SetSecondPageOpen(false);
              }
            }
          }}
          className={`border border-gray-300 p-2 sm:p-3 lg:p-4 font-bold cursor-pointer transition-all duration-300 ease-in-out rounded-lg text-sm sm:text-base ${
            ActivePage === 3
              ? "bg-green-5911 text-white"
              : "bg-white text-black hover:bg-green-5911 hover:text-white"
          }`}
        >
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>

      <CartSidebar data={cartData} />
    </div>
  );
};

export default Shop;