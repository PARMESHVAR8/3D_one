import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-lg bg-white/10 border-b border-gray-300 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-3xl font-bold text-white tracking-wide">
          MyLogo
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Services</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black/80 text-white text-center py-4 space-y-4">
          <li><a href="#" className="block py-2 hover:text-blue-400 transition">Home</a></li>
          <li><a href="#" className="block py-2 hover:text-blue-400 transition">About</a></li>
          <li><a href="#" className="block py-2 hover:text-blue-400 transition">Services</a></li>
          <li><a href="#" className="block py-2 hover:text-blue-400 transition">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;