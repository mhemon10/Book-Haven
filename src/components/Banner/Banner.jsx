import React from "react";
import heroImage from "../../assets/book-1.jpg"; // you can replace with your hero image

const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-xl">
          <p className="text-sm text-white uppercase tracking-wide mb-2">
            SALE UP TO 20% OFF
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Grab your next <br /> favorite book
          </h1>
          <p className="text-lg text-white mb-6">
            Books are the quietest and most constant of friends; they are the
            most accessible and wisest of counselors, and the most patient of
            teachers
          </p>
          <button className="px-6 py-3 bg-amber-600 hover:bg-red-700 text-white rounded-full font-medium flex items-center gap-2">
            <span className="text-xl">🛒</span> GO TO SHOP
          </button>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
            <span className="text-red-600 text-2xl">🚚</span>
            <div>
              <h3 className="font-semibold">Free Delivery</h3>
              <p className="text-sm text-gray-500">For all member community</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
            <span className="text-red-600 text-2xl">💳</span>
            <div>
              <h3 className="font-semibold">Secure payments</h3>
              <p className="text-sm text-gray-500">Supports various payment</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
            <span className="text-red-600 text-2xl">📞</span>
            <div>
              <h3 className="font-semibold">24/7 support</h3>
              <p className="text-sm text-gray-500">Ready to serve you</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
            <span className="text-red-600 text-2xl">↩️</span>
            <div>
              <h3 className="font-semibold">90 Days Return</h3>
              <p className="text-sm text-gray-500">90 Days Return</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
