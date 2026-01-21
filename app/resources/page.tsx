"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ResourcesPage() {

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
      gsap.utils.toArray(".section-title").forEach((title: any) => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      /* ================= CARDS ================= */
      gsap.utils.toArray(".animate-card").forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 80,
          opacity: 0,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full bg-white overflow-hidden">

{/* ================= RESOURCES HERO ================= */}
<section className="relative w-full min-h-[80vh] max-h-[900px] overflow-hidden">

  <Image
    src="/images/resources/resources-hero.png"
    alt="Resources"
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
          Resources
        </h1>

        <p className="hero-desc text-[17px] leading-[1.8] text-neutral-700">
          Comprehensive furniture guides, trends, and insights designed to
          support informed decisions and inspired spaces.
        </p>
      </div>

    </div>
  </div>
</section>

{/* ================= INFOGRAPHICS ================= */}
<section className="py-36 bg-[#f6f6f4]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-24">
      <h2 className="section-title text-4xl md:text-5xl font-semibold mb-6">
        Infographics
      </h2>
      <p className="text-neutral-600 max-w-3xl mx-auto text-lg leading-relaxed">
        Visual insights designed to help architects, workspace planners, and 
        business leaders understand emerging trends, white-label strategies, 
        and the future of modern work environments.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-12">

      {[
        {
          title: "Workplace Furniture Design Trends 2025",
          desc:
            "Explore global workspace trends shaping offices in 2025, from modular systems to sustainable material innovation.",
          img: "/images/resources/info1.png",
        },
        {
          title: "White Label Furniture: A Smart Business Move",
          desc:
            "Understand how white labeling helps brands scale faster, reduce costs, and maintain design consistency.",
          img: "/images/resources/info2.png",
        },
        {
          title: "How White Label Furniture Builds Brand Power",
          desc:
            "Discover how custom manufacturing strengthens brand identity across corporate and commercial interiors.",
          img: "/images/resources/info3.png",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="animate-card group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition"
        >
          <div className="relative h-[420px]">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
            <h3 className="text-white text-2xl font-semibold mb-3 leading-snug">
              {item.title}
            </h3>

            <p className="text-neutral-200 text-sm leading-relaxed mb-6">
              {item.desc}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-300">
                PDF · 3–5 MB
              </span>

              <button className="px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-200 transition">
                Download
              </button>
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

{/* ================= CATALOGUES ================= */}
<section className="py-36 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-24">
      <h2 className="section-title text-4xl md:text-5xl font-semibold mb-6">
        Product Catalogues
      </h2>
      <p className="text-neutral-600 max-w-3xl mx-auto text-lg leading-relaxed">
        Our catalogues present thoughtfully engineered furniture systems, 
        created for modern offices, collaborative environments, and 
        high-performance workspaces across the globe.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-12">

      {[
        {
          series: "APEX Series",
          title: "Apex",
          use: ["Modular Workstations", "Corporate Offices", "Co-working Spaces"],
          desc:
            "Built for workspaces that evolve. Apex balances structural clarity and flexibility, enabling teams to adapt without compromising aesthetics.",
          img: "/images/catalogues/apex.png",
        },
        {
          series: "BOLD Series",
          title: "Bold",
          use: ["Creative Studios", "Leadership Cabins", "Design Firms"],
          desc:
            "Bold is designed for organizations that dare to express identity. Strong forms, confident lines, and adaptable layouts define this series.",
          img: "/images/catalogues/bold.png",
        },
        {
          series: "FUSION Series",
          title: "Fusion",
          use: ["Executive Offices", "Premium Workspaces", "Client Areas"],
          desc:
            "Fusion brings craftsmanship and elegance together, combining refined textures, metal accents, and timeless detailing.",
          img: "/images/catalogues/fusion.png",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="animate-card border border-neutral-200 rounded-2xl p-8 hover:shadow-xl transition flex flex-col"
        >
          <div className="relative h-64 mb-10">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>

          <p className="text-xs uppercase tracking-wide text-neutral-400 mb-2">
            {item.series}
          </p>

          <h4 className="font-semibold text-xl mb-3">
            {item.title}
          </h4>

          <ul className="text-sm text-neutral-600 mb-5 space-y-1">
            {item.use.map((u) => (
              <li key={u}>• {u}</li>
            ))}
          </ul>

          <p className="text-sm text-neutral-600 leading-relaxed mb-10">
            {item.desc}
          </p>

          <div className="mt-auto">
            <button className="px-8 py-3 bg-black text-white rounded-full text-sm hover:bg-neutral-800 transition">
              Download Catalogue
            </button>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

    </main>
  );
}
