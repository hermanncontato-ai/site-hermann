"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Resultados", href: "#depoimentos" },
  { label: "Processo", href: "#processo" },
  { label: "IA", href: "#ia" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-hbg/95 backdrop-blur-xl border-b border-hborder/50 py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" aria-label="Hermann Mallard Marketing Digital, voltar ao início">
            <Image
              src="/logo-hermann.png"
              alt="Hermann Mallard Marketing de Resultado"
              width={320}
              height={80}
              className="h-20 w-auto object-contain block"
              style={{ mixBlendMode: "screen" }}
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-secondary hover:text-primary text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Button href="#contato" size="sm">
              Falar com Hermann
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-secondary hover:text-primary transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-surface/98 backdrop-blur-xl border-b border-hborder"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-1" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-secondary hover:text-primary text-base font-medium py-3 px-2 rounded-lg hover:bg-card transition-all"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    const id = link.href.replace("#", "");
                    setTimeout(() => {
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-hborder mt-2">
                <Button href="#contato" className="w-full justify-center">
                  Falar com Hermann
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
