import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

const NAV_ITEMS = [
  { id: "Home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-md shadow-md"
          />
          <span className="font-bold text-lg">TA Engineering</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="cursor-pointer text-slate-700 hover:text-blue-600 transition"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Menu  */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      
      {open && (
        <div className="md:hidden px-6 pb-4 bg-white/95 border-t border-slate-100">
          {NAV_ITEMS.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="block w-full text-left py-2 text-slate-700 hover:text-blue-600"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
