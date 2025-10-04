import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business days. International shipping may take 7-14 business days depending on the destination.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes! We ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. You can check specific rates during checkout.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase. Books must be in original condition with no damage. Please contact our support team to initiate a return.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and visiting the 'Order History' section.",
    },
    {
      question: "Do you have physical stores?",
      answer:
        "Currently, BookHaven operates exclusively online. This allows us to offer competitive prices and a wider selection of books while maintaining excellent customer service.",
    },
    {
      question: "Are there any membership benefits?",
      answer:
        "Yes! Our BookHaven Premium membership offers free shipping, early access to sales, exclusive discounts, and personalized book recommendations for just $9.99/month.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our support team via email at support@bookhaven.com, through our live chat feature, or by calling +1 (555) 123-4567. We're available 24/7 to assist you.",
    },
    {
      question: "Do you sell e-books and audiobooks?",
      answer:
        "Currently, we specialize in physical books. However, we're working on expanding to digital formats in the near future. Stay tuned for updates!",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about BookHaven. Can't find
            what you're looking for? Our support team is here to help!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-amber-100 overflow-hidden transition-all duration-300 hover:shadow-lg">
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
                onClick={() => toggleFAQ(index)}>
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 text-amber-600 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}>
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-12 text-center bg-amber-100 rounded-2xl p-8 border border-amber-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our friendly support team is always ready to help you with any
            questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-amber text-black px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors hover:text-white ">
              📞 Contact Support
            </button>
            <button className="btn btn-outline border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors">
              💬 Live Chat
            </button>
          </div>
        </div>

        {/* Quick Help Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-2xl mb-2">🚚</div>
            <h4 className="font-semibold text-gray-800 mb-1">Shipping Info</h4>
            <p className="text-sm text-gray-600">
              Learn about delivery times and costs
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-2xl mb-2">↩️</div>
            <h4 className="font-semibold text-gray-800 mb-1">Returns</h4>
            <p className="text-sm text-gray-600">Our easy return policy</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="text-2xl mb-2">💳</div>
            <h4 className="font-semibold text-gray-800 mb-1">Payment</h4>
            <p className="text-sm text-gray-600">Secure payment methods</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
