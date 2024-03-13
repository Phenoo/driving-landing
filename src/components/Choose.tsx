import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import img1 from "@/assets/medal.png";
import img2 from "@/assets/school.png";
import img3 from "@/assets/engineer.png";
import img4 from "@/assets/user.png";
import Image from "next/image";

const Choose = () => {
  const data = [
    {
      title: "Expert Instructors",
      image: img4,
    },
    {
      title: "Hands-on-learning",
      image: img3,
    },
    {
      title: "Comprehensive curriculum",
      image: img2,
    },
    {
      title: "Industry recognition",
      image: img1,
    },
  ];
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto flex justify-center flex-col gap-4">
        <h4 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold">
          why choose our massage <br /> therapist training center
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {data.map((item, i) => (
            <Card className="bg-[#c7c7c7] text-black" key={i}>
              <CardHeader>
                <div className="bg-primary p-2 w-fit rounded-sm mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={30}
                    height={30}
                  />
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium maiores mollitia consequatur aspernatur. Velit a
                  consequuntur explicabo. Deserunt, quam incidunt!
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
