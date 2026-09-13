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
          aria-label="hamburger Toggler"
          className="block md:hidden p-1 -mr-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="relative block h-5 w-5 cursor-pointer">
            <span className="absolute block h-full w-full">
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-white delay-[0] duration-200 ease-in-out ${
                  !isOpen ? "!w-full delay-300" : ""
                }`}
              ></span>
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-white delay-150 duration-200 ease-in-out ${
                  !isOpen ? "delay-400 !w-full" : ""
                }`}
              ></span>
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-white delay-200 duration-200 ease-in-out ${
                  !isOpen ? "!w-full delay-500" : ""
                }`}
              ></span>
            </span>
            <span className="absolute block h-full w-full rotate-45">
              <span
                className={`absolute left-2.5 top-0 block h-0 w-0.5 rounded-sm bg-white delay-300 duration-200 ease-in-out ${
                  isOpen ? "h-full delay-[0]" : ""
                }`}
              ></span>
              <span
                className={`delay-400 absolute left-[1px] top-[9px] block h-0 w-full rounded-sm bg-white duration-200 ease-in-out ${
                  isOpen ? "delay-200 h-0.5" : ""
                }`}
              ></span>
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
