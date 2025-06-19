import Lottie from "lottie-react";
import React from "react";
import brain from "./brain.json";
const Brain = () => {
  return (
    <div className="bg-gradient-to-b from-[#f99140] to-[#f96700] w-fit rounded-full  ">
      <Lottie
        animationData={brain}
        loop={true}
        autoplay={true}
        size={20}
        height={20}
        width={20}
        className="w-16 h-16  rounded-full p-2 "
      />
    </div>
  );
};

export default Brain;
