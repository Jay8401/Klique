import React from "react";
import "./styles.css";
import Card from "../../components/Card";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="lg:grid lg:grid-cols-7">
          <div className="lg:col-span-7">
            <h1 className="flex flex-col text-left mb-8 text-xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              <span>LET US FIND YOUR</span>
              <span className="text-[#D0E655]">
                CREATIVE <span className="font-galada">Match</span>
              </span>
            </h1>
          </div>
        </div>
        <div className="flex justify-start space-x-8">
          <Card />
          <Card />
          <Card />
        </div>
        <p className="mt-8 text-center w-full">
          We help you match with the right talent around you for smoother,
          faster execution of your projects.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
