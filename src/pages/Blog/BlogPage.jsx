import React, { useState } from "react";
import { Link } from "react-router";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Reading: How to Develop a Lifelong Reading Habit",
      excerpt:
        "Discover practical strategies to make reading a daily habit and transform your life through books.",
      content:
        "Reading is not just a hobby; it's a journey that can transform your perspective and enrich your life...",
      author: "Sarah Johnson",
      date: "2024-03-15",
      readTime: "6 min read",
      category: "reading-tips",
      image: "📚",
      featured: true,
    },
    {
      id: 2,
      title: "10 Must-Read Books of 2024 That Will Change Your Perspective",
      excerpt:
        "Our curated list of groundbreaking books that are making waves in the literary world this year.",
      content:
        "2024 has brought us some incredible literary works that challenge conventions and inspire change...",
      author: "Michael Chen",
      date: "2024-03-10",
      readTime: "8 min read",
      category: "book-reviews",
      image: "🌟",
      featured: true,
    },
    {
      id: 3,
      title: "Building Your Personal Library: A Collector's Guide",
      excerpt:
        "Learn how to curate and organize a personal library that reflects your unique reading journey.",
      content:
        "A personal library is more than just a collection of books; it's a reflection of your intellectual journey...",
      author: "Emily Rodriguez",
      date: "2024-03-05",
      readTime: "5 min read",
      category: "collection",
      image: "📖",
      featured: false,
    },
    {
      id: 4,
      title: "The Science Behind Why We Love Physical Books",
      excerpt:
        "Exploring the psychological and emotional connection we have with physical books in a digital age.",
      content:
        "In an era dominated by digital screens, why do physical books continue to hold such a special place...",
      author: "Dr. Robert Kim",
      date: "2024-02-28",
      readTime: "7 min read",
      category: "science",
      image: "🔬",
      featured: false,
    },
    {
      id: 5,
      title:
        "Author Spotlight: Interview with Bestselling Author James Patterson",
      excerpt:
        "An exclusive interview discussing writing routines, inspiration, and upcoming projects.",
      content:
        "We sat down with the prolific author to discuss his creative process and what keeps him writing...",
      author: "Lisa Thompson",
      date: "2024-02-20",
      readTime: "10 min read",
      category: "interviews",
      image: "🎤",
      featured: true,
    },
    {
      id: 6,
      title: "How to Choose the Perfect Book for Any Mood",
      excerpt:
        "A guide to matching your reading material with your current emotional state and preferences.",
      content:
        "Sometimes the hardest part of reading is deciding what to read next. Here's how to choose wisely...",
      author: "David Wilson",
      date: "2024-02-15",
      readTime: "4 min read",
      category: "reading-tips",
      image: "🎭",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Posts", count: blogPosts.length },
    {
      id: "reading-tips",
      name: "Reading Tips",
      count: blogPosts.filter((post) => post.category === "reading-tips")
        .length,
    },
    {
      id: "book-reviews",
      name: "Book Reviews",
      count: blogPosts.filter((post) => post.category === "book-reviews")
        .length,
    },
    {
      id: "interviews",
      name: "Author Interviews",
      count: blogPosts.filter((post) => post.category === "interviews").length,
    },
    {
      id: "science",
      name: "Book Science",
      count: blogPosts.filter((post) => post.category === "science").length,
    },
    {
      id: "collection",
      name: "Collection Guides",
      count: blogPosts.filter((post) => post.category === "collection").length,
    },
  ];

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            BookHaven Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover literary insights, reading tips, author interviews, and
            everything book-related from your favorite literary sanctuary.
          </p>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="mr-3">⭐</span>
            Featured Stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                      {post.category.replace("-", " ")}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {post.readTime}
                    </span>
                  </div>
                  <div className="text-4xl mb-4">{post.image}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">
                        By {post.author}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-amber-600 hover:text-amber-700 font-semibold text-sm flex items-center gap-1 transition-colors">
                      Read More
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-3">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-amber-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-amber-50 border border-gray-200"
                  }`}>
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-medium">
                        {post.category.replace("-", " ")}
                      </span>
                      {post.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium flex items-center">
                          ⭐ Featured
                        </span>
                      )}
                    </div>

                    <div className="text-3xl mb-3">{post.image}</div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-amber-600 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      className="mt-4 inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors group">
                      Continue Reading
                      <span className="ml-1 transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                About BookHaven Blog
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Welcome to our literary corner! We share book reviews, reading
                tips, author insights, and everything that makes the world of
                books so magical.
              </p>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Fiction",
                  "Non-Fiction",
                  "Reading Tips",
                  "Book Reviews",
                  "Author Interviews",
                  "Writing Tips",
                  "Book Clubs",
                  "Literary News",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-amber-100 hover:text-amber-800 transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-amber-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-2">
                Join Our Reading Community
              </h3>
              <p className="text-amber-100 text-sm mb-4">
                Get weekly book recommendations and exclusive content delivered
                to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg bg-amber-700 border border-amber-500 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button className="w-full bg-white text-amber-600 py-2 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>

            {/* Recent Comments */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Recent Comments
              </h3>
              <div className="space-y-4">
                {[
                  {
                    user: "BookLover42",
                    comment: "Great tips for building a reading habit!",
                    post: "The Art of Reading",
                  },
                  {
                    user: "LiteraryExplorer",
                    comment: "Can't wait to read these recommendations!",
                    post: "10 Must-Read Books",
                  },
                  {
                    user: "PageTurner",
                    comment: "Fascinating insights about physical books!",
                    post: "Science Behind Books",
                  },
                ].map((comment, index) => (
                  <div key={index} className="border-l-4 border-amber-500 pl-3">
                    <p className="text-sm text-gray-600 italic">
                      "{comment.comment}"
                    </p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-amber-600 font-medium">
                        {comment.user}
                      </span>
                      <span className="text-xs text-gray-500">
                        on {comment.post}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
