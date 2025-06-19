"use client";
import Image from "next/image";
import React, { useState } from "react";

interface WorkProps {
  title: string;
  profit: string;
  description: string;
}

interface StatsProps {
  stat: string;
  type: string;
}

const works: WorkProps[] = [
  {
    title: "Grapho AI",
    profit: "47% increase in new customers.",
    description:
      "That's Why We Leverage AI to Create Impactful, Lasting Experiences that Engage, and Transform Every Interaction.",
  },
  {
    title: "VectraOps",
    profit: "34% increase in online sales.",
    description:
      "That's Why We Leverage AI to Create Impactful, Lasting Experiences that Engage, and Transform Every Interaction.",
  },
  {
    title: "Signum",
    profit: "47% increase in new customers.",
    description:
      "That's Why We Leverage AI to Create Impactful, Lasting Experiences that Engage, and Transform Every Interaction.",
  },
];
const stats: StatsProps[] = [
  {
    stat: "150k+",
    type: "Active Users",
  },
  {
    stat: "4.9",
    type: "Rating out of 5",
  },
  {
    stat: "99k+",
    type: "Positive Reviews",
  },
  {
    stat: "85k+",
    type: "Users Satisfied",
  },
];
const Works = () => {
  const [selectedItem, setSelectedItem] = useState<string>(works[0].title);

  const toggleItem = (index: number) => {
    setSelectedItem(works[index].title);
  };

  return (
    <div className=" flex flex-col gap-16  min-h-screen w-full bg-[#050505] pt-22 text-4xl">
      <div className="text-[#b0510c] w-fit place-items-center m-auto">
        <svg
          className="relative w-48 h-48 z-50 transition-all overflow-hidden duration-1000 hover:translate-y-6"
          viewBox="0 0 100 100"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="hover-gradient"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f9882a" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
          </defs>
          <g className="hover:stroke-[url(#hover-gradient)] transition-all duration-300">
            <line x1="50" y1="10" x2="50" y2="80" stroke="currentColor" />
            <line x1="20" y1="50" x2="50" y2="80" stroke="currentColor" />
            <line x1="80" y1="50" x2="50" y2="80" stroke="currentColor" />
          </g>
        </svg>
      </div>

      <div className="flex flex-col gap-11">
        <div className="bg-gradient-to-b from-[#252525] to-[#0b0b0b] rounded-full p-[1px] w-fit m-auto">
          <p className="text-[14px] font-400 border-1 text-white/65 border-transparent bg-[#050505] rounded-full py-1.5 px-5 w-fit">
            Work That Make Us Proud
          </p>
        </div>
        <div className="place-items-center">
          <h1 className="text-white text-5xl font-semibold text-center w-full max-w-4xl mx-auto">
            Recent Works, Notable Impact
          </h1>
        </div>

        <div className="flex flex-row justify-between w-[90%] m-auto">
          <div className="text-white flex flex-col w-1/2">
            {works.map((item, index) => (
              <div
                key={index}
                onClick={() => toggleItem(index)}
                className={`cursor-pointer border-b border-l border-white/10 last:border-b-0 transition-all duration-300 ${
                  selectedItem === item.title
                    ? "border-l-4 border-l-[#b0510c]"
                    : ""
                }`}
              >
                {selectedItem === item.title ? (
                  <div className="p-8 transition-all duration-500 ease-in-out">
                    <h3 className="text-3xl font-semibold">{item.title}</h3>
                    <p className="text-[1.1rem] leading-relaxed font-light text-white/65 mt-4 opacity-0 animate-fadeIn">
                      {item.description}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-8 hover:bg-white/5 transition-all duration-300 ease-in-out">
                    <h3 className="text-3xl font-semibold">{item.title}</h3>
                    <p className="text-[1.1rem] font-light text-white/65">
                      {item.profit}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-tl from-[#141414] via-[#171717] to-[#242424] w-fit h-fit rounded-3xl transition-all duration-500 ease-in-out">
            <Image
              src="/workImage.avif"
              height={450}
              width={450}
              alt="image"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div className="flex  w-[70%] m-auto  ">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col gap-3 relative px-12 py-4">
            <div className="absolute right-0 top-0 bottom-0 w-[1px]">
              <div
                className="h-full w-full"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.2) 70%, transparent)",
                }}
              ></div>
            </div>

            <h2 className="text-white text-5xl font-bold text-center">
              {item.stat}
            </h2>
            <p className="text-white/55 font-light text-lg text-center">
              {item.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
