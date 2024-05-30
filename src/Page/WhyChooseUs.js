import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl mb-6 text-center text-pink-400 font-bold">
        Why choose us?
      </h2>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="bg-[#D0E655] font-bold text-black p-6 rounded-lg w-full sm:w-1/2 lg:w-1/4 text-center">
          Finding creative people made easy
        </div>
        <div className="bg-[#D0E655] font-bold text-black p-6 rounded-lg w-full sm:w-1/2 lg:w-1/4 text-center">
          No need for cold Messages and long conversations
        </div>
        <div className="bg-[#D0E655] font-bold text-black p-6 rounded-lg w-full sm:w-1/2 lg:w-1/4 text-center">
          Match only with the talent who is available, capable & within your
          budget!
        </div>
        <div className="bg-[#D0E655] font-bold text-black p-6 rounded-lg w-full sm:w-1/2 lg:w-1/4 text-center">
          Get guaranteed work! Let us market you to potential clients.
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
