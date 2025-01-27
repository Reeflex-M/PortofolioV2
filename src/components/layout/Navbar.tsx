import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const navItems = [
  { href: "#home", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Compétences" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest < previous || latest < 50) {
      setHidden(false);
    } else if (latest > previous && latest > 50) {
      setHidden(true);
    }
  });

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.header
      className="backdrop-blur-md bg-white/80 shadow-lg fixed w-full top-0 z-50"
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex-shrink-0 flex items-center" onClick={handleNavClick}>
          <motion.span
            className="text-2xl font-bold text-primary"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Portfolio
          </motion.span>
        </a>

        <div className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm lg:text-base flex-1 justify-center px-4">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick}
              className="px-3 py-2 font-medium rounded-lg transition-all duration-300 relative text-gray-700 hover:text-primary after:content-[''] after:absolute after:bottom-1 after:left-3 after:right-full hover:after:right-3 after:h-[2px] after:bg-primary after:transition-all after:duration-300"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <motion.a
            href="#contact"
            onClick={handleNavClick}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:block bg-primary text-white px-5 py-2 rounded-full font-medium shadow-md hover:bg-primary/90 transition-all duration-200"
          >
            Me contacter
          </motion.a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 right-0 bg-white shadow-lg border-t md:hidden"
            >
              <div className="flex flex-col py-4 px-4 space-y-2">
                {navItems.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={handleNavClick}
                    className="px-3 py-2 font-medium rounded-lg transition-all duration-300 text-gray-700 hover:text-primary hover:bg-gray-50"
                  >
                    {label}
                  </a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={handleNavClick}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary text-white px-5 py-2 rounded-full font-medium text-center shadow-md hover:bg-primary/90 transition-all duration-200"
                >
                  Me contacter
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

export default Navbar;
