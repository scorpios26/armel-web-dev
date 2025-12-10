import React, { useEffect, useRef } from "react";

const TECHS = ["HTML", "CSS", "JS", "Laravel", "ReactJS"];

export default function TechCarousel() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const inner = scroller.querySelector(".scroller__inner");

    // Prevent double-duplicating
    if (inner.children.length === TECHS.length) {
      TECHS.forEach((tech) => {
        const clone = document.createElement("li");
        clone.className =
          "px-4 py-2 rounded-md shadow-md bg-primary-400 hover:scale-110 duration-300 transition-transform";
        clone.textContent = tech;
        clone.setAttribute("aria-hidden", true);
        inner.appendChild(clone);
      });
    }
  }, []);

  return (
    <section id="stack" className="py-20 text-white flex flex-col items-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-10 font-orbitron">
        Tech Stack
      </h2>

      <div ref={scrollerRef} className="scroller w-full">
        <ul className="scroller__inner bg-[#2E186A] px-4 py-2 rounded-lg">
          {TECHS.map((tech) => (
            <li
              key={tech}
              className="px-4 py-2 rounded-md shadow-md bg-primary-400 hover:scale-110 duration-300 transition-transform"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
