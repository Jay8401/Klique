// // import React from "react";

// // const Operation = () => {
// //   return (
// //     <div className="mt-16">
// //       <h2 className="text-3xl mb-6 text-center text-pink-400 font-bold">
// //         How does it work?
// //       </h2>
// //       <div className="w-full flex items-center justify-center">
// //         <span className="text-white font-semibold">1</span>
// //         <div className="flex items-center bg-[#D0E655] rounded-full py-2 px-8 mx-4">
// //           <span className="text-black font-bold">Put in your request</span>
// //         </div>
// //         <span className="text-white font-semibold">2</span>
// //         <div className="flex items-center bg-[#D0E655] rounded-full py-2 px-8 mx-4">
// //           <span className="text-black font-bold">Receive curated list</span>
// //         </div>
// //         <span className="text-white font-semibold">3</span>
// //         <div className="flex items-center bg-[#D0E655] rounded-full py-2 px-8 mx-4">
// //           <span className="text-black font-bold">Choose the Talent</span>
// //         </div>
// //         <span className="text-white font-semibold">4</span>
// //         <div className="flex items-center bg-[#D0E655] rounded-full py-2 px-8 mx-4">
// //           <span className="text-black font-bold">Meet & create something!</span>
// //         </div>
// //       </div>

// //       {/* Media queries */}
// //       <style jsx>{`
// //         @media (max-width: 768px) {
// //           .flex {
// //             flex-wrap: wrap;
// //             justify-content: center;
// //           }
// //         }

// //         @media (max-width: 480px) {
// //           .flex {
// //             flex-direction: column;
// //             align-items: stretch;
// //           }

// //           .flex > div {
// //             margin: 0.5rem 0;
// //             width: 100%;
// //             justify-content: center;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default Operation;

// import React from "react";

// const Operation = () => {
//   return (
//     <div className="mt-16">
//       <h2 className="text-3xl mb-6 text-center text-pink-400 font-bold">
//         How does it work?
//       </h2>
//       <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-center">
//         <div className="step">
//           <span className="step-number text-white font-semibold">1</span>
//           <div className="step-description flex items-center bg-[#D0E655] rounded-full py-2 px-8 mx-4">
//             <span className="text-black font-bold">Put in your request</span>
//           </div>
//         </div>
//         <div className="step">
//           <span className="step-number text-white font-semibold">2</span>
//           <div className="step-description flex items-center bg-[#D0E655] rounded-full py-2 px-8 mx-4">
//             <span className="text-black font-bold">Receive curated list</span>
//           </div>
//         </div>
//         <div className="step">
//           <span className="step-number text-white font-semibold">3</span>
//           <div className="step-description flex items-center bg-[#D0E655] rounded-full py-2 px-8 mx-4">
//             <span className="text-black font-bold">Choose the Talent</span>
//           </div>
//         </div>
//         <div className="step">
//           <span className="step-number text-white font-semibold">4</span>
//           <div className="step-description flex items-center bg-[#D0E655] rounded-full py-2 px-8 mx-4">
//             <span className="text-black font-bold">
//               Meet & create something!
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Media queries */}
//       <style jsx>{`
//         .step {
//           display: flex;
//           align-items: center;
//           margin: 0.5rem 0;
//         }
//         .step-number {
//           margin-right: 0.5rem;
//         }

//         @media (max-width: 768px) {
//           .step-description {
//             width: auto;
//             justify-content: center;
//             margin: 0.5rem 0;
//           }
//         }

//         @media (max-width: 480px) {
//           .flex {
//             flex-direction: column;
//             align-items: stretch;
//           }

//           .step-description {
//             width: 100%;
//             justify-content: center;
//             margin: 0.5rem 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Operation;

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Operation = () => {
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
    <div ref={ref} className={`mt-16 ${isVisible ? "animate" : ""}`}>
      <h2 className="text-3xl mb-6 text-center text-pink-400 font-bold">
        How does it work?
      </h2>
      <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-center">
        <div className="step">
          <span className="step-number text-white font-semibold">1</span>
          <div className="step-description flex items-center bg-[#D0E655] rounded-full py-2 px-8 mx-4">
            <span className="text-black font-bold">Put in your request</span>
          </div>
        </div>
        <div className="step">
          <span className="step-number text-white font-semibold">2</span>
          <div className="step-description flex items-center bg-[#D0E655] rounded-full py-2 px-8 mx-4">
            <span className="text-black font-bold">Receive curated list</span>
          </div>
        </div>
        <div className="step">
          <span className="step-number text-white font-semibold">3</span>
          <div className="step-description flex items-center bg-[#D0E655] rounded-full py-2 px-8 mx-4">
            <span className="text-black font-bold">Choose the Talent</span>
          </div>
        </div>
        <div className="step">
          <span className="step-number text-white font-semibold">4</span>
          <div className="step-description flex items-center bg-[#D0E655] rounded-full py-2 px-8 mx-4">
            <span className="text-black font-bold">
              Meet & create something!
            </span>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .step {
          display: flex;
          align-items: center;
          margin: 0.5rem 0;
        }
        .step-number {
          margin-right: 0.5rem;
        }

        .animate .step {
          opacity: 0;
          animation: fade-in 2s ease forwards;
        }

        .animate .step:nth-child(1) {
          animation-delay: 0.1s;
        }
        .animate .step:nth-child(2) {
          animation-delay: 0.2s;
        }
        .animate .step:nth-child(3) {
          animation-delay: 0.3s;
        }
        .animate .step:nth-child(4) {
          animation-delay: 0.4s;
        }

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
      `}</style>
    </div>
  );
};

export default Operation;
