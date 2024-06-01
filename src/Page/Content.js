// import React from "react";

// const Content = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       <div className="flex flex-col items-center text-center md:text-left md:items-start">
//         <div className="w-full mb-6">
//           <h1 className="text-4xl font-bold mb-2">
//             LET US FIND YOUR
//             <span className="block text-[#D0E655]">
//               CREATIVE <span>Match</span>
//             </span>
//           </h1>
//         </div>
//         <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-8 mb-6 w-full">
//           <div className="relative w-full md:w-1/3 h-50 overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-110">
//             <img
//               src="images/hero2.jpg"
//               alt="image1"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="relative w-full md:w-1/3 h-50 overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-110">
//             <img
//               src="images/hero2.jpg"
//               alt="image2"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="relative w-full md:w-1/3 h-50 overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-110">
//             <img
//               src="images/hero2.jpg"
//               alt="image3"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Content;
import React from "react";

const Content = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col items-center text-center md:text-left md:items-start">
        <div className="w-full mb-6">
          <h1 className="text-4xl font-bold mb-2 animate-text">
            LET US FIND YOUR
            <span className="block text-[#D0E655]">
              CREATIVE <span>Match</span>
            </span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-8 mb-6 w-full">
          <div className="relative w-full md:w-1/3 h-50 overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-110">
            <img
              src="images/hero2.jpg"
              alt="image1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-full md:w-1/3 h-50 overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-110">
            <img
              src="images/hero2.jpg"
              alt="image2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-full md:w-1/3 h-50 overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-110">
            <img
              src="images/hero2.jpg"
              alt="image3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        // @keyframes glow {
        //   0%,
        //   100% {
        //     text-shadow: 0 0 5px #d0e655, 0 0 5px #d0e655, 0 0 10px #d0e655,
        //       0 0 20px #d0e655;
        //   }
        //   50% {
        //     text-shadow: 0 0 10px #d0e655, 0 0 20px #d0e655, 0 0 30px #d0e655;
        //   }
        // }

        .animate-text {
          animation: slideInFromLeft 2.5s ease-out, glow 4s infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Content;
