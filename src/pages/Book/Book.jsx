import React from "react";
import { Star, ShoppingCart, ShoppingBag } from "lucide-react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {

    const {  bookId } = singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition transform hover:-translate-y-2 duration-300 overflow-hidden">
        {/* Book Image */}
        <div className="bg-gray-50 flex justify-center items-center p-6">
          <img
            src={singleBook.image}
            alt={singleBook.bookName}
            className="h-48 object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Book Info */}
        <div className="p-5">
          {/* Tags */}
          <div className="flex gap-2 mb-3 flex-wrap">
            {singleBook.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition">
            {singleBook.bookName}
          </h2>

          {/* Author */}
          <p className="text-sm text-gray-500 mb-2">By : {singleBook.author}</p>

          {/* Category & Rating */}
          <div className="flex justify-between items-center border-t pt-3 text-sm text-gray-600 mb-4">
            <span>{singleBook.category}</span>
            <span className="flex items-center gap-1 font-medium">
              {singleBook.rating}
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
            </span>
          </div>

          {/* Buttons */}
          {/* <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              <ShoppingBag size={16} />
              Order Now
            </button>
            <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
              <ShoppingCart size={16} />
              Add to Cart
            </button>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default Book;
