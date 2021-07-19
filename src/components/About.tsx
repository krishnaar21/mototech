import React from "react";
import AboutBike from "../drawables/about-vert-bike.webp";
import GearIcon from "../drawables/gearicon.svg";
import BikeIcon from "../drawables/bikeicon.svg";

function About() {
  return (
    <div className="flex flex-col text-xl w-full h-screen items-start px-24">
      <p className="font-poppins font-regular text-dark-grey w-3/4">
        Started in 2017 by an ardent bike-lover, Mototech was born out of sheer
        passion for motorbikes, and has grown to be a high-powered name in the
        field of motorbike service, repair and customisation. Our knowledge,
        skills and expertise, mean that we’ll give you the best recommendations
        at even better prices.
      </p>

      <h3 className="font-poppins font-bold text-2xl pt-16">
        AFFORDABLE SERVICE
      </h3>
      <h2 className="font-tomorrow font-bold text-burnt-orange text-3xl">
        EXCEPTIONAL RESULTS
      </h2>

      <div className="flex w-full pt-8">
        <img className="w-1/3" src={AboutBike} alt="" />
        <div className="flex flex-col flex-1">
          <div className="flex flex-col pl-8 justify-center">
            <img src={GearIcon} alt="" className="w-20" />
            <h2 className="font-inter font-extrabold text-4xl pt-4">Service</h2>
            <p className="font-poppins text-dark-grey pt-4 text-xl">
              Mototech Service is a one-of-its-kind, fully automated,
              multi-brand two-wheeler service centre, run by a team of highly
              skilled and certified factory trained mechanics. At Mototech, we
              believe in giving your bike the best service it can get, to ensure
              that you have a smooth ride, every time.
            </p>
          </div>

          <div className="flex flex-col pl-8 pt-16">
            <img src={BikeIcon} alt="" className="w-20" />
            <h2 className="font-inter font-extrabold text-4xl pt-4">
              Custom Designs
            </h2>
            <p className="font-poppins text-dark-grey pt-4 text-xl">
              Service and repairs are only the beginning of our journey to
              success. We also specialise in customisation of bikes, giving you
              a unique vehicle that you can flaunt with pride. At Mototech
              Custom Designs, your vehicle is transformed into a piece of art
              that is not only stunning to look at but also high in performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
