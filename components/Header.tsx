import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030014]/30 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <svg className="h-10 w-10 text-white" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 5C47.464 5 60 17.536 60 33C60 48.464 47.464 61 32 61C16.536 61 4 48.464 4 33C4 17.536 16.536 5 32 5Z" stroke="white" strokeWidth="2.5"/>
              <path d="M22.4 34.6C22.4 34.6 26.6 32.2 29.6 33.4C32.6 34.6 31.4 39.6 31.4 39.6M40.4 34.6C40.4 34.6 36.2 32.2 33.2 33.4C30.2 34.6 31.4 39.6 31.4 39.6M31.4 21.4V40.6M31.4 33.4L42.8 28.6M31.4 33.4L20 28.6" stroke="#00B2FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-wider">HALA</span>
              <span className="text-xs font-light tracking-widest">SMART TECHNOLOGIES</span>
            </div>
          </a>

          {/* Desktop Navigation & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <nav className="flex items-center bg-white/95 rounded-full p-1 shadow-sm">
              <a href="#" className="bg-white text-blue-600 rounded-full px-5 py-2 text-sm font-semibold transition-all">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 rounded-full px-5 py-2 text-sm font-semibold transition-all">About</a>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 rounded-full px-5 py-2 text-sm font-semibold transition-all">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                  <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Web Development</a>
                  <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mobile Apps</a>
                  <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Digital Marketing</a>
                </div>
              </div>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 rounded-full px-5 py-2 text-sm font-semibold transition-all">Contact</a>
            </nav>
            <a href="#" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
              Speak to an expert
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">
                {link.name}
              </a>
            ))}
             <div className="border-t border-gray-700 pt-3 mt-2">
                 <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="w-full text-left text-gray-300 hover:text-cyan-400 flex justify-between items-center px-3 py-2 rounded-md text-base font-medium">
                    Services
                    <svg className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                 </button>
                 {isServicesOpen && (
                    <div className="pl-6 pt-2 pb-1 space-y-1">
                        <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Web Development</a>
                        <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Mobile Apps</a>
                        <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Digital Marketing</a>
                    </div>
                 )}
             </div>
             <div className="pt-4 px-2">
                <a href="#" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg w-full block text-center">
                    Speak to an expert
                </a>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
