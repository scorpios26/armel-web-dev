import React, { useEffect, useRef } from "react";

const TECHS = ["HTML", "CSS", "JS", "Laravel", "ReactJS"];

export default function TechCarousel() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const inner = scroller.querySelector(".scroller__inner");

    // Duplicate items only once (HMR safe)
    if (inner && inner.children.length === TECHS.length) {
      TECHS.forEach((tech) => {
        const clone = document.createElement("li");
        clone.className =
          "px-4 py-2 rounded-md shadow-md bg-primary-400 hover:scale-110 duration-300 transition-transform";
        clone.textContent = tech;
        clone.setAttribute("aria-hidden", "true");
        inner.appendChild(clone);
      });
    }

    if (!inner) return;

    // Event handlers to toggle paused class
    const onEnter = () => inner.classList.add("paused");
    const onLeave = () => inner.classList.remove("paused");

    // Attach listeners to every li (both originals and duplicates)
    const attachListeners = () => {
      inner.querySelectorAll("li").forEach((li) => {
        li.addEventListener("mouseenter", onEnter);
        li.addEventListener("mouseleave", onLeave);

        // Touch support: pause on touchstart, resume on touchend/cancel
        li.addEventListener("touchstart", onEnter, { passive: true });
        li.addEventListener("touchend", onLeave);
        li.addEventListener("touchcancel", onLeave);
      });
    };

    attachListeners();

    // Re-attach on window resize or mutation (defensive)
    const observer = new MutationObserver(() => attachListeners());
    observer.observe(inner, { childList: true });

    // Cleanup
    return () => {
      observer.disconnect();
      inner.querySelectorAll("li").forEach((li) => {
        li.removeEventListener("mouseenter", onEnter);
        li.removeEventListener("mouseleave", onLeave);
        li.removeEventListener("touchstart", onEnter);
        li.removeEventListener("touchend", onLeave);
        li.removeEventListener("touchcancel", onLeave);
      });
    };
  }, []);

  return (
    <section id="stack" className="py-20 text-white flex flex-col items-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-10 font-orbitron">
        Tech Stack
      </h2>

      <div ref={scrollerRef} className="scroller w-full">
        <ul className="scroller__inner animate-infinite-scroll bg-[#2E186A] px-4 py-2 rounded-lg">
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
