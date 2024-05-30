import React from "react";

const Navbar = () => {
  return (
    <header className="bg-[#D0E655] py-3 shadow-md">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-4">
        <a href="/" className="text-2xl font-bold text-gray-900">
          KLIQUE
        </a>
        <div className="flex space-x-6">
          <a href="/" className="text-gray-900">
            Contact Us!
          </a>
          <a href="/" className="text-gray-900">
            Join Our Team
          </a>
          <a href="/" className="text-gray-900">
            Join Community
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
