"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { CheckCircle, CircleCheck } from "lucide-react";
import { AiFillCheckCircle } from "react-icons/ai";
import { HeroCard } from "./Herocard";

const Hero = () => {
  const path = usePathname();

  const navigation = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Services",
      url: "/services",
    },
    {
      label: "Projects",
      url: "/projects",
    },
    {
      label: "Blogs",
      url: "/blogs",
    },
    {
      label: "Contact",
      url: "/contact",
    },
  ];
  return (
    <div className="min-h-screen hero">
      <div className="bg-black/70 min-h-screen w-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full place-items-center">
          <div className="flex justify-center h-full px-20 flex-col gap-4 text-white">
            <h4 className="text-3xl md:text-5xl font-medium text-white lg:text-7xl tracking-wide">
              The Best <br /> Driving School <br /> In the World.
            </h4>
            <div className="space-y-4">
              <div className="flex gap-2 items-center text-sm">
                <span className="text-primary ">
                  <AiFillCheckCircle />
                </span>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Mollitia, modi.
                </p>
              </div>
              <div className="flex gap-2 items-center text-sm">
                <span className="text-primary ">
                  <AiFillCheckCircle />
                </span>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Mollitia, modi.
                </p>
              </div>
              <div className="flex gap-2 items-center text-sm">
                <span className="text-primary ">
                  <AiFillCheckCircle />
                </span>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Mollitia, modi.
                </p>
              </div>
            </div>
            <div className="space-x-4">
              <Button className="md:h-16 w-2/4 text-lg">
                Start at $120 only
              </Button>
            </div>
          </div>
          <div>
            <HeroCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
