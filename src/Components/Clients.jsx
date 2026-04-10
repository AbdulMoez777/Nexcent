import React from "react";

export const Clients = () => {
  return (
    <>
      <div className="w-full py-10 md:px-24 text-center bg-white">
        <h1 className="text-4xl text-d-grey font-semibold mb-9">Our Clients</h1>
        <p className="text-grey text-lg mb-13">
          We have been working with some Fortune 500+ clients
        </p>

        <div className="overflow-hidden w-full flex">
          <div className="flex w-max animate-scroll items-center">
            <div className="flex items-center gap-16 pr-16 ">
              
              <img
                src="public\Images\Logo (1).png"
                alt="logo1"
                className="h-10 object-contain"
              />
              <img
                src="public\Images\Logo (2).png"
                alt="logo2"
                className="h-10 object-contain"
              />
              <img
                src="public\Images\Logo (3).png"
                alt="logo3"
                className="h-10 object-contain"
              />
              <img
                src="public\Images\Logo (4).png"
                alt="logo4"
                className="h-10 object-contain"
              />
              <img
                src="public\Images\Logo (5).png"
                alt="logo5"
                className="h-10 object-contain"
              />
              <img
                src="public\Images\Logo (6).png"
                alt="logo6"
                className="h-10 object-contain"
              />
              <img
                src="public\Images\Logo (7).png"
                alt="logo7"
                className="h-10 object-contain"
              />

              {/* GROUP 2: The exact same 7 logos duplicated for the seamless loop! */}
              <img
                src="public\Images\Logo (1).png"
                alt="logo1"
                className="h-10 object-contain"
              />
              <img
                src="public\Images\Logo (2).png"
                alt="logo2"
                className="h-10 object-contain"
              />
              <img
                src="public\Images\Logo (3).png"
                alt="logo3"
                className="h-10 object-contain"
              />
              <img
                src="public\Images\Logo (4).png"
                alt="logo4"
                className="h-10 object-contain"
              />
              <img
                src="public\Images\Logo (5).png"
                alt="logo5"
                className="h-10 object-contain"
              />
              <img
                src="public\Images\Logo (6).png"
                alt="logo6"
                className="h-10 object-contain"
              />
              <img
                src="public\Images\Logo (7).png"
                alt="logo7"
                className="h-10 object-contain"
              />
            </div>
          </div>  
        </div>
      </div>
    </>
  );
};
