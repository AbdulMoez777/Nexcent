import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="w-full bg-silver py-20 px-38 flex flex-col items-center">
        {/* Container for Two Divs  */}
        <div className="flex flex-row items-center w-full justify-between">
          {/* left Side */}
          <div>
            <h1 className="text-6xl font-bold text-d-grey leading-tight">
              Lessons and insights <br />
              <span className="text-primary">from 8 years</span>
            </h1>

            <p className="text-grey text-lg">
              Where to grow your business as a photographer: site or social
              media?
            </p>

            <div>
              <button className="bg-primary text-white px-8 py-3 rounded hover:opacity-90">
                Register
              </button>
            </div>
          </div>

          {/* Right img Side */}
          <div>
            <img
              src="/Images/Illustration.png"
              alt="Illustration img"
              className="w-[400px]"
            />
          </div>
        </div>

        {/* Dots */}
        <div className="flex mt-16 gap-2">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <div className="w-3 h-3 bg-primary opacity-40 rounded-full"></div>
          <div className="w-3 h-3 bg-primary opacity-30 rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
