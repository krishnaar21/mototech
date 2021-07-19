import React from "react";
import AboutBike from "../drawables/about-vert-bike.webp";
import GearIcon from "../drawables/gearicon.svg";
import BikeIcon from "../drawables/bikeicon.svg";
import Enfield from "../drawables/enfieldlogo.svg";
import Davidson from "../drawables/davidsonlogo.svg";
import KTM from "../drawables/ktmlogo.svg";
import Hero from "../drawables/herologo.svg";
import Yamaha from "../drawables/yamahalogo.svg";
import Suzuki from "../drawables/suzukilogo.svg";
import Bajaj from "../drawables/bajajlogo.svg";
import Mahindra from "../drawables/mahindralogo.svg";
import Vespa from "../drawables/vespalogo.svg";
import Aprilia from "../drawables/aprilialogo.svg";
import Jawa from "../drawables/jawalogo.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function About() {
  return (
    <div className="flex flex-col text-xl w-full items-start px-24 overflow-hidden">
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
      <h2 className="font-tomorrow font-bold text-burnt-orange text-4xl">
        EXCEPTIONAL RESULTS
      </h2>

      <div className="flex w-full pt-8">
        <img className="w-1/3" src={AboutBike} alt="" />

        <div className="flex flex-col flex-1 justify-center">
          <div className="flex flex-col pl-8">
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

      <h2 className="font-tomorrow font-bold text-burnt-orange text-4xl pt-16">
        EXPERTS IN EVERY BRAND
      </h2>
      <div className="flex w-full overflow-x-auto pt-8">
        <img src={Enfield} alt="" />
        <img src={Davidson} alt="" className="pl-8" />
        <img src={KTM} alt="" className="pl-8" />
        <img src={Hero} alt="" className="pl-8" />
        <img src={Yamaha} alt="" className="pl-8" />
        <img src={Suzuki} alt="" className="pl-8" />
        <img src={Bajaj} alt="" className="pl-8" />
        <img src={Mahindra} alt="" className="pl-8" />
        <img src={Vespa} alt="" className="pl-8" />
        <img src={Aprilia} alt="" className="pl-8" />
        <img src={Jawa} alt="" className="pl-8" />
      </div>

      <h2 className="font-tomorrow font-bold text-burnt-orange text-4xl pt-16">
        TAKING YOUR RIDE TO THE NEXT LEVEL
      </h2>
      <p className="font-poppins text-dark-grey pt-4 text-xl">
        A treat for the biker in you!
      </p>
      <p className="font-poppins text-dark-grey text-xl">
        Check out some of our amazing motorbike transformations.
      </p>
      <Carousel>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg"
          />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg"
          />
          <p className="legend">Legend 4</p>
        </div>
      </Carousel>

      <h2 className="font-tomorrow font-bold text-burnt-orange text-4xl pt-16">
        WHAT OUR CLIENTS SAY
      </h2>
      <p className="font-poppins text-dark-grey pt-4 text-xl">
        We, at Mototech, are dedicated to impeccable service and committed to
        client satisfaction. Here’s what our clients have to say about their
        experience with us.
      </p>
      <Carousel autoPlay infiniteLoop interval={5000}>
        <div className="flex flex-col items-start">
          <p className="font-poppins pt-4 text-xl">
            “5 stars for the services and the way they attend to the customers.
            Mainly the owner, Jeevan Reddy. Best and trusted service center.”
          </p>
          <p className="font-poppins pt-4 text-xl font-bold">
            - <span className="text-burnt-orange">Amir MA</span>
          </p>
        </div>
        <div className="flex flex-col items-start">
          <p className="font-poppins pt-4 text-xl">
            “5 stars for the services and the way they attend to the customers.
            Mainly the owner, Jeevan Reddy. Best and trusted service center.”
          </p>
          <p className="font-poppins pt-4 text-xl font-bold">
            - <span className="text-burnt-orange">Amir MA</span>
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default About;
