import React, { useEffect, useRef } from "react";

export default function TechCarousel() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.setAttribute("data-animated", "true");

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <section id="stack" className="py-20 S text-white flex flex-col items-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-10 font-orbitron">Tech Stack</h2>
      <div ref={scrollerRef} className="scroller overflow-hidden w-full flex justify-center">
        <ul className="scroller__inner flex w-max space-x-4 bg-[#2E186A]">
  {["HTML", "CSS", "JS", "Laravel", "ReactJS"].map((tech) => (
    <li
      key={`first-${tech}`}
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
