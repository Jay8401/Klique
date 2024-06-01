// import React from "react";

// const Content = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       <div className="flex flex-col items-center text-center md:text-left md:items-start">
//         <div className="w-full mb-6">
//           <h1 className="text-4xl font-bold mb-2 animate-text">
//             LET US FIND YOUR
//             <span className="block text-[#D0E655]">
//               CREATIVE <span>Match</span>
//             </span>
//           </h1>
//         </div>
//         <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-8 mb-6 w-full">
//           <div className="relative w-full md:w-1/3 h-50 overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-110">
//             <img
//               src="images/image1.jpg"
//               alt="image1"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="relative w-full md:w-1/3 h-50 overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-110">
//             <img
//               src="images/image2.jpg"
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
//         <p className="text-center">
//           Get connected easily with the best talent around you for your next
//           shoot.
//         </p>
//       </div>

//       <style jsx>{`
//         @keyframes slideInFromLeft {
//           0% {
//             opacity: 0;
//             transform: translateX(-100%);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         .animate-text {
//           animation: slideInFromLeft 2.5s ease-out, glow 4s infinite alternate;
//         }
//       `}</style>
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
            {/* Faint text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <p className="text-white text-2xl font-bold">PHOTOGRAPHER</p>
            </div>
          </div>
          <div className="relative w-full md:w-1/3 h-50 overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-110">
            <img
              src="images/image1.jpg"
              alt="image2"
              className="w-full h-full object-cover"
            />
            {/* Faint text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <p className="text-white text-2xl font-bold">VIDEOGRAPHER</p>
            </div>
          </div>
          <div className="relative w-full md:w-1/3 h-50 overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-110">
            <img
              src="images/image3.jpg"
              alt="image3"
              className="w-full h-full object-cover"
            />
            {/* Faint text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <p className="text-white text-2xl font-bold">EDITOR</p>
            </div>
          </div>
        </div>
        <p className="text-center">
          Get connected easily with the best talent around you for your next
          shoot.
        </p>
      </div>

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

        .animate-text {
          animation: slideInFromLeft 2.5s ease-out, glow 4s infinite alternate;
        }

        /* Style for hover effect */
        .relative:hover .absolute {
          opacity: 100;
        }
      `}</style>
    </div>
  );
};

export default Content;
