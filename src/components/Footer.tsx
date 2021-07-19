import React from "react";

import './Footer.css'

import Logo from "../drawables/logo.svg";
import Instagram from "../drawables/instagram.svg";
import Facebook from "../drawables/facebook.svg";
import FooterBike from "../drawables/footer-bike.webp";

function Footer() {
  return (
    <div
      className="flex flex-col w-full justify-between items-center p-24 footer-bg"
      style={{ height: "70%", backgroundImage: `url(${FooterBike})` }}
    >
      <h2 className="font-poppins text-white text-5xl">
        <div>
          <span className="text-burnt-orange">”</span>It’s not about the
          destination.
        </div>
        <div>
          It’s about the ride!<span className="text-burnt-orange">“</span>
        </div>
      </h2>

      <div className="bottom-0 left-0 flex w-full justify-evenly items-start pt-16">
        <div className="flex flex-col flex-1">
          <img src={Logo} alt="" />
          <p className="font-poppins text-white text-2xl pt-8">
            Visit us for reliable repairs, superior service, and creative
            customisation.
          </p>
        </div>
        <div className="flex-1 mx-16">
          <h2 className="font-tomorrow font-bold text-burnt-orange text-4xl">
            Address
          </h2>
          <p className="font-poppins text-white text-2xl pt-8">
            1-26-22/1, Subash Nagar, Gollaguda Kaman, Secunderabad, Telangana
            500015.
          </p>
        </div>
        <div className="flex-1">
          <div className="flex flex-col">
            <h2 className="font-tomorrow font-bold text-burnt-orange text-4xl">
              Contact us
            </h2>
            <p className="font-poppins text-white text-2xl pt-8">
              +91 91004 02098
            </p>

            <h2 className="font-tomorrow font-bold text-burnt-orange text-4xl pt-16">
              Follow us
            </h2>
            <div className="flex pt-8">
              <img src={Instagram} alt="" />
              <img src={Facebook} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
