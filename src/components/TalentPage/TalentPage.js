import React from "react";

const TalentPage = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="hidden lg:flex lg:col-span-5 lg:justify-center">
            <img
              src="/images/hero3.png"
              alt="mockup"
              className="w-full h-auto max-h-96" // Tailwind CSS classes for width and height adjustment
            />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Talent Signup
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Please signup to join our team of great talent.
              <a
                href="https://forms.gle/gjdubpBbLAmj1D4K6"
                className="text-blue-500"
              >
                Click here.
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalentPage;
