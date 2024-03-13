import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Service = () => {
  return (
    <div className="bg-black py-20 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl p-4 gap-8 mx-auto">
        <div className="space-y-8">
          <h4 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Using self service, you can access yor program 24/7
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            aliquid suscipit, a delectus ad odit quis? Odio hic amet nesciunt
            nemo, provident nam rerum. Error quasi quam asperiores aut nostrum
          </p>
          <Button className="w-2/4 h-16">Start at $120</Button>
        </div>

        <div className="shape">
          <Image
            src={
              "https://images.pexels.com/photos/3007318/pexels-photo-3007318.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt="service"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
