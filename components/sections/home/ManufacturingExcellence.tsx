"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ManufacturingExcellence() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.children;

    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="bg-[#f6f6f4] py-32">
      <div
        ref={sectionRef}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        {/* EYEBROW */}
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-5">
          Manufacturing Excellence
        </p>

        {/* MAIN HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-10">
          Setting Global Standards in Furniture Manufacturing
        </h2>

        {/* DESCRIPTION */}
        <p className="text-neutral-600 leading-relaxed text-base md:text-lg">
          At FORMORA, we combine advanced manufacturing technology with
          skilled craftsmanship to deliver furniture that meets international
          quality benchmarks. Our integrated production facility supports
          solid wood processing, modular furniture manufacturing, precision
          metalwork, surface finishing, upholstery, and painting — all under one roof.
          This holistic approach ensures consistency, durability, and refined
          aesthetics across every product we create.
        </p>
      </div>
    </section>
  );
}
