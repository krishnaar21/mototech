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
import Testimonial from "./Testimonial";

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
      <Carousel autoPlay infiniteLoop interval={5000} showArrows={false} showStatus={false}>
        <Testimonial
          body="5 stars for the services and the way they attend to the customers.
            Mainly the owner, Jeevan Reddy. Best and trusted service center."
          name="Amir MA"
        />
        <Testimonial
          body="I just gave my Passion XPro for general service. Nice friendly customer service."
          name="Moses Paul"
        />
        <Testimonial
          body="Excellent and root level service. In the year 2017 I have faced engine problem in my ten year old bike but after enquiring in authorized showroom they informed me it as major problem and given estimation cost of Rs 14000/- to repair the bike with only three months guarantee, then as a second opinion I've met Mototech multi brand bike service for the first time and met Mr.jeevan and showed my bike,  he had resolved my bike engine issue in a much much reasonable price and still my bike is working fine without any issues and with increased engine smoothness. Sincere staff, No cheating and good at receiving customers. Thank you."
          name="Sandeep Nethi"
        />
				<Testimonial
          body="Nice staff and they are good at servicing."
          name="Prakhar Pandey"
        />
				<Testimonial
          body="One of the best bike service points. I loved the transparency shown by Mr. Jeevan, the owner.. Each n every detail was shared by him, and the best point the service cost was so amazing and economic.Thank you Mr. Jeevan"
          name="Nish Vines"
        />
				<Testimonial
          body="Excellent work done and nice reception. Impressed by the work done and the cost was economical. I truly recommend this."
          name="Vajeed Abdul"
        />
				<Testimonial
          body="Experienced mechanics with good service and value for your time with on time service."
          name="Ruthvik Raj"
        />
				<Testimonial
          body="The team is really good with their service and delivers the vehicle on time."
          name="Allen Joseph"
        />
				<Testimonial
          body="Give them the bike and have it done your way. Loyal people with no fake business work. It's been two years since I have been trusting them."
          name="Chanakya Sharma"
        />
				<Testimonial
          body="Best place for all your two-wheeler repairs. I would strongly recommend everyone to visit this place. Thank you for the service"
          name="Flint Eastwood Thomas"
        />
				<Testimonial
          body="Always been more than satisfied with my delivery. I take all my friends' bikes to him as well. They're that great!"
          name="Johnson D’souza"
        />
				<Testimonial
          body="If you need your two-wheeler serviced this is the place to go!!"
          name="Vanam Mahesh Kumar"
        />
      </Carousel>
    </div>
  );
}

export default About;
