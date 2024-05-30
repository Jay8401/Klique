import React from "react";
import Navbar from "./Page/Navbar";
import Operation from "./Page/Operation";
import Cards from "./Page/Cards";
import WhyChooseUs from "./Page/WhyChooseUs";

const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col">
          <div className="w-full text-left mb-6">
            <h1 className="text-4xl font-bold mb-2">
              LET US FIND YOUR
              <span className="block text-[#D0E655]">
                CREATIVE <span>Match</span>
              </span>
            </h1>
          </div>
          <div className="flex justify-start space-x-8 mb-6">
            <div className="relative w-1/3 h-50 overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-110">
              <img
                src="images/hero2.jpg"
                alt="image1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-1/3 h-50 overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-110">
              <img
                src="images/hero2.jpg"
                alt="iamge2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-1/3 h-50 overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-110">
              <img
                src="images/hero2.jpg"
                alt="image3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <p className="mb-2 text-center">
          Get connected easily with the best talent around you for your next
          shoot.
        </p>
        <Cards />
        <Operation />
        <WhyChooseUs />
        <div
          className="mt-16 p-6 rounded-lg text-center"
          style={{
            background:
              "linear-gradient(88.07deg, #2146F6 1.05%, #F085B9 110.92%)",
          }}
        >
          <h2 className="text-3xl mb-3 text-white">Join The Klique Tribe!</h2>
          <p className="mb-6 text-white">
            Find collabs, learn & share your experiences with budding community
            of artists, businesses & creative talent.
          </p>
          <a href="/" className="bg-[#D0E655] text-black py-2 px-4 rounded">
            Join Us Now!
          </a>
        </div>
      </div>
      <footer className="bg-gray-800 text-white text-center py-3">
        <p>&copy; 2024 Klique. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
