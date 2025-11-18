import React, { useState } from "react";
import { Link } from "react-router-dom";
import mushroomimg from "../../../assets/Images/mushroomimg.png";
import orangeimg from "../../../assets/Images/orangeimg.png";
import kiwiimg from "../../../assets/Images/kiwiimg.png";
import broccoliimg from "../../../assets/Images/broccoliimg.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const handleCartItem = (item) => {
  const normalizedItem = {
    img: item.img,
    Productname: item.productname,
    Price: parseFloat(item.price.replace("$", "")),
    ActualPrice: parseFloat(item.actualprice.replace("$", "")),
    rating: item.rating,
    quantity: 1,
  };
  const existingCart = JSON.parse(sessionStorage.getItem("Cart_data")) || [];
  const updatedCart = [...existingCart, normalizedItem];
  sessionStorage.setItem("Cart_data", JSON.stringify(updatedCart));
  console.log("Added to cart:", normalizedItem);
  console.log("Full Cart:", updatedCart);
};

const HeroSection3 = () => {
  const [isFoodOpen, setFoodOpen] = useState(true);
  const [isVegetableOpen, setVegetableOpen] = useState(false);
  const [isDriedFoodOpen, SetDriedFoodOpen] = useState(false);
  const [isBreadcakeOpen, SetBreadCakeOpen] = useState(false);
  const [isFishMeatOpen, SetFishMeatOpen] = useState(false);

  const foodProduct = [
    {
      img: broccoliimg,
      sale: "-19%",
      rating: "5",
      ratingby: "24",
      productname: "Carrot Group Scal",
      price: "$32.00",
      actualprice: "$46.00",
    },
    {
      img: orangeimg,
      sale: "New",
      rating: "4.5",
      ratingby: "30",
      productname: "Orange Juice",
      price: "$20.00",
      actualprice: "$35.00",
    },
    {
      img: orangeimg,
      sale: "New",
      rating: "4.5",
      ratingby: "30",
      productname: "Orange Juice",
      price: "$20.00",
      actualprice: "$35.00",
    },
    {
      img: mushroomimg,
      sale: "New",
      rating: "4.5",
      ratingby: "30",
      productname: "Mushroom",
      price: "$20.00",
      actualprice: "$35.00",
    },
    {
      img: kiwiimg,
      sale: "-19%",
      rating: "4.5",
      ratingby: "30",
      productname: "Kiwi",
      price: "$20.00",
      actualprice: "$35.00",
    },
    {
      img: broccoliimg,
      sale: "New",
      rating: "4.5",
      ratingby: "30",
      productname: "Broccoli",
      price: "$20.00",
      actualprice: "$35.00",
    },
  ];

  const DriedFoods = [
    {
      img: mushroomimg,
      sale: "-19%",
      rating: "5",
      ratingby: "24",
      productname: "Hello",
      price: "$32.00",
      actualprice: "$46.00",
    },
    {
      img: kiwiimg,
      sale: "-20%",
      rating: "4.5",
      ratingby: "30",
      productname: "Orange Juice",
      price: "$20.00",
      actualprice: "$35.00",
    },
    {
      img: orangeimg,
      sale: "New",
      rating: "4.5",
      ratingby: "30",
      productname: "Orange Juice",
      price: "$20.00",
      actualprice: "$35.00",
    },
    {
      img: kiwiimg,
      sale: "-30%",
      rating: "4.5",
      ratingby: "30",
      productname: "Mushroom",
      price: "$20.00",
      actualprice: "$35.00",
    },
    {
      img: broccoliimg,
      sale: "-2%",
      rating: "4.5",
      ratingby: "30",
      productname: "Kiwi",
      price: "$20.00",
      actualprice: "$35.00",
    },
    {
      img: broccoliimg,
      sale: "New",
      rating: "4.5",
      ratingby: "30",
      productname: "Broccoli",
      price: "$20.00",
      actualprice: "$35.00",
    },
  ];

  const VegetableProduct = [
    {
      img: kiwiimg,
      sale: "-19%",
      rating: "5",
      ratingby: "24",
      productname: "Hello",
      price: "$32.00",
      actualprice: "$46.00",
    },
    {
      img: mushroomimg,
      sale: "New",
      rating: "4.5",
      ratingby: "30",
      productname: "Orange Juice",
      price: "$20.00",
      actualprice: "$35.00",
    },
    {
      img: orangeimg,
      sale: "-10%",
      rating: "4.5",
      ratingby: "30",
      productname: "Orange Juice",
      price: "$20.00",
      actualprice: "$35.00",
    },
    {
      img: kiwiimg,
      sale: "-19%",
      rating: "4.5",
      ratingby: "30",
      productname: "Mushroom",
      price: "$20.00",
      actualprice: "$35.00",
    },
    {
      img: kiwiimg,
      sale: "New",
      rating: "4.5",
      ratingby: "30",
      productname: "Kiwi",
      price: "$20.00",
      actualprice: "$35.00",
    },
    {
      img: broccoliimg,
      sale: "New",
      rating: "4.5",
      ratingby: "30",
      productname: "Broccoli",
      price: "$20.00",
      actualprice: "$35.00",
    },
  ];

  const BreadCake = [
    {
      img: orangeimg,
      sale: "-19%",
      rating: "5",
      ratingby: "24",
      productname: "Hello",
      price: "$42.00",
      actualprice: "$56.00",
    },
    {
      img: mushroomimg,
      sale: "New",
      rating: "4.5",
      ratingby: "30",
      productname: "Orange Juice",
      price: "$50.00",
      actualprice: "$75.00",
    },
    {
      img: kiwiimg,
      sale: "New",
      rating: "4.5",
      ratingby: "30",
      productname: "Orange Juice",
      price: "$30.00",
      actualprice: "$35.00",
    },
    {
      img: mushroomimg,
      sale: "-21%",
      rating: "4.5",
      ratingby: "30",
      productname: "Mushroom",
      price: "$22.00",
      actualprice: "$35.00",
    },
    {
      img: kiwiimg,
      sale: "New",
      rating: "4.5",
      ratingby: "30",
      productname: "Kiwi",
      price: "$25.00",
      actualprice: "$35.00",
    },
    {
      img: broccoliimg,
      sale: "-10%",
      rating: "4.5",
      ratingby: "30",
      productname: "Broccoli",
      price: "$30.00",
      actualprice: "$35.00",
    },
  ];

  const FishMeat = [
    {
      img: mushroomimg,
      sale: "-19%",
      rating: "5",
      ratingby: "24",
      productname: "Hello",
      price: "$43.00",
      actualprice: "$56.00",
    },
    {
      img: mushroomimg,
      sale: "New",
      rating: "4.5",
      ratingby: "30",
      productname: "Orange Juice",
      price: "$58.00",
      actualprice: "$75.00",
    },
    {
      img: kiwiimg,
      sale: "New",
      rating: "4.5",
      ratingby: "30",
      productname: "Orange Juice",
      price: "$33.00",
      actualprice: "$35.00",
    },
    {
      img: orangeimg,
      sale: "-2%",
      rating: "4.5",
      ratingby: "30",
      productname: "Mushroom",
      price: "$22.00",
      actualprice: "$35.00",
    },
    {
      img: mushroomimg,
      sale: "New",
      rating: "4.5",
      ratingby: "30",
      productname: "Kiwi",
      price: "$29.00",
      actualprice: "$35.00",
    },
    {
      img: broccoliimg,
      sale: "-33%",
      rating: "4.5",
      ratingby: "30",
      productname: "Broccoli",
      price: "$30.00",
      actualprice: "$35.00",
    },
  ];

  const icons = [
    {
      icon1: <FaShoppingCart />,
      icon2: <FaEye />,
      icon3: <CiHeart />,
    },
  ];
  const ProductCard = ({ item, shadowColor = "shadow-green-5911" }) => (
    <div
      className="relative group bg-white border rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[250px] xl:max-w-[280px]"
      style={{ 
        boxShadow: shadowColor.includes('shadow-') ? '' : `0 10px 25px ${shadowColor}`
      }}
    >
      <div className="relative flex justify-center">
        <Link to="/Shop">
          <img
            className="w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[200px] xl:h-[220px] object-cover"
            src={item.img}
            alt={item.productname}
          />
        </Link>
        <span className="absolute top-2 left-2 bg-green-5911 text-white px-2 py-1 font-semibold rounded text-xs sm:text-sm">
          {item.sale}
        </span>
      </div>
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => handleCartItem(item)}
          className="hover:text-green-5911 bg-white shadow-xl p-2 rounded-full text-xl sm:text-2xl cursor-pointer transform hover:scale-110 transition-transform"
        >
          {icons[0].icon1}
        </button>
        <button className="bg-white p-2 rounded-full shadow-lg text-xl sm:text-2xl hover:text-green-5911 transform hover:scale-110 transition-transform">
          {icons[0].icon2}
        </button>
        <button className="bg-white p-2 rounded-full shadow-lg text-xl sm:text-2xl hover:text-green-5911 transform hover:scale-110 transition-transform">
          {icons[0].icon3}
        </button>
      </div>
      
      <div className="p-4 sm:p-6 text-center">
        <h3 className="font-semibold text-sm sm:text-base md:text-lg">{item.productname}</h3>
        <div className="text-gray-600 mt-2">
          <span className="text-green-5911 font-bold text-sm sm:text-base">{item.price}</span>
          <span className="ml-2 sm:ml-3 line-through text-gray-400 text-xs sm:text-sm">{item.actualprice}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mb-9 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center pt-6 sm:pt-8 lg:pt-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold animate-bounce">
          Our <span className="text-green-5911">Products</span>
        </h2>
      </div>
      <div className="pt-6 sm:pt-8 lg:pt-10">
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-8 xl:gap-15 font-bold text-sm sm:text-base lg:text-lg xl:text-xl">
          <li>
            <button
              onClick={() => {
                setFoodOpen(true);
                setVegetableOpen(false);
                SetDriedFoodOpen(false);
                SetBreadCakeOpen(false);
                SetFishMeatOpen(false);
              }}
              className={`border-r-2 pr-3 sm:pr-5 lg:pr-7 transition-all duration-300 hover:text-green-5911 hover:border-b-2 hover:border-green-5911 ${
                isFoodOpen ? "text-green-5911 border-b-2 border-green-5911" : "text-gray-600"
              }`}
            >
              FOOD & DRINKS
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setVegetableOpen(true);
                setFoodOpen(false);
                SetDriedFoodOpen(false);
                SetBreadCakeOpen(false);
                SetFishMeatOpen(false);
              }}
              className={`border-r-2 pr-3 sm:pr-5 lg:pr-7 transition-all duration-300 hover:text-green-5911 hover:border-b-2 hover:border-green-5911 ${
                isVegetableOpen ? "text-green-5911 border-b-2 border-green-5911" : "text-gray-600"
              }`}
            >
              VEGETABLES
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                SetDriedFoodOpen(true);
                setFoodOpen(false);
                setVegetableOpen(false);
                SetBreadCakeOpen(false);
                SetFishMeatOpen(false);
              }}
              className={`border-r-2 pr-3 sm:pr-5 lg:pr-7 transition-all duration-300 hover:text-green-5911 hover:border-b-2 hover:border-green-5911 ${
                isDriedFoodOpen ? "text-green-5911 border-b-2 border-green-5911" : "text-gray-600"
              }`}
            >
              DRIED FOODS
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                SetBreadCakeOpen(true);
                setFoodOpen(false);
                setVegetableOpen(false);
                SetDriedFoodOpen(false);
                SetFishMeatOpen(false);
              }}
              className={`border-r-2 pr-3 sm:pr-5 lg:pr-7 transition-all duration-300 hover:text-green-5911 hover:border-b-2 hover:border-green-5911 ${
                isBreadcakeOpen ? "text-green-5911 border-b-2 border-green-5911" : "text-gray-600"
              }`}
            >
              BREAD & CAKE
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                SetFishMeatOpen(true);
                setFoodOpen(false);
                setVegetableOpen(false);
                SetDriedFoodOpen(false);
                SetBreadCakeOpen(false);
              }}
              className={`pr-3 sm:pr-5 lg:pr-7 transition-all duration-300 hover:text-green-5911 hover:border-b-2 hover:border-green-5911 ${
                isFishMeatOpen ? "text-green-5911 border-b-2 border-green-5911" : "text-gray-600"
              }`}
            >
              FISH & MEAT
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-8 sm:mt-10 lg:mt-12">
        {isFoodOpen && (
          <div className="cursor-pointer justify-items-center grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {foodProduct.map((item, index) => (
              <ProductCard key={index} item={item} shadowColor="shadow-green-5911" />
            ))}
          </div>
        )}
        {isVegetableOpen && (
          <div className="cursor-pointer justify-items-center grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {VegetableProduct.map((item, index) => (
              <ProductCard key={index} item={item} shadowColor="#ef4444" />
            ))}
          </div>
        )}
        {isDriedFoodOpen && (
          <div className="cursor-pointer justify-items-center grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {DriedFoods.map((item, index) => (
              <ProductCard key={index} item={item} shadowColor="#000000" />
            ))}
          </div>
        )}
        {isBreadcakeOpen && (
          <div className="cursor-pointer justify-items-center grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {BreadCake.map((item, index) => (
              <ProductCard key={index} item={item} shadowColor="#059669" />
            ))}
          </div>
        )}
        {isFishMeatOpen && (
          <div className="cursor-pointer justify-items-center grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {FishMeat.map((item, index) => (
              <ProductCard key={index} item={item} shadowColor="#86198f" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection3;