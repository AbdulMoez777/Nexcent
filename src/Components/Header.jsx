import React from "react";

const Header = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center mt-4 md:mt-7 px-6 md:px-26">
      <img src="/Images/Logo.png" alt="logo" className="h-6 md:h-auto" />
      
      <div className="hidden lg:flex flex-row justify-between items-center lg:gap-8 xl:gap-12 text-base md:text-lg">
        <a href="" className="hover:font-bold transition-all">Home</a>
        <a href="" className="hover:font-bold transition-all">Service</a>
        <a href="" className="hover:font-bold transition-all">Feature</a>
        <a href="" className="hover:font-bold transition-all">Product</a>
        <a href="" className="hover:font-bold transition-all">Testimonials</a>
        <a href="" className="hover:font-bold transition-all">FAQ</a>
      </div>
      
      <div className="hidden md:flex flex-row gap-2 md:gap-3">
        <button className="hover:bg-green-400 p-2 px-4 rounded-xl text-base md:text-lg transition-colors">
          Login
        </button>
        <button className="hover:bg-green-400 p-2 px-4 rounded-xl text-base md:text-lg transition-colors">
          Sign up
        </button>
      </div>

      <button className="block lg:hidden p-2 focus:outline-none">
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
};

export default Header;