import { Star } from "lucide-react";
import React from "react";
import { FaStar } from "react-icons/fa";

import Image from "next/image";

import quote from "@/assets/quote.png";

const Review = () => {
  return (
    <div className="bg-[#111] text-white py-20">
      <div className="max-w-5xl mx-auto items-center flex gap-8">
        <div className="w-2/5">
          <img
            src="https://github.com/shadcn.png"
            alt="avatr"
            className="object-cover w-40 rounded-full"
          />
        </div>
        <div className="relative space-y-4">
          <div className=" z-0 absolute -top-6 opacity-50">
            <Image src={quote} alt="quote" width={60} height={60} />
          </div>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-medium z-10">
            Amazing car training center
          </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, sint
            distinctio atque ducimus architecto fuga, aperiam deserunt illo
            adipisci velit corporis nostrum quae assumenda totam amet
            exercitationem provident facere est nihil quasi omnis consectetur
            sed aut. Quod iusto officiis, odit suscipit amet pariatur, aut
            doloribus voluptates iste ratione dignissimos. Laudantium?{" "}
          </p>
          <div className="flex gap-2 items-center">
            <FaStar className="text-orange-400" />
            <FaStar className="text-orange-400" />
            <FaStar className="text-orange-400" />
            <FaStar className="text-orange-400" />
            <FaStar className="text-orange-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
