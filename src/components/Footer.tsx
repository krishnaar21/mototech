import React from "react";

import "./Footer.css";

import Logo from "../drawables/logo.svg";
import Instagram from "../drawables/instagram.svg";
import Facebook from "../drawables/facebook.svg";
import FooterBike from "../drawables/footer-bike.webp";

function Footer() {
  return (
    <div
      className="flex flex-col w-full justify-between items-center md:p-24 p-12 footer-bg"
      style={{ height: "70%", backgroundImage: `url(${FooterBike})` }}
    >
      <h2 className="font-poppins text-white md:text-5xl text-2xl">
        <span className="text-burnt-orange">”</span>It’s not about the
        destination. It’s about the ride!
        <span className="text-burnt-orange">“</span>
      </h2>

      <div className="bottom-0 left-0 flex flex-col md:flex-row w-full justify-evenly items-start pt-16">
        <div className="flex flex-col flex-1">
          <img src={Logo} className="w-48 md:w-auto" alt="" />
          <p className="font-poppins text-white md:text-2xl text-lg pt-8">
            Visit us for reliable repairs, superior service, and creative
            customisation.
          </p>
        </div>
        <div className="flex-1 md:mx-16 mt-8 md:mt-0">
          <h2 className="font-tomorrow font-bold text-burnt-orange text-4xl">
            Address
          </h2>
          <p className="font-poppins text-white md:text-2xl text-lg pt-8">
            1-26-22/1, Subash Nagar, Gollaguda Kaman, Secunderabad, Telangana
            500015.
          </p>
        </div>
        <div className="flex-1 md:mx-16 mt-8 md:mt-0">
          <div className="flex flex-col">
            <h2 className="font-tomorrow font-bold text-burnt-orange text-4xl">
              Contact us
            </h2>
            <p className="font-poppins text-white md:text-2xl text-lg pt-8">
              +91 91004 02098
            </p>
            <p className="font-poppins text-white md:text-2xl text-lg pt-2">
              +91 7095813250
            </p>

            <h2 className="font-tomorrow font-bold text-burnt-orange text-4xl pt-16">
              Follow us
            </h2>
            <div className="flex pt-8">
              <a href="https://www.instagram.com/mototech_mbs/">
                <img src={Instagram} className="w-16" alt="" />
              </a>
              <a href="https://www.facebook.com/mototechmbs">
                <img src={Facebook} className="w-16" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
