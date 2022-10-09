import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ComponentIn = ({ children, distance = 40 }) => {
  const variants = {
    start: {
      opacity: 0,
      y: distance,
      transition: {
        duration: 0.75,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
      },
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <AnimatePresence initial={true}>
      <motion.div
        ref={ref}
        variants={variants}
        animate={isInView ? "in" : "start"}
        initial="start"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ComponentIn;
