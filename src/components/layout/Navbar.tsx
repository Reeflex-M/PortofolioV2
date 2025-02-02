import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";

const navItems = [
  { href: "#skills", label: "Mes compétences" },
  { href: "#projects", label: "Mes projets" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/Reeflex-M", icon: FiGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/mathis-floch-873392268/", icon: FiLinkedin, label: "LinkedIn" },
  { href: "/CV.png", icon: HiOutlineDocumentText, label: "CV", download: true },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest < (previous ?? 0) || latest < 50) {
      setHidden(false);
    } else if (latest > (previous ?? 0) && latest > 50) {
      setHidden(true);
    }
  });

  return (
    <motion.header
      className="backdrop-blur-md bg-white fixed w-full top-0 z-50"
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <nav className="max-w-7xl mx-auto flex items-center h-16 px-4 sm:px-6 lg:px-8 relative">
        {/* Navigation gauche */}
        <div className="flex-1 hidden md:flex items-center justify-end pr-24 space-x-12">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-primary hover:text-accent transition-all duration-300 font-medium text-base"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Logo central */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <a href="#home" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="p-2"
            >
              {/* Logo image */}
              <img
                src="/logo-m.png"
                alt="Logo"
                className="w-14 h-14"
              />
            </motion.div>
          </a>
        </div>

        {/* Navigation droite - Réseaux sociaux */}
        <div className="flex-1 hidden md:flex items-center justify-start pl-24 space-x-8">
          {socialLinks.map(({ href, icon: Icon, label, download }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              download={download}
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-primary hover:text-accent transition-colors duration-200 flex items-center gap-1"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
              {label === "CV" && <span className="font-medium">{label}</span>}
            </motion.a>
          ))}
        </div>

        {/* Menu mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-white hover:bg-black group"
        >
          <svg
            className="w-6 h-6 text-black group-hover:text-white"
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
      </nav>

      <div className="h-[1px] w-[85%] mx-auto bg-accent opacity-60"></div>

      {/* Menu mobile déroulant */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="block px-3 py-2 text-primary hover:text-accent transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              ))}
              <div className="flex justify-center space-x-6 pt-4 border-t">
                {socialLinks.map(({ href, icon: Icon, label, download }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={download}
                    className="text-primary hover:text-accent transition-colors duration-200 flex items-center gap-1"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                    {label === "CV" && <span className="font-medium">{label}</span>}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
