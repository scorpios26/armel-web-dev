import { motion } from "framer-motion";
import reactLogo from "./assets/react.svg";

const logos = [
  { src: reactLogo, alt: "React" },
];

export default function TechCarousel() {
  return (
    <div className="w-full overflow-hidden py-10">
      <motion.div
        className="flex gap-16"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-16 w-16 object-contain opacity-80 hover:opacity-100 transition"
          />
        ))}
      </motion.div>
    </div>
  );
}
