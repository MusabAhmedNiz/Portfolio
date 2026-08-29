import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-[#1e293b]/50 backdrop-blur-xl bg-[#60a5fa]/[0.02]">
      <nav className="flex justify-between items-center max-w-[800px] mx-auto px-5 md:px-0 py-6 w-full">
        <Link
          href="/"
          className="font-rubik text-headline-lg text-on-surface font-semibold tracking-tight hover:opacity-90 transition-opacity"
        >
          DevName
        </Link>
        <ul className="flex items-center gap-8">
          <li>
            <a
              href="#projects"
              className="font-inter text-nav-link text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="font-inter text-nav-link text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-nav-link text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-nav-link text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              X
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
