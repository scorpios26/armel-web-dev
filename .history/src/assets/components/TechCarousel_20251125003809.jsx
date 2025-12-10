import React from "react";

const techStack = ["HTML", "CSS", "JS", "Laravel", "ReactJS"];

export default function TechCarousel() {
  return (
    <section id="stack" className="py-20 bg-black text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-10">Stack</h2>
      <div className="scroller overflow-hidden w-full flex justify-center">
        <ul className="scroller__inner flex w-max animate-infinite-scroll space-x-4">
          {/* First set */}
          {techStack.map((tech, idx) => (
            <li
              key={`first-${idx}`}
              className="px-4 py-2 bg-primary-400 rounded-md shadow-md transition-transform duration-300 hover:scale-110"
            >
              {tech}
            </li>
          ))}
          {/* Duplicate set */}
          {techStack.map((tech, idx) => (
            <li
              key={`second-${idx}`}
              className="px-4 py-2 bg-primary-400 rounded-md shadow-md transition-transform duration-300 hover:scale-110"
              aria-hidden="true"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
