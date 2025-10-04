import React from "react";
import { Link } from "react-router";
import { Star, Gift, Users, BookOpen, Quote } from "lucide-react";

const About = () => {
  const popularAuthors = [
    {
      name: "Amy Stevens",
      role: "Author",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",

      rating: 4.8,
    },
    {
      name: "Steven Moore",
      role: "Author",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
    },
    {
      name: "Jenny Sanders",
      role: "Author",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
    },
    {
      name: "Andrew Woods",
      role: "Editor",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 4.6,
    },
  ];

  const features = [
    {
      icon: <Gift className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Make the Best Present",
      description:
        "A book will not offer best presents for anyone in any situation.",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Find Your Favorite Authors",
      description:
        "Great writers can print paintings, use at offer for what individuals.",
    },
    {
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Read Readers's Reviews",
      description:
        "You will find stories of magazines, online sources and favorite books.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              About Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-2 sm:mb-3">
              Home - About Us
            </p>
            <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
              Our mission is to bring the passion and love for reading books
              book, whether it's a regular paper book, or an online edition, we
              want our readers to know that we appreciate quality and
              well-designating ideas as a community and enjoy multiple genres,
              mushes and classic authors, reviews, critics and novel!
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-blue-600 mb-3 sm:mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base md:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight sm:leading-normal">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center order-1 lg:order-2 mb-6 sm:mb-0">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg max-w-sm sm:max-w-md w-full">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Reading Community"
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg mb-3 sm:mb-4"
              />
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Join Our Reading Community
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Discover amazing books and connect with fellow readers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Authors Section */}
      <div className="bg-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Most Popular Authors
          </h2>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {popularAuthors.map((author, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 overflow-hidden rounded-full border-2 sm:border-4 border-blue-100">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {author.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
                  {author.role}
                </p>
                <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      className={`${
                        star <= Math.floor(author.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-xs sm:text-sm text-gray-600 ml-1">
                    ({author.rating})
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base md:text-lg">
              VIEW ABOUT
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-white py-8 sm:py-12 md:py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md sm:shadow-lg">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-4 sm:mb-6" />
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 sm:mb-8 text-gray-700 italic">
              "When it comes to immediate financial help, I know how I can count
              on. Being an accountant, you sometimes need a fresh eye to check
              the reports. Great jobs I look forward to meeting fun again soon."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 overflow-hidden rounded-full border-2 sm:border-4 border-blue-100">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Eric Kinnemann"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                  Founder Eric Kinnemann
                </h4>
                <p className="text-blue-600 font-medium text-sm sm:text-base">
                  CEO & Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-8 sm:py-12 rounded-none sm:rounded-2xl mx-0 sm:mx-4 mb-6 sm:mb-8 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Get ~30% purchase on order over $299.00
          </h3>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90">
            Limited time offer for our valued readers
          </p>
          <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 font-semibold text-sm sm:text-base md:text-lg shadow-lg">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Top Banner */}
      <div className="bg-blue-600 text-white py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-base sm:text-lg font-semibold">ABOUT US TOP</p>
        </div>
      </div>
    </div>
  );
};

export default About;
