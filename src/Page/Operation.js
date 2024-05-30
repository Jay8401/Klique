import React from "react";

const Operation = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl mb-6 text-center text-pink-400 font-bold">
        How does it work?
      </h2>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="text-center">
          <div className="w-12 h-12 bg-[#D0E655] text-black font-bold text-2xl rounded-full flex items-center justify-center mb-2 mx-auto">
            1
          </div>
          <div className="text-lg">Put in your request</div>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-[#D0E655] text-black font-bold text-2xl rounded-full flex items-center justify-center mb-2 mx-auto">
            2
          </div>
          <div className="text-lg">Receive curated list</div>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-[#D0E655] text-black font-bold text-2xl rounded-full flex items-center justify-center mb-2 mx-auto">
            3
          </div>
          <div className="text-lg">Choose the Talent</div>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-[#D0E655] text-black font-bold text-2xl rounded-full flex items-center justify-center mb-2 mx-auto">
            4
          </div>
          <div className="text-lg">Meet & create somethings!</div>
        </div>
      </div>
    </div>
  );
};

export default Operation;
