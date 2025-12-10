import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Reveal({
  children,
  animation = "slideUp",
  duration = 0.8,
  delay = 0,
  bounce = 0,        // 👈 added bounce
  type = "tween",    // 👈 tween | spring
  stiffness = 120,   // 👈 spring config
  damping = 20,
}) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

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
      animate={inView ? "visible" : "hidden"}
      transition={{
        type,
        duration,
        delay,
        bounce,
        stiffness,
        damping,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
