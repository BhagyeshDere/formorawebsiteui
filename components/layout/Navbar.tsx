"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const links = [
  { href: "/home", label: "Home" },
  { href: "/office", label: "Office" },
  { href: "/white-labeling", label: "White Labeling" },
  { href: "/become-a-dealer", label: "Become a Dealer" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  /* ================= SCROLL AWARE ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= MAGNETIC HOVER ================= */
  useEffect(() => {
    const items = document.querySelectorAll(".nav-item");

    items.forEach((item) => {
      item.addEventListener("mousemove", (e: any) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(item, {
          x: x * 0.15,
          y: y * 0.15,
          duration: 0.3,
          ease: "power3.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        });
      });
    });
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div
        className={`
          mx-auto max-w-7xl px-6
          flex items-center justify-between
          transition-all duration-500
          ${
            scrolled
              ? "h-16 bg-white/85 backdrop-blur-xl shadow-md"
              : "h-20 bg-white/70 backdrop-blur-lg"
          }
          border-b border-black/5
        `}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo/formoralogo.png"
            alt="Formora Logo"
            width={90}
            height={90}
            priority
            className="object-contain"
          />
          <span className="text-[13px] font-semibold tracking-[0.4em] text-black">
            FORMORA
          </span>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-[0.28em]">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  nav-item relative px-4 py-2
                  transition-all duration-300
                  ${
                    isActive
                      ? "text-black"
                      : "text-neutral-600 hover:text-black"
                  }
                `}
              >
                {link.label}

                {/* ACTIVE LINE */}
                <span
                  className={`
                    absolute left-1/2 -bottom-1
                    h-[1.5px] bg-black
                    transition-all duration-300
                    ${
                      isActive
                        ? "w-6 -translate-x-1/2 opacity-100"
                        : "w-0 opacity-0"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
