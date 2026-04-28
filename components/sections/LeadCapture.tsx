"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const schema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
  whatsapp: z
    .string()
    .min(10, "Informe um WhatsApp válido")
    .regex(/^[\d\s\(\)\-\+]+$/, "Número inválido"),
  negocio: z.string().min(2, "Informe o segmento do seu negócio"),
  desafio: z.string().min(1, "Selecione seu principal desafio"),
  investimento: z.string().min(1, "Selecione sua faixa de investimento"),
  politica: z.boolean().refine((v) => v === true, "Obrigatório"),
  autorizo: z.boolean().refine((v) => v === true, "Obrigatório"),
});

type FormData = z.infer<typeof schema>;

const WA_NUMBER = "5521967472172";
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

const inputClass =
  "w-full rounded-xl border border-hborder bg-card px-4 py-3 text-primary text-sm placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all duration-200";

const errorClass = "text-red-400 text-xs mt-1";

export default function LeadCapture() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    const w = window as Window & { dataLayer?: object[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "form_submit" });

    let waUrl: string;

    // Tenta qualificar via API; se falhar usa mensagem padrão
    try {
      if (API_URL) {
        const res = await fetch(`${API_URL}/api/qualify-lead`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome: data.nome,
            whatsapp: data.whatsapp,
            negocio: data.negocio,
            desafio: data.desafio,
            investimento: data.investimento,
          }),
        });
        if (res.ok) {
          const json = await res.json();
          waUrl = json.whatsapp_url;
        } else {
          throw new Error("API indisponível");
        }
      } else {
        throw new Error("API_URL não configurada");
      }
    } catch {
      const msg = encodeURIComponent(
        `Olá Hermann! Quero uma Estrutura de Resultado para o meu negócio.\n\n` +
          `Nome: ${data.nome}\n` +
          `WhatsApp: ${data.whatsapp}\n` +
          `Negócio/Segmento: ${data.negocio}\n` +
          `Principal desafio: ${data.desafio}\n` +
          `Investimento mensal: ${data.investimento}`
      );
      waUrl = `https://wa.me/${WA_NUMBER}?text=${msg}`;
    }

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 800);
  }

  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,147,42,0.07), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Texto */}
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-slow" aria-hidden />
                Próximo passo
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-5 leading-[1.1]">
                Vamos construir sua{" "}
                <span className="text-gradient">Estrutura de Resultado?</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-secondary text-lg leading-relaxed mb-8">
                Preencha o formulário ao lado. Hermann Mallard entra em contato
                direto pelo WhatsApp para entender o seu negócio e mostrar o
                melhor caminho.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <ul className="space-y-3">
                {[
                  "Diagnóstico gratuito do seu cenário atual",
                  "Sem compromisso — só uma conversa real",
                  "Resposta em até 1 dia útil",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-secondary text-sm">
                    <span className="w-5 h-5 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-gold text-xs font-bold">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Formulário */}
          <ScrollReveal delay={0.15}>
            <div className="bg-card border border-hborder rounded-3xl p-7 sm:p-9 shadow-2xl shadow-black/20">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                  >
                    <CheckCircle className="w-14 h-14 text-gold" />
                    <p className="font-heading font-semibold text-primary text-xl">
                      Recebido! Abrindo WhatsApp...
                    </p>
                    <p className="text-secondary text-sm">
                      Se não abrir,{" "}
                      <a
                        href={`https://wa.me/${WA_NUMBER}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gold underline"
                      >
                        clique aqui
                      </a>
                      .
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div>
                      <input
                        {...register("nome")}
                        placeholder="Seu nome"
                        className={inputClass}
                      />
                      {errors.nome && <p className={errorClass}>{errors.nome.message}</p>}
                    </div>

                    <div>
                      <input
                        {...register("whatsapp")}
                        placeholder="WhatsApp com DDD"
                        type="tel"
                        className={inputClass}
                      />
                      {errors.whatsapp && <p className={errorClass}>{errors.whatsapp.message}</p>}
                    </div>

                    <div>
                      <input
                        {...register("negocio")}
                        placeholder="Segmento do seu negócio"
                        className={inputClass}
                      />
                      {errors.negocio && <p className={errorClass}>{errors.negocio.message}</p>}
                    </div>

                    <div>
                      <select {...register("desafio")} className={inputClass + " cursor-pointer"}>
                        <option value="">Principal desafio atual</option>
                        <option value="Gerar mais leads">Gerar mais leads</option>
                        <option value="Converter mais leads">Converter mais leads</option>
                        <option value="Tráfego pago">Tráfego pago (Google Ads / Meta Ads)</option>
                        <option value="Produzir conteúdo">Produzir conteúdo</option>
                        <option value="Automatizar atendimento">Automatizar atendimento</option>
                        <option value="Criar presença digital">Criar presença digital</option>
                        <option value="Medir resultados">Medir e entender resultados</option>
                        <option value="Outro">Outro</option>
                      </select>
                      {errors.desafio && <p className={errorClass}>{errors.desafio.message}</p>}
                    </div>

                    <div>
                      <select {...register("investimento")} className={inputClass + " cursor-pointer"}>
                        <option value="">Investimento mensal disponível</option>
                        <option value="Até R$1.000">Até R$ 1.000</option>
                        <option value="R$1.000 a R$3.000">R$ 1.000 a R$ 3.000</option>
                        <option value="R$3.000 a R$6.000">R$ 3.000 a R$ 6.000</option>
                        <option value="Acima de R$6.000">Acima de R$ 6.000</option>
                      </select>
                      {errors.investimento && <p className={errorClass}>{errors.investimento.message}</p>}
                    </div>

                    {/* Checkboxes LGPD */}
                    <div className="space-y-3 pt-1">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          {...register("politica")}
                          className="mt-0.5 w-4 h-4 rounded border-hborder bg-card accent-gold cursor-pointer flex-shrink-0"
                        />
                        <span className="text-muted text-xs leading-relaxed group-hover:text-secondary transition-colors">
                          Li e concordo com a{" "}
                          <a href="/politica-de-privacidade" target="_blank" className="text-gold underline underline-offset-2 hover:text-gold-light">
                            Política de Privacidade
                          </a>
                        </span>
                      </label>
                      {errors.politica && <p className={errorClass}>{errors.politica.message}</p>}

                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          {...register("autorizo")}
                          className="mt-0.5 w-4 h-4 rounded border-hborder bg-card accent-gold cursor-pointer flex-shrink-0"
                        />
                        <span className="text-muted text-xs leading-relaxed group-hover:text-secondary transition-colors">
                          Autorizo o contato via WhatsApp para apresentação de soluções
                        </span>
                      </label>
                      {errors.autorizo && <p className={errorClass}>{errors.autorizo.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold hover:bg-gold-light active:scale-[0.98] text-hbg font-heading font-bold text-base rounded-xl py-4 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-gold/20 mt-2"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          Quero minha Estrutura de Resultado
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-muted text-xs pt-1">
                      Seus dados serão utilizados apenas para contato e apresentação de soluções. Sem spam.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
