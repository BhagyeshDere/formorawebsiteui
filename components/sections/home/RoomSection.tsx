"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RoomSectionProps = {
  title: string;
  image: string;
  description: string;
  reverse?: boolean;
};

export default function RoomSection({
  title,
  image,
  description,
  reverse = false,
}: RoomSectionProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current || !textRef.current) return;

    // TEXT FADE UP
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      }
    );

    // IMAGE SOFT SCALE
    gsap.fromTo(
      imageRef.current,
      { scale: 1.08 },
      {
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
        
        {/* IMAGE */}
        <div
          ref={imageRef}
          className={`relative w-full h-[520px] ${
            reverse ? "lg:order-2" : ""
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* CONTENT */}
        <div
          className={`flex items-center ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          <div ref={textRef} className="max-w-xl px-16">
            
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              {title}
            </h2>

            <p className="text-gray-600 leading-7 tracking-wide max-w-xl">
              {description}
            </p>

            <button className="mt-10 bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-900 transition">
              View More
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
