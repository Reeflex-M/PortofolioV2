const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-left">
          {/* Contact Info */}
          <a
            href="mailto:mathisfloch29@gmx.fr"
            className="flex items-center text-gray-400 hover:text-accent transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2 text-accent group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            mathisfloch29@gmx.fr
          </a>
          <span className="hidden md:block text-gray-600">•</span>
          <a
            href="tel:0698823626"
            className="flex items-center text-gray-400 hover:text-accent transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2 text-accent group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            06 98 82 36 26
          </a>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          &copy; {currentYear} Mathis Floch. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
