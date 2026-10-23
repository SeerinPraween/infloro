
"use client";

import { useState } from "react";

const links = [
  ["Features", "#journey"],
  ["Solutions", "#audiences"],
  ["Marketplace", "#channels"],
  ["Pricing", "#cta"],
  ["Resources", "#faq"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav-row">
        {/* Infloro Logo */}
        <a href="/" className="nav-logo" aria-label="Infloro Home">
          {!logoError && (
            <img
              src="/LOGO2.jpeg"
              alt="Infloro Logo"
              width={48}
              height={48}
              onError={() => setLogoError(true)}
              style={{
                width: "48px",
                height: "48px",
                objectFit: "contain",
                display: "block",
              }}
            />
          )}

          {/* Fallback if image cannot load */}
          {logoError && (
            <span className="logo-fallback">infloro</span>
          )}
        </a>

        {/* Navigation Links */}
        <nav
          className={`nav-links ${open ? "is-open" : ""}`}
          aria-label="Primary"
        >
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            href="#"
            className="nav-login"
            onClick={() => setOpen(false)}
          >
            Log in
          </a>
        </nav>

        {/* Desktop CTA */}
        <a href="#cta" className="btn btn-dark nav-cta">
          Get started
        </a>

        {/* Mobile Menu */}
        <button
          type="button"
          className="burger"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((previous) => !previous)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
