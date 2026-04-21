"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

const bullets = [
  "Especialista em crescimento para negócios locais desde 2008",
  "Criador do método Pontobe e da plataforma AuditProAI",
  "Visão estratégica com execução orientada a resultado",
  "Da captação ao fechamento: estrutura integrada e mensurável",
];

export default function Positioning() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.03, 1, 1.03]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  const whatsappText = encodeURIComponent(
    "Olá Hermann, quero saber mais sobre a estrutura de captação e conversão para o meu negócio."
  );

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 65% at 50% 100%, rgba(200,147,42,0.08), transparent 65%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-surface/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Two-column: About Hermann ── */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* LEFT: Text */}
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-[0.18em] mb-6">
                <span className="w-6 h-px bg-gold" aria-hidden />
                Quem é Hermann Mallard
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h3 className="font-heading text-4xl sm:text-5xl xl:text-[3.25rem] font-bold text-primary leading-[1.06] mb-5">
                Não vendo marketing.{" "}
                <span className="text-gradient">Estruturo resultado.</span>
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p className="text-secondary text-lg leading-relaxed mb-6 border-l-2 border-gold/30 pl-4">
                Ajudo negócios locais a saírem da divulgação solta e
                construírem uma estrutura de crescimento real.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.22}>
              <p className="text-secondary text-base leading-relaxed mb-8">
                Meu trabalho não é apenas gerar tráfego ou publicar conteúdo.
                É desenhar um sistema que{" "}
                <span className="text-primary font-medium">
                  atrai, responde, qualifica, converte e acompanha
                </span>{" "}
                o cliente com método, dados e consistência.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.28}>
              <div className="relative mb-8 p-5 rounded-2xl bg-gold/[0.05] border border-gold/15 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold/60 via-gold/20 to-transparent rounded-l-2xl" />
                <p className="text-primary text-base font-medium leading-relaxed italic pl-2">
                  &ldquo;Não é sobre fazer mais. É sobre fazer o que gera
                  resultado, com estrutura e direção.&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-3 pl-2">
                  <span className="text-gold text-xs font-semibold">— Hermann Mallard</span>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-2.5">
              {bullets.map((item, i) => (
                <ScrollReveal key={i} delay={0.32 + i * 0.07}>
                  <div className="flex items-start gap-3 group">
                    <span
                      className="w-5 h-5 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors"
                      aria-hidden
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    </span>
                    <span className="text-secondary text-sm leading-relaxed group-hover:text-primary transition-colors">
                      {item}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* RIGHT: Photo */}
          <ScrollReveal direction="left" delay={0.15} className="order-1 lg:order-2">
            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  opacity: glowOpacity,
                  background:
                    "radial-gradient(ellipse 75% 75% at 55% 45%, rgba(200,147,42,0.14), transparent 70%)",
                }}
                aria-hidden
              />

              <div className="relative w-full max-w-[380px] xl:max-w-[420px]">
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-gold/40 rounded-tl-lg z-20 pointer-events-none" aria-hidden />
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-gold/40 rounded-br-lg z-20 pointer-events-none" aria-hidden />

                <div className="overflow-hidden rounded-3xl border border-gold/15 shadow-2xl shadow-black/60">
                  <motion.div style={{ y: photoY, scale: photoScale }}>
                    <Image
                      src="/hermann-photo.png"
                      alt="Hermann Mallard, especialista em Marketing de Resultado"
                      width={480}
                      height={600}
                      className="w-full object-cover"
                      priority
                    />
                  </motion.div>

                  <div
                    className="absolute bottom-0 left-0 right-0 h-52 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, #0E1018 0%, rgba(14,16,24,0.65) 55%, transparent 100%)",
                    }}
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-white font-heading font-bold text-lg leading-tight">
                          Hermann Mallard
                        </p>
                        <p className="text-gold text-xs font-semibold mt-0.5 tracking-wide">
                          Marketing de Resultado
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse-slow" aria-hidden />
                        <span className="text-gold/70 text-xs">Disponível</span>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -left-5 top-1/3 bg-card border border-hborder rounded-2xl px-5 py-4 shadow-xl shadow-black/50 z-20"
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden
                >
                  <div className="text-gold text-2xl font-heading font-bold leading-none">+15</div>
                  <div className="text-secondary text-xs mt-0.5">anos de experiência</div>
                </motion.div>

                <motion.a
                  href="https://pontobe.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -top-4 -right-4 bg-gold/10 border border-gold/25 rounded-2xl px-4 py-3 shadow-xl shadow-black/50 backdrop-blur-sm hover:bg-gold/20 transition-colors duration-200 group z-20"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="text-gold text-[10px] font-semibold uppercase tracking-widest leading-none">Método</div>
                  <div className="text-primary text-sm font-bold mt-0.5 group-hover:text-gold transition-colors">Pontobe</div>
                  <div className="text-gold/40 text-[10px] mt-0.5">pontobe.com.br ↗</div>
                </motion.a>

                <motion.a
                  href="https://auditpro.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-4 -right-4 bg-blue-500/10 border border-blue-500/25 rounded-2xl px-4 py-3 shadow-xl shadow-black/50 backdrop-blur-sm hover:bg-blue-500/20 transition-colors duration-200 group z-20"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <div className="text-blue-400 text-[10px] font-semibold uppercase tracking-widest leading-none">Plataforma</div>
                  <div className="text-primary text-sm font-bold mt-0.5 group-hover:text-blue-400 transition-colors">AuditProAI</div>
                  <div className="text-blue-400/40 text-[10px] mt-0.5">auditpro.cloud ↗</div>
                </motion.a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Divider ── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-hborder to-transparent mt-20 mb-20" />

        {/* ── Bottom CTA ── */}
        <div className="text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-[0.18em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-slow" aria-hidden />
              Fale diretamente
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-[1.05] max-w-4xl mx-auto">
              Pronto para transformar presença em{" "}
              <span className="text-gradient">resultado real?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-secondary text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
              Vamos conversar sobre o seu negócio, mapear os gargalos e mostrar
              como uma Estrutura de Resultado pode gerar clientes de forma
              previsível e escalável.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Button
              href={`https://wa.me/5521967472172?text=${whatsappText}`}
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com Hermann
              <ArrowRight className="w-5 h-5" />
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={0.38}>
            <p className="text-muted text-sm mt-6">
              Sem compromisso. Uma conversa para entender se faz sentido para você.
            </p>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
