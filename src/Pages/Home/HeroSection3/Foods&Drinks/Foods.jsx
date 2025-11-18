import React from "react";
import mushroomimg from "../../../../assets/Images/mushroomimg.png";
import orangeimg from "../../../../assets/Images/orangeimg.png";
import kiwiimg from "../../../../assets/Images/kiwiimg.png";
import broccoliimg from "../../../../assets/Images/broccoliimg.png";

const Foods = () => {
  const product = [
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
  return (
    <>
      <div className=" mt-12 justify-items-center grid grid-cols-4 gap-6  ">
        {product.map((item, index) => (
          <div
            key={index}
            className="bg-white border-1 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200"
          >
            <div className="relative flex">
              <img
                className="w-[250px] h-[250px] border-1 object-cover p-0 bg-gray-400 "
                src={item.img}
                alt={item.productname}
              />
              <span className="absolute top-2 left-2 bg-green-5911 text-white px-2 py-1 font-semibold rounded text-shadow-xs">
                {item.sale}
              </span>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg">{item.productname}</h3>

              <div className=" text-gray-600 mt-2 ">
                <span className="text-green-5911 font-bold"> {item.price}</span>
                <span className="ml-3 line-through text-gray-400">
                  {item.actualprice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Foods;
