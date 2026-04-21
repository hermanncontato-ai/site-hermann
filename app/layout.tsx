import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import FloatingWhatsAppButton from "@/components/ui/FloatingWhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hermann Mallard | Estrutura de Captação e Conversão para Negócios Locais",
  description:
    "Hermann Mallard implementa marketing digital, funis de conversão e automação com IA para negócios locais que querem atrair mais clientes e crescer com consistência.",
  keywords: [
    "marketing digital",
    "negócios locais",
    "tráfego pago",
    "Google Ads",
    "Meta Ads",
    "automação IA",
    "funil de vendas",
    "Rio de Janeiro",
    "presença digital",
  ],
  authors: [{ name: "Hermann Mallard" }],
  creator: "Hermann Mallard",
  metadataBase: new URL("https://hermannmallard.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://hermannmallard.com.br",
    title: "Hermann Mallard | Estrutura de Captação e Conversão para Negócios Locais",
    description:
      "Seu negócio não precisa de mais divulgação solta. Precisa de uma estrutura que atraia, responda e converta novos clientes.",
    siteName: "Hermann Mallard",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hermann Mallard | Estrutura de Captação e Conversão para Negócios Locais",
    description:
      "Seu negócio não precisa de mais divulgação solta. Precisa de uma estrutura que atraia, responda e converta novos clientes.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hermannmallard.com.br/#organization",
      name: "Hermann Mallard",
      url: "https://hermannmallard.com.br",
      description:
        "Especialista em marketing digital para negócios locais. Estrutura de captação, funis de conversão e automação com agentes de IA.",
      founder: {
        "@type": "Person",
        name: "Hermann Mallard",
        jobTitle: "Especialista em Marketing Digital",
        description: "Empresário em marketing digital desde 2008",
      },
      areaServed: {
        "@type": "City",
        name: "Rio de Janeiro",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://hermannmallard.com.br/#website",
      url: "https://hermannmallard.com.br",
      name: "Hermann Mallard",
      publisher: {
        "@id": "https://hermannmallard.com.br/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MB3DVXKF');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/logo-hermann.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo-hermann.png" />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MB3DVXKF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
