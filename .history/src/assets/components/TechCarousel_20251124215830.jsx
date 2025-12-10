import React from "react";

const logos = [
  { src: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000", alt: "Transistor" },
  { src: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000", alt: "Reform" },
  { src: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000", alt: "Tuple" },
  { src: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000", alt: "SavvyCal" },
  { src: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000", alt: "Statamic" },
  { src: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000", alt: "Laravel" },
];

export default function TechCarousel() {
  // Duplicate logos for infinite effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-black dark:bg-[#2E186A] text-white dark:text-gray-100 pt-8 pb-4">
      <h2 className="text-center text-2xl mb-2 font-bold leading-8">
        Our Clients
      </h2>
      <p className="text-center text-lg font-extralight leading-8 mb-6">
        We are trusted by the world’s most innovative teams
      </p>

      <div className="relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="animate-slide-left group-hover:animation-pause inline-block w-max">
          {duplicatedLogos.map((logo, idx) => (
            <img
              key={idx}
              className="mx-4 inline h-16 object-contain"
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
