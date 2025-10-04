import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-amber-600 mb-2">
              📖 BookHaven
            </h2>
            <p className="text-gray-300 font-medium mb-2">
              Your Literary Sanctuary
            </p>
            <p className="text-gray-400 text-sm">
              Discover your next favorite read at BookHaven. We offer a curated
              collection of books for every reader's taste and imagination.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors">
                📘
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors">
                📷
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors">
                🐦
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors">
                💼
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-600 border-b border-amber-600 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-amber-300 transition-colors text-sm flex items-center gap-2">
                  <span>📚</span> About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-amber-300 transition-colors text-sm flex items-center gap-2">
                  <span>📞</span> Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-amber-300 transition-colors text-sm flex items-center gap-2">
                  <span>🔒</span> Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/shipping"
                  className="text-gray-400 hover:text-amber-300 transition-colors text-sm flex items-center gap-2">
                  <span>🚚</span> Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-400 hover:text-amber-300 transition-colors text-sm flex items-center gap-2">
                  <span>❓</span> FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-600 border-b border-amber-600 pb-2">
              Visit Us
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <span>📍</span>
                <div>
                  <p>123 Uttara, Uttarkhan</p>
                  <p>Dhaka City-1230</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span>📞</span>
                <p>+8801932-582807</p>
              </div>

              <div className="flex items-center gap-2">
                <span>📧</span>
                <p>hello@bookhaven.com</p>
              </div>

              <div className="flex items-center gap-2">
                <span>🛟</span>
                <p>support@bookhaven.com</p>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-4">
                <p className="text-amber-600 text-xs font-semibold mb-2">
                  NEWSLETTER
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="input input-bordered input-sm w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  />
                  <button className="btn btn-amber btn-sm text-white">
                    📨
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Matching Navbar Style */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
              BookHaven Literary Store - © 2024 All Rights Reserved
            </p>

            {/* Additional Links like Navbar */}
            <div className="flex items-center space-x-4 text-xs md:text-sm">
              <a
                href="/terms"
                className="text-gray-400 hover:text-amber-300 transition-colors">
                Terms of Service
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="/returns"
                className="text-gray-400 hover:text-amber-300 transition-colors">
                Returns Policy
              </a>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">
                Made with <span className="text-amber-600">❤️</span> by
                MH Emon
              </span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 pt-4 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs mb-2 md:mb-0">We Accept:</p>
            <div className="flex space-x-2">
              <span className="text-lg">💳</span>
              <span className="text-lg">🏦</span>
              <span className="text-lg">📱</span>
              <span className="text-lg">🔗</span>
              <span className="text-lg">💲</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
