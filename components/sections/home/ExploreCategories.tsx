"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { title: "Sofas", img: "/images/categories/sofas.jpg" },
  { title: "Chairs", img: "/images/categories/chair.jpg" },
  { title: "Tables", img: "/images/categories/tables.jpg" },
  { title: "Consoles", img: "/images/categories/consoles.jpg" },
];

export default function ExploreCategories() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="relative py-32 bg-[#f3efe9] overflow-hidden">

      {/* subtle premium gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <h2 className="text-center text-4xl md:text-5xl font-semibold mb-20 text-neutral-900">
          Explore By Categories
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 px-6">
          {categories.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group text-center cursor-pointer"
            >
              {/* IMAGE CONTAINER */}
              <div
                className="
                  relative
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  shadow-sm
                  transition-all duration-500
                  group-hover:shadow-lg
                "
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={420}
                  height={420}
                  className="mx-auto transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* TITLE */}
              <p className="mt-8 font-medium text-[15.5px] tracking-wide text-neutral-900">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
