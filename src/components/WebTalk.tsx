import React from "react";
import SocialCard from "./SocialCard";

const WebTalk = () => {
  return (
    <div className="py-20 text-white bg-black">
      <div className="max-w-lg mx-auto">
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
          See what our learners said about us on social media
        </h4>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center social my-20">
        <SocialCard />
        <SocialCard />
        <SocialCard />
      </div>
    </div>
  );
};

export default WebTalk;
