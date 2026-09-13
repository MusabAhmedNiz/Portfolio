"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 -mr-2 text-on-surface-variant hover:text-on-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#1e293b]/50 bg-[#0a0a0f]/95 backdrop-blur-2xl px-5 py-5 shadow-2xl">
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
