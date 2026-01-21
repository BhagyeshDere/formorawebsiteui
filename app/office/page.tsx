"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================= CATEGORIES ================= */
const categories = [
  { title: "Workstations", image: "/images/office/categories/workstation.png" },
  { title: "Performance Seating", image: "/images/office/categories/chair1.jpg" },
  { title: "Storage", image: "/images/office/categories/storage.png" },
  { title: "Tables", image: "/images/office/categories/table.png" },
  { title: "Soft Seating", image: "/images/office/categories/sofa.png" },
];

/* ================= SERIES ================= */
const series = [
  {
    name: "Apex",
    desc: `With its clean lines and modular flexibility, the Apex series is designed for
dynamic and fast-evolving workspaces.

Engineered for scalability, it adapts effortlessly to various layouts while
maintaining a refined professional presence across global office environments.`,
    image: "/images/office/series/apex.png",
  },
  {
    name: "Neo",
    desc: `Neo is designed for modern offices that demand simplicity, efficiency, and value.

Its lightweight construction and minimalist appeal make it ideal for growing
organizations and collaborative work cultures.`,
    image: "/images/office/series/neo.png",
    reverse: true,
  },
  {
    name: "Prime",
    desc: `The Prime series blends timeless design with modern functionality, making it
perfect for executive and corporate environments.

Prime is crafted for businesses seeking elegance, durability, and performance
in equal measure.`,
    image: "/images/office/series/prime.png",
  },
  {
    name: "Bold",
    desc: `Bold is all about making a statement.

Featuring vibrant colors and contemporary forms, this series energizes creative
offices and collaborative environments.`,
    image: "/images/office/series/bold.png",
    reverse: true,
  },
  {
    name: "Horizon",
    desc: `The Horizon series delivers practicality and affordability without compromising
on quality.

Built for large-scale enterprises, it offers standardized modular solutions
for quick installations and operational efficiency.`,
    image: "/images/office/series/horizon.png",
  },
  {
    name: "Fusion",
    desc: `Fusion represents the perfect blend of precision metalworking and refined
wood craftsmanship.

Its premium materials and bold design language create a commanding presence.`,
    image: "/images/office/series/fusion.png",
    reverse: true,
  },
];

export default function OfficePage() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* PAGE INTRO */
      gsap.from("main", {
        opacity: 0,
        scale: 0.96,
        duration: 1.2,
        ease: "power3.out",
      });

      /* SECTION REVEAL */
      gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 120,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });

        /* TEXT ONLY (NO BUTTONS) */
        gsap.from(
          section.querySelectorAll("h1, h2, h3, p"),
          {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
          }
        );

        /* BUTTON ANIMATION (SEPARATE & SAFE) */
        gsap.from(
          section.querySelectorAll("button"),
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          }
        );
      });

      /* CATEGORY CARDS */
      gsap.from(".category-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".category-grid",
          start: "top 80%",
        },
      });

      /* SERIES */
      gsap.utils.toArray<HTMLElement>(".series-text").forEach((el) => {
        gsap.from(el, {
          x: -120,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".series-image").forEach((el) => {
        gsap.from(el, {
          x: 120,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        });
      });

      /* PIONEERS COUNTER */
      gsap.utils.toArray<HTMLElement>(".pioneer-count").forEach((el) => {
        const value = parseInt(el.dataset.value || "0");

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: value,
            duration: 1.4,
            snap: { innerText: 1 },
            ease: "power1.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full overflow-hidden">

      {/* ================= OFFICE HERO ================= */}
      <section className="relative w-full min-h-[80vh] max-h-[900px] overflow-hidden">
        <Image
          src="/images/office/hero1.png"
          alt="Office Furniture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="w-full pl-6 md:pl-16">
            <div className="max-w-xl">
              <h1 className="text-[64px] md:text-[72px] leading-[1.05] font-extrabold uppercase tracking-tight text-neutral-900 mb-6">
                Office <br /> Furniture
              </h1>
              <p className="text-[17px] leading-[1.8] text-neutral-700">
                Premium, ergonomic, and functional furniture crafted for
                modern professional workspaces and evolving business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-36 bg-[#efe7dd]">
        <div className="max-w-7xl mx-auto px-6 text-center category-grid">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-neutral-900">
            Explore By Categories
          </h2>
          <p className="text-neutral-700 mb-24 max-w-xl mx-auto">
            Modular furniture solutions crafted for modern workspaces.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-14">
            {categories.map((cat) => (
              <div key={cat.title} className="group cursor-pointer category-card">
                <div className="bg-white/95 rounded-3xl border border-neutral-200 shadow-sm hover:shadow-2xl transition-all duration-500 h-[300px] flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full p-4">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-[1.15]"
                    />
                  </div>
                </div>
                <p className="mt-8 font-semibold text-lg tracking-wide text-neutral-900">
                  {cat.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ================= SERIES ================= */}
      {series.map((item) => (
        <section key={item.name} className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen isolate">

            {/* IMAGE (background layer) */}
            <div
              className={`series-image relative h-screen w-full pointer-events-none ${
                item.reverse ? "md:order-1" : "md:order-2"
              }`}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT (foreground layer) */}
            <div
              className={`series-text relative z-20 flex flex-col justify-center px-10 md:px-24 bg-[#f6f6f4] ${
                item.reverse ? "md:order-2" : "md:order-1"
              }`}
            >
              <h2 className="text-5xl font-semibold mb-8">
                {item.name}
              </h2>

              <p className="text-lg text-neutral-700 mb-10 whitespace-pre-line">
                {item.desc}
              </p>

              {/* ✅ NOW ALWAYS VISIBLE */}
              <button className="inline-flex w-fit px-10 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition">
                View More
              </button>
            </div>

          </div>
        </section>
      ))}
   

     {/* ================= PIONEERS ================= */}
<section className="py-36 text-center pioneers-section">
  <h2 className="text-5xl mb-6 pioneer-title">Pioneers</h2>

  <p className="text-xl mb-6 pioneer-subtitle">
    BEST IN CLASS FURNITURE MANUFACTURING
  </p>

  <p className="max-w-4xl mx-auto mb-8 pioneer-desc">
    Equipped with world-class machinery, advanced automation, and skilled
    craftsmanship, Formora delivers precision-engineered furniture solutions
    tailored for global markets.
  </p>

  <p className="max-w-4xl mx-auto mb-20 text-neutral-600 pioneer-desc">
    From concept development to large-scale execution, our manufacturing
    ecosystem is built to ensure consistency, durability, and design excellence.
    Trusted by architects, businesses, and institutions worldwide, we continue
    to set benchmarks in quality, innovation, and reliability.
  </p>

  <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto pioneer-grid">
    {[
      {
        label: "Established",
        value: 2016,
        desc: "Years of continuous growth, innovation, and manufacturing excellence.",
      },
      {
        label: "Deliveries",
        value: 45000,
        desc: "Successful deliveries across commercial, corporate, and institutional spaces.",
      },
      {
        label: "New Products",
        value: 130,
        desc: "Innovative designs developed to meet evolving global workspace needs.",
      },
    ].map((item) => (
      <div
        key={item.label}
        className="border p-12 pioneer-card bg-white"
      >
        <h3
          className="text-4xl font-bold mb-3 pioneer-count"
          data-value={item.value}
        >
          0
        </h3>

        <p className="font-semibold mb-3">{item.label}</p>

        <p className="text-sm text-neutral-600 leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>

    </main>
  );
}
