import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    label: "Atrai",
    color: "bg-gold",
    desc: "Você aparece exatamente para quem já está procurando o que você oferece, no momento certo, com a mensagem certa.",
  },
  {
    label: "Responde",
    color: "bg-blue-500",
    desc: "Seu atendimento não depende mais de tempo ou disponibilidade. A IA responde na hora, organiza o contato e mantém o cliente engajado.",
  },
  {
    label: "Qualifica",
    color: "bg-gold",
    desc: "Nem todo lead é cliente. Aqui, você filtra, entende a intenção e foca apenas em quem realmente tem potencial de compra.",
  },
  {
    label: "Converte",
    color: "bg-blue-500",
    desc: "Com um processo claro e estruturado, você deixa de \"tentar vender\" e passa a conduzir o cliente naturalmente até o fechamento.",
  },
  {
    label: "Fideliza",
    color: "bg-gold",
    desc: "Clientes bem atendidos voltam, indicam e fortalecem sua reputação, criando um ciclo contínuo de crescimento.",
  },
];

export default function Solution() {
  return (
    <section id="solucao" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 15% 50%, rgba(59,130,246,0.04), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Pipeline visual */}
          <ScrollReveal direction="right">
            <div className="rounded-3xl bg-surface border border-hborder p-8 overflow-hidden relative">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 0% 100%, rgba(59,130,246,0.05), transparent 55%)",
                }}
              />

              <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-7 relative z-10">
                O Sistema de Crescimento do Seu Negócio
              </p>

              <div className="relative z-10 space-y-3">
                {stages.map((stage, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-hborder hover:border-gold/20 transition-all duration-300 group"
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${stage.color} flex-shrink-0 mt-1.5 group-hover:scale-125 transition-transform`}
                      aria-hidden
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-heading font-bold text-primary">{stage.label}</span>
                        <ArrowRight className="w-4 h-4 text-muted group-hover:text-gold group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" aria-hidden />
                      </div>
                      <span className="text-secondary text-sm leading-relaxed">{stage.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <div>
            <ScrollReveal>
              <span className="text-gold text-xs font-semibold uppercase tracking-widest mb-4 block">
                A solução
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-6">
                Uma estrutura que{" "}
                <span className="text-gradient">trabalha por você.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-secondary text-lg leading-relaxed mb-5">
                Do primeiro clique até o cliente fidelizado, cada etapa é planejada,
                implementada e otimizada com método. Nada é deixado ao acaso.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.28}>
              <p className="text-secondary text-lg leading-relaxed mb-10">
                Enquanto você foca no seu negócio, a estrutura capta, responde, qualifica
                e encaminha o lead para o fechamento, com velocidade e consistência.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.36}>
              <Button href="#contato" size="lg">
                Quero essa estrutura
                <ArrowRight className="w-5 h-5" />
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
