
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-purple-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-semibold">Digital Ops Partner</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner for web development, automation workflows, and AI solutions. 
              We transform your business vision into powerful digital reality.
            </p>
            
            {/* Clutch Awards */}
            <div className="flex space-x-4 mb-6">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-xs text-center text-gray-300">TOP<br/>DEVELOPER</span>
              </div>
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-xs text-center text-gray-300">TOP<br/>SOFTWARE</span>
              </div>
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-xs text-center text-gray-300">TOP<br/>WEB</span>
              </div>
            </div>
          </div>

          {/* WHO WE ARE */}
          <div>
            <h3 className="text-lg font-semibold mb-4">WHO WE ARE</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* WHAT WE DO */}
          <div>
            <h3 className="text-lg font-semibold mb-4">WHAT WE DO</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">AI Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Automation Workflows</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">AI Consulting</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-white font-medium mb-2">LET'S CONNECT</h4>
            <p className="text-gray-300">Email Us</p>
            <p className="text-gray-300">Contact</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">FIND US</h4>
            <p className="text-gray-300 text-sm">Athens: Syntagma Sq. 15, 10563</p>
            <p className="text-gray-300 text-sm">London: 124 Goswell Rd. EC1V 7DP</p>
          </div>
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">in</span>
            </div>
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">f</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Digital Ops Partner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
