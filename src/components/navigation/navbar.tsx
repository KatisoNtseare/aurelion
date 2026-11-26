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
    <header className="absolute left-0 top-0 z-50 w-full border-b border-white/10">
      <div className="mx-auto flex h-[75px] w-full max-w-[1440px] items-center justify-between px-5 sm:h-[88px] sm:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-[25px] tracking-[0.13em] text-[#eae6df]"
        >
          AURELION<span className="ml-1 align-top font-sans text-[9px] text-[#a88b62]">®</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[11px] text-white/80 transition-colors hover:text-[#a88b62]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/collection"
          className="hidden items-center gap-3 border-b border-[#a88b62] pb-2 text-[11px] text-white/80 transition-colors hover:text-[#a88b62] md:flex"
        >
          Discover the collection
          <ArrowUpRight size={14} />
        </Link>

        <button
          type="button"
          className="grid size-10 place-items-center text-white md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`overflow-hidden bg-[#090909] px-5 transition-all duration-500 md:hidden sm:px-8 ${menuOpen ? "max-h-96 border-t border-white/10 py-8 opacity-100" : "max-h-0 border-t border-transparent py-0 opacity-0"}`}
      >
        <div className="flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-2xl text-[#eae6df] transition-colors hover:text-[#a88b62]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
