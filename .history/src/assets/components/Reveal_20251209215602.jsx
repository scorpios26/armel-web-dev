import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Reveal({
  children,
  animation = "slideUp",
  duration = 0.8,
  delay = 0,
}) {
  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 animate every time it enters the viewport
    threshold: 0.2,     // animate when 20% of it is visible
  });

  // Animation presets
  const variants = {
    slideLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 },
    },
    slideDown: {
      hidden: { opacity: 0, y: -60 },
      visible: { opacity: 1, y: 0 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.85 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants[animation]}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // 👈 RESET when not in view
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
