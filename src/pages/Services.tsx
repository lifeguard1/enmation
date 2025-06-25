
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-purple-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive digital solutions tailored to accelerate your business growth and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {[
              {
                title: "Web Development",
                description: "Custom web applications built with cutting-edge technologies and modern development practices.",
                features: [
                  "Responsive Web Design",
                  "React & Next.js Development",
                  "E-commerce Solutions",
                  "Progressive Web Apps (PWA)",
                  "API Development & Integration",
                  "Database Design & Optimization"
                ],
                technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
                icon: "💻"
              },
              {
                title: "AI & Automation Solutions",
                description: "Intelligent automation systems that streamline operations and enhance business efficiency.",
                features: [
                  "Process Automation",
                  "AI Chatbots & Virtual Assistants",
                  "Data Analysis & Insights",
                  "Machine Learning Models",
                  "Workflow Optimization",
                  "Predictive Analytics"
                ],
                technologies: ["Python", "TensorFlow", "OpenAI", "Zapier", "Power Automate", "Azure AI"],
                icon: "🤖"
              },
              {
                title: "Digital Consulting",
                description: "Strategic guidance to navigate digital transformation and technology adoption successfully.",
                features: [
                  "Digital Strategy Development",
                  "Technology Stack Selection",
                  "System Architecture Design",
                  "Performance Optimization",
                  "Security Assessment",
                  "Team Training & Support"
                ],
                technologies: ["Cloud Platforms", "DevOps", "Security Tools", "Analytics", "CI/CD", "Monitoring"],
                icon: "📊"
              }
            ].map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies We Use:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button className="bg-purple-gradient text-white px-8 py-3 text-lg">
                      Get Started
                    </Button>
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="p-8 border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-8xl opacity-50">{service.icon}</span>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions to complement your digital transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mobile App Development",
                description: "Native and cross-platform mobile applications",
                icon: "📱"
              },
              {
                title: "Cloud Migration",
                description: "Seamless transition to cloud infrastructure",
                icon: "☁️"
              },
              {
                title: "DevOps & Deployment",
                description: "Continuous integration and deployment pipelines",
                icon: "🔧"
              },
              {
                title: "UI/UX Design",
                description: "User-centered design for optimal experiences",
                icon: "🎨"
              },
              {
                title: "Data Analytics",
                description: "Business intelligence and data visualization",
                icon: "📈"
              },
              {
                title: "Maintenance & Support",
                description: "Ongoing technical support and system maintenance",
                icon: "🛠️"
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-gray-200 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss how our services can help you achieve your digital goals.
          </p>
          <div className="space-x-4">
            <Link to="/contact">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Start Your Project
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
