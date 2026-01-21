"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BecomeDealerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ================= PAGE INTRO ================= */
      gsap.from("main", {
        opacity: 0,
        scale: 0.96,
        duration: 1.2,
        ease: "power3.out",
      });

      /* ================= HERO TEXT ================= */
      gsap.from("h1", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from("section:first-of-type p", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
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
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-[80vh] max-h-[900px] overflow-hidden">
        <Image
          src="/images/dealer/hero2.png"
          alt="Become a Dealer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 flex items-center">
          <div className="pl-6 sm:pl-12 md:pl-20 lg:pl-28">
            <div className="max-w-xl">
              <h1 className="text-[56px] md:text-[64px] lg:text-[72px] leading-[1.05] font-extrabold uppercase tracking-tight text-neutral-900 mb-6">
                COLLABORATE. <br />
                GROW. <br />
                SUCCEED.
              </h1>
              <p className="text-[17px] leading-[1.8] text-neutral-700">
                Explore dealership opportunities with Formora International
              </p>
            </div>
          </div>
        </div>
      </section>

{/* ================= WHY CHOOSE US + ELIGIBILITY ================= */}
<section className="py-36 bg-[#f6f6f4]">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-neutral-900">
        Partner With Confidence
      </h2>
      <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
        Everything you need to grow a successful and sustainable dealership.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-16">

      {/* WHY CHOOSE */}
      <div
        className="
          bg-white
          border border-neutral-200
          rounded-2xl
          p-12
          shadow-sm
          hover:shadow-xl
          transition-all duration-500
        "
      >
        <h3 className="text-3xl font-semibold mb-8 text-neutral-900">
          Why Choose Us
        </h3>

        <ul className="space-y-5 text-neutral-700 leading-relaxed">
          {[
            "Scalable dealership opportunities for long-term growth",
            "Design-led portfolio for residential & commercial spaces",
            "Advanced manufacturing ensures consistent quality",
            "Dealer-focused training, marketing & onboarding support",
            "ISO & global compliance-certified products",
          ].map((item) => (
            <li key={item} className="flex items-start gap-4">
              <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#c76a2a]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ELIGIBILITY */}
      <div
        className="
          bg-white
          border border-neutral-200
          rounded-2xl
          p-12
          shadow-sm
          hover:shadow-xl
          transition-all duration-500
        "
      >
        <h3 className="text-3xl font-semibold mb-8 text-neutral-900">
          Dealership Eligibility Criteria
        </h3>

        <ul className="space-y-5 text-neutral-700 leading-relaxed">
          {[
            "Minimum showroom space of 1000 sq. ft.",
            "Strong entrepreneurial mindset",
            "Understanding of local market dynamics",
            "Ability to build long-term partnerships",
            "Commitment to brand representation",
          ].map((item) => (
            <li key={item} className="flex items-start gap-4">
              <span className="mt-1 w-2.5 h-2.5 rounded-full bg-neutral-900" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</section>

{/* ================= DEALERSHIP FORM ================= */}
<section className="py-40 bg-[#efe7dd]">
  {/* 🌳 warm wooden tone */}

  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="mb-20 max-w-3xl">
      <span className="inline-block w-16 h-[2px] bg-[#7a4a2e] mb-6" />
      <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6">
        Submit Your Dealership Request
      </h2>
      <p className="text-lg text-neutral-700 leading-relaxed">
        Partner with FORMORA and represent a globally trusted furniture
        manufacturing brand in your region.
      </p>
    </div>

    {/* FORM CARD */}
    <div
      className="
        bg-white/75 backdrop-blur
        rounded-3xl
        p-14
        max-w-5xl
        shadow-[0_40px_90px_-35px_rgba(0,0,0,0.25)]
      "
    >
      <form className="grid md:grid-cols-2 gap-10">

        {[
          "Full Name",
          "Email Address",
          "Phone Number",
          "Country / Region",
          "Business Name",
        ].map((label) => (
          <input
            key={label}
            placeholder={label}
            className="
              w-full bg-transparent
              border-b border-neutral-400
              px-1 py-3
              text-neutral-900 placeholder-neutral-500
              focus:border-[#7a4a2e]
              focus:outline-none
              transition
            "
          />
        ))}

        {/* SHOWROOM STATUS */}
        <select
          className="
            w-full bg-transparent
            border-b border-neutral-400
            px-1 py-3
            text-neutral-700
            focus:border-[#7a4a2e]
            focus:outline-none
          "
        >
          <option>Showroom / Display Space Status</option>
          <option>Available</option>
          <option>Under Planning</option>
        </select>

        {/* OTHER BUSINESS */}
        <select
          className="
            w-full bg-transparent
            border-b border-neutral-400
            px-1 py-3
            text-neutral-700
            focus:border-[#7a4a2e]
            focus:outline-none
          "
        >
          <option>Do you operate another furniture business?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        {/* REQUIREMENT */}
        <textarea
          rows={4}
          placeholder="Tell us about your market, showroom plans, or expectations"
          className="
            md:col-span-2 bg-transparent
            border-b border-neutral-400
            px-1 py-3
            text-neutral-900 placeholder-neutral-500
            focus:border-[#7a4a2e]
            focus:outline-none resize-none
          "
        />

        {/* CTA */}
        <div className="md:col-span-2 pt-6">
          <button
            type="submit"
            className="
              inline-flex items-center justify-center
              px-14 py-4
              rounded-full
              bg-[#7a4a2e]
              text-white
              text-sm uppercase tracking-widest
              hover:bg-[#5f3823]
              transition
            "
          >
            Apply for Dealership
          </button>
        </div>

      </form>
    </div>

  </div>
</section>


      {/* ================= BRAND CREDIBILITY ================= */}
      <section className="py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          <div>
            <h2 className="text-4xl font-semibold mb-6">
              Precision-Made Furniture.<br />Globally Recognized Quality.
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Formora International is a preferred manufacturing partner for
              scalable furniture solutions across residential and commercial
              sectors. With state-of-the-art facilities and global compliance,
              we deliver durability, design, and performance trusted by
              architects and enterprises worldwide.
            </p>
          </div>

          <div className="relative h-[420px] rounded-xl overflow-hidden">
            <Image
              src="/images/dealer/facility.png"
              alt="Manufacturing Facility"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
<section className="py-36 bg-[#f6f6f4]">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">

    {/* LEFT: TEXT CONTENT */}
    <div className="md:sticky md:top-32">
      <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-neutral-900">
        Frequently Asked Questions
      </h2>

      <p className="text-neutral-700 text-lg leading-relaxed mb-6">
        We understand that entering a dealership partnership is a strategic
        decision. Below are answers to some of the most common questions about
        working with <strong>Formora</strong>.
      </p>

      <p className="text-neutral-600 leading-relaxed">
        As a global furniture manufacturing brand, Formora is committed to
        long-term partnerships, transparent processes, and consistent support
        to help our dealers grow confidently in their respective markets.
      </p>
    </div>

    {/* RIGHT: FAQ LIST */}
    <div className="space-y-6">
      {[
        {
          q: "What kind of support does Formora offer dealers?",
          a: "Formora provides end-to-end dealer support including product training, onboarding assistance, marketing assets, sales enablement tools, and ongoing strategic guidance to ensure long-term success.",
        },
        {
          q: "How long does the dealership approval process take?",
          a: "The approval process typically takes 2–3 weeks after initial evaluation, depending on location, market potential, and documentation review.",
        },
        {
          q: "What showroom size is required to become a dealer?",
          a: "A minimum showroom space of 1000 sq. ft. is required to effectively display our furniture collections and deliver a premium brand experience.",
        },
        {
          q: "How do I apply for a Formora dealership?",
          a: "Simply submit the dealership enquiry form on our website. Our team will review your application and reach out to guide you through the next steps.",
        },
      ].map((faq, i) => (
        <div
          key={i}
          className="
            bg-white
            border border-neutral-200
            rounded-2xl
            overflow-hidden
            shadow-sm
            hover:shadow-lg
            transition-all duration-300
          "
        >
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="
              w-full flex items-center justify-between
              px-8 py-6
              text-left
              font-medium text-neutral-900
            "
          >
            <span className="pr-6">{faq.q}</span>

            <span
              className="
                text-2xl
                font-light
                text-neutral-500
              "
            >
              {openFaq === i ? "–" : "+"}
            </span>
          </button>

          {openFaq === i && (
            <div className="px-8 pb-6 text-neutral-600 leading-relaxed">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>

  </div>
</section>


    </main>
  );
}
