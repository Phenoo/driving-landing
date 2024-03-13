import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Choosecar = () => {
  return (
    <div className="bg-[#111] text-white py-20 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl  place-items-center mx-auto">
        <div className="space-y-8">
          <h4 className="text-xl md:text-3xl lg:text-5xl font-semibold">
            Why choose GM car training
          </h4>
          <div className="space-y-4">
            <div className="flex gap-2 items-center text-sm">
              <span className="text-primary ">
                <AiFillCheckCircle />
              </span>
              <p className="text-sm ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia, modi.
              </p>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <span className="text-primary ">
                <AiFillCheckCircle />
              </span>
              <p className="text-sm ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit it amet
                consectetur adipisicing elit. Mollitia, modi.
              </p>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <span className="text-primary ">
                <AiFillCheckCircle />
              </span>
              <p className="text-sm ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia, modi.
              </p>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <span className="text-primary ">
                <AiFillCheckCircle />
              </span>
              <p className="text-sm ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia, modi.
              </p>
            </div>
          </div>
        </div>

        <div>
          <Card className="sm:w-[380px] w-full lg:w-[450px]  bg-neutral-800 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-4xl">
                Now you discover how good a driver you are
              </CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium odit esse laborum, ipsum veritatis nostrum.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-[#111] text-center p-4">
                  <h6 className="text-xl md:text-3xl">10</h6>
                  <p>Instructors</p>
                </div>
                <div className="bg-[#111] text-center p-4">
                  <h6 className="text-xl md:text-3xl">10</h6>
                  <p>Instructors</p>
                </div>
                <div className="bg-[#111] text-center p-4">
                  <h6 className="text-xl md:text-3xl">10</h6>
                  <p>Instructors</p>
                </div>
                <div className="bg-[#111] text-center p-4">
                  <h6 className="text-xl md:text-3xl">10</h6>
                  <p>Instructors</p>
                </div>
              </div>
              <Button className="w-full md:h-16  bg-white ">
                Start at $120 only
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Choosecar;
