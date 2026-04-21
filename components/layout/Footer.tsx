import { Mail } from "lucide-react";
import Image from "next/image";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const footerLinks = [
  {
    title: "Soluções",
    links: [
      { label: "Captação Estratégica", href: "#estrutura" },
      { label: "Funis de Conversão", href: "#estrutura" },
      { label: "IA para Atendimento", href: "#ia" },
      { label: "CRM e Pipeline", href: "#estrutura" },
      { label: "Conteúdo com Propósito", href: "#estrutura" },
      { label: "Análise e Otimização", href: "#estrutura" },
    ],
  },
  {
    title: "Navegação",
    links: [
      { label: "Sobre Hermann", href: "#sobre" },
      { label: "Como Funciona", href: "#processo" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Falar com Hermann", href: "#contato" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-hborder bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center gap-12 mb-12 text-center">
          <div className="space-y-5 max-w-2xl">
            <div className="flex justify-center">
              <Image
                src="/logo-hermann.png"
                alt="Hermann Mallard Marketing de Resultado"
                width={320}
                height={80}
                className="h-20 w-auto object-contain"
                style={{ mixBlendMode: "screen" }}
              />
            </div>

            <p className="text-secondary text-sm leading-relaxed mx-auto max-w-xl">
              Criador do método{" "}
              <a href="https://pontobe.com.br" target="_blank" rel="noopener noreferrer" className="text-gold font-semibold hover:text-gold-light transition-colors">
                Pontobe
              </a>
              {" "}e da plataforma{" "}
              <a href="https://auditpro.cloud" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                AuditPro
              </a>
              . Estrutura de captação, conversão e automação com IA para transformar
              presença digital em crescimento real.
            </p>

            <div className="flex items-center justify-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/hermannmallard/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Hermann Mallard"
                className="w-9 h-9 rounded-lg bg-card border border-hborder flex items-center justify-center text-secondary hover:text-primary hover:border-gold/30 transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/hermann-mallard-094153212/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Hermann Mallard"
                className="w-9 h-9 rounded-lg bg-card border border-hborder flex items-center justify-center text-secondary hover:text-primary hover:border-gold/30 transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:hermanncontato@gmail.com"
                aria-label="Enviar e-mail para Hermann Mallard"
                className="w-9 h-9 rounded-lg bg-card border border-hborder flex items-center justify-center text-secondary hover:text-primary hover:border-gold/30 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full justify-center">
          {footerLinks.map((group) => (
            <div key={group.title} className="mx-auto">
              <h4 className="font-heading font-semibold text-primary text-xs uppercase tracking-widest mb-5">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-secondary hover:text-primary text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Aviso IA */}
        <p className="text-muted text-xs text-center mt-10 mb-8 max-w-2xl mx-auto leading-relaxed">
          Parte do atendimento pode ser realizada com apoio de inteligência artificial para agilizar respostas e melhorar a experiência.
        </p>

        <div className="pt-8 border-t border-hborder flex flex-col items-center gap-3 text-center">
          {/* Links legais */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href="/politica-de-privacidade" className="text-muted hover:text-secondary text-xs transition-colors">
              Política de Privacidade
            </a>
            <span className="text-hborder text-xs">·</span>
            <a href="/termos-de-uso" className="text-muted hover:text-secondary text-xs transition-colors">
              Termos de Uso
            </a>
          </div>

          {/* Identificação legal */}
          <p className="text-muted text-xs leading-relaxed">
            Hermann Mallard LTDA · Hermann Mallard Marketing de Resultado
          </p>
          <p className="text-muted text-xs">
            CNPJ 65.767.692/0001-43 · Porto Alegre – RS
          </p>
          <p className="text-muted text-xs">
            hermanncontato@gmail.com · (21) 9 6747-2172
          </p>
          <p className="text-muted text-xs mt-1">
            © 2026 Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
