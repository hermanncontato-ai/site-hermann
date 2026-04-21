"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp, Zap, Users } from "lucide-react";
import Button from "@/components/ui/Button";

const stats = [
  { icon: TrendingUp, value: "+15 anos", label: "em Marketing de Resultado" },
  { icon: Users, value: "Negócios locais", label: "em todo o Brasil" },
  { icon: Zap, value: "< 1 min", label: "resposta com IA" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity   = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Apresentação"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(200,147,42,0.13), transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 70%, rgba(59,130,246,0.04), transparent 60%)",
        }}
      />

      {/* Animated ambient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,147,42,0.06), transparent 70%)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.05), transparent 70%)" }}
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        aria-hidden
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-hbg to-transparent z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center"
        style={{ y: contentY, opacity }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-surface border border-hborder rounded-full px-4 py-2 text-sm text-secondary mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse-slow" aria-hidden />
          Marketing de Resultado para negócios locais
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-bold text-primary mb-6 leading-[1.04]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          A estrutura que transforma presença digital em{" "}
          <span className="text-gradient">clientes reais</span>{" "}
          e crescimento com previsibilidade.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg sm:text-xl text-secondary leading-relaxed mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
        >
          Hermann Mallard combina posicionamento estratégico, funis de conversão e
          automação com IA para atrair, qualificar e fechar mais clientes para o
          seu negócio local, com método, dados e resultado previsível.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.52 }}
        >
          <Button href="#contato" size="lg">
            Quero uma estrutura que gera resultado
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button href="#estrutura" variant="secondary" size="lg">
            Ver como funciona
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-surface/60 border border-hborder/60 backdrop-blur-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.7 + i * 0.1 }}
            >
              <stat.icon className="w-4 h-4 text-gold flex-shrink-0" aria-hidden />
              <div className="text-left">
                <span className="font-heading font-bold text-primary text-sm leading-none block">
                  {stat.value}
                </span>
                <span className="text-secondary text-xs">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
        aria-hidden
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 h-8 rounded-full border border-hborder/80 flex items-start justify-center pt-1.5">
          <div className="w-0.5 h-1.5 rounded-full bg-gold/50" />
        </div>
      </motion.div>
    </section>
  );
}
