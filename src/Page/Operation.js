import React from "react";

const Operation = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl mb-6 text-center text-pink-400 font-bold">
        How does it work?
      </h2>
      <div className="w-full flex items-center justify-center">
        <span className="text-white font-semibold">1</span>
        <div className="flex items-center bg-[#D0E655] rounded-full py-2 px-10 mx-4">
          <span className="text-black font-bold">Put in your request</span>
        </div>
        <span className="text-white font-semibold">2</span>
        <div className="flex items-center bg-[#D0E655] rounded-full py-2 px-10 mx-4">
          <span className="text-black font-bold">Receive curated list</span>
        </div>
        <span className="text-white font-semibold">3</span>
        <div className="flex items-center bg-[#D0E655] rounded-full py-2 px-10 mx-4">
          <span className="text-black font-bold">Choose the Talent</span>
        </div>
        <span className="text-white font-semibold">4</span>
        <div className="flex items-center bg-[#D0E655] rounded-full py-2 px-10 mx-4">
          <span className="text-black font-bold">Meet & create something!</span>
        </div>
      </div>

      {/* Media queries */}
      <style jsx>{`
        @media (max-width: 768px) {
          .flex {
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .flex {
            flex-direction: column;
            align-items: stretch;
          }

          .flex > div {
            margin: 0.5rem 0;
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Operation;
