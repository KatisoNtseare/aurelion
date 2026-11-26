
"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Collection", href: "/collection" },
  { label: "Engineering", href: "/engineering" },
  { label: "Our Story", href: "/our-story" },
  { label: "Experience", href: "/experience" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link href="/" className="brand">
          AURELION<span>®</span>
        </Link>

        <nav className="desktop-nav">
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/collection" className="nav-cta">
          Discover the collection
          <ArrowUpRight size={14} />
        </Link>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile navigation overlay */}
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        {links.map((link, index) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
