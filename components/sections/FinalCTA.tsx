import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  const whatsappText = encodeURIComponent(
    "Olá Hermann, quero saber mais sobre a estrutura de captação e conversão para o meu negócio."
  );

  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 65% at 50% 50%, rgba(200,147,42,0.09), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-slow" aria-hidden />
            Fale diretamente
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-[1.05]">
            Pronto para transformar presença em{" "}
            <span className="text-gradient">resultado real?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-secondary text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Vamos conversar sobre o seu negócio, mapear os gargalos e mostrar como uma
            Estrutura de Resultado pode gerar clientes de forma previsível e escalável.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center">
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
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-muted text-sm mt-8">
            Sem compromisso. Uma conversa para entender se faz sentido para você.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
