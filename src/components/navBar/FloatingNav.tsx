"use client";
import Image from "next/image";
import React from "react";
import PageItems from "./PageItems";

import LetsTalkButton from "./LetsTalk";

const navelements = ["Why Us", "Mission", "Works", "Service"];

const FloatingNav = () => {
  return (
    <div className="flex sticky justify-between items-center rounded-full  border-white/15  border-1  top-6 right-5 left-5  w-[850px] m-auto bg-[#000000] py-3.5  px-16 z-50">
      <div>
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </div>
      <div className="flex gap-4">
        <ul className="flex items-center gap-4 cursor-pointer">
          {navelements.map((item, index) => (
            <li
              className="text-white/55 hover:text-white/100  font-sans text-[16px]"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
        <PageItems />
      </div>

      <LetsTalkButton text={"Let's Talk"} color="#171717" />
    </div>
  );
};

export default FloatingNav;
