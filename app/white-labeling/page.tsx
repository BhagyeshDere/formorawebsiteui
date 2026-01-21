"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhiteLabelingPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ================= PAGE INTRO ================= */
      gsap.from("main", {
        opacity: 0,
        scale: 0.96,
        duration: 1.2,
        ease: "power3.out",
      });

      /* ================= SECTION REVEAL ================= */
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
      });

      /* ================= IMAGE REVEAL + PARALLAX ================= */
      gsap.utils.toArray<HTMLElement>("img").forEach((img) => {
        gsap.from(img, {
          scale: 1.12,
          opacity: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
          },
        });

        gsap.to(img, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      /* ================= PRODUCTION POWER COUNT-UP ================= */
      gsap.utils.toArray<HTMLElement>(".production-count").forEach((el) => {
        const raw = el.dataset.value || "0";
        const value = parseInt(raw.replace(/[^0-9]/g, ""));
        const suffix = raw.replace(/[0-9]/g, "");

        const counter = { val: 0 };

        gsap.to(counter, {
          val: value,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.innerText =
              Math.floor(counter.val).toLocaleString() + suffix;
          },
        });
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full overflow-hidden bg-white">

      {/* ================= WHITE LABEL HERO ================= */}
      <section className="relative w-full min-h-[80vh] max-h-[900px] overflow-hidden">
        <Image
          src="/images/white-label/hero.jpg"
          alt="White Label Furniture"
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
                White <br /> Labeling
              </h1>
              <p className="text-[17px] leading-[1.8] text-neutral-700">
                Your brand, our craftsmanship. Seamlessly expand your product
                portfolio with precision-engineered furniture built to global
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS WHITE LABEL ================= */}
      <section className="py-36 bg-[#f6f6f4]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            What is White Label Furniture Solutions
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg mb-8">
            A smarter way to scale your furniture brand.
          </p>
          <p className="max-w-4xl mx-auto text-neutral-700 text-lg mb-6">
            White label furniture solutions allow brands and retailers to offer
            premium furniture collections under their own name—without managing
            manufacturing operations.
          </p>
          <p className="max-w-4xl mx-auto text-neutral-700 text-lg">
            Formora handles design engineering, manufacturing, quality control,
            and delivery, enabling you to expand faster with consistent quality
            and global standards.
          </p>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-28">
            What Makes Our White Label Stand Out
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-28">
            {[
              ["Premium Crafted Furniture", "/images/white-label/icons/premium.jpg"],
              ["Competitive Cost Structures", "/images/white-label/icons/cost.jpg"],
              ["Guaranteed Fast Delivery", "/images/white-label/icons/delivery1.jpg"],
              ["Tailored Furniture Solutions", "/images/white-label/icons/tailored.jpg"],
              ["Effortless Volume Expansion", "/images/white-label/icons/expansion.jpg"],
            ].map(([title, icon]) => (
              <div key={title} className="group flex flex-col items-center">
                <div className="relative w-36 h-36 mb-10">
                  <Image src={icon} alt={title} fill className="object-contain" />
                </div>
                <span className="block w-12 h-[2px] bg-[#c76a2a] mb-6" />
                <p className="font-medium text-neutral-900 text-center">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUCT OFFERINGS ================= */}
      <section className="py-36 bg-[#ede7df]">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-24 text-neutral-900">
          Product Offerings
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-7xl mx-auto px-6">
          {[
            { title: "Workstation", src: "/images/white-label/products/workstation.png" },
            { title: "Storage", src: "/images/white-label/products/storage.png" },
            { title: "Tables", src: "/images/white-label/products/table.png" },
            { title: "Pouffe", src: "/images/white-label/products/pouffe.png" },
            { title: "Sofa", src: "/images/white-label/products/sofa.png" },
            { title: "Accent Chair", src: "/images/white-label/products/chair1.jpg" },
            { title: "Coffee Table", src: "/images/white-label/products/coffee-table.jpg" },
            { title: "Console", src: "/images/white-label/products/console.jpg" },
          ].map((item) => (
            <div key={item.title} className="group text-center">
              <div className="relative h-64 bg-white rounded-2xl mb-8 flex items-center justify-center">
                <div className="relative w-full h-full p-6">
                  <Image src={item.src} alt={item.title} fill className="object-contain" />
                </div>
              </div>
              <p className="text-[17px] font-medium tracking-wide text-neutral-900">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRODUCTION POWER ================= */}
      <section className="py-32 bg-white text-center">
        <h2 className="text-4xl font-semibold mb-20">
          Your Production Powerhouse
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 max-w-6xl mx-auto">
          {[
            ["19,977+", "Timely Deliveries"],
            ["150+", "Exceptional Designs"],
            ["3 Acre", "Expansive Facility"],
            ["200+", "Skilled Experts"],
          ].map(([num, label]) => (
            <div key={label}>
              <h3
                className="text-5xl font-bold mb-4 production-count"
                data-value={num}
              >
                0
              </h3>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
<section className="py-36 bg-[#f6f6f4]">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

    {/* IMAGE */}
    <div className="relative h-[500px] rounded-xl overflow-hidden shadow-sm">
      <Image
        src="/images/white-label/process1.png"
        alt="Manufacturing"
        fill
        className="object-cover"
      />
    </div>

    {/* CONTENT */}
    <div>
      <h2 className="text-4xl md:text-5xl font-semibold mb-8">
        How Our White Label Manufacturing Works
      </h2>

      <p className="text-neutral-700 leading-relaxed mb-6 text-lg">
        From design consultation and material sourcing to precision manufacturing
        and quality control, we manage the entire process while keeping you informed
        at every stage.
      </p>

      <p className="text-neutral-700 leading-relaxed text-lg">
        Our scalable production capabilities ensure consistent quality,
        competitive pricing, and reliable delivery for global brands.
      </p>
    </div>

  </div>
</section>
{/* ================= BLOGS ================= */}
<section className="py-36 bg-[#e6e5e1]">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-neutral-900">
      Our Blogs
    </h2>
    <p className="text-neutral-700 mb-20 max-w-xl mx-auto">
      Insights, trends, and inspirations from the world of furniture design and manufacturing.
    </p>

    {/* Blog Grid */}
    <div className="grid md:grid-cols-3 gap-12">

      {/* BLOG 1 */}
      <article className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-lg transition">
        <div className="relative h-72 overflow-hidden">
          <Image
            src="/images/blogs/blog1.png"
            alt="Top Indian Homes Furniture Trends in 2026"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6 text-left">
          <p className="text-xs uppercase tracking-wide text-neutral-400 mb-2">
            Trends
          </p>
          <h3 className="font-semibold text-lg mb-3 text-neutral-900">
            Top Indian Homes Furniture Trends in 2026
          </h3>
          <p className="text-sm text-neutral-700 mb-4">
            Explore emerging furniture styles, materials, and layouts shaping modern Indian homes.
          </p>
          <p className="text-xs text-neutral-500">
            January 8, 2026
          </p>
        </div>
      </article>

      {/* BLOG 2 */}
      <article className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-lg transition">
        <div className="relative h-72 overflow-hidden">
          <Image
            src="/images/blogs/blog2.png"
            alt="Trendy Furniture You Must Have in 2026"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6 text-left">
          <p className="text-xs uppercase tracking-wide text-neutral-400 mb-2">
            Inspiration
          </p>
          <h3 className="font-semibold text-lg mb-3 text-neutral-900">
            Trendy Furniture You Must Have in 2026
          </h3>
          <p className="text-sm text-neutral-700 mb-4">
            A curated list of must-have furniture pieces redefining comfort and aesthetics.
          </p>
          <p className="text-xs text-neutral-500">
            December 22, 2025
          </p>
        </div>
      </article>

      {/* BLOG 3 */}
      <article className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-lg transition">
        <div className="relative h-72 overflow-hidden">
          <Image
            src="/images/blogs/blog3.png"
            alt="Furniture for New Home"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-6 text-left">
          <p className="text-xs uppercase tracking-wide text-neutral-400 mb-2">
            Guide
          </p>
          <h3 className="font-semibold text-lg mb-3 text-neutral-900">
            Furniture for New Home: A Complete Setup Guide
          </h3>
          <p className="text-sm text-neutral-700 mb-4">
            Step-by-step guidance to furnishing your new home with style and functionality.
          </p>
          <p className="text-xs text-neutral-500">
            November 18, 2025
          </p>
        </div>
      </article>

    </div>

  </div>
</section>

      {/* ================= CONTACT FORM ================= */}
<section className="py-36 bg-[#f6f6f4]">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-semibold mb-6">
        Begin Your White Label Partnership Today
      </h2>
      <p className="text-neutral-600 max-w-2xl mx-auto">
        Share your requirements and our team will get in touch to help you
        launch your branded furniture line.
      </p>
    </div>

    {/* Form Card */}
    <div className="bg-white rounded-2xl shadow-sm p-10 md:p-14">
      <form className="grid md:grid-cols-2 gap-8">

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border border-neutral-300 rounded-lg px-4 py-3
                       focus:outline-none focus:border-black transition"
            placeholder="Enter your full name"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border border-neutral-300 rounded-lg px-4 py-3
                       focus:outline-none focus:border-black transition"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full border border-neutral-300 rounded-lg px-4 py-3
                       focus:outline-none focus:border-black transition"
            placeholder="Enter your email address"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Company
          </label>
          <input
            className="w-full border border-neutral-300 rounded-lg px-4 py-3
                       focus:outline-none focus:border-black transition"
            placeholder="Company name (optional)"
          />
        </div>

        {/* Requirement */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">
            Requirement
          </label>
          <textarea
            rows={5}
            className="w-full border border-neutral-300 rounded-lg px-4 py-3
                       focus:outline-none focus:border-black transition resize-none"
            placeholder="Tell us about your product requirements, quantities, or timelines"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-center mt-6">
          <button
            type="submit"
            className="inline-flex items-center justify-center
                       px-14 py-4 bg-black text-white rounded-full
                       text-sm font-medium tracking-wide
                       hover:bg-neutral-800 transition"
          >
            SUBMIT ENQUIRY
          </button>
        </div>

      </form>
    </div>

  </div>
</section>


    </main>
  );
}
