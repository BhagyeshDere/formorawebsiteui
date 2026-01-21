"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] max-h-[900px] overflow-hidden">

      {/* FULL IMAGE */}
      <Image
        src="/images/herosofa1.png"
        alt="Formora International Furniture"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/10" />

      {/* TEXT – TOUCHING LEFT */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full pl-6 md:pl-12">
          {/* ↑ change pl-6 to pl-4 if you want even closer */}

          <div ref={textRef} className="max-w-xl text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-black mb-6">
              Crafted for <br /> Modern Living
            </h1>

            <p className="text-lg leading-relaxed text-neutral-700">
              FORMORA is an international furniture manufacturer delivering
              precision-crafted residential, office, and white-label furniture
              designed to meet global standards of quality and design.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
