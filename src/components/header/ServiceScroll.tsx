"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";

const ServiceScroll = () => {
  const images = [
    { src: "/logo.svg", alt: "Image 1" },
    { src: "/logo1.svg", alt: "Image 2" },
    { src: "/logo.svg", alt: "Image 3" },
    { src: "/logo1.svg", alt: "Image 4" },
    { src: "/logo.svg", alt: "Image 5" },
    { src: "/logo1.svg", alt: "Image 6" },
    { src: "/logo.svg", alt: "Image 7" },
  ];

  const serviceRef = useRef(null);
  const h3Ref = useRef(null);

  useEffect(() => {
    if (serviceRef.current) {
      gsap.fromTo(
        serviceRef.current,
        {
          opacity: 0,
          y: 30,
          filter: "blur(4px)",
        },
        {
          ease: "back.out",
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scrollTrigger: {
            trigger: serviceRef.current,
            start: "bottom 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    if (h3Ref.current) {
      const text = new SplitType(h3Ref.current, { types: "words" });

      gsap.fromTo(
        text.words,
        {
          filter: "blur(5px)",
          opacity: 0,
        },
        {
          delay: 1,
          filter: "blur(0px)",
          opacity: 1,
          duration: 2.5,
          ease: "linear",
          stagger: 0.2,
        },
      );
    }
  }, []);

  return (
    <div className="mt-10" ref={serviceRef}>
      <p
        className="text-[1rem] font-serif tracking-wider mb-6 text-center"
        ref={h3Ref}
      >
        Our services are featured on
      </p>
      <div className="wrapper">
        {images.map((item, index) => (
          <Image
            key={index}
            src={item.src}
            height={160}
            width={160}
            alt={item.alt}
            className={`item item${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceScroll;
