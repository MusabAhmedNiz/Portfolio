"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on resize to desktop screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "Projects", href: "#projects", external: false },
    { label: "Currently", href: "#currently", external: false },
    { label: "GitHub", href: "https://github.com/MusabAhmedNiz", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/musab-nizamani-1167a5261/", external: true },
    { label: "X", href: "https://x.com/MusabAhmedNiz", external: true },
  ];

  return (
    <header className="fixed top-0 w-full z-50 border-b border-[#1e293b]/50 backdrop-blur-xl bg-[#0a0a0f]/85">
      <nav className="flex justify-between items-center max-w-[800px] mx-auto px-5 md:px-0 py-5 w-full">
        <Link
          href="/"
          className="font-rubik text-headline-lg text-on-surface font-semibold tracking-tight hover:opacity-90 transition-opacity"
        >
          MusabNiz
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="font-inter text-nav-link text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button with animated div icon */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 -mr-2 text-on-surface-variant hover:text-on-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg transition-colors flex items-center justify-center"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <div className="w-5 h-4 relative flex flex-col justify-between" aria-hidden="true">
            <div
              className={`w-full h-[1.5px] bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                isOpen ? "translate-y-[7.25px] rotate-45" : "translate-y-0 rotate-0"
              }`}
            />
            <div
              className={`w-full h-[1.5px] bg-current rounded-full transition-all duration-200 ease-in-out ${
                isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <div
              className={`w-full h-[1.5px] bg-current rounded-full transition-all duration-300 ease-in-out origin-center ${
                isOpen ? "-translate-y-[7.25px] -rotate-45" : "translate-y-0 rotate-0"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Dropdown Menu with matching nav glass background */}
      {isOpen && (
        <div className="md:hidden border-t border-[#1e293b]/50 backdrop-blur-xl bg-[#0a0a0f]/85 px-5 py-5 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col gap-4 max-w-[800px] mx-auto">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="font-inter text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 block py-1.5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
