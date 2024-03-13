import Image from "next/image";
import React from "react";

const Trainers = () => {
  const data = [
    {
      name: "Maksds Qerik",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Mike Aksje",

      image:
        "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Asas Weasas",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className="gradient px-4  text-white py-20 min-h-screen flex justify-center items-center flex-col">
      <div className="max-w-xl mx-auto space-y-4 text-center">
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Our Trainers
        </h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
          magni!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center max-w-6xl mx-auto">
        {data.map((item, i) => (
          <div
            key={i}
            className="h-80 relative w-80  cursor-pointer hover:scale-95 transition-all"
          >
            <div className="bg-[#000] h-1/3 w-full"></div>
            <div className="bg-[#272727] h-2/3 w-full">
              <h6 className="text-center pt-40 font-semibold text-xl">
                {item.name}
              </h6>
            </div>
            <div className="absolute top-8 left-10 flex justify-center items-center mx-auto h-52 w-60 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
