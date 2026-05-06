"use client";

import { useState } from "react";
import Link from "next/link";

export default function HomepageNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => {
    setMenuOpen((v) => !v);
    if (typeof document !== "undefined") {
      document.body.style.overflow = menuOpen ? "" : "hidden";
    }
  };

  const close = () => {
    setMenuOpen(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-background flex flex-col justify-center items-center transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          className="absolute top-8 right-8 text-white"
          onClick={toggle}
          aria-label="Close menu"
        >
          <span className="material-symbols-outlined text-4xl">close</span>
        </button>
        <div className="flex flex-col gap-10 text-center">
          {[
            { label: "About", href: "/team" },
            { label: "What We Do", href: "/advisory" },
            { label: "Sectors", href: "/#sectors" },
            { label: "Articles", href: "/blog" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={close}
              className="font-headline text-3xl font-bold text-white uppercase tracking-widest hover:text-primary-container transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-transparent border-none">
        <div className="px-8 py-8 max-w-screen-2xl mx-auto flex justify-between items-center md:grid md:grid-cols-3 md:items-center">
          {/* Logo */}
          <div className="flex justify-start">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter font-headline uppercase text-white"
            >
              JENTA
            </Link>
          </div>

          {/* Hamburger (mobile only) */}
          <div className="flex md:hidden justify-center flex-1">
            <button
              className="text-white flex items-center justify-center"
              onClick={toggle}
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-4xl">menu</span>
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-center gap-12">
            {[
              { label: "About", href: "/team" },
              { label: "What We Do", href: "/advisory" },
              { label: "Sectors", href: "/#sectors" },
              { label: "Articles", href: "/blog" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="hover:text-primary-container transition-colors duration-300 font-headline tracking-widest text-xs uppercase font-bold text-white"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-end">
            <Link
              href="#contact"
              className="bg-primary-container text-on-primary-container px-4 py-2 text-[10px] md:px-8 md:py-3 font-headline font-bold md:text-xs tracking-widest uppercase hover:brightness-110 transition-all duration-300 whitespace-nowrap"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
