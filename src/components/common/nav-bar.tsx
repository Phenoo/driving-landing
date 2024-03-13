"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import List from "../List";
import { Button } from "../ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous! && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        `w-full flex items-center h-16 fixed top-0  z-50 bg-neutral-800`
      )}
      aria-label="Navigation"
    >
      <div className="flex justify-between w-full items-center py-6 md:py-8 px-4 md:px-8 lg:px-12">
        <Logo />
        <List />
        <Button>Enroll Now</Button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
