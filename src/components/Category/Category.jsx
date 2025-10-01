import React from 'react';
import newReleaseImg from "../../assets/newrelease.jpg"; // replace with your image
import preOrderImg from "../../assets/bestseller.jpg"; // replace with your image
import bestSellerImg from "../../assets/preorder.jpg"; // replace with your image


const Category = () => {
const categories = [
  {
    title: "New Release",
    desc: "Discover the latest arrivals fresh off the press.",
    img: newReleaseImg,
  },
  {
    title: "Pre Order",
    desc: "Be the first to grab upcoming books before anyone else.",
    img: preOrderImg,
  },
  {
    title: "Best Seller",
    desc: "Explore our most popular and trending books loved by readers.",
    img: bestSellerImg,
  },
];


    return (
        <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative h-64 rounded-2xl overflow-hidden group"
          >
            {/* Background Image with hover zoom effect */}
            <img
              src={cat.img}
              alt={cat.title}
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4">
              <h2 className="text-2xl font-semibold mb-2">{cat.title}</h2>
              <p className="text-sm mb-4">{cat.desc}</p>
              <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
    


export default Category;