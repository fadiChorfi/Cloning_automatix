"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; 
import React, { useEffect, useRef } from "react";
import LearnMoreButton from "./LeanMoreButton";
import SplitType from "split-type";
import ServiceScroll from "./ServiceScroll";

gsap.registerPlugin(ScrollTrigger); 

const Header = () => {
  const h1Ref = useRef(null);
  const h3Ref = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (h1Ref.current) {
      const text = new SplitType(h1Ref.current, { types: "words" });

      gsap.fromTo(
        text.words,
        { filter: "blur(5px)", opacity: 0 },
        {
          delay: 1,
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: h1Ref.current, // ✅ Correct scroll trigger
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (h3Ref.current) {
      const text = new SplitType(h3Ref.current, { types: "words" });

      gsap.fromTo(
        text.words,
        { filter: "blur(5px)", opacity: 0 },
        {
          delay: 2.5,
          filter: "blur(0px)",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: h3Ref.current, 
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        {
          opacity: 0,
          y: 30,
          filter: "blur(4px)",
        },
        {
          ease: "back.out",
          delay: 4,
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scrollTrigger: {
            trigger: buttonRef.current, 
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const images = [
    { src: "/image1.jpg", alt: "Image 1" },
    { src: "/image2.jpg", alt: "Image 2" },
    { src: "/image3.jpg", alt: "Image 3" },
    { src: "/image4.jpg", alt: "Image 4" },
    { src: "/image5.jpg", alt: "Image 5" },
    { src: "/image6.jpg", alt: "Image 6" },
  ];

  return (
    <div className="header min-h-[100vh] text-white text-4xl mt-14">
      <div className="w-full">
        <div className="flex-col text-center text-[#fd7100] text-7xl font-medium h-fit">
          <h1 ref={h1Ref}>
            Automation Agency
            <br />
            <span className="text-white py-7">Beyond ✦ Limits.</span>
            <br />
            Amplified With AI.
          </h1>
          <h3
            ref={h3Ref}
            className="text-[1.2rem] font-medium text-white/60 py-7"
          >
            Design services at your fingertips, Pause or cancel anytime.
          </h3>
          <div ref={buttonRef}>
            <LearnMoreButton />
          </div>
        </div>
        <div className="mt-28">
          <ServiceScroll />
        </div>
        
      </div>
    </div>
  );
};

export default Header;
