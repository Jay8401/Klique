import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const WhyChooseUs = () => {
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
      <h2 className="text-3xl mb-6 text-center text-pink-400 font-bold">
        Why choose us?
      </h2>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="card bg-[#D0E655] font-bold text-black p-6 rounded-lg w-full sm:w-1/2 lg:w-1/4 text-center">
          Finding creative people made easy
        </div>
        <div className="card bg-[#D0E655] font-bold text-black p-6 rounded-lg w-full sm:w-1/2 lg:w-1/4 text-center">
          No need for cold Messages and long conversations
        </div>
        <div className="card bg-[#D0E655] font-bold text-black p-6 rounded-lg w-full sm:w-1/2 lg:w-1/4 text-center">
          Match only with the talent who is available, capable & within your
          budget!
        </div>
        <div className="card bg-[#D0E655] font-bold text-black p-6 rounded-lg w-full sm:w-1/2 lg:w-1/4 text-center">
          Get guaranteed work! Let us market you to potential clients.
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate .card {
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate .card:nth-child(1) {
          animation-delay: 0.3s;
        }
        .animate .card:nth-child(2) {
          animation-delay: 0.6s;
        }
        .animate .card:nth-child(3) {
          animation-delay: 0.9s;
        }
        .animate .card:nth-child(4) {
          animation-delay: 1.2s;
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;
