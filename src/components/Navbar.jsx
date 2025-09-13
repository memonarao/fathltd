import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "Projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "about", label: "About Us" },
  { id: "faqs", label: "FAQ’s" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md bg-black/70 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-md" />
          <span className="text-white font-bold text-lg">TA Engineering</span>
        </a>

      
        {/*  Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-white hover:text-orange-400 font-medium transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 border border-pink-400 text-white rounded-full hover:bg-pink-600 hover:border-pink-600 transition"
        >
          Contact Us
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

     
    
      {open && (
        <div className="md:hidden bg-black px-6 pb-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block py-2 text-white border-b border-gray-700"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-3 text-center px-5 py-2 border border-pink-400 text-white rounded-full hover:bg-pink-600 hover:border-pink-600 transition"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
