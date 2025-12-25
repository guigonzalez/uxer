import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "UXER | Consultoria em Design de Experiência",
  description:
    "UX não é conceito. É verbo. Consultoria em design de experiência com IA para resultados reais.",
  keywords: [
    "UX",
    "design de experiência",
    "consultoria UX",
    "design de interface",
    "pesquisa com usuários",
    "IA",
    "inteligência artificial",
  ],
  authors: [{ name: "UXER" }],
  openGraph: {
    title: "UXER | Consultoria em Design de Experiência",
    description:
      "UX não é conceito. É verbo. Consultoria em design de experiência com IA para resultados reais.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "UXER | Consultoria em Design de Experiência",
    description:
      "UX não é conceito. É verbo. Consultoria em design de experiência com IA para resultados reais.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
