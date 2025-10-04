import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="mx-2">
        <Link
          to="/"
          className="text-sm font-medium hover:text-amber-400 transition-colors">
          Home
        </Link>
      </li>
      {/* <li className="mx-2">
        <Link
          to="/books"
          className="text-sm font-medium hover:text-amber-400 transition-colors">
          Books
        </Link>
      </li> */}
      {/* <li className="mx-2">
        <Link
          to="/categories"
          className="text-sm font-medium hover:text-amber-400 transition-colors">
          Categories
        </Link>
      </li> */}
      <li className="mx-2">
        <Link
          to="/about"
          className="text-sm font-medium hover:text-amber-400 transition-colors">
          About
        </Link>
      </li>
      <li className="mx-2">
        <Link
          to="/contact"
          className="text-sm font-medium hover:text-amber-400 transition-colors">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-amber-600 text-white py-2 px-4 text-sm">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
            {/* Limited Time Offer */}
            <div className="text-center md:text-left">
              <span className="font-semibold">
                📚 Limited Time: Up To 50% Off On Bestsellers!
              </span>
            </div>

            {/* Right side links */}
            <div className="flex items-center space-x-4 text-xs md:text-sm">
              <span className="cursor-pointer hover:text-amber-200 transition-colors">
                📦 Track Order
              </span>
              <span className="cursor-pointer hover:text-amber-200 transition-colors">
                ❓ Help Center
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="navbar bg-white shadow-md px-4 sm:px-6 lg:px-8">
        {/* Mobile menu and logo */}
        <div className="navbar-start flex-1">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-2 hover:bg-amber-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-white rounded-box z-50 mt-3 w-64 p-4 shadow-xl border">
              {navLinks}
              <div className="divider my-2"></div>
              <li>
                <a className="text-amber-600 font-semibold hover:bg-amber-50">
                  🔐 Sign In
                </a>
              </li>
              <li>
                <a className="text-gray-700 hover:bg-gray-100">📝 Sign Up</a>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl p-2 hover:bg-amber-50 text-amber-600 font-bold">
            📖 BookHaven
          </Link>
        </div>

        {/* Desktop navigation links - Centered */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center space-x-1">
            {navLinks}
          </ul>
        </div>

        {/* Desktop right side icons and buttons */}
        <div className="navbar-end flex-none gap-3">
          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search books..."
                className="input input-bordered input-sm w-40 lg:w-56 bg-gray-50 border-gray-300 focus:border-amber-400"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600">
                🔍
              </button>
            </div>
          </div>

          {/* Cart Icon */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={1}
              role="button"
              className="btn btn-ghost btn-circle hover:bg-amber-50">
              <div className="indicator">
                <span className="text-lg">🛒</span>
                <span className="badge badge-xs badge-amber-500 indicator-item">
                  3
                </span>
              </div>
            </div>
            <div
              tabIndex={1}
              className="card dropdown-content bg-white z-50 mt-3 w-72 shadow-xl border">
              <div className="card-body p-4">
                <span className="font-bold text-lg">Cart Items</span>
                <span className="text-gray-600">3 items in cart</span>
                <div className="card-actions">
                  <button className="btn btn-amber btn-block btn-sm text-white">
                    View Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop auth buttons */}
          <div className="hidden sm:flex gap-2">
            <button className="btn btn-outline btn-sm border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
              Sign In
            </button>
            <button className="btn btn-amber btn-sm text-white hover:bg-amber-700">
              Sign Up
            </button>
          </div>

          {/* Mobile search icon */}
          <div className="dropdown dropdown-end md:hidden">
            <div
              tabIndex={2}
              role="button"
              className="btn btn-ghost btn-circle hover:bg-amber-50">
              <span className="text-lg">🔍</span>
            </div>
            <div
              tabIndex={2}
              className="dropdown-content bg-white p-4 rounded-box shadow-xl border mt-3">
              <input
                type="text"
                placeholder="Search books..."
                className="input input-bordered w-64 bg-gray-50 border-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
