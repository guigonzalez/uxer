"use client"

import Image from "next/image"

const navLinks = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Serviços", href: "#servicos" },
  { label: "IA", href: "#ia" },
  { label: "Processo", href: "#processo" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <Image
              src="/Logo.svg"
              alt="UXER"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <div>
              <p className="font-semibold">UXER</p>
              <p className="text-sm text-foreground-muted">
                Ação aplicada à experiência
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-center md:text-right">
            <a
              href="mailto:contato@uxer.com.br"
              className="text-primary hover:text-primary-400 transition-colors"
            >
              contato@uxer.com.br
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground-subtle">
          <p>&copy; {currentYear} UXER. Todos os direitos reservados.</p>
          <p>
            Feito com propósito{" "}
            <span className="text-primary">•</span> Potencializado por IA
          </p>
        </div>
      </div>
    </footer>
  )
}
