import React from "react";
import Navbar from "./Page/Navbar";
import Operation from "./Page/Operation";
import Cards from "./Page/Cards";
import WhyChooseUs from "./Page/WhyChooseUs";
import Content from "./Page/Content";

const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <Content />
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
          <h2 className="text-3xl font-extrabold mb-3 text-white">
            Join The Klique <span className="font-galada">Tribe</span>
          </h2>
          <p className="mb-6 text-white">
            Find collabs, learn & share your experiences with budding community
            of artists, businesses & creative talent.
          </p>
          <a
            href="https://chat.whatsapp.com/DTHHbUvcokP8n8igURZF92"
            className="bg-[#D0E655] text-black py-2 px-4 rounded hover:bg-black hover:text-white"
          >
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
