import React from "react";

const logos = [
  { src: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg", alt: "Transistor" },
  { src: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg", alt: "Reform" },
  { src: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg", alt: "Tuple" },
  { src: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg", alt: "SavvyCal" },
  { src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg", alt: "Statamic" },
  { src: "https://tailwindui.com/plus/img/logos/158x48/laravel-logo-white.svg", alt: "Laravel" },
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
        <div className="animate-slide-left inline-block w-max">
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
