"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote:
      "Há 3 anos o Hermann cuida do marketing digital da Gambier Calçados com qualidade e entrega justa. Trabalho sério, resultados reais e um parceiro que realmente se importa com o nosso objetivo!",
    author: "Gambier Calçados",
    logo: "/clientes/gambier-calcados.png",
  },
  {
    quote:
      "O Hermann cuidou de tudo: organizou o Google Perfil de Empresas das 3 clínicas e assumiu a gestão de tráfego no Google Ads. Hoje temos presença real no Google com resultados concretos. Trabalho sério, organizado e que entrega valor de verdade. Recomendo!",
    author: "Dr. André Domarco",
    logo: "/clientes/dr-andre-domarco.png",
  },
  {
    quote:
      "O Hermann organizou nosso Google Perfil de Empresas e cuida do Google Ads do Chaveiro Borba 24 Horas. Quem precisa de chaveiro no Leblon encontra a gente no Google. Trabalho sério, organizado e que entrega resultado de verdade. Recomendo!",
    author: "Chaveiro Borba 24 Horas",
    logo: "/clientes/chaveiro-borba.png",
  },
  {
    quote:
      "O Hermann destravou nossa conta do Google Ads que estava parada e colocou o tráfego pago da Copachaves pra andar de vento em popa. Quem precisa de chaveiro automotivo em Copacabana encontra a gente no Google. Trabalho sério que descomplica e entrega resultado de verdade. Recomendo!",
    author: "Chaveiro Copachaves",
    logo: "/clientes/chaveiro-copachaves.png",
  },
  {
    quote:
      "O Hermann implementou nossa presença digital sem enrolação. Turistas estrangeiros começaram a nos encontrar no Google e reservar a trilha do Dois Irmãos. Resultados imediatos e trabalho sério que entrega de verdade. Recomendo!",
    author: "Tour Dois Irmãos",
    logo: "/clientes/tour-dois-irmaos.png",
  },
  {
    quote:
      "O Hermann cuida com maestria de toda a comunicação digital do Museu do Cotidiano. Museu reconhecido e nossa presença online nunca esteve tão bem posicionada. Trabalho sério e que entrega resultado. Recomendo!",
    author: "Museu do Cotidiano",
    logo: "/clientes/museu-do-cotidiano.png",
  },
  {
    quote:
      "O Hermann cuida do tráfego pago e do agente de atendimento inteligente da Vidraçaria Nova Alencar. Mais orçamentos chegando, atendimento rápido e clientes que não esperam pra fechar. Trabalho moderno e que entrega resultado de verdade. Recomendo!",
    author: "Vidraçaria Nova Alencar",
    logo: "/clientes/vidracaria-nova-alencar.png",
  },
  {
    quote:
      "São 3 anos com o Hermann cuidando do tráfego pago da Vidraçaria Popular. Mais visibilidade, mais orçamentos chegando e um trabalho consistente que não para de entregar. Trabalho sério e que entrega resultado de verdade. Recomendo!",
    author: "Vidraçaria Popular",
    logo: "/clientes/vidracaria-popular.png",
  },
];

const VISIBLE = 2;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / VISIBLE);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  const visible = testimonials.slice(page * VISIBLE, page * VISIBLE + VISIBLE);

  return (
    <section id="depoimentos" className="section-padding relative">
      <div className="absolute inset-0 bg-surface/35" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest mb-4 block">
              Resultados reais
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-4">
              Quem já tem a{" "}
              <span className="text-gradient">estrutura funcionando.</span>
            </h2>
            <p className="text-secondary text-lg max-w-lg mx-auto">
              Negócios locais que pararam de improvisar e construíram algo que gera resultado de verdade.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid md:grid-cols-2 gap-5"
            >
              {visible.map((t, i) => (
                <figure
                  key={i}
                  className="p-8 rounded-3xl bg-card border border-hborder hover:border-gold/20 transition-all duration-300 flex flex-col"
                >
                  <div className="flex gap-1 mb-5" aria-label="5 estrelas">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-gold text-gold" aria-hidden />
                    ))}
                  </div>

                  <blockquote className="text-primary text-lg leading-relaxed mb-8 flex-1 font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <figcaption className="flex flex-col items-center gap-3 pt-5 border-t border-hborder">
                    <div className="w-20 h-14 flex items-center justify-center overflow-hidden">
                      <Image
                        src={t.logo}
                        alt={t.author}
                        width={80}
                        height={56}
                        className="max-h-14 w-auto object-contain"
                      />
                    </div>
                    <div className="font-semibold text-primary text-sm text-center">{t.author}</div>
                  </figcaption>
                </figure>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              aria-label="Depoimentos anteriores"
              className="w-11 h-11 rounded-full border border-hborder bg-card flex items-center justify-center text-secondary hover:text-primary hover:border-gold/30 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Página ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === page ? "w-6 bg-gold" : "w-2 bg-hborder hover:bg-secondary"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Próximos depoimentos"
              className="w-11 h-11 rounded-full border border-hborder bg-card flex items-center justify-center text-secondary hover:text-primary hover:border-gold/30 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
