import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Force dark mode on document head
    document.documentElement.classList.add('dark');

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 bg-app-bg/80 backdrop-blur-xl border-b border-app-border shadow-sm" : "py-6 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <a href="#home" className="text-xl font-black tracking-tighter uppercase group flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary-gold" />
          <span className="text-app-text transition-colors duration-300">
            {personalInfo.name.split(' ')[0]}<span className="text-primary-lavender">{personalInfo.name.split(' ')[1]}</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-app-subtext hover:text-app-text transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <a href="#contact" className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all text-app-text">
              Let's Talk
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 focus:outline-none"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-[2px] bg-app-text transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-[9px]" : "w-6"}`} />
              <span className={`h-[2px] bg-app-text transition-all duration-300 ${menuOpen ? "opacity-0" : "w-4"}`} />
              <span className={`h-[2px] bg-app-text transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-[9px]" : "w-5"}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-app-bg/95 backdrop-blur-2xl z-40 transition-all duration-500 md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-black uppercase tracking-widest text-app-text hover:text-primary-lavender transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="px-10 py-4 bg-primary-gold text-black rounded-full text-sm font-black uppercase tracking-widest"
          >
            Start a Project
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
