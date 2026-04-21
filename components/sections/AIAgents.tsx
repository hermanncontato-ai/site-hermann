"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import {
  Bot,
  Zap,
  Clock,
  MessageSquare,
  Calendar,
  RefreshCw,
  ArrowRight,
  CalendarCheck,
  FlaskConical,
  BadgeDollarSign,
  Wrench,
} from "lucide-react";

const capabilities = [
  {
    icon: Zap,
    title: "Resposta em menos de 1 minuto",
    description: "Quando o lead está quente, o agente já está respondendo.",
  },
  {
    icon: MessageSquare,
    title: "Primeiro atendimento completo",
    description: "Responde dúvidas, envia materiais, imagens e informações do negócio.",
  },
  {
    icon: RefreshCw,
    title: "Qualificação automática",
    description: "Identifica o perfil do lead e encaminha para o próximo passo correto.",
  },
  {
    icon: Calendar,
    title: "Agendamento sem atrito",
    description: "Marca reuniões e consultas direto na conversa.",
  },
  {
    icon: Clock,
    title: "Disponível 24 horas por dia",
    description: "Sábado, domingo, feriado. O agente não tira folga.",
  },
  {
    icon: Bot,
    title: "Apoio no fechamento e pós-venda",
    description: "Nutre, reativa e mantém o relacionamento com quem já foi cliente.",
  },
];

const conversationTypes = [
  {
    icon: CalendarCheck,
    title: "Agendamento de consulta",
    description:
      "Lead marca a consulta direto no chat. O agente verifica disponibilidade e confirma sem nenhuma intervenção humana.",
    statusText: "Consulta confirmada ✓",
    messages: [
      {
        side: "right",
        text: "Boa tarde! Quero marcar uma consulta com dermatologista.",
        time: "14:32",
      },
      {
        side: "left",
        text: "Olá! Temos horários essa semana. 🩺 Prefere manhã ou tarde?",
        time: "14:32",
      },
      { side: "right", text: "Tarde, quinta-feira se possível.", time: "14:33" },
      {
        side: "left",
        text: "Quinta às 15h está disponível. Confirmo no seu nome?",
        time: "14:33",
      },
    ],
  },
  {
    icon: FlaskConical,
    title: "Marcação de exames",
    description:
      "Paciente agenda exames pelo WhatsApp, escolhe data e horário e recebe a confirmação automática sem sair da conversa.",
    statusText: "Exame agendado ✓",
    messages: [
      {
        side: "right",
        text: "Preciso fazer hemograma e glicose. Aceitam Unimed?",
        time: "08:11",
      },
      {
        side: "left",
        text: "Olá! Sim, aceitamos Unimed. 🔬 Temos horários amanhã das 7h às 9h, com jejum de 8h. Reservo para você?",
        time: "08:11",
      },
      { side: "right", text: "Pode ser amanhã às 7h30.", time: "08:12" },
      {
        side: "left",
        text: "Agendado para amanhã às 7h30. Você receberá um lembrete 1h antes. ✅",
        time: "08:12",
      },
    ],
  },
  {
    icon: BadgeDollarSign,
    title: "Orçamento online",
    description:
      "Lead recebe a proposta, tira dúvidas e aprova tudo sem sair do WhatsApp. Nenhuma reunião necessária para fechar.",
    statusText: "Proposta enviada ✓",
    messages: [
      {
        side: "right",
        text: "Quero saber o valor para gestão de tráfego pago.",
        time: "19:05",
      },
      {
        side: "left",
        text: "Olá! Nossa gestão inclui Google Ads + Meta Ads. 📊 O seu negócio é local ou online?",
        time: "19:05",
      },
      { side: "right", text: "Local. Tenho uma clínica odontológica.", time: "19:06" },
      {
        side: "left",
        text: "Para clínicas, nosso pacote é R$ 1.500/mês com relatório semanal. Envio a proposta agora?",
        time: "19:06",
      },
    ],
  },
  {
    icon: Wrench,
    title: "Agendamento de visita técnica",
    description:
      "Cliente informa endereço e disponibilidade. O agente confirma a equipe e registra tudo automaticamente, sem ligação.",
    statusText: "Visita agendada ✓",
    messages: [
      {
        side: "right",
        text: "Preciso instalar câmeras de segurança em casa.",
        time: "10:22",
      },
      {
        side: "left",
        text: "Boa tarde! 🔧 Qual o seu bairro? Verifico a disponibilidade da equipe.",
        time: "10:22",
      },
      { side: "right", text: "Tijuca, Rio de Janeiro.", time: "10:23" },
      {
        side: "left",
        text: "Temos equipe terça (14h–18h) ou quarta (9h–13h). Qual horário é melhor para você?",
        time: "10:23",
      },
    ],
  },
];

export default function AIAgents() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = conversationTypes[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section id="ia" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(59,130,246,0.06), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
              <Bot className="w-3.5 h-3.5" aria-hidden />
              Agentes de IA
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-4">
              Atendimento que{" "}
              <span className="text-gradient-blue">não para. Nunca.</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Enquanto você dorme, seu agente de IA está respondendo, qualificando e
              agendando. Hermann implementa agentes que fazem parte real da operação
              comercial do seu negócio.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Main: Titles list (left) + Chat (right) ── */}
        <div className="grid lg:grid-cols-5 gap-5 mb-12 items-stretch">

          {/* ── Segundo campo: títulos + descrição (2 colunas de 5) ── */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="space-y-3 h-full">
              {conversationTypes.map((type, i) => {
                const Icon = type.icon;
                const isActive = activeIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`group w-full text-left p-5 rounded-2xl border transition-all duration-250 ${
                      isActive
                        ? "bg-blue-500/[0.07] border-blue-500/30"
                        : "bg-card border-hborder hover:border-blue-500/20 hover:bg-card/80"
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                          isActive
                            ? "bg-blue-500/15 border border-blue-500/30"
                            : "bg-surface border border-hborder group-hover:border-blue-500/20"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 transition-colors ${
                            isActive ? "text-blue-400" : "text-muted group-hover:text-blue-400"
                          }`}
                          aria-hidden
                        />
                      </div>
                      <div>
                        <h4
                          className={`font-heading font-semibold text-sm mb-1 transition-colors ${
                            isActive ? "text-blue-400" : "text-primary"
                          }`}
                        >
                          {type.title}
                        </h4>
                        <p className="text-secondary text-xs leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* ── Chat mockup (3 colunas de 5) ── */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="rounded-3xl bg-surface border border-blue-500/20 overflow-hidden shadow-2xl shadow-blue-500/5 h-full flex flex-col">

              {/* ── Primeiro campo: título ativo da conversa ── */}
              <div className="bg-card border-b border-hborder px-5 pt-4 pb-4">
                {/* Status bar */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span
                    className="w-2 h-2 rounded-full bg-blue-400 animate-pulse-slow"
                    aria-hidden
                  />
                  <span className="text-secondary text-xs font-medium">
                    Agente HermannAI · Online
                  </span>
                </div>

                {/* Active conversation title — muda conforme seleção */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    className="flex items-center gap-2.5"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/25 flex items-center justify-center flex-shrink-0">
                      <ActiveIcon className="w-3.5 h-3.5 text-blue-400" aria-hidden />
                    </div>
                    <span className="font-heading font-semibold text-primary text-sm">
                      {active.title}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Messages area */}
              <div className="p-5 flex-1 min-h-[280px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    className="space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.28 }}
                  >
                    {active.messages.map((msg, i) => (
                      <motion.div
                        key={i}
                        className={`flex ${msg.side === "right" ? "justify-end" : "justify-start"}`}
                        initial={{ opacity: 0, x: msg.side === "right" ? 14 : -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        {msg.side === "left" && (
                          <div className="flex items-start gap-2.5 max-w-[88%]">
                            <div
                              className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5"
                              aria-hidden
                            >
                              <Bot className="w-3.5 h-3.5 text-white" />
                            </div>
                            <div className="bg-card border border-hborder rounded-2xl rounded-tl-sm px-4 py-3">
                              <p className="text-primary text-sm leading-relaxed">{msg.text}</p>
                              <p className="text-muted text-xs mt-1">{msg.time}</p>
                            </div>
                          </div>
                        )}
                        {msg.side === "right" && (
                          <div className="max-w-[88%] bg-blue-500/10 border border-blue-500/20 rounded-2xl rounded-tr-sm px-4 py-3">
                            <p className="text-primary text-sm leading-relaxed">{msg.text}</p>
                            <p className="text-muted text-xs mt-1 text-right">{msg.time}</p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="bg-card border-t border-hborder px-5 py-3 flex items-center justify-between">
                <span className="text-muted text-xs">Resposta em 34 segundos</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeIndex}
                    className="text-blue-400 text-xs font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    {active.statusText}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Capabilities grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <div className="group flex items-start gap-4 p-5 rounded-2xl bg-card border border-hborder hover:border-blue-500/25 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/15 transition-colors">
                  <cap.icon className="w-5 h-5 text-blue-400" aria-hidden />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary mb-1 group-hover:text-blue-400 transition-colors text-sm">
                    {cap.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">{cap.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center">
            <Button href="#contato">
              Quero um agente para o meu negócio
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
