import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src="/logo.svg" alt="logo" width={100} height={60} />
    </div>
  );
};

export default Logo;
