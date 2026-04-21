import ScrollReveal from "@/components/ui/ScrollReveal";
import { Zap, Target, TrendingUp, Eye } from "lucide-react";

const differentials = [
  {
    icon: Zap,
    stat: "Velocidade de resposta",
    description:
      "Primeiro atendimento em menos de 1 minuto. Leads quentes não esperam. E quem espera perde.",
  },
  {
    icon: Target,
    stat: "Zero leads perdidos",
    description:
      "Com processo estruturado, cada lead tem uma próxima etapa clara. Nada cai no esquecimento.",
  },
  {
    icon: TrendingUp,
    stat: "Conversão maior",
    description:
      "Jornada planejada do clique ao fechamento. Cada etapa foi pensada para converter.",
  },
  {
    icon: Eye,
    stat: "Crescimento com controle",
    description:
      "Dados, métricas e otimização contínua. Você sabe o que está funcionando e por quê.",
  },
];

const before = [
  "Investimento sem saber o retorno",
  "Leads que chegam e somem",
  "Atendimento manual e dependente de você",
  "Sem funil, sem processo definido",
  "Crescimento por acaso, não por sistema",
  "Decisões baseadas em intuição",
];

const after = [
  "Cada real investido com objetivo e métricas",
  "Atendimento automático em menos de 1 minuto",
  "IA responde 24h sem depender de você",
  "Funil claro do primeiro contato ao fechamento",
  "Crescimento previsível e escalável",
  "Decisões orientadas por dados reais",
];

export default function Differentials() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-surface/25" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest mb-4 block">
              O diferencial
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-4">
              Marketing solto x{" "}
              <span className="text-gradient">Estrutura de Resultado.</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              A diferença não está em gastar mais. Está em ter um sistema onde cada
              peça trabalha junto, do clique ao cliente fidelizado.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {differentials.map((diff, i) => (
            <ScrollReveal key={i} delay={i * 0.09}>
              <div className="group text-center p-7 rounded-2xl bg-card border border-hborder hover:border-gold/20 transition-all duration-300 h-full flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors">
                  <diff.icon className="w-7 h-7 text-gold" aria-hidden />
                </div>
                <h3 className="font-heading font-bold text-primary text-lg mb-3 group-hover:text-gold transition-colors">
                  {diff.stat}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">{diff.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Before / After */}
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <ScrollReveal direction="right">
            <div className="p-6 rounded-2xl bg-card border border-hborder/40">
              <h4 className="font-heading font-semibold text-muted text-xs uppercase tracking-widest mb-5">
                Marketing solto
              </h4>
              <ul className="space-y-2.5">
                {before.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-muted text-sm">
                    <span className="text-muted/40 flex-shrink-0" aria-hidden>·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gold/[0.06] to-transparent border border-gold/20">
              <h4 className="font-heading font-semibold text-gold text-xs uppercase tracking-widest mb-5">
                Estrutura de Resultado Hermann
              </h4>
              <ul className="space-y-2.5">
                {after.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-primary text-sm">
                    <span className="text-gold font-bold flex-shrink-0" aria-hidden>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
