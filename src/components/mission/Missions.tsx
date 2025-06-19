"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Like from "../animationIcons/Like";
import People from "../animationIcons/People";
import Brain from "../animationIcons/Brain";
import BookNow from "./BookNow";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Missions = () => {
  const test = useRef(null);
  const btnRef = useRef(null);
  const h1ref = useRef(null);
  const pref = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      test.current,
      {
        y: 50,
        opacity: 0,
        filter: "blur(30px)",
      },
      {
        y: 0,
        duration: 1,
        opacity: 1,
        filter: "blur(0px)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: test.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    if (h1ref.current) {
      const text = new SplitType(h1ref.current, { types: "words" });
      gsap.fromTo(
        text.words,
        { filter: "blur(5px)", opacity: 0 },
        {
          delay: 1,
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: h1ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    if (pref.current) {
      const text = new SplitType(pref.current, { types: "words" });
      gsap.fromTo(
        text.words,
        { filter: "blur(5px)", opacity: 0 },
        {
          delay: 3,
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: h1ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    gsap.fromTo(
      btnRef.current,
      {
        y: 50,
        opacity: 0,
        filter: "blur(30px)",
      },
      {
        y: 0,
        duration: 0.8,
        opacity: 1,
        delay: 2,
        filter: "blur(0px)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: h1ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-[100vh] min-w-full bg-[#050505] text-white/55 text-4xl  pt-24">
      <div className="flex flex-col gap-11">
        <div
          className="bg-gradient-to-b from-[#252525] to-[#0b0b0b] rounded-full p-[1px] w-fit m-auto"
          ref={test}
        >
          <p className="text-[14px] font-400 border-1 border-transparent bg-[#050505] rounded-full py-1.5 px-5 w-fit">
            Our Mission
          </p>
        </div>
        <div className="place-items-center">
          <h1
            className="text-white text-6xl font-semibold text-center w-[64rem] leading-18 "
            ref={h1ref}
          >
            We Drive <span className="text-[#f9882a] ">Businesses</span> <br />{" "}
            To The <span className="text-[#f9882a] ">Forefront</span> Of The
            Industries Through Comprehensive <br /> AI{" "}
            <span className="text-[#f9882a] ">Automation.</span>
          </h1>
          <p
            className="text-white text-[1.25rem] font-sans w-[44rem]  text-center pt-8 "
            ref={pref}
          >
            First impressions matter. That's why our mission is to create clean,
            enduring designs that elevate. First impressions matter. That's why
            our mission.
          </p>
        </div>

        <div className="place-items-center z-0" ref={btnRef}>
          <BookNow />
        </div>
      </div>
    </div>
  );
};

export default Missions;
