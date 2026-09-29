import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/students", label: "Students" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
];

// NavLink gives us `isActive`, so the current page is highlighted automatically.
const linkClass = ({ isActive }) =>
  [
    "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight",
    isActive
      ? "bg-highlight text-ink"
      : "text-white/80 hover:bg-white/10 hover:text-white",
  ].join(" ");

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-ink">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="font-display text-lg font-bold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          Student<span className="text-highlight">Portal</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-1 sm:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === "/"} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-md px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/30 sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile links */}
      {open && (
        <ul id="mobile-menu" className="space-y-1 px-4 pb-4 sm:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={(state) => `block ${linkClass(state)}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
