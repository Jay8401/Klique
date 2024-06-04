import React from "react";

const Navbar = () => {
  return (
    <header className="bg-[#D0E655] py-3 shadow-md">
      <nav className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
        <div className="flex items-center">
          <a
            href="/"
            className="flex items-center justify-center w-[175px] h-[50px] mb-4 md:mb-0"
          >
            <img
              src="images/logo_final.png"
              alt="main"
              className="object-contain"
            />
          </a>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="mailto:Contactteam.klique@gmail.com"
            className="text-black  border border-black rounded-full px-5 py-1 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-black hover:text-white text-center"
          >
            Contact Us
          </a>

          <a
            href="mailto:Contactteam.klique@gmail.com"
            className="text-black  border border-black rounded-full px-5 py-1 transition-transform duration-300 ease-in-out transform hover:scale-105  hover:bg-black hover:text-white"
          >
            Join Our Team
          </a>

          <a
            href="https://chat.whatsapp.com/DTHHbUvcokP8n8igURZF92"
            className="text-black  border border-black rounded-full px-5 py-1 transition-transform duration-300 ease-in-out transform hover:scale-105  hover:bg-black hover:text-white"
          >
            Join Community
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
