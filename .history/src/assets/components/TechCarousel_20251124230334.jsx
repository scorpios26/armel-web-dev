import React, { useEffect, useRef } from "react";

export default function TechCarousel() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion
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
    <section id="stack" className="py-20 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Stack</h2>
      <h1 style="text-align: center">Infinite Scroll Animation</h1>

<div class="scroller" data-speed="fast">
  <ul class="tag-list scroller__inner">
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
    <li>SSG</li>
    <li>webdev</li>
    <li>animation</li>
    <li>UI/UX</li>
  </ul>
</div>

<div class="scroller" data-direction="right" data-speed="slow">
  <div class="scroller__inner">
    <img src="https://i.pravatar.cc/150?img=1" alt="" />
    <img src="https://i.pravatar.cc/150?img=2" alt="" />
    <img src="https://i.pravatar.cc/150?img=3" alt="" />
    <img src="https://i.pravatar.cc/150?img=4" alt="" />
    <img src="https://i.pravatar.cc/150?img=5" alt="" />
    <img src="https://i.pravatar.cc/150?img=6" alt="" />
  </div>
</div>
    </section>
  );
}
