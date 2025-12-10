import { motion } from "framer-motion";
import reactLogo from "../assets/react.svg";
import wordpressLogo from "../assets/wordpress.svg";
import mysqlLogo from "../assets/mysql.svg";
import phpLogo from "../assets/php.svg";
import laravelLogo from "../assets/laravel.svg";
import vueLogo from "../assets/vue.svg";

const logos = [
  { src: reactLogo, alt: "React" },
  { src: wordpressLogo, alt: "WordPress" },
  { src: mysqlLogo, alt: "MySQL" },
  { src: phpLogo, alt: "PHP" },
  { src: laravelLogo, alt: "Laravel" },
  { src: vueLogo, alt: "Vue" },
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
