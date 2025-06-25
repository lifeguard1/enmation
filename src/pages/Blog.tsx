
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Blog = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-purple-gradient">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Insights, tutorials, and industry trends from our team of digital experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of AI in Web Development",
                excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and maintain web applications.",
                date: "December 15, 2024",
                category: "AI & Technology",
                readTime: "5 min read"
              },
              {
                title: "Automation Strategies for Small Businesses",
                excerpt: "Practical approaches to implementing automation workflows that can transform your business operations.",
                date: "December 10, 2024",
                category: "Automation",
                readTime: "7 min read"
              },
              {
                title: "Modern Web Development Best Practices",
                excerpt: "Essential guidelines and techniques for building scalable, maintainable web applications in 2024.",
                date: "December 5, 2024",
                category: "Web Development",
                readTime: "6 min read"
              },
              {
                title: "Digital Transformation Success Stories",
                excerpt: "Real-world examples of how businesses leveraged technology to achieve remarkable growth.",
                date: "November 28, 2024",
                category: "Case Studies",
                readTime: "8 min read"
              },
              {
                title: "Building Scalable API Architecture",
                excerpt: "Design patterns and strategies for creating robust APIs that can handle enterprise-level traffic.",
                date: "November 20, 2024",
                category: "Backend Development",
                readTime: "10 min read"
              },
              {
                title: "UI/UX Trends Shaping 2024",
                excerpt: "The latest design trends and user experience principles that are defining modern web interfaces.",
                date: "November 15, 2024",
                category: "Design",
                readTime: "4 min read"
              }
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <span className="text-4xl">📄</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-purple-600 cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <a href="#" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                      Read More →
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-purple-500 text-purple-600 hover:bg-purple-50 rounded-full transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest insights, tutorials, and industry news delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-8 py-3 bg-purple-gradient text-white rounded-full hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
