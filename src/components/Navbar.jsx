import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-2xl" : "py-8 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
          <a href="#home" className="text-xl font-black tracking-tighter uppercase group flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary-gold shadow-glow-gold" />
            <span className="text-white transition-colors duration-300">
              {personalInfo.name.split(' ')[0]}<span className="text-primary-lavender">{personalInfo.name.split(' ')[1]}</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-8">
            <div className="hidden md:block">
              <a href="#contact" className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all text-white">
                Let's Talk
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative z-[110] p-2 focus:outline-none"
            >
              <div className="w-8 h-6 flex flex-col justify-between items-end">
                <span className={`h-[2px] bg-white transition-all duration-500 ${menuOpen ? "w-8 rotate-45 translate-y-[11px]" : "w-8"}`} />
                <span className={`h-[2px] bg-white transition-all duration-500 ${menuOpen ? "opacity-0" : "w-5"}`} />
                <span className={`h-[2px] bg-white transition-all duration-500 ${menuOpen ? "w-8 -rotate-45 -translate-y-[11px]" : "w-6"}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/98 backdrop-blur-3xl z-[90] transition-all duration-700 md:hidden ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-16">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`text-5xl font-black uppercase tracking-tight text-white hover:text-primary-lavender transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className={`px-12 py-6 bg-primary-gold text-black rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-glow-gold transition-all duration-700 delay-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Start a Project
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
