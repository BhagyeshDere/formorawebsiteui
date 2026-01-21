"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

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

      /* ================= CONTACT CONTENT ================= */
      gsap.utils.toArray(".contact-animate").forEach((el: any, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          delay: i * 0.08,
          ease: "power3.out",
        });
      });

      /* ================= MAP ================= */
      gsap.from(".map-animate", {
        scrollTrigger: {
          trigger: ".map-animate",
          start: "top 85%",
        },
        opacity: 0,
        scale: 1.05,
        duration: 1.2,
        ease: "power3.out",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-white overflow-hidden">

      {/* ================= CONTACT HERO ================= */}
      <section className="relative w-full min-h-[80vh] max-h-[900px] overflow-hidden">

        <Image
          src="/images/contact/contact1-hero.jpg"
          alt="Contact FORMORA"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="w-full pl-6 md:pl-20 lg:pl-28">
            <div className="max-w-xl">

              <span className="block w-16 h-[2px] bg-[#7a4a2e] mb-8" />

              <h1 className="hero-title text-[64px] md:text-[72px] leading-[1.05] font-extrabold uppercase tracking-tight text-neutral-900 mb-6">
                Contact
              </h1>

              <p className="hero-desc text-[17px] leading-[1.9] text-neutral-700">
                Let’s connect across borders to build precision-crafted
                furniture solutions for global markets.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-28 max-w-3xl">
            <span className="inline-block w-14 h-[2px] bg-[#c49a6c] mb-6" />
            <h2 className="contact-animate text-5xl font-extrabold tracking-tight text-neutral-900">
              Get in Touch
            </h2>
            <p className="contact-animate mt-6 text-lg text-neutral-600 leading-relaxed">
              FORMORA operates globally with design, manufacturing, and
              distribution partners across key international regions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

            {/* LOCATIONS */}
            <div className="space-y-16">

              {[
                {
                  title: "Global Headquarters — Asia",
                  text: "FORMORA International\nIndia (Asia–Pacific Operations)",
                },
                {
                  title: "European Design Studio",
                  text: "Milan, Italy\nProduct Design & Development",
                },
                {
                  title: "Middle East Operations",
                  text: "Dubai, UAE\nCommercial & Hospitality Projects",
                },
                {
                  title: "North America",
                  text: "New York, USA\nSales & Strategic Partnerships",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="contact-animate border-l-2 border-[#c49a6c] pl-8"
                >
                  <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed whitespace-pre-line text-[15.5px]">
                    {item.text}
                  </p>
                </div>
              ))}

              <div className="contact-animate border-l-2 border-[#c49a6c] pl-8">
                <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
                  Contact Information
                </h3>
                <p className="text-neutral-700 leading-relaxed text-[15.5px]">
                  Email: contact@formora.com <br />
                  Phone: +91 9XXXXXXXXX
                </p>
              </div>

            </div>

            {/* FORM */}
            <form className="contact-animate bg-[#f4efe9] p-14 rounded-3xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">

              <div className="space-y-10">
                {[
                  "Full Name",
                  "Email Address",
                  "Phone Number",
                  "Country / Region",
                ].map((placeholder) => (
                  <input
                    key={placeholder}
                    placeholder={placeholder}
                    className="w-full bg-transparent border-b border-neutral-400 px-1 py-3 text-neutral-900 placeholder-neutral-500 focus:border-[#7a4a2e] focus:outline-none"
                  />
                ))}

                <textarea
                  rows={4}
                  placeholder="Tell us about your project or inquiry"
                  className="w-full bg-transparent border-b border-neutral-400 px-1 py-3 text-neutral-900 placeholder-neutral-500 focus:border-[#7a4a2e] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-14 inline-flex items-center justify-center rounded-full bg-[#7a4a2e] px-14 py-4 text-sm uppercase tracking-widest text-white hover:bg-[#5f3823] transition"
              >
                Submit Inquiry
              </button>

            </form>
          </div>
        </div>
      </section>


{/* ================= GLOBAL MAP ================= */}
<section className="w-full py-28 bg-[#f7f3ee]">

  {/* HEADER */}
  <div className="max-w-7xl mx-auto px-6 mb-20">
    <span className="inline-block w-14 h-[2px] bg-[#c49a6c] mb-6" />
    <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6">
      Our Global Presence
    </h2>
    <p className="text-neutral-600 max-w-2xl text-lg leading-relaxed">
      FORMORA operates across multiple international regions, supporting
      manufacturing, sourcing, and long-term partnerships worldwide.
    </p>
  </div>

  {/* MAP FULL WIDTH */}
  <div className="relative w-full h-[620px]">

    {/* GOOGLE MAP – CLEAR & VISIBLE */}
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467321.504110509!2d9.08518632489593!3d45.4654214039958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6c1b2e4f04b%3A0xddd4f7c43b036fc!2sMilan%2C%20Metropolitan%20City%20of%20Milan%2C%20Italy!5e0!3m2!1sen!2sus!4v1700000000000"
  className="absolute inset-0 w-full h-full"
  loading="lazy"
/>


    {/* FLOATING INFO CARD */}
    <div
      className="
        absolute bottom-8 left-8
        bg-white
        rounded-2xl
        px-7 py-6
        max-w-sm
        shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]
      "
    >
      <h4 className="text-neutral-900 font-semibold tracking-wide text-lg">
        FORMORA Global Manufacturing
      </h4>
      <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
        Asia–Pacific Operations <br />
        Europe • Middle East • North America
      </p>
    </div>

  </div>
</section>



    </main>
  );
}
