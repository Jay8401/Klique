import React from "react";

const Cards = () => {
  return (
    <>
      <p className="text-pink-400 font-bold text-2xl mb-7 text-center">
        Discover, Collaborate & Create!
      </p>
      {/* <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
        <div className="relative max-w-sm p-6 bg-[#2146F6] border border-gray-200 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white z-10 relative">
            Looking for a talent
          </h5>
          <p className="mb-3 font-normal text-gray-100 dark:text-gray-400 z-10 relative">
            Want to do a photoshoot or find a videographer for your next brand
            shoot or having difficulty in editing your reels?
          </p>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none bg-[#D0E655] rounded-full border border-black hover:text-blue-900 focus:z-10 focus:ring-4 relative transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Send us your inquiry!
          </button>
        </div>
        <div className="relative max-w-sm p-6 bg-[#2146F6] border border-gray-200 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white z-10 relative">
            Are you a Talent?
          </h5>
          <p className="mb-3 font-normal text-gray-100 dark:text-gray-400 z-10 relative">
            Looking for creative collaboration, gaining experience, building
            your creative portfolio and getting more freelance clients?
          </p>

          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none bg-[#D0E655] rounded-full border border-black hover:text-blue-900 focus:z-10 focus:ring-4 relative transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Sign up here!
          </button>
        </div>
      </div> */}
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-5">
        <div className="relative flex-grow p-6 bg-[#2146F6] border border-gray-200 rounded-lg shadow w-full sm:max-w-sm">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white z-10 relative">
            Looking for a talent
          </h5>
          <p className="mb-3 font-normal text-gray-100 dark:text-gray-400 z-10 relative">
            Want to do a photoshoot or find a videographer for your next brand
            shoot or having difficulty in editing your reels?
          </p>
          <a href="https://forms.gle/hZXyGS9rGFJWBEN5A">
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none bg-[#D0E655] rounded-full border border-black hover:text-blue-900 focus:z-10 focus:ring-4 relative transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Send us your inquiry!
            </button>
          </a>
        </div>
        <div className="relative flex-grow p-6 bg-[#2146F6] border border-gray-200 rounded-lg shadow w-full sm:max-w-sm">
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
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none bg-[#D0E655] rounded-full border border-black hover:text-blue-900 focus:z-10 focus:ring-4 relative transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Sign up here!
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Cards;
