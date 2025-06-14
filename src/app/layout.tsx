import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// Fonte Roboto configurada
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-Savete",
  display: "swap",
  style: ["normal", "italic"],
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

// Metadados globais
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === "production"
    ? "https://seu-dominio.com" 
    : "http://localhost:3000"
  ),
  title: "RJ || Front-end Developer Portfólio",
  description: "A simple portfolio website",
  keywords: [
    "Rafael Jesus",
    "Front-end Developer",
    "Portfólio",
    "Web Development",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
  ],
  authors: [
    {
      name: "Rafael de Jesus",
    },
  ],
  creator: "Rafael de Jesus",
  applicationName: "RJ Portfólio",
  openGraph: {
    title: "RJ || Front-end Developer Portfólio",
    description: "A simple portfolio website",
    siteName: "RJ Portfólio",
    images: [
      {
        url: "/img/portifolio.png",
        width: 1200,
        height: 630,
        alt: "Portfólio Hero image",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/icons/favicon.ico.svg" />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
