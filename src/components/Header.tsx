import React from "react";
import Logo from "../drawables/logo.svg";
import AboutBike from "../drawables/about-bike.svg";
import HeaderBg from "../drawables/header-bg.webp";
import "./Header.css";

function Header() {
  return (
    <div className="flex flex-col w-full h-screen relative">
      <div className="z-0 image-crop bg-burnt-orange pb-4 h-full w-full">
        <img
          id="header-bg"
          className="z-0 relative w-full h-full object-cover image-crop border-b-2 border-black"
          src={HeaderBg}
          alt=""
        />
      </div>

      {/* body container */}
      <div className="absolute w-1/2 h-full flex flex-col z-10 items-start px-24">
        <div className="flex z-10 pt-12">
          <img src={Logo} alt="" />
        </div>

        <div className="flex flex-col flex-1 justify-center items-start">
          <h2 className="font-poppins text-burnt-orange text-4xl font-bold pb-2">
            SMOOTH RIDES,
          </h2>
          <h1 className="font-tomorrow text-white font-semibold text-7xl pb-8">
            GUARANTEED!
          </h1>
          <p className="font-poppins text-light-grey text-2xl pb-12">
            Power and precision to keep your vehicle fit and make your ride
            better.
          </p>

          <button className="font-tomorrow font-medium text-white text-xl bg-burnt-orange px-4 py-2 rounded-none">
            CONTACT US
          </button>
        </div>

        <div className="flex flex-col h-1/4 w-full justify-center items-start">
          <img src={AboutBike} alt="" className="h-2/5" />
					<h2 className="text-4xl text-burnt-orange font-tomorrow font-bold pt-4">ABOUT US</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
