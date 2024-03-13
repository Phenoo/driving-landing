import React from "react";
import { Questions } from "./Questions";
import { Button } from "./ui/button";

const Faq = () => {
  return (
    <div className="bg-black text-white py-20 px-4">
      <div className="max-w-md mx-auto text-center space-y-4">
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Frequently asked questions
        </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </div>

      <div className="max-w-5xl mx-auto py-10">
        <Questions />

        <div className=" p-4 md:p-10 mt-10 bg-primary text-black space-y-8 flex md:space-x-10 justify-between md:justify-center flex-col md:flex-row">
          <div className="space-y-4">
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Still have any questions?
            </h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ea
              obcaecati illum unde itaque ipsa recusandae
            </p>
          </div>

          <div>
            <Button variant={"secondary"} className="text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
