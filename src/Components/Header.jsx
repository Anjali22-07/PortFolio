import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-full relative z-50">
      <div className="w-full flex justify-between items-center px-6 py-4 md:px-12 md:mt-2">

        {/* Logo / Name */}
        <div className="text-2xl md:text-3xl font-serif font-bold">
          {/* You can put your logo/name here later */}
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden md:flex items-center gap-8 text-lg lg:text-xl font-bold">

          <a
            href="#about"
            className="hover:text-orange-200 transition-colors duration-200"
          >
            About me
          </a>

          <a
            href="#skills"
            className="hover:text-orange-200 transition-colors duration-200"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-orange-200 transition-colors duration-200"
          >
            Projects
          </a>

          <a
            href="#contactMe"
            className="hover:text-orange-200 transition-colors duration-200"
          >
            Contact me
          </a>

          <a
            href="Anjali_Singh_Java_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-yellow-700 rounded shadow-xl hover:bg-yellow-600 transition-colors duration-200"
          >
            Resume
          </a>

        </nav>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-yellow-700 text-3xl focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <nav
          className="
            md:hidden
            absolute
            top-full
            left-0
            w-full
            bg-[#0d2915]
            border-t
            border-yellow-700
            shadow-xl
            px-6
            py-6
          "
        >
          <div className="flex flex-col items-center gap-6 text-lg font-bold">

            <a
              href="#about"
              onClick={closeMenu}
              className="hover:text-orange-200 transition-colors duration-200"
            >
              About me
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="hover:text-orange-200 transition-colors duration-200"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="hover:text-orange-200 transition-colors duration-200"
            >
              Projects
            </a>

            <a
              href="#contactMe"
              onClick={closeMenu}
              className="hover:text-orange-200 transition-colors duration-200"
            >
              Contact me
            </a>

            <a
              href="/Anjali_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                px-5
                py-2
                bg-yellow-700
                rounded
                shadow-xl
                hover:bg-yellow-600
                transition-colors
                duration-200
              "
            >
              Resume
            </a>

          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;