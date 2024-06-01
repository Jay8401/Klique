import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Cards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when 50% of the component is visible
    triggerOnce: true, // Only trigger the animation once
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <>
      <p
        className={`text-pink-400 font-bold text-2xl mb-7 text-center ${
          isVisible ? "animate" : ""
        }`}
      >
        Discover, Collaborate & <span className="font-galada">Create!</span>
      </p>

      <div
        ref={ref}
        className={`flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5 ${
          isVisible ? "animate" : ""
        }`}
      >
        <div className="relative flex-grow p-6 bg-[#2146F6] border border-gray-200 rounded-lg shadow w-full sm:max-w-sm card">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white z-10 relative">
            Looking for a Talent?
          </h5>
          <p className="mb-3 font-normal text-gray-100 dark:text-gray-400 z-10 relative">
            Want to do a photoshoot or find a videographer for your next brand
            shoot or having difficulty in editing your reels?
          </p>
          <a href="https://forms.gle/hZXyGS9rGFJWBEN5A">
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none bg-[#D0E655] rounded-full border border-black focus:z-10 focus:ring-4 relative transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-black hover:text-white"
            >
              Send us your inquiry!
            </button>
          </a>
        </div>
        <div className="relative flex-grow p-6 bg-[#2146F6] border border-gray-200 rounded-lg shadow w-full sm:max-w-sm card">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white z-10 relative">
            Are you a Talent?
          </h5>
          <p className="mb-3 font-normal text-gray-100 dark:text-gray-400 z-10 relative">
            Looking for creative collaboration, gaining experience, building
            your creative portfolio and getting more freelance clients?
          </p>
          <a href="https://forms.gle/qbMSKyAXdZn4Lh8a8">
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none bg-[#D0E655] rounded-full border border-black focus:z-10 focus:ring-4 relative transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-black hover:text-white"
            >
              Sign up here!
            </button>
          </a>
        </div>
      </div>

      {/* CSS for hover effect */}
      <style jsx>{`
        .card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
};

export default Cards;
