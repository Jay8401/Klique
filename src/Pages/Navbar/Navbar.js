import React from "react";

const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-[#D0E655] w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            KLIQUE
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#D0E655]  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#D0E655] dark:border-gray-700">
          
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0 md:hover:text-blue-700"
                aria-current="page"
              >
                Contact Us!
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Join Our Team
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Join Community
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
