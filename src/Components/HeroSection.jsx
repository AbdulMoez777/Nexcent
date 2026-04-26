import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="w-full bg-silver py-12 md:py-20 px-6 md:px-38 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center w-full justify-between gap-12 md:gap-0">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <h1 className="text-4xl md:text-6xl font-bold text-d-grey leading-tight">
              Lessons and insights <br className="hidden md:block" />
              <span className="text-primary">from 8 years</span>
            </h1>

            <p className="text-grey text-base md:text-lg">
              Where to grow your business as a photographer: site or social media?
            </p>

            <div>
              <button className="bg-primary text-white px-8 py-3 rounded hover:opacity-90 transition-all">
                Register
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/Images/Illustration.png"
              alt="Illustration img"
              className="w-[80%] md:w-full max-w-[400px] object-contain"
            />
          </div>
        </div>

        <div className="flex mt-12 md:mt-16 gap-2">
          <div className="w-3 h-3 bg-primary rounded-full cursor-pointer"></div>
          <div className="w-3 h-3 bg-primary opacity-40 rounded-full cursor-pointer"></div>
          <div className="w-3 h-3 bg-primary opacity-30 rounded-full cursor-pointer"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;