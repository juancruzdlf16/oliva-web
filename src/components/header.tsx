"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-oliva", label: "Sobre Oliva" },
  { href: "/servicios", label: "Servicios" },
  { href: "/calendario", label: "Disponibilidad" },
  { href: "/contacto", label: "Contacto" },
  { href: "/sumate", label: "Sumate al equipo" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold tracking-tight text-olive-dark md:text-3xl">
              Oliva
            </span>
            <span className="hidden text-sm font-light tracking-widest uppercase text-muted-foreground sm:block">
              Gastronomía
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-olive/5 hover:text-olive-dark"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="ml-2 rounded-lg bg-olive px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-olive-dark hover:shadow-md"
            >
              Pedir propuesta
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-foreground md:hidden"
            aria-label="Abrir menú"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border/50 bg-white md:hidden"
          >
            <nav className="flex flex-col px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-olive/5"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setIsOpen(false)}
                className="mt-3 rounded-lg bg-olive px-5 py-3 text-center text-sm font-semibold text-white shadow-sm"
              >
                Pedir propuesta
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
