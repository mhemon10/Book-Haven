import React from "react";

const BookHavenChoice = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Header with Unique Design */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 px-6 py-2 rounded-full mb-6">
            <span className="text-blue-600 font-semibold">
              Why Choose BookHaven?
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Gateway to{" "}
            <span className="relative">
              <span className="text-amber-600">Knowledge</span>
              <div className="absolute bottom-2 left-0 w-full h-3 bg-blue-200 opacity-50 -z-10"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover a world where every page turns into an adventure and every
            book becomes a friend.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Visual Story */}
          <div className="relative">
            {/* Main Book Stack Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Book Collection"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Years Trusted</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm">Rating</div>
              </div>
            </div>

            {/* Mini Stats Below Image */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">10K+</div>
                <div className="text-gray-600 text-sm">Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">5K+</div>
                <div className="text-gray-600 text-sm">Books</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-gray-600 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - Clean Features */}
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <div className="w-6 h-6 bg-amber-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Curated Collections
                </h3>
                <p className="text-gray-600">
                  Hand-picked books across all genres, ensuring quality and
                  diversity in every selection.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-xl">
                <div className="w-6 h-6 bg-green-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Learning Community
                </h3>
                <p className="text-gray-600">
                  Join thousands of learners sharing insights, reviews, and book
                  recommendations.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Easy Access
                </h3>
                <p className="text-gray-600">
                  Physical and digital formats available. Read anywhere, anytime
                  that suits you.
                </p>
              </div>
            </div>

            {/* Simple CTA */}
            <div className="pt-6">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
                Start Your Reading Journey
              </button>
              <p className="text-gray-500 text-sm mt-3">
                Join 10,000+ happy readers today
              </p>
            </div>
          </div>
        </div>

        {/* Unique Bottom Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Explore?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Your next favorite book is waiting. Dive into our collections and
              discover stories that inspire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                Browse Books
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHavenChoice;
