
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Digital Ops Partner</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/services"
              className={`text-gray-700 hover:text-purple-600 transition-colors ${
                isActive("/services") ? "text-purple-600 font-medium" : ""
              }`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`text-gray-700 hover:text-purple-600 transition-colors ${
                isActive("/about") ? "text-purple-600 font-medium" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className={`text-gray-700 hover:text-purple-600 transition-colors ${
                isActive("/blog") ? "text-purple-600 font-medium" : ""
              }`}
            >
              Blog
            </Link>
            
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-28 border-none bg-transparent">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200">
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="gr">Greek</SelectItem>
              </SelectContent>
            </Select>

            <Link to="/contact">
              <Button className="bg-purple-gradient hover:opacity-90 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/services"
                className="text-gray-700 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="bg-purple-gradient text-white w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
