import React from "react";

interface ExampleGridProps {
  bike1: string;
  bike2: string;
  bike3: string;
  bike4: string;
}

function ExampleGrid({ bike1, bike2, bike3, bike4 }: ExampleGridProps) {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
        <img className="flex-1" src={bike1} />
        <img className="flex-1" src={bike2} />
      </div>
      <div className="flex flex-col flex-1">
        <img className="flex-1" src={bike3} />
        <img className="flex-1" src={bike4} />
      </div>
    </div>
  );
}

export default ExampleGrid;
