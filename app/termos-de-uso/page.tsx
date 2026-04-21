import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso | Hermann Mallard Marketing de Resultado",
  description:
    "Termos de Uso do site de Hermann Mallard LTDA. Condições de utilização, direitos autorais e responsabilidades.",
};

const sections = [
  {
    title: "1. Aceitação dos termos",
    content: `Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Caso não concorde com alguma das condições, recomendamos que não utilize o site.`,
  },
  {
    title: "2. Sobre a empresa",
    content: `Razão Social: Hermann Mallard LTDA
Nome Fantasia: Hermann Mallard Marketing de Resultado
CNPJ: 65.767.692/0001-43
Endereço: Av. Cristóvão Colombo, 2144, Sala 408, Andar 3 – Floresta, Porto Alegre – RS, CEP 90.560-001
E-mail: hermanncontato@gmail.com

Este site tem como finalidade apresentar os serviços de consultoria em marketing digital e possibilitar o contato de potenciais clientes.`,
  },
  {
    title: "3. Uso do site",
    content: `Você se compromete a utilizar este site de forma lícita, não realizando ações que possam:
— Violar direitos de terceiros
— Comprometer a segurança ou funcionamento do site
— Reproduzir, distribuir ou modificar conteúdos sem autorização`,
  },
  {
    title: "4. Conteúdo do site",
    content: `Todo o conteúdo disponível neste site — textos, imagens, marca, logotipo e materiais — é de propriedade de Hermann Mallard LTDA e está protegido por direitos autorais. É vedada a reprodução sem autorização prévia e expressa.`,
  },
  {
    title: "5. Formulário de contato",
    content: `Ao preencher o formulário de contato, você autoriza Hermann Mallard LTDA a entrar em contato via WhatsApp para apresentação de soluções. Suas informações serão tratadas conforme nossa Política de Privacidade.`,
  },
  {
    title: "6. Uso de inteligência artificial",
    content: `Parte do atendimento inicial pode ser realizada com apoio de ferramentas de inteligência artificial para agilizar respostas e melhorar a experiência. Quando necessário, você será atendido diretamente por Hermann Mallard.`,
  },
  {
    title: "7. Isenção de responsabilidade",
    content: `As informações contidas neste site têm caráter informativo e não constituem garantia de resultados. Os resultados apresentados são cases reais, mas podem variar conforme o contexto de cada negócio. Hermann Mallard LTDA não se responsabiliza por decisões tomadas com base exclusiva nas informações do site.`,
  },
  {
    title: "8. Links externos",
    content: `Este site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo, privacidade ou práticas desses sites.`,
  },
  {
    title: "9. Modificações",
    content: `Estes termos podem ser atualizados a qualquer momento. A data de atualização estará sempre indicada no topo desta página.`,
  },
  {
    title: "10. Lei aplicável",
    content: `Estes Termos de Uso são regidos pela legislação brasileira. Fica eleito o foro da Comarca de Porto Alegre – RS para resolução de eventuais disputas.`,
  },
  {
    title: "11. Contato",
    content: `Em caso de dúvidas: hermanncontato@gmail.com | (21) 9 6747-2172`,
  },
];

export default function TermosDeUso() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-14">
            <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-widest mb-5">
              <span className="w-6 h-px bg-gold" />
              Legal
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-4 leading-tight">
              Termos de Uso
            </h1>
            <p className="text-secondary text-base">
              Hermann Mallard Marketing de Resultado
            </p>
            <p className="text-muted text-sm mt-2">
              Última atualização: abril de 2026
            </p>
            <div className="w-full h-px bg-gradient-to-r from-gold/30 via-hborder to-transparent mt-8" />
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-heading font-semibold text-primary text-lg mb-3">
                  {section.title}
                </h2>
                <p className="text-secondary text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-hborder">
            <Link
              href="/"
              className="text-gold hover:text-gold-light text-sm font-semibold transition-colors"
            >
              ← Voltar ao site
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
