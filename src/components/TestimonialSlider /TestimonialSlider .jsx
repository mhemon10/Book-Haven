import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
      author: "Johnson Simanungkailt",
      role: "Faculty of Economics 2024",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      text: "Another detailed testimonial text would go here with similar length and style as the first one, describing the customer experience in depth. The service was exceptional and the book collection is amazing for academic research.",
      author: "Sarah Wilson",
      role: "Computer Science 2023",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",

    },
    {
      id: 3,
      text: "A third comprehensive testimonial about the excellent service and quality of books provided by BookHaven, following the same detailed format. The resources available have been invaluable for my literature studies.",
      author: "Michael Brown",
      role: "Literature Department 2024",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      text: "BookHaven has transformed my learning experience. The variety of books and the quality of service is unmatched. I highly recommend this platform to all students and book lovers.",
      author: "Emily Chen",
      role: "Business Administration 2024",
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Customer's Said
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Slider Container */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-3 shadow-lg hover:bg-gray-200 transition-all hover:scale-110 z-10">
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-3 shadow-lg hover:bg-gray-200 transition-all hover:scale-110 z-10">
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>

            {/* Slider Content */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                      {/* Left Side - Testimonial Text */}
                      <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed text-base sm:text-lg lg:text-xl">
                          {testimonial.text}
                        </p>

                        {/* Divider Line */}
                        <div className="w-20 h-0.5 bg-gray-300"></div>

                        {/* Author Info */}
                        <div className="space-y-2">
                          <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                            {testimonial.author}
                          </h4>
                          <p className="text-gray-500 text-lg">
                            {testimonial.role}
                          </p>

                          {/* Rating */}
                          <div className="flex items-center gap-4 pt-2">
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-5 h-5 ${
                                    i < Math.floor(testimonial.rating)
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-lg font-semibold text-gray-900">
                              {testimonial.rating}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Customer Image */}
                      <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                          <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center p-4">
                            <div className="text-center">
                              <img
                                src={testimonial.image}
                                alt={testimonial.author}
                                className="w-48 h-48 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                              />
                              <div className="bg-white px-4 py-2 rounded-lg shadow-sm inline-block">
                                <span className="text-gray-700 font-semibold">
                                  Happy Customer
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Decorative Elements */}
                          <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
                          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 sm:mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
