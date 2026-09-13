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

        {/* <!-- Hamburger Toggle BTN --> */}
        <button
          type="button"
          aria-label="hamburger Toggler"
          aria-expanded={isOpen}
          className="block md:hidden p-2 -mr-2 text-on-surface-variant hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="relative block h-5 w-5 cursor-pointer">
            {/* Layer 1: 3 horizontal bars */}
            <span className="absolute inset-0 block">
              <span
                className={`absolute left-0 top-1 block h-[1px] rounded-full bg-white transition-all duration-200 ease-in-out ${
                  isOpen ? "w-0 delay-[0ms]" : "w-full delay-200"
                }`}
              />
              <span
                className={`absolute left-0 top-[9.5px] block h-[1px] rounded-full bg-white transition-all duration-200 ease-in-out ${
                  isOpen ? "w-0 delay-[75ms]" : "w-full delay-300"
                }`}
              />
              <span
                className={`absolute left-0 bottom-1 block h-[1px] rounded-full bg-white transition-all duration-200 ease-in-out ${
                  isOpen ? "w-0 delay-[150ms]" : "w-full delay-[400ms]"
                }`}
              />
            </span>

            {/* Layer 2: Rotated 45deg crossbars forming the X */}
            <span className="absolute inset-0 block rotate-45">
              <span
                className={`absolute left-[9.5px] top-0 block w-[1px] rounded-full bg-white transition-all duration-200 ease-in-out ${
                  isOpen ? "h-full delay-200" : "h-0 delay-[0ms]"
                }`}
              />
              <span
                className={`absolute left-0 top-[9.5px] block h-[1px] rounded-full bg-white transition-all duration-200 ease-in-out ${
                  isOpen ? "w-full delay-200" : "w-0 delay-[0ms]"
                }`}
              />
            </span>
          </span>
        </button>
        {/* <!-- Hamburger Toggle BTN --> */}
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
