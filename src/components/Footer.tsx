export function Footer() {
  const currentYear = new Date(Date.now()).getFullYear();

  return (
    <footer className="bg-[#60a5fa]/[0.02] backdrop-blur-xl border-t border-[#1e293b]/50 w-full transition-opacity duration-200 mt-12">
      <div className="max-w-[800px] mx-auto px-5 md:px-0 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full">
        <p className="font-inter text-body-sm text-on-surface-variant">
          © {currentYear} MusabNiz
        </p>
        <ul className="flex flex-wrap items-center gap-6">
          <li>
            <a
              href="https://github.com/MusabAhmedNiz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:khalilnizamani@gmail.com"
              className="font-inter text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
