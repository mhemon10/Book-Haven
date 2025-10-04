import React from "react";
import { BookOpen, Shield, TrendingUp, Users, Star, Award } from "lucide-react";

const OurMission = () => {
  const missionCards = [
    {
      icon: <BookOpen className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Best Bookstore",
      description:
        "Discover curated collections of premium books across all genres, carefully selected to inspire and educate readers of all ages and interests.",
      buttonText: "Explore Books",
    },
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Trusted Seller",
      description:
        "With 50+ years of experience, we guarantee authentic books, secure transactions, and reliable delivery you can always count on.",
      buttonText: "Why Trust Us",
    },
    {
      icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Expand Store",
      description:
        "Continuously growing our inventory with new releases and rare finds to bring you the most comprehensive book collection available.",
      buttonText: "View New Arrivals",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="flex justify-center mb-4">
            <Award className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Mission
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At BookHaven, we're dedicated to connecting readers with exceptional
            books while building a vibrant community of book lovers who share
            knowledge, stories, and inspiration.
          </p>
        </div>

        {/* Divider Line */}
        <div className="flex justify-center mb-12 sm:mb-16 lg:mb-20">
          <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {missionCards.map((card, index) => (
            <div
              key={index}
              className="group text-center bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100">
              {/* Card Icon */}
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {card.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                {card.title}
              </h3>

              {/* Divider Line */}
              <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-6 sm:mb-8"></div>

              {/* Card Description */}
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-6 sm:mb-8">
                {card.description}
              </p>

              {/* Learn More Button */}
              <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto">
                {card.buttonText}
                <TrendingUp className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-10 lg:p-12 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Users className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Join 10,000+ Happy Readers
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
              Become part of our growing community of book enthusiasts who trust
              BookHaven for quality books, expert recommendations, and
              exceptional service.
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="text-gray-700 font-semibold">
                4.9/5 from 2,500+ reviews
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Start Reading Today
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-2">
                <Users className="w-5 h-5" />
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
