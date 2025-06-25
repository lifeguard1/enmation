
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      <Hero />
      
      {/* What Sets Us Apart Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Solutions",
                description: "Leverage artificial intelligence to automate processes and enhance user experiences",
                icon: "🤖"
              },
              {
                title: "Custom Development",
                description: "Tailored web applications built specifically for your business needs",
                icon: "💻"
              },
              {
                title: "Workflow Automation",
                description: "Streamline your operations with intelligent automation systems",
                icon: "⚡"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock technical support and maintenance services",
                icon: "🛠️"
              },
              {
                title: "Scalable Architecture",
                description: "Future-proof solutions that grow with your business",
                icon: "📈"
              },
              {
                title: "Rapid Deployment",
                description: "Fast turnaround times without compromising quality",
                icon: "🚀"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            "We don't just build websites and automation systems – we craft digital experiences that transform businesses and drive growth."
          </blockquote>
          <cite className="text-xl text-purple-600 font-medium">Your Digital Ops Partner Team</cite>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions to power your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies and best practices. From simple landing pages to complex enterprise solutions.",
                features: ["React & Next.js", "Node.js Backend", "Database Design", "API Integration"]
              },
              {
                title: "AI Automation",
                description: "Intelligent automation solutions that streamline your business processes and enhance operational efficiency using cutting-edge AI technologies.",
                features: ["Process Automation", "AI Chatbots", "Data Analysis", "Machine Learning"]
              },
              {
                title: "Digital Consulting",
                description: "Strategic guidance to help you navigate the digital landscape and make informed technology decisions for sustainable growth.",
                features: ["Tech Strategy", "Digital Transformation", "System Architecture", "Performance Optimization"]
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center space-x-4">
            <Link to="/services">
              <Button variant="outline" className="px-8 py-3 text-lg border-2 border-purple-500 text-purple-600 hover:bg-purple-50">
                Explore All Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-purple-gradient text-white px-8 py-3 text-lg">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your requirements and define project scope"
              },
              {
                step: "02",
                title: "Planning",
                description: "Strategic planning and architecture design phase"
              },
              {
                step: "03",
                title: "Development",
                description: "Agile development with regular progress updates"
              },
              {
                step: "04",
                title: "Deployment",
                description: "Testing, deployment, and ongoing support"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-600">
              Ready to transform your business? Get in touch with us today.
            </p>
          </div>

          <Card className="p-8 border-gray-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input placeholder="Your first name" className="border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" className="border-gray-300" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input type="email" placeholder="your.email@example.com" className="border-gray-300" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <Input placeholder="Your company name" className="border-gray-300" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell us about your project requirements..."
                  rows={5}
                  className="border-gray-300"
                />
              </div>

              <Button className="w-full bg-purple-gradient text-white py-3 text-lg">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
