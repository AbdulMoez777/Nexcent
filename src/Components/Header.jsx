import React from "react";

const Header = () => {
  return (
    <>
      <div className=" w-full flex flex-row justify-between items-center mt-7 px-26">
        <img src="/Images/Logo.png" alt="logo" className="" />
        <div className=" flex flex-row  justify-between items-center w-[40%] text-lg">
          <a href="" className=" hover:font-bold">Home</a>
          <a href="" className="hover:font-bold">Service</a>
          <a href="" className="hover:font-bold">Feature</a>
          <a href="" className="hover:font-bold">Product</a>
          <a href="" className="hover:font-bold">Testimonials</a>
          <a href="" className="hover:font-bold">FAQ</a>
        </div>
        <div className="flex flex-row gap-3">
            <button className=" hover:bg-green-400 p-2 px-4 rounded-xl text-lg">
                Login
            </button>
            <button className=" hover:bg-green-400 p-2 px-4 rounded-xl text-lg">
                Sign up
            </button>
        
        </div>
      </div>
    </>
  );
};

export default Header;
