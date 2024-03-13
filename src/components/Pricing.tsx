import React from "react";
import { LuCheckCircle } from "react-icons/lu";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const Pricing = () => {
  return (
    <div className="bg-black py-20 text-white p-4">
      <div className="flex flex-col justify-center items-center w-full space-y-4  max-w-xl mx-auto text-center gap-4">
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Price that is affordable
        </h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex veniam
          dicta vitae laudantium possimus fugit exercitationem sapiente
          laboriosam quos
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center max-w-6xl gap-8 mx-auto my-10">
        <Card className="w-[340px] sm:w-[350px] bg-neutral-800 text-white  border-none">
          <CardHeader>
            <CardTitle className="text-center md:text-3xl">
              Test one of our locations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid space-y-4">
              <div className="flex gap-4">
                <span>
                  <LuCheckCircle />
                </span>
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, totam.
                </p>
              </div>
              <div className="flex gap-4">
                <span>
                  <LuCheckCircle />
                </span>
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur
                </p>
              </div>
              <div className="flex gap-4">
                <span>
                  <LuCheckCircle />
                </span>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati incidunt pariatur doloribus, provident impedit
                  officia omnis
                </p>
              </div>
            </div>
            <CardFooter>
              <Button className="w-full bg-white h-16">
                Start at $250 only
              </Button>
            </CardFooter>
          </CardContent>
        </Card>
        <Card className="w-[340px] sm:w-[350px] bg-primary text-black  border-none">
          <CardHeader>
            <CardTitle className="text-center md:text-3xl">
              6 hour safe driving course
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid space-y-4">
              <div className="flex gap-4">
                <span>
                  <LuCheckCircle />
                </span>
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, totam.
                </p>
              </div>
              <div className="flex gap-4">
                <span>
                  <LuCheckCircle />
                </span>
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur
                </p>
              </div>
              <div className="flex gap-4">
                <span>
                  <LuCheckCircle />
                </span>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati incidunt pariatur doloribus, provident impedit
                  officia omnis
                </p>
              </div>
            </div>
            <CardFooter>
              <Button className="w-full h-16 text-white" variant={"secondary"}>
                Start at $250 only
              </Button>
            </CardFooter>
          </CardContent>
        </Card>
        <Card className="w-[340px] sm:w-[350px] bg-neutral-800 text-white  border-none">
          <CardHeader>
            <CardTitle className="text-center md:text-3xl">
              Full driver&apos;s education course
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid space-y-4">
              <div className="flex gap-4">
                <span>
                  <LuCheckCircle />
                </span>
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, totam.
                </p>
              </div>
              <div className="flex gap-4">
                <span>
                  <LuCheckCircle />
                </span>
                <p className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur
                </p>
              </div>
              <div className="flex gap-4">
                <span>
                  <LuCheckCircle />
                </span>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati incidunt pariatur doloribus, provident impedit
                  officia omnis
                </p>
              </div>
            </div>
            <CardFooter>
              <Button className="w-full bg-white h-16">
                Start at $250 only
              </Button>
            </CardFooter>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
