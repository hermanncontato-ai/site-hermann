import ScrollReveal from "@/components/ui/ScrollReveal";

const problems = [
  {
    emoji: "💸",
    title: "Investe em divulgação sem saber o retorno",
    description: "Dinheiro saindo todo mês sem clareza sobre o que está gerando resultado de verdade.",
  },
  {
    emoji: "📉",
    title: "Tráfego existe, mas as conversões não acontecem",
    description: "Visitas e cliques sem virar clientes. A estrutura de conversão está faltando.",
  },
  {
    emoji: "⏳",
    title: "Leads chegam e somem antes de fechar",
    description: "Falta processo, falta velocidade, falta seguimento. O lead esfria e vai embora.",
  },
  {
    emoji: "💬",
    title: "Atendimento manual, lento e dependente de você",
    description: "Quando você responde, o cliente já fechou com outra empresa. Velocidade vence.",
  },
  {
    emoji: "🔄",
    title: "Não há uma jornada clara do contato à venda",
    description: "Cada venda é uma surpresa. Sem processo definido, o crescimento não é previsível.",
  },
  {
    emoji: "📊",
    title: "Crescimento por acaso, não por sistema",
    description: "Bons meses e meses fracos sem saber o porquê. Sem dados, sem controle, sem escala.",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="section-padding relative">
      <div className="absolute inset-0 bg-surface/25" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-muted text-xs font-semibold uppercase tracking-widest mb-4 block">
              O diagnóstico
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-4">
              Se o seu negócio não cresce como deveria,{" "}
              <span className="text-gradient">o problema pode estar aqui.</span>
            </h2>
            <p className="text-secondary text-lg max-w-lg mx-auto">
              A maioria dos negócios locais enfrenta os mesmos gargalos. A boa notícia:
              todos têm solução com a estrutura certa.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <div className="group p-6 rounded-2xl bg-card border border-hborder hover:border-gold/25 transition-all duration-300 h-full">
                <div className="text-3xl mb-4" aria-hidden>
                  {problem.emoji}
                </div>
                <h3 className="font-heading font-semibold text-primary text-lg mb-2 group-hover:text-gold transition-colors duration-300">
                  {problem.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.35}>
          <p className="text-center text-muted text-sm mt-10">
            Se você se identificou com algum ponto acima,{" "}
            <a
              href="#solucao"
              className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors"
            >
              continue lendo.
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
