"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Like from "../animationIcons/Like";
import People from "../animationIcons/People";
import Brain from "../animationIcons/Brain";
import SeePricing from "./SeePricing";

gsap.registerPlugin(ScrollTrigger);

interface CardType {
  title: string;
  description: string;
  logo:  React.ReactNode;
}

const cards: CardType[] = [
  {
    title: "Innovative Approach",
    description:
      "Look for works that reflect a unique character and differentiate in a crowded marketplace.",
    logo: <Brain />,
  },
  {
    title: "Seamless Experience",
    description:
      "A seamless user experience across all devices, ensuring every interaction connects with the user.",
    logo: <Like />,
  },
  {
    title: "Ongoing Partnership",
    description:
      "Find a new partner easily, not just providers, who offer ongoing support even after the project ends.",
    logo: <People />,
  },
];

const ExpertiseSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = gsap.utils.toArray(".animate-child") as HTMLElement[];
  
    gsap.fromTo(
      elements,
      {
        y: 100,
        opacity: 0,
        filter: "blur(20px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        stagger: 0.2, 
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  

  return (
    <div className="min-h-[100vh] min-w-full bg-[#050505] text-white/55 text-4xl  py-24">
      <div className="flex flex-col gap-11" ref={containerRef}>
        <div className="animate-child bg-gradient-to-b from-[#252525] to-[#0b0b0b] rounded-full p-[1px] w-fit m-auto"
          
        >
          <p className="text-[14px] font-400 border-1 border-transparent bg-[#050505] rounded-full py-1.5 px-5 w-fit">
            Why Us
          </p>
        </div>
        <div className="animate-child place-items-center">
          <h1 className="text-white text-5xl font-semibold text-center w-[32rem] ">
            Experience the Benefits of Our Expertise
          </h1>
          <p className="text-white text-[1.25rem] font-sans  text-center pt-8 ">
            That drives impactful gain powerful results
          </p>
        </div>
        <div className="flex justify-around ">
          {cards.map((item, index) => (
            <div
              key={index}
              className="animate-child bg-[#141414] w-[23rem] rounded-3xl py-12 px-2"
            >
              <div className="w-[75%] bg-black place-items-center m-auto py-8 rounded-3xl ">
                {item.logo}
              </div>
              <div className="w-[75%] m-auto ">
                <h2 className="text-white font-medium text-[1.7rem] text-center py-6">
                  {item.title}
                </h2>
                <p className="text-white font-light text-lg text-center w-[90%] m-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="animate-child place-items-center z-0">
          <SeePricing />
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
