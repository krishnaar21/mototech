import React from "react";
import Logo from "../drawables/logo.svg";
import HeaderBg from "../drawables/header-bg.png";
import "./Header.css";

function Header() {
  return (
    <div className="flex flex-col w-full h-full relative">
      <div className="image-crop bg-burnt-orange pb-4">
        <img
          id="header-bg"
          className="z-0 relative w-full h-full object-cover image-crop border-b-2 border-black"
          src={HeaderBg}
          alt=""
        />
      </div>
      <div className="flex z-10 absolute">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}

export default Header;
