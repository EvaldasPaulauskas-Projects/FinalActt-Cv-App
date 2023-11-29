import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ onClose, isScrolled, handleLinkClick }) => {
  return (
    <ul className={`w-72 h-screen flex flex-col items-center space-y-4 float-right text-xl gap-14 ${isScrolled ? "bg-black text-white" : "bg-white text-black"} transition-all duration-300 ease-in-out`}>
      <button
        className={`w-24 text-4xl cursor-pointer py-4 ${isScrolled ? "text-white" : "text-black"} border-b-4 ${isScrolled ? "border-white" : "border-black"}`}
        onClick={onClose}
      >
        &times;
      </button>

      <li className={`border-b-4 py-4 ${isScrolled ? "text-white" : "text-black"} ${isScrolled ? "border-white" : "border-black"}`}>
        <Link to="/" onClick={() => handleLinkClick("/")}>
          Home
        </Link>
      </li>

      <li className={`border-b-4 py-4 ${isScrolled ? "text-white" : "text-black"} ${isScrolled ? "border-white" : "border-black"}`}>
        <Link to="/projects" onClick={() => handleLinkClick("/projects")}>
          Projects
        </Link>
      </li>
      <li className={`border-b-4 py-4 ${isScrolled ? "text-white" : "text-black"} ${isScrolled ? "border-white" : "border-black"}`}>
        <Link to="/contacts" onClick={() => handleLinkClick("/contacts")}>
          Contacts
        </Link>
      </li>
    </ul>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 10;

    setIsScrolled(scrollPosition > scrollThreshold);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (path) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setIsMobileMenuOpen(false); // Close the mobile menu after clicking a link
    window.location.href = path; // Manually navigate to the specified route
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 flex items-center justify-between border-b-2 p-6 text-lx font-bold ${isScrolled ? "bg-black text-white" : "bg-white text-black"} transition-all duration-300 ease-in-out`}>
      <Link to="/" onClick={() => handleLinkClick("/")}>
        <div className={`order-1 w-12 h-10 bg-icon bg-center bg-contain bg-no-repeat ${isScrolled ? "filter-none" : "filter brightness-0"}`}></div>
      </Link>

      {/* Responsive Mobile Menu Button */}
      <div className="order-3 cursor-pointer block md:hidden p-4" onClick={handleMobileMenuToggle}>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 z-100 w-96">
          <MobileMenu onClose={handleMobileMenuToggle} isScrolled={isScrolled} handleLinkClick={handleLinkClick} />
        </div>
      )}

      {/* Desktop Menu */}
      <ul className="flex items-center space-x-20 order-2 mr-16 hidden md:flex text-lg">
        <li>
          <Link to="/" onClick={() => handleLinkClick("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => handleLinkClick("/projects")}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contacts" onClick={() => handleLinkClick("/contacts")}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};
