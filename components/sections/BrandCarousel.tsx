"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const clientes = [
  { name: "A Vidraçaria Popular", src: "/clientes/vidracaria-popular.png" },
  { name: "Chaveiro Borba 24 Horas Leblon", src: "/clientes/chaveiro-borba.png" },
  { name: "Chaveiro Copachaves", src: "/clientes/chaveiro-copachaves.png" },
  { name: "Dr. André Domarco", src: "/clientes/dr-andre-domarco.png" },
  { name: "Gambier Calçados", src: "/clientes/gambier-calcados.png" },
  { name: "Museu do Cotidiano", src: "/clientes/museu-do-cotidiano.png" },
  { name: "Tour Dois Irmãos", src: "/clientes/tour-dois-irmaos.png" },
  { name: "Vidraçaria Nova Alencar", src: "/clientes/vidracaria-nova-alencar.png" },
];

export default function BrandCarousel() {
  return (
    <section id="clientes" className="section-padding relative overflow-hidden">
      {/* Textura base */}
      <div className="absolute inset-0 bg-surface/20" />

      {/* Grade pontilhada */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c9a84c 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Luz central dourada */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-gold/10 blur-[100px] pointer-events-none" />

      {/* Luz lateral esquerda */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-72 h-72 rounded-full bg-gold/8 blur-[80px] pointer-events-none" />

      {/* Luz lateral direita */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-72 h-72 rounded-full bg-gold/8 blur-[80px] pointer-events-none" />

      {/* Fade nas bordas do carrossel */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-hbg to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-hbg to-transparent z-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest mb-3 block">
              Quem já confia
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary">
              Empresas que já têm estrutura com a gente.
            </h2>
          </div>
        </ScrollReveal>

        <div className="overflow-hidden py-10">
          <motion.div
            className="flex items-center gap-16"
            style={{ width: "max-content" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            {[...clientes, ...clientes].map((cliente, index) => (
              <div
                key={`${cliente.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-2"
              >
                <Image
                  src={cliente.src}
                  alt={cliente.name}
                  width={340}
                  height={160}
                  className="max-h-40 w-auto object-contain opacity-75 hover:opacity-100 hover:scale-110 transition-all duration-300 ease-out drop-shadow-[0_0_18px_rgba(201,168,76,0.25)]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
