// src/components/Navbar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Consultation", to: "/consultation" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-none shadow-electric-blue-xl bg-bg box-border py-6">
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-8 h-navbar mx-auto w-full box-border align-middle">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-baseline gap-2 no-underline"
          onClick={() => setOpen(false)}
        >
          <span className="font-heading text-[24px] md:text-[32px] font-bold text-electric-blue tracing-[2.5px] uppercase">
            AW
          </span>
          <span className="font-body text-xs font-light tracking-[2.5px] italic uppercase text-text pb-1 hover:text-electric-blue transition ease-in-out duration-300">
            Tutoring
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className="font-body text-sm text-text no-underline tracking-wide hover:text-electric-blue transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/start"
              className="font-body text-[13px] tracking-[1px] uppercase no-underline text-dusty-rose border border-dusty-rose px-5 py-2 rounded-sm hover:bg-light/5 hover:text-electric-blue transition-colors"
            >
              FREE Consultation
            </Link>
          </li>
        </ul>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.25 bg-transparent border-none cursor-pointer p-0"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-5 h-[1.5px] bg-light transition-all duration-300 hover:bg-electric-blue origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-light transition-all duration-300 hover:bg-electric-blue ${open ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-light transition-all duration-300 origin-center hover:bg-electric-blue ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
          />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col list-none m-0 p-0 border-t border-border mt-2">
          {links.map(({ label, to }) => (
            <li key={to} className="border-b border-border">
              <Link
                to={to}
                onClick={() => setOpen(false)}
                className="block font-body text-sm text-text no-underline tracking-wide px-8 py-4 hover:text-electric-blue hover:bg-bg-alt transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="p-6">
            <Link
              to="/consultation"
              onClick={() => setOpen(false)}
              className="block font-body text-[14px] tracking-[1px] no-underline text-center text-dusty-rose border border-dusty-rose px-5 py-3 rounded-sm hover:bg-light/5 transition-colors hover:text-electric-blue"
            >
              Book your{" "}
              <span className="font-bold text-electric-blue uppercase">
                free
              </span>{" "}
              consultation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
