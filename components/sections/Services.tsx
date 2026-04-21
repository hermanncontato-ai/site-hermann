import ScrollReveal from "@/components/ui/ScrollReveal";
import { Search, BarChart2, FileText, Bot, HeartHandshake, LayoutDashboard } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Captação Estratégica",
    description:
      "Seu negócio encontrado por quem já está pronto para comprar. SEO local, Google Meu Negócio otimizado e tráfego pago com objetivo claro: atrair o lead certo, na hora certa.",
    tags: ["SEO Local", "Google Ads", "Meta Ads"],
    highlight: false,
  },
  {
    icon: FileText,
    title: "Funis de Conversão",
    description:
      "Cada visita tem uma próxima etapa clara. Landing pages otimizadas e sequências de nutrição que conduzem o lead naturalmente até o fechamento.",
    tags: ["Landing Pages", "Funil", "Conversão"],
    highlight: false,
  },
  {
    icon: Bot,
    title: "IA para Atendimento 24h",
    description:
      "Seu agente responde, qualifica e agenda enquanto você descansa. Atendimento imediato no WhatsApp e Instagram, sem depender da sua disponibilidade.",
    tags: ["IA", "WhatsApp", "Automação"],
    highlight: true,
  },
  {
    icon: LayoutDashboard,
    title: "CRM e Pipeline de Vendas",
    description:
      "Visibilidade total do seu funil em tempo real. Cada lead registrado, cada etapa monitorada. Decisões com dados, não com achismo.",
    tags: ["CRM", "Pipeline", "Métricas"],
    highlight: false,
  },
  {
    icon: BarChart2,
    title: "Conteúdo com Propósito",
    description:
      "Conteúdo que posiciona, educa e convence. Copy estratégico para redes sociais, anúncios e páginas que refletem a autoridade do seu negócio.",
    tags: ["Copy", "Posicionamento", "Redes Sociais"],
    highlight: false,
  },
  {
    icon: HeartHandshake,
    title: "Análise e Otimização Contínua",
    description:
      "Monitoramos o que funciona, ajustamos o que precisa e escalamos o que gera resultado. Crescimento previsível e sustentável mês a mês.",
    tags: ["Dados", "Otimização", "Escala"],
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="estrutura" className="section-padding relative">
      <div className="absolute inset-0 bg-surface/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest mb-4 block">
              A estrutura
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-4">
              Blocos integrados que{" "}
              <span className="text-gradient">geram resultado.</span>
            </h2>
            <p className="text-secondary text-lg max-w-xl mx-auto">
              Não são serviços avulsos. São peças de um sistema que funciona em conjunto,
              do primeiro clique até o cliente fidelizado.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.09}>
              <div
                className={`group relative p-7 rounded-2xl border transition-all duration-300 h-full flex flex-col ${
                  service.highlight
                    ? "bg-gradient-to-br from-blue-500/[0.04] to-gold/[0.03] border-gold/20 hover:border-gold/40"
                    : "bg-card border-hborder hover:border-gold/20"
                }`}
              >
                {service.highlight && (
                  <span className="absolute top-4 right-4 text-xs font-semibold bg-gold/10 text-gold border border-gold/20 rounded-full px-3 py-1">
                    Destaque
                  </span>
                )}

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-hborder group-hover:border-gold/30 transition-colors ${
                    service.highlight ? "bg-blue-500/10" : "bg-surface"
                  }`}
                >
                  <service.icon
                    className={`w-6 h-6 ${service.highlight ? "text-blue-400" : "text-gold"}`}
                    aria-hidden
                  />
                </div>

                <h3 className="font-heading font-bold text-primary text-xl mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>

                <p className="text-secondary text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted bg-surface border border-hborder rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* CTA card */}
          <ScrollReveal delay={0.5}>
            <div className="p-7 rounded-2xl border border-dashed border-gold/20 flex flex-col items-center justify-center text-center bg-gold/[0.02] hover:bg-gold/[0.04] transition-colors group">
              <div className="text-gold/30 text-6xl mb-4 font-heading group-hover:text-gold/50 transition-colors leading-none">
                +
              </div>
              <p className="text-secondary text-sm mb-4 max-w-[180px]">
                Quer entender qual estrutura faz sentido para o seu negócio?
              </p>
              <a
                href="#contato"
                className="text-gold hover:text-gold-light text-sm font-semibold transition-colors underline underline-offset-4"
              >
                Vamos conversar
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
