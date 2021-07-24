import React from "react";

interface TestimonialProps {
  body: string;
  name: string;
}

function Testimonial({body, name}: TestimonialProps) {
  return (
    <div className="flex flex-col w-full items-start justify-center">
      <p className="font-poppins pt-4 text-xl text-left">
        “{body}”
      </p>
      <p className="font-poppins pt-4 text-xl font-bold">
        - <span className="text-burnt-orange">{name}</span>
      </p>
    </div>
  )
}

export default Testimonial