"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================= HERO IMAGES ================= */
const heroImages = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
  "/images/hero/hero4.jpg",
  "/images/hero/hero5.jpg",
  "/images/hero/hero6.jpg",
];

/* ================= PRODUCTS ================= */
const products = [
  { title: "Sofas", image: "/images/products/all/sofas.jpg" },
  { title: "Seating", image: "/images/products/all/seating.jpg" },
  { title: "Side Table", image: "/images/products/all/side-table.jpg" },
  { title: "Lounge Chair", image: "/images/products/all/lounge-chair.jpg" },
  { title: "Soft Seating", image: "/images/products/all/soft-seating.jpg" },
  { title: "Dining Table", image: "/images/products/all/dining-table.jpg" },
  { title: "Dining Chair", image: "/images/products/all/dining-chair.jpg" },
  { title: "Coffee Table", image: "/images/products/all/coffee-table.jpg" },
  { title: "Tables", image: "/images/products/all/tables.jpg" },
  { title: "Console", image: "/images/products/all/console.jpg" },
  { title: "Storages", image: "/images/products/all/storage.jpg" },
  { title: "Workstation", image: "/images/products/all/workstation.jpg" },
];

/* ================= ANIMATED NUMBER ================= */
function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const obj = { val: 0 };

    gsap.to(obj, {
      val: value,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.innerText = Math.floor(obj.val).toString();
        }
      },
    });
  }, [value]);

  return <span ref={ref}>0</span>;
}

export default function IntroPage() {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  /* ================= HERO SLIDER ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  /* ================= PRODUCT AUTO SLIDER ================= */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      slider.scrollBy({ left: 360, behavior: "smooth" });

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  /* ================= FULL PAGE INTRO ================= */
  useEffect(() => {
    gsap.from("main", {
      opacity: 0,
      scale: 0.96,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  /* ================= SECTION REVEAL ================= */
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 120,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      });
    });
  }, []);

  

  /* ================= IMAGE REVEAL + PARALLAX ================= */
  useEffect(() => {
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
  }, []);

  return (
    <main className="w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={img} alt="Formora Hero" fill className="object-cover" />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-6xl md:text-7xl font-extrabold tracking-widest">
              FORMORA
            </h1>
            <p className="mt-6 text-white/80 text-lg tracking-wide">
              International Furniture Manufacturing
            </p>
          </div>
        </div>
      </section>

{/* ================= BRAND TRANSFORMATION ================= */}
<section className="py-40 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-28 items-center">

    {/* TEXT CONTENT */}
    <div>
      <span className="block w-16 h-[2px] bg-[#c76a2a] mb-10" />

      <h2 className="text-4xl md:text-5xl font-semibold mb-10 text-neutral-900 leading-tight">
        Sustaining Our <br /> Transformation
      </h2>

      <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
        Transformation at Formora is not a milestone — it is an ongoing
        commitment to progress. We continuously evolve our design thinking,
        manufacturing capabilities, and global outlook to stay aligned with
        the changing expectations of modern work and living environments.
      </p>

      <p className="text-neutral-600 mb-6 leading-relaxed max-w-lg">
        Guided by innovation and powered by skilled craftsmanship, our
        transformation journey focuses on refining every detail — from
        material selection and engineering precision to scalable production
        and sustainable practices.
      </p>

      <p className="text-neutral-600 mb-14 leading-relaxed max-w-lg">
        By embracing agility, creativity, and global collaboration, Formora
        delivers furniture solutions that are adaptable, future-ready, and
        designed to perform across diverse international markets.
      </p>

      <button
        className="
          px-12 py-4 rounded-full
          bg-[#7a1e1e] text-white text-sm font-medium tracking-wide
          hover:bg-[#641818]
          transition
        "
      >
        Our Story
      </button>
    </div>

    {/* LARGE IMAGE */}
    <div className="relative h-[560px] w-full">
      <Image
        src="/images/brand/transformation.png"
        alt="Formora Transformation"
        fill
        priority
        className="object-contain"
      />
    </div>

  </div>
</section>

{/* ================= ALL PRODUCTS AUTO SLIDER ================= */}
<section className="py-36 bg-[#f3efe9] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-24">
      <span className="inline-block w-14 h-[2px] bg-[#c76a2a] mb-6" />
      <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-neutral-900">
        Our Complete Product Range
      </h2>
      <p className="text-neutral-700 max-w-2xl mx-auto text-lg">
        A curated portfolio of furniture crafted for modern global spaces.
      </p>
    </div>

    {/* SLIDER */}
    <div ref={sliderRef} className="flex gap-20 overflow-hidden">

      {products.map((product) => (
        <div key={product.title} className="min-w-[360px] flex-shrink-0">

          {/* VISUAL STAGE */}
          <div className="relative h-[300px] flex items-center justify-center">

            <Image
              src={product.image}
              alt={product.title}
              fill
              className="
                object-contain
                max-h-[240px]
                transition-transform duration-700
                hover:scale-[1.04]
              "
            />

            {/* GROUND SHADOW */}
            <div
              className="
                absolute bottom-8 left-1/2 -translate-x-1/2
                w-[55%] h-3
                bg-black/15 blur-lg rounded-full
              "
            />
          </div>

          {/* TITLE */}
          <h3 className="mt-8 text-center text-[15.5px] font-medium tracking-wide text-neutral-900">
            {product.title}
          </h3>

        </div>
      ))}

    </div>
  </div>
</section>


{/* ================= BLOGS ================= */}
<section className="py-36 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-neutral-900">
        Our Blogs
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
        Discover new angles on essential topics and keep up with the most
        recent findings and developments in the furniture sector.
      </p>
    </div>

    {/* BLOG GRID */}
    <div className="grid md:grid-cols-3 gap-12">

      {[
        {
          title: "Top Indian Homes Furniture Trends in 2026",
          desc:
            "Furniture plays a key role in shaping the atmosphere of your home. The right furniture balances comfort, functionality, and aesthetics.",
          image: "/images/blogs/blog1.png",
        },
        {
          title: "Trendy Furniture You Must Have in 2026",
          desc:
            "The way furniture trends are evolving reflects modern lifestyles, hybrid spaces, and design-led thinking.",
          image: "/images/blogs/blog2.png",
        },
        {
          title: "Furniture for New Home: A Newlywed’s Guide",
          desc:
            "Moving into a new home is an exciting milestone. Thoughtful furniture choices help build comfort and character.",
          image: "/images/blogs/blog3.png",
        },
      ].map((blog) => (
        <div
          key={blog.title}
          className="
            bg-white rounded-2xl overflow-hidden
            border border-black/10
            hover:shadow-2xl transition-all duration-500
          "
        >
          {/* IMAGE */}
          <div className="relative h-[320px]">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="p-8 flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-4 text-neutral-900 leading-snug">
              {blog.title}
            </h3>

            <p className="text-neutral-600 leading-relaxed mb-8">
              {blog.desc}
            </p>

            <button
              className="
                mt-auto w-max
                px-6 py-3 rounded-full
                bg-black text-white text-sm font-medium
                hover:bg-neutral-800 transition
              "
            >
              READ MORE →
            </button>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>



{/* ================= GLOBAL STATS ================= */}
<section className="py-36 bg-[#f6f6f4]">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-24">
      <span className="inline-block w-14 h-[2px] bg-[#c76a2a] mb-6" />
      <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-neutral-900">
        Trusted Worldwide
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        Our global footprint reflects years of craftsmanship, reliability,
        and long-term partnerships across industries.
      </p>
    </div>

    {/* STATS */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">

      {[
        { value: 10, suffix: "+", label: "Years of Manufacturing Excellence" },
        { value: 25, suffix: "+", label: "Countries Served Globally" },
        { value: 500, suffix: "+", label: "Furniture Designs Developed" },
        { value: 1000, suffix: "+", label: "Commercial & Residential Projects" },
      ].map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-2xl py-14 px-6
                     shadow-sm hover:shadow-md
                     transition-all duration-300"
        >
          <h3 className="text-5xl font-bold mb-4 text-neutral-900">
            <AnimatedNumber value={stat.value} />
            {stat.suffix}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {stat.label}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>


      
     {/* ================= MANUFACTURING PROCESS ================= */}
<section className="py-36 bg-white">

  {/* HEADER */}
  <div className="max-w-5xl mx-auto px-6 text-center mb-32 section-header">
    <span className="inline-block w-14 h-[2px] bg-[#c76a2a] mb-6" />
    <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-neutral-900">
      From Concept to Completion
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed">
      A streamlined manufacturing ecosystem designed to deliver precision,
      consistency, and global-quality furniture at scale.
    </p>
  </div>

  {/* ================= BLOCK 1 ================= */}
  <div className="grid grid-cols-1 md:grid-cols-2 items-center">

    {/* TEXT */}
    <div className="px-10 md:px-24 py-24 process-text">
      <h3 className="text-3xl font-semibold mb-6 text-neutral-900">
        Design & Engineering
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Our process begins with research-driven design, user insights, and
        advanced engineering. Using cutting-edge CAD tools and prototyping,
        ideas are transformed into scalable, production-ready solutions.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Every design balances aesthetics, ergonomics, durability, and global
        manufacturability.
      </p>
    </div>

    {/* IMAGE */}
    <div className="relative h-[520px] w-full process-image">
      <Image
        src="/images/process/design2.jpg"
        alt="Design & Engineering"
        fill
        className="object-cover"
      />
    </div>
  </div>

  {/* ================= BLOCK 2 ================= */}
  <div className="grid grid-cols-1 md:grid-cols-2 items-center">

    {/* IMAGE */}
    <div className="relative h-[520px] w-full order-2 md:order-1 process-image">
      <Image
        src="/images/process/manufacturing2.jpg"
        alt="Precision Manufacturing"
        fill
        className="object-cover"
      />
    </div>

    {/* TEXT */}
    <div className="px-10 md:px-24 py-24 order-1 md:order-2 process-text">
      <h3 className="text-3xl font-semibold mb-6 text-neutral-900">
        Precision Manufacturing
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Formora operates state-of-the-art manufacturing facilities equipped with
        CNC machinery, automation systems, and skilled craftsmanship.
      </p>
      <p className="text-gray-600 leading-relaxed">
        This ensures accuracy, repeatability, and premium finishes across
        large-scale production runs.
      </p>
    </div>
  </div>

  {/* ================= BLOCK 3 ================= */}
  <div className="grid grid-cols-1 md:grid-cols-2 items-center">

    {/* TEXT */}
    <div className="px-10 md:px-24 py-24 process-text">
      <h3 className="text-3xl font-semibold mb-6 text-neutral-900">
        Quality Assurance & Global Delivery
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Every product undergoes rigorous quality inspections covering structure,
        finish, performance, and packaging to meet international standards.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Our global logistics network ensures reliable and timely delivery to
        partners worldwide.
      </p>
    </div>

    {/* IMAGE */}
    <div className="relative h-[520px] w-full process-image">
      <Image
        src="/images/process/delivery.jpg"
        alt="Quality & Global Delivery"
        fill
        className="object-cover"
      />
    </div>
  </div>

</section>



      
      {/* ================= FINAL CTA ================= */}
<section className="py-28 bg-[#5b3a2e] text-center">
  <h2 className="text-white text-4xl font-semibold mb-6">
    Let’s Build Timeless Spaces Together
  </h2>

  <p className="text-white/80 mb-10 text-lg">
    Partner with Formora for global furniture manufacturing excellence.
  </p>

  <div className="flex justify-center gap-6">
    {/* PRIMARY CTA */}
    <button
      className="
        px-10 py-3
        bg-white text-[#5b3a2e]
        rounded-full
        font-medium
        transition
        hover:bg-neutral-100
      "
    >
      Become a Dealer
    </button>

    {/* SECONDARY CTA */}
    <button
      className="
        px-10 py-3
        border border-white/80
        text-white
        rounded-full
        font-medium
        transition
        hover:bg-white hover:text-[#5b3a2e]
      "
    >
      Contact Us
    </button>
  </div>
</section>


    </main>
  );
}
