import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Reveal({
  children,
  delay = 0,
  type = "fade" // 👈 choose the animation type
}) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const animations = {
    fade: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.8, delay }
      }
    },

    slideUp: {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay }
      }
    },

    slideDown: {
      hidden: { opacity: 0, y: -40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay }
      }
    },

    slideLeft: {
      hidden: { opacity: 0, x: 40 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay }
      }
    },

    slideRight: {
      hidden: { opacity: 0, x: -40 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay }
      }
    },

    scaleUp: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, delay }
      }
    },

    rotate: {
      hidden: { opacity: 0, rotate: -10 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.8, delay }
      }
    },

    blur: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.8, delay }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={animations[type]}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
