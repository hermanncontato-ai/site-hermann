import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos seu negócio, seu público e os gargalos que estão travando o crescimento. Sem achismo, com análise real.",
  },
  {
    number: "02",
    title: "Estratégia",
    description:
      "Desenhamos a estrutura ideal: quais canais usar, como posicionar, que funis construir, onde a IA entra.",
  },
  {
    number: "03",
    title: "Implementação",
    description:
      "Executamos cada etapa com foco em resultado: tráfego, páginas de conversão, agentes de IA e automações.",
  },
  {
    number: "04",
    title: "Ativação",
    description:
      "Ligamos tudo. Os leads começam a entrar, o agente começa a responder, a estrutura começa a trabalhar.",
  },
  {
    number: "05",
    title: "Otimização Contínua",
    description:
      "Analisamos os dados, ajustamos o que precisa e escalamos o que funciona. Crescimento com controle.",
  },
];

export default function HowItWorks() {
  return (
    <section id="processo" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 100%, rgba(200,147,42,0.05), transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest mb-4 block">
              O processo
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-4">
              Como construímos{" "}
              <span className="text-gradient">sua estrutura de resultado.</span>
            </h2>
            <p className="text-secondary text-lg max-w-lg mx-auto">
              Um processo claro, sem surpresas e com foco em resultado real desde a
              primeira etapa.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps — mobile: vertical list; desktop: zigzag */}
        <div className="max-w-3xl mx-auto space-y-4 lg:space-y-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div
                className={`flex items-start gap-5 p-6 sm:p-7 rounded-2xl bg-card border border-hborder hover:border-gold/20 transition-all duration-300 group ${
                  i % 2 === 0 ? "" : "sm:flex-row-reverse sm:text-right"
                }`}
              >
                <span className="font-heading text-4xl sm:text-5xl font-bold text-gold/20 group-hover:text-gold/35 transition-colors leading-none flex-shrink-0 tabular-nums">
                  {step.number}
                </span>
                <div className={i % 2 !== 0 ? "sm:text-right" : ""}>
                  <h3 className="font-heading font-bold text-primary text-xl mb-2 group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
