import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <div className="bg-black py-16">
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto gap-8 place-items-center">
        <div>
          <Image
            src={"/images/huawei.png"}
            alt="huwaei"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src={"/images/digg.png"}
            alt="huwaei"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src={"/images/siemens.png"}
            alt="huwaei"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src={"/images/aecom.png"}
            alt="huwaei"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src={"/images/the-home-depot.png"}
            alt="huwaei"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>
        <div>
          <Image
            src={"/images/uber.png"}
            alt="huwaei"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
