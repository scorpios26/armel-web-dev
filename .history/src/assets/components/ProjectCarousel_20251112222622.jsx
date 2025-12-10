import { useState, useEffect, useRef } from "react";

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      title: "Digital Prism",
      desc: "Where geometry meets art in a stunning display of light and form.",
      img: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&fit=crop&q=80",
      gradient: "from-violet-500/40 to-purple-500/40",
    },
    {
      title: "Tech Haven",
      desc: "Immerse yourself in the cutting edge of technology and innovation.",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80",
      gradient: "from-fuchsia-500/40 to-pink-500/40",
    },
    {
      title: "Neural Dreams",
      desc: "AI-generated masterpieces that blur the line between human and machine creativity.",
      img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80",
      gradient: "from-pink-500/40 to-rose-500/40",
    },
  ];

  const autoTimer = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-advance slides
  useEffect(() => {
    autoTimer.current = setInterval(nextSlide, 5000);
    return () => clearInterval(autoTimer.current);
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrent(index);
    clearInterval(autoTimer.current);
  };

  return (
    <section id="projects" className="relative w-full max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-25 font-orbitron">
            Projects
        </h2>
    <div className="relative w-full max-w-6xl mx-auto carousel-container">
      {/* Background */}
        <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
        </div>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden z-20">
        <div
          className="progress-bar absolute top-0 left-0 h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="nav-button absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white z-20"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="nav-button absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white z-20"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slides */}
      <div className="carousel-track relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        {slides.map((slide, index) => {
          let stateClass = "hidden";
          if (index === current) stateClass = "active";
          else if (index === (current + 1) % slides.length) stateClass = "next";
          else if (index === (current - 1 + slides.length) % slides.length) stateClass = "prev";

          return (
            <div
              key={index}
              className={`carousel-item ${stateClass} absolute top-0 left-0 w-full h-full`}
            >
              <div className="w-full h-full p-4 sm:p-8">
                <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} mix-blend-overlay`} />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div>
                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
                      {slide.title}
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl font-orbitron">
                      {slide.desc}
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-8 sm:w-12 h-1 sm:h-1.5 rounded-full transition-colors ${
              index === current ? "bg-white/60" : "bg-white/20 hover:bg-white/40"
            }`}
          ></button>
        ))}
      </div>
    </div>
    </section>
  );
}
