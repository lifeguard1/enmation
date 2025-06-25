
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-purple-gradient">Digital Ops Partner</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Your trusted digital transformation partner, dedicated to turning innovative ideas into powerful digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to bridge the gap between complex business needs and innovative technology solutions, 
                Digital Ops Partner has been at the forefront of digital transformation for companies worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe in the power of technology to transform businesses, streamline operations, and create 
                exceptional user experiences. Our team of experienced developers, AI specialists, and digital strategists 
                work tirelessly to deliver solutions that not only meet current needs but anticipate future challenges.
              </p>
              <p className="text-lg text-gray-600">
                With over 150 successful projects under our belt, we've helped businesses of all sizes leverage 
                the latest technologies to achieve their goals and stay ahead of the competition.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We constantly explore new technologies and methodologies to provide cutting-edge solutions.",
                icon: "💡"
              },
              {
                title: "Client-Centric",
                description: "Your success is our success. We prioritize understanding and exceeding client expectations.",
                icon: "🎯"
              },
              {
                title: "Quality Excellence",
                description: "We maintain the highest standards in code quality, design, and project delivery.",
                icon: "⭐"
              },
              {
                title: "Transparent Communication",
                description: "Clear, honest communication throughout every stage of the project lifecycle.",
                icon: "💬"
              },
              {
                title: "Continuous Learning",
                description: "We stay updated with the latest industry trends and best practices.",
                icon: "📚"
              },
              {
                title: "Long-term Partnership",
                description: "We build lasting relationships, providing ongoing support and maintenance.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of passionate professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Lead Developer",
                expertise: "Full-Stack Development, AI Integration"
              },
              {
                name: "Maria Rodriguez",
                role: "AI Specialist",
                expertise: "Machine Learning, Automation Systems"
              },
              {
                name: "David Chen",
                role: "Digital Strategist",
                expertise: "Digital Transformation, Project Management"
              }
            ].map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <div className="w-24 h-24 bg-purple-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
