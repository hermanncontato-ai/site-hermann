import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade | Hermann Mallard Marketing de Resultado",
  description:
    "Política de Privacidade de Hermann Mallard LTDA. Saiba como coletamos, utilizamos e protegemos seus dados pessoais em conformidade com a LGPD.",
};

const sections = [
  {
    title: "1. Quem somos",
    content: `Razão Social: Hermann Mallard LTDA
Nome Fantasia: Hermann Mallard Marketing de Resultado
CNPJ: 65.767.692/0001-43
Endereço: Av. Cristóvão Colombo, 2144, Sala 408, Andar 3 – Floresta, Porto Alegre – RS, CEP 90.560-001
Contato: hermanncontato@gmail.com | (21) 9 6747-2172`,
  },
  {
    title: "2. Quais dados coletamos",
    content: `Coletamos apenas os dados informados voluntariamente por você no formulário de contato do site:
— Nome completo
— Número de WhatsApp
— Segmento de atuação (opcional)

Também coletamos dados de navegação de forma anônima e agregada através do Google Analytics 4 (GA4), incluindo páginas visitadas, tempo de permanência, localização aproximada e dispositivo utilizado. Esses dados são usados exclusivamente para análise de desempenho do site.`,
  },
  {
    title: "3. Finalidade do tratamento",
    content: `Os dados coletados são utilizados exclusivamente para:
— Entrar em contato com você via WhatsApp para apresentação de soluções em marketing digital
— Qualificação e atendimento personalizado
— Análise de desempenho e melhoria do site

Não utilizamos seus dados para envio de publicidade não solicitada (spam), nem os compartilhamos com terceiros para fins comerciais.`,
  },
  {
    title: "4. Base legal (LGPD – Lei 13.709/2018)",
    content: `O tratamento dos seus dados é fundamentado no consentimento explícito fornecido por você ao preencher e enviar o formulário do site, conforme previsto no Art. 7º, inciso I da LGPD.`,
  },
  {
    title: "5. Compartilhamento de dados",
    content: `Seus dados podem ser processados por ferramentas de terceiros utilizadas na operação do site:
— Google Analytics 4 (dados de navegação anônimos)
— Google Tag Manager (gerenciamento de rastreamento)

Essas ferramentas possuem suas próprias políticas de privacidade e estão sujeitas às regulamentações aplicáveis. Seus dados pessoais (nome e WhatsApp) não são compartilhados com terceiros.`,
  },
  {
    title: "6. Armazenamento e segurança",
    content: `Os dados coletados são armazenados de forma segura. Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações contra acesso não autorizado, perda ou alteração.`,
  },
  {
    title: "7. Prazo de retenção",
    content: `Seus dados serão mantidos pelo tempo necessário para a prestação do serviço ou atendimento da sua solicitação. Após esse período, os dados serão eliminados ou anonimizados.`,
  },
  {
    title: "8. Seus direitos",
    content: `De acordo com a LGPD, você tem direito a:
— Confirmar a existência de tratamento dos seus dados
— Acessar seus dados
— Solicitar correção de dados incompletos ou desatualizados
— Solicitar a exclusão dos seus dados
— Revogar o consentimento a qualquer momento

Para exercer qualquer um desses direitos, entre em contato: hermanncontato@gmail.com`,
  },
  {
    title: "9. Cookies",
    content: `Este site utiliza cookies de análise (Google Analytics) para entender como os visitantes interagem com o conteúdo. Esses cookies são anônimos e não identificam você pessoalmente.`,
  },
  {
    title: "10. Alterações nesta política",
    content: `Esta política pode ser atualizada periodicamente. A data da última atualização está indicada no topo desta página. Recomendamos que você a revise regularmente.`,
  },
  {
    title: "11. Contato",
    content: `Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus dados:
Hermann Mallard LTDA – hermanncontato@gmail.com | (21) 9 6747-2172`,
  },
];

export default function PoliticaDePrivacidade() {
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
              Política de Privacidade
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
