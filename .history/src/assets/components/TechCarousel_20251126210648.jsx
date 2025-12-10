import React, { useEffect, useRef } from "react";

const TECHS = ["HTML", "CSS", "JS", "Laravel", "ReactJS"];

export default function TechCarousel() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const inner = scroller.querySelector(".scroller__inner");

    // duplicate items only once
    if (inner.children.length === TECHS.length) {
      TECHS.forEach((tech) => {
        const dup = document.createElement("li");
        dup.className =
          "px-4 py-2 rounded-md shadow-md transition-transform duration-300 hover:scale-110 bg-primary-400";
        dup.textContent = tech;
        dup.setAttribute("aria-hidden", "true");
        inner.appendChild(dup);
      });
    }
  }, []);

  return (
    <section id="stack" className="py-20 text-white flex flex-col items-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-10 font-orbitron">
        Tech Stack
      </h2>

      <div ref={scrollerRef} className="scroller overflow-hidden w-full">
        <ul className="scroller__inner flex w-max gap-4 animate-infinite-scroll bg-[#2E186A]">
          {TECHS.map((tech) => (
            <li
              key={tech}
              className="px-4 py-2 rounded-md shadow-md transition-transform duration-300 hover:scale-110 bg-primary-400"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
