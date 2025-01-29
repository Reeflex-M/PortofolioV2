import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollArrow = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center w-full pointer-events-none">
      <motion.div 
        className="mb-12 flex flex-col items-center gap-3 select-none"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="text-secondary font-medium tracking-wide text-lg text-center">
          En savoir plus
        </span>
        <motion.div
          animate={{ 
            y: [0, 4, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        >
          <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M7 0V22M7 22L13 16M7 22L1 16" 
              stroke="#178582" 
              strokeWidth="1.5" 
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollArrow;
