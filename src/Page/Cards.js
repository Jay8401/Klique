import React from "react";

const Cards = () => {
  return (
    <>
      <p className="text-pink-400 font-bold text-2xl mb-7 text-center">
        Discover, Collaborate & Create!
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
        <div className="relative max-w-sm p-6 bg-[#2146F6] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white z-10 relative">
            Looking for a talent
          </h5>
          <p className="mb-3 font-normal text-gray-100 dark:text-gray-400 z-10 relative">
            Want to do a photoshoot or find a videographer for your next brand
            shoot or having difficulty in editing your reels?
          </p>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none bg-[#D0E655] rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 z-10 relative"
          >
            Send us your inquiry
          </button>
        </div>
        <div className="relative max-w-sm p-6 bg-[#2146F6] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white z-10 relative">
            Are you a Talent?
          </h5>
          <p className="mb-3 font-normal text-gray-100 dark:text-gray-400 z-10 relative">
            Looking for creative collaboration, gaining experience, building
            your creative portfolio and getting more freelance clients?
          </p>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none bg-[#D0E655] rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 z-10 relative"
          >
            Sign up here!
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
