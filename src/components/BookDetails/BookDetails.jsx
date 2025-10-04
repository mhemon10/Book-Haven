import React, { useState } from "react";
import { useLoaderData, useParams, Link } from "react-router";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  BookOpen,
  User,
  Calendar,
  Hash,
} from "lucide-react";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);

  const [activeTab, setActiveTab] = useState("other");

  if (!singleBook) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Book not found</h1>
      </div>
    );
  }

  const {
    bookName,
    image,
    author,
    rating,
    review,
    totalPages,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;

  // Get related books (excluding current book)
  const relatedBooks = data
    .filter((book) => book.bookId !== bookId)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link to="/" className="hover:text-indigo-600">
              Shop
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-400">{category}</span>
            <span className="mx-2">›</span>
            <span className="text-gray-900">{bookName}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Book Image */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex justify-center">
              <img
                src={image}
                alt={bookName}
                className="w-80 h-96 object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Right Column - Book Details */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {/* Category & Rating */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-indigo-600 font-medium">
                {category}
              </span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className={`${
                      star <= Math.floor(rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">({rating})</span>
              </div>
            </div>

            {/* Book Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {bookName}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-2 text-lg text-gray-600 mb-4">
              <User size={20} />
              <span>By: {author}</span>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Active Board name
              </h3>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className="fill-gray-400 text-gray-400"
                    />
                  ))}
                </div>
                <div className="text-lg font-bold">
                  <span className="text-green-600">$12.00</span>
                  <span className="text-gray-400 mx-2">-</span>
                  <span className="text-green-600">$22.00</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">{review}</p>

            {/* Specifications Table */}
            <div className="mb-8">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-sm font-medium text-gray-700 w-1/3">
                      Book Details
                    </td>
                    <td className="py-3 text-sm text-gray-600">
                      Specifications
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-sm font-medium text-gray-700 flex items-center gap-2">
                      <BookOpen size={16} />
                      Total Pages
                    </td>
                    <td className="py-3 text-sm text-gray-600">{totalPages}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-sm font-medium text-gray-700 flex items-center gap-2">
                      <User size={16} />
                      Publisher
                    </td>
                    <td className="py-3 text-sm text-gray-600">{publisher}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Calendar size={16} />
                      Published Year
                    </td>
                    <td className="py-3 text-sm text-gray-600">
                      {yearOfPublishing}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Hash size={16} />
                      Book ID
                    </td>
                    <td className="py-3 text-sm text-gray-600">{bookId}</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-sm font-medium text-gray-700">
                      Format
                    </td>
                    <td className="py-3 text-sm text-gray-600">
                      Paperback, Digital
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tags */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold flex-1">
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <Heart size={20} className="text-gray-600" />
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <Share2 size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Other Book / Your Book Toggle */}
            <div className="flex border-b border-gray-200 mb-6">
              <button
                className={`px-4 py-2 border-b-2 font-medium ${
                  activeTab === "other"
                    ? "border-indigo-600 text-indigo-600"
                    : "text-gray-600 border-transparent"
                }`}
                onClick={() => setActiveTab("other")}>
                Other Book
              </button>
              <button
                className={`px-4 py-2 border-b-2 font-medium ${
                  activeTab === "your"
                    ? "border-indigo-600 text-indigo-600"
                    : "text-gray-600 border-transparent"
                }`}
                onClick={() => setActiveTab("your")}>
                Your Book
              </button>
            </div>

            {/* Tab Content */}
            <div className="text-sm text-gray-500 mb-8">
              {activeTab === "other" ? (
                <p>
                  Browse similar books from other authors in the {category}{" "}
                  category.
                </p>
              ) : (
                <p>Manage your personal collection and reading progress.</p>
              )}
            </div>

            {/* Time */}
            <div className="text-sm text-gray-500">1:00 AM</div>
          </div>
        </div>

        {/* Bottom Section - Related Books */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Books
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedBooks.map((book) => (
              <Link
                key={book.bookId}
                to={`/bookDetails/${book.bookId}`}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <img
                    src={book.image}
                    alt={book.bookName}
                    className="w-20 h-28 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                    {book.bookName}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">by {book.author}</p>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    <Star
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <span className="text-sm text-gray-600">{book.rating}</span>
                  </div>
                  <div className="h-1 w-12 bg-indigo-600 mx-auto"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">SILENCE</h3>
            <div className="h-1 w-12 bg-indigo-600 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600">Peaceful Reading</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">LONG ROAD</h3>
            <div className="h-1 w-12 bg-green-600 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600">LEGEND WARM</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">SILENTWORK</h3>
            <div className="h-1 w-12 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600">Focus Mode</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">ANSWER 4.0</h3>
            <div className="h-1 w-12 bg-purple-600 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600">Smart Reading</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
