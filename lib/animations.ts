import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeUp = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
      },
    }
  );
};

export const imageReveal = (element: HTMLElement | null) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { scale: 1.08 },
    {
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
      },
    }
  );
};
