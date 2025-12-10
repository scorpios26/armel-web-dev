import React, { useEffect, useRef } from "react";

export default function TechCarousel() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scroller = scrollerRef.current;
    if (!scroller) return;
    const scrollerInner = scroller.querySelector(".scroller__inner");
    if (!scrollerInner) return;

    let isDestroyed = false;

    const setup = () => {
      // remove previously added clones & animation so we can recompute
      scrollerInner.classList.remove("marquee");
      scrollerInner.style.removeProperty("--marquee-duration");
      scrollerInner.style.removeProperty("--marquee-translate");
      scrollerInner.querySelectorAll("[data-clone]").forEach((n) => n.remove());

      const originalItems = Array.from(scrollerInner.children);
      if (originalItems.length === 0) return;

      // Keep duplicating originalItems until content is at least twice the container width
      while (scrollerInner.scrollWidth < scroller.clientWidth * 2) {
        for (const item of originalItems) {
          const clone = item.cloneNode(true);
          clone.setAttribute("aria-hidden", "true");
          clone.setAttribute("data-clone", "true");
          scrollerInner.appendChild(clone);
        }
        // loop will re-check scrollWidth
      }

      // now we have at least 2 sets: compute "single set" width for animation distance
      const singleSetWidth = scrollerInner.scrollWidth / 2;
      const pixelsPerSecond = 80; // adjust speed here
      const duration = Math.max(8, singleSetWidth / pixelsPerSecond); // hold a minimum duration

      scrollerInner.style.setProperty("--marquee-duration", `${duration}s`);
      scrollerInner.style.setProperty("--marquee-translate", `${singleSetWidth}px`);
      scrollerInner.classList.add("marquee");
    };

    setup();

    const onResize = () => {
      if (isDestroyed) return;
      setup();
    };
    window.addEventListener("resize", onResize);

    return () => {
      isDestroyed = true;
      window.removeEventListener("resize", onResize);
      scrollerInner.classList.remove("marquee");
      scrollerInner.querySelectorAll("[data-clone]").forEach((n) => n.remove());
      scrollerInner.style.removeProperty("--marquee-duration");
      scrollerInner.style.removeProperty("--marquee-translate");
    };
  }, []);

  return (
    <section id="stack" className="py-20 S text-white flex flex-col items-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-10 font-orbitron">Tech Stack</h2>
      <div ref={scrollerRef} className="scroller overflow-hidden w-full flex justify-center">
        <ul className="scroller__inner flex w-max space-x-4 bg-[#2E186A]">
          {["HTML", "CSS", "JS", "Laravel", "ReactJS"].map((tech) => (
            <li
              key={tech}
              className="px-4 py-2 bg-primary-400 rounded-md shadow-md transition-transform duration-300 hover:scale-110"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}