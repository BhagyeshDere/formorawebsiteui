"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="w-full">

      {/* ================= TOP FOOTER ================= */}
      <div className="bg-[#e6e5e1] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo/formoralogo.png"
                alt="FORMORA Logo"
                width={70}
                height={70}
                className="object-contain"
              />
              <span className="text-xl font-semibold tracking-wide text-neutral-900">
                FORMORA
              </span>
            </div>

            <p className="text-neutral-700 leading-relaxed text-sm max-w-sm">
              FORMORA is an international furniture manufacturing company
              delivering premium residential, office, and white-label furniture.
              Crafted with precision, built for global standards.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-4 text-neutral-900">Quick Links</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/residential">Residential</Link></li>
              <li><Link href="/office">Office Furniture</Link></li>
              <li><Link href="/catalog">Catalogues</Link></li>
              <li><Link href="/facility">Our Facility</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
            </ul>
          </div>

          {/* COLLECTIONS */}
          <div>
            <h3 className="font-semibold mb-4 text-neutral-900">Collections</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>Accent Tables</li>
              <li>Alternate Seating</li>
              <li>Conference Tables</li>
              <li>Dining Chairs</li>
              <li>Lounge Chairs</li>
              <li>Sofas</li>
              <li>Workstations</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4 text-neutral-900">Contact Us</h3>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Phone: +91-XXXXXXXXXX <br />
              Email: info@formora.com <br />
              Mon – Sat: 9am – 6pm
            </p>
          </div>
        </div>
      </div>

      {/* ================= TOGGLE BUTTON ================= */}
      <div className="flex justify-center -mt-6">
        <button
          onClick={() => setOpen(!open)}
          className="bg-white shadow-md rounded-full p-3 hover:scale-105 transition"
        >
          <ChevronDown
            className={`w-5 h-5 text-neutral-800 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* ================= EXPANDABLE FOOTER ================= */}
      <div
        className={`overflow-hidden transition-all duration-500 bg-[#deddd9] ${
          open ? "max-h-[500px] py-16" : "max-h-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-8">
          <FooterColumn title="Furniture" items={["Home Furniture", "Office Furniture"]} />
          <FooterColumn title="Office Furniture" items={["Workstation", "Office Chairs", "Soft Seating"]} />
          <FooterColumn title="White Label" items={["White Label Manufacturing"]} />
          <FooterColumn title="Catalog" items={["Office Mesh Chair", "Apex Workstation", "Bold Storage"]} />
          <FooterColumn title="Our Facility" items={["Manufacturing Unit", "Quality Control"]} />
          <FooterColumn title="Dealership" items={["Dealership Opportunity"]} />
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="bg-[#2f2f2f] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-200 gap-4">

          {/* BRAND LOGO (ADDED – NO LAYOUT CHANGE) */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/formoralogo.png"
              alt="FORMORA Logo"
              width={28}
              height={28}
              className="object-contain"
            />
            <span className="tracking-widest text-xs uppercase">
              Formora
            </span>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4">
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>YouTube</span>
            <span>Email</span>
          </div>

          {/* COPYRIGHT */}
          <p className="text-center">
            © 2026 FORMORA | All rights reserved.
            <span className="mx-2">|</span>
            Terms & Conditions
            <span className="mx-2">|</span>
            Privacy Policy
          </p>
        </div>
      </div>

    </footer>
  );
}

/* ================= HELPER COMPONENT ================= */
function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h4 className="font-semibold mb-4 text-neutral-900">{title}</h4>
      <ul className="space-y-2 text-sm text-neutral-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
