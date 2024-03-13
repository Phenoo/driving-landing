import React from "react";

const Proud = () => {
  return (
    <div className="bg-black text-white py-20 px-4">
      <div className="max-w-xl mx-auto  text-center space-y-4">
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold ">
          We are proud.
        </h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          atque blanditiis optio debitis! Iste, aliquid.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center max-w-6xl mx-auto my-16">
        <div className="bg-neutral-800 p-4 w-full text-center rounded-sm h-24 md:h-40 flex justify-center flex-col items-center">
          <h6 className="text-lg md:text-2xl font-semibold">21+</h6>
          <p>Lorem ipsum dolor</p>
        </div>
        <div className="bg-neutral-800 p-4 w-full text-center rounded-sm h-24 md:h-40 flex justify-center flex-col items-center">
          <h6 className="text-lg md:text-2xl font-semibold">20k</h6>
          <p>Lorem</p>
        </div>
        <div className="bg-neutral-800 p-4 w-full text-center rounded-sm h-24 md:h-40 flex justify-center flex-col items-center">
          <h6 className="text-lg md:text-2xl font-semibold">30</h6>
          <p>Lorem ipsum </p>
        </div>
        <div className="bg-neutral-800 p-4 w-full text-center rounded-sm h-24 md:h-40 flex justify-center flex-col items-center">
          <h6 className="text-lg md:text-2xl font-semibold">20</h6>
          <p>Lorem ipsum</p>
        </div>
      </div>
    </div>
  );
};

export default Proud;
