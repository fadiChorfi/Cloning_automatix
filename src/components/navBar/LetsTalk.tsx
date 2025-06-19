"use client";
import { useEffect, useRef } from "react";
import anime from "animejs";
import Image from "next/image";
import { Button } from "../ui/button";

type RectangleAnimationProps = {
  text: string;
  color: string;
};

const LetsTalkButton = ({ text, color }: RectangleAnimationProps) => {
  const arrowRef = useRef(null);

  useEffect(() => {
    anime({
      targets: ".square",
      keyframes: [
        { translateX: 120, translateY: 0, duration: 1000 },
        { translateX: 120, translateY: 40, duration: 1000 },
        { translateX: 0, translateY: 40, duration: 1000 },
        { translateX: 0, translateY: 0, duration: 1000 },
      ],
      easing: "linear",
      loop: true,
    });
  }, []);

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
    <div className="relative overflow-hidden bg-transparent p-0.5 rounded-lg">
      <Button
        className="bg-[#171717]  border-amber-400  z-50 relative"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        style={{ backgroundColor: color }}
      >
        <span className="text-white font-sans text-[16px]">{text}</span>
        <div className="overflow-hidden">
          <Image
            ref={arrowRef}
            src="/ArrowUpRight.svg"
            height={18}
            width={18}
            alt="ArrowUpRight"
          />
        </div>
      </Button>
      <div className="square absolute w-[30px] h-[30px] bg-yellow-400 rounded-full -top-2.5 -left-2.5"></div>
    </div>
  );
};

export default LetsTalkButton;
