"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ================= HERO ================= */
      gsap.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".hero-desc", {
        y: 40,
        opacity: 0,
        delay: 0.2,
        duration: 1,
        ease: "power3.out",
      });

      /* ================= SECTION TITLES ================= */
      gsap.utils.toArray(".section-title").forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      /* ================= CONTENT BLOCKS ================= */
      gsap.utils.toArray(".animate-block").forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      /* ================= IMAGES ================= */
      gsap.utils.toArray(".animate-image").forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          scale: 1.1,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full bg-white overflow-hidden">

{/* ================= ABOUT HERO ================= */}
<section className="relative w-full min-h-[80vh] max-h-[900px] overflow-hidden">

  <Image
    src="/images/about/about-hero1.png"
    alt="About Formora"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
  />

  <div className="absolute inset-0 bg-black/10" />

  <div className="absolute inset-0 flex items-center">
    <div className="w-full pl-6 md:pl-16 lg:pl-24">

      <div className="max-w-xl">
        <h1 className="hero-title text-[64px] md:text-[72px] leading-[1.05] font-extrabold uppercase tracking-tight text-neutral-900 mb-6">
          About
        </h1>

        <p className="hero-desc text-[17px] leading-[1.8] text-neutral-700">
          Crafting premium furniture solutions for residential, commercial,
          and global spaces with precision, scale, and design excellence.
        </p>
      </div>

    </div>
  </div>

</section>

{/* ================= ABOUT FORMORA ================= */}
<section className="py-36 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

    <div className="animate-image relative h-[460px] rounded-2xl overflow-hidden group">
      <Image
        src="/images/about/facility.png"
        alt="Formora International Manufacturing Facility"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/5" />
    </div>

    <div className="animate-block">
      <p className="text-sm uppercase tracking-widest text-neutral-400 mb-4">
        About the Brand
      </p>

      <h2 className="section-title text-4xl md:text-5xl font-semibold leading-tight mb-8">
        Crafting Furniture for <br className="hidden md:block" />
        Global Living & Workspaces
      </h2>

      <div className="w-16 h-[2px] bg-black mb-8" />

      <p className="text-neutral-700 leading-relaxed mb-6 text-lg">
        Founded with a vision to redefine contemporary furniture, 
        <span className="font-medium"> Formora International </span>
        has evolved into a globally trusted manufacturing partner, 
        delivering precision-engineered furniture solutions that respond 
        to the changing needs of modern lifestyles and work environments.
      </p>

      <p className="text-neutral-700 leading-relaxed text-lg">
        Our expertise spans modular office systems, premium residential furniture, 
        hospitality interiors, and white-label manufacturing. By combining timeless 
        design principles with advanced production capabilities, we create 
        furniture that is scalable, adaptable, and built to endure.
      </p>
    </div>

  </div>
</section>

{/* ================= VISION & MISSION ================= */}
<section className="py-40 bg-[#efe7dd]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="animate-block text-center mb-28">
      <span className="inline-block w-16 h-[2px] bg-[#7a4a2e] mb-6" />
      <h2 className="section-title text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
        Our Vision & Mission
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-neutral-700 leading-relaxed">
        Driven by purpose, guided by design, and built for global impact.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-20">

      <div className="animate-block bg-white/70 backdrop-blur rounded-3xl p-14 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
        <h3 className="text-3xl font-semibold mb-8 text-neutral-900">
          Vision
        </h3>
        <p className="text-neutral-700 leading-relaxed mb-6 text-lg">
          To become a globally recognized furniture manufacturing brand that
          defines modern living through refined design, functional innovation,
          and uncompromising quality.
        </p>

        <p className="text-neutral-600 leading-relaxed">
          We envision FORMORA shaping residential, commercial, and institutional
          environments worldwide by delivering furniture solutions that balance
          aesthetics, performance, and sustainability at scale.
        </p>

      </div>

      <div className="animate-block bg-white/70 backdrop-blur rounded-3xl p-14 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
        <h3 className="text-3xl font-semibold mb-8 text-neutral-900">
          Mission
        </h3>
         <p className="text-neutral-700 leading-relaxed mb-6 text-lg">
          To design and manufacture premium furniture by integrating skilled
          craftsmanship, advanced technology, and responsible material practices
          across every stage of production.
        </p>

        <p className="text-neutral-600 leading-relaxed">
          Our mission is to build long-term global partnerships by delivering
          consistent quality, scalable manufacturing, and design-led solutions
          that empower brands, architects, and enterprises worldwide.
        </p>

      </div>

    </div>
  </div>
</section>

{/* ================= MANUFACTURING VIDEO ================= */}
<section className="relative h-[80vh] w-full overflow-hidden">
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/videos/formora-manufacturing.mp4"
    autoPlay
    muted
    loop
    playsInline
  />
  <div className="absolute inset-0 bg-black/40" />
</section>

{/* ================= WHAT WE DO ================= */}
<section className="py-36 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

    <div className="animate-block">
      <h2 className="section-title text-4xl md:text-5xl font-semibold leading-tight mb-8">
        Designing & Manufacturing <br className="hidden md:block" />
        Furniture at Scale
      </h2>
      <p className="text-neutral-700 leading-relaxed text-lg mb-8">
        At Formora, we specialize in designing and manufacturing furniture 
        solutions that combine functional intelligence, refined aesthetics, 
        and long-term durability. Every product is engineered to meet the 
        evolving demands of global residential, commercial, and institutional spaces.
      </p>

      <ul className="space-y-4 text-neutral-700 text-lg">
        <li>• Modular office furniture & ergonomic workstations</li>
        <li>• Contemporary residential and lifestyle collections</li>
        <li>• Hospitality furniture for hotels, cafés, and F&B spaces</li>
        <li>• Institutional and educational furniture systems</li>
        <li>• White-label and OEM manufacturing solutions</li>
      </ul>

      <p className="text-neutral-700 leading-relaxed text-lg mt-8">
        All products are designed and manufactured in-house, allowing us to 
        maintain uncompromising quality standards while offering flexibility, 
        customization, and scalability for international markets.
      </p>
    </div>

    {/* IMAGE */}
    <div className="relative h-[460px] rounded-2xl overflow-hidden group">
      <Image
        src="/images/about/what-we-do.png"
        alt="Formora Craftsmanship and Manufacturing"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/5" />
    </div>

  </div>
</section>


{/* ================= MANUFACTURING ================= */}
<section className="py-36 bg-[#f6f6f4]">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

    <div className="animate-image relative h-[460px] rounded-2xl overflow-hidden group">
      <Image
        src="/images/about/manufacturing1.png"
        alt="Formora International Manufacturing Facility"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    <div className="animate-block">
      <h2 className="section-title text-4xl md:text-5xl font-semibold leading-tight mb-8">
        Engineering Furniture <br className="hidden md:block" />
        with Precision & Scale
      </h2>
      <p className="text-neutral-700 leading-relaxed text-lg mb-6">
        Our state-of-the-art manufacturing facility brings together wood 
        processing, metal fabrication, upholstery, surface coating, and 
        precision finishing under one integrated roof. This unified approach 
        allows us to maintain strict quality control at every stage of production.
      </p>

      <p className="text-neutral-700 leading-relaxed text-lg">
        Powered by advanced machinery and highly skilled craftsmen, Formora 
        delivers scalable manufacturing solutions with exceptional accuracy, 
        consistency, and reliability, supporting global brands, architects, 
        and project partners across diverse markets.
      </p>

    </div>

  </div>
</section>

    </main>
  );
}
