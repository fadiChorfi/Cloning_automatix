"use client";
import { useEffect, useRef } from "react";
import anime from "animejs";
import Image from "next/image";
import { Button } from "../ui/button";

const LearnMoreButton = () => {
  const arrowRef = useRef(null);

  const handleHoverStart = () => {
    if (arrowRef.current) {
      anime({
        targets: arrowRef.current,
        keyframes: [{ translateX: 15, translateY: -15, duration: 100 }],
        easing: "linear",
      });
    }
  };

  const handleHoverEnd = () => {
    if (arrowRef.current) {
      anime({
        targets: arrowRef.current,
        translateX: 0,
        translateY: 0,
        duration: 100,
        easing: "linear",
      });
    }
  };

  return (
    <div className="relative overflow-hidden bg-transparent  rounded-lg">
      <Button
        className="bg-[#050505] cursor-pointer  overflow-hidden z-50 relative rounded-lg border-1 border-[#1f1f1f] w-44 h-14 before:absolute before:-inset-0 before:bg-[radial-gradient(circle_at_50%_-90%,rgba(255,255,255,0.3)_0%,transparent_80%)] before:content-[''] before:-z-10
        "
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        size={"lg"}
        variant={"default"}
      >
        <span className="text-white font-sans text-[1.2rem]">Learn More</span>
        <div className="overflow-hidden">
          <Image
            ref={arrowRef}
            src="/ArrowUpRight.svg"
            height={24}
            width={24}
            alt="ArrowUpRight"
          />
        </div>
      </Button>
    </div>
  );
};

export default LearnMoreButton;
