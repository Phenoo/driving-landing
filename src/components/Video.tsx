"use client";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import React from "react";
import { Play } from "lucide-react";

const Video = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="bg-black relative py-32 overflow-hidden">
      <div className="bg-primary h-80 w-full">
        <div className="max-w-xl mx-auto text-center">
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center py-10">
            This is a HD Promo video for GM Training Driving School
          </h4>
        </div>
      </div>
      <div className="absolute top-36 md:top-40 w-full bg-transparent">
        <div className="flex justify-center h-[500px] items-center relative m-4">
          <Image
            src={
              "https://images.pexels.com/photos/228094/pexels-photo-228094.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt="esdd"
            fill
            className="object-contain w-full h-full"
          />
          <div className="absolute">
            <button className="btn-play sonar-emitter sunshines">
              <Play />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
