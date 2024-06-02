import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Operation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`mt-16 ${isVisible ? "animate" : ""}`}>
      <h3 className="text-3xl mb-6 text-center text-pink-400 font-bold">
        How does it <span className="font-galada">work?</span>
      </h3>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div
          className={`step bg-[#D0E655] font-semibold text-black p-6 rounded-lg w-full sm:w-1/2 lg:w-1/4 text-center ${
            isVisible ? "animate" : ""
          }`}
        >
          Put in your request
        </div>
        <div
          className={`step bg-[#D0E655] font-semibold text-black p-6 rounded-lg w-full sm:w-1/2 lg:w-1/4 text-center ${
            isVisible ? "animate" : ""
          }`}
        >
          Receive curated list
        </div>
        <div
          className={`step bg-[#D0E655] font-semibold text-black p-6 rounded-lg w-full sm:w-1/2 lg:w-1/4 text-center ${
            isVisible ? "animate" : ""
          }`}
        >
          Choose the Talent
        </div>
        <div
          className={`step bg-[#D0E655] font-semibold text-black p-6 rounded-lg w-full sm:w-1/2 lg:w-1/4 text-center ${
            isVisible ? "animate" : ""
          }`}
        >
          Meet & create something!
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate .step {
          display: inline-block;
          opacity: 0;
          transform: translateX(100%);
          animation: fade-in 2s ease forwards;
        }

        .animate:nth-child(1) {
          animation-delay: 0.1s;
        }
        .animate:nth-child(2) {
          animation-delay: 0.2s;
        }
        .animate:nth-child(3) {
          animation-delay: 0.3s;
        }
        .animate:nth-child(4) {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default Operation;
