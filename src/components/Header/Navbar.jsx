import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const link = (
    <>
      <li className="m-1 sm:m-2">
        <Link to="/" className="text-sm sm:text-base">
          Home
        </Link>
      </li>
      <li className="m-1 sm:m-2">
        <Link to="./about" className="text-sm sm:text-base">
          About
        </Link>
      </li>
      <li className="m-1 sm:m-2">
        <Link to="./contact" className="text-sm sm:text-base">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gray-800 text-white py-2 px-4 text-sm">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
            {/* Limited Time Offer */}
            <div className="text-center md:text-left">
              <span className="font-semibold">
                Limited Time Offer : Up To 50% Off Every Week For Selected Item
              </span>
            </div>

            {/* Right side links */}
            <div className="flex items-center space-x-4 text-xs md:text-sm">
              <span className="cursor-pointer hover:text-gray-300">
                Track Order
              </span>
              <span className="cursor-pointer hover:text-gray-300">
                Help Center
              </span>
              
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="navbar bg-base-100 shadow-sm px-2 sm:px-4">
        {/* Mobile menu and logo */}
        <div className="navbar-start flex-1">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              {link}
              <li className="border-t mt-2 pt-2">
                <a className="btn btn-outline btn-success btn-sm w-full justify-start mb-2">
                  Sign In
                </a>
              </li>
              <li>
                <a className="btn btn-outline btn-info btn-sm w-full justify-start">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl p-2 text-sm sm:text-xl">
            BookHaven
          </Link>
        </div>

        {/* Desktop navigation links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>

        {/* Desktop auth buttons */}
        <div className="navbar-end flex-none gap-1 sm:gap-2">
          <div className="hidden sm:flex gap-1 sm:gap-2">
            <a className="btn btn-outline btn-success btn-sm sm:btn-md">
              Sign In
            </a>
            <a className="btn btn-outline btn-info btn-sm sm:btn-md">Sign Up</a>
          </div>

          {/* Mobile auth icon */}
          <div className="dropdown dropdown-end sm:hidden">
            <div
              tabIndex={1}
              role="button"
              className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <ul
              tabIndex={1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">Sign In</a>
              </li>
              <li>
                <a>Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
