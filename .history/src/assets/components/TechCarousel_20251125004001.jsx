import React, { useEffect, useRef } from "react";

export default function TechCarousel() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerItems = Array.from(scrollerInner.children);

    // Duplicate items for seamless infinite scroll
    scrollerItems.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(clone);
    });
  }, []);

  const techStack = [
    { name: "HTML", color: "bg-orange-500" },
    { name: "CSS", color: "bg-blue-500" },
    { name: "JavaScript", color: "bg-yellow-400" },
    { name: "Laravel", color: "bg-red-600" },
    { name: "ReactJS", color: "bg-cyan-400" },
    { name: "MySQL", color: "bg-indigo-500" },
    { name: "WordPress", color: "bg-blue-900" },
  ];

  return (
    <section id="stack" className="py-20 text-white flex flex-col items-center bg-slate-900 dark:bg-[#2E186A]">
      <h2 className="text-3xl font-bold text-center mb-10">Tech Stack</h2>
      <div ref={scrollerRef} className="scroller overflow-hidden w-full flex justify-center">
        <ul className="scroller__inner flex w-max animate-infinite-scroll space-x-4">
          {techStack.map((tech) => (
            <li
              key={tech.name}
              className={`${tech.color} px-6 py-3 rounded-lg shadow-md text-sm font-semibold text-white transition-transform duration-300 hover:scale-110`}
            >
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
