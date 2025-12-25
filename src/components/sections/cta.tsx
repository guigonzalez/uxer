"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Pronto para transformar
          <br />
          <span className="text-primary text-glow">experi\u00eancias em resultados?</span>
        </h2>

        <p className="text-lg text-foreground-muted max-w-2xl mx-auto mb-10">
          Vamos conversar sobre seu desafio. Sem compromisso, sem enrola\u00e7\u00e3o.
          S\u00f3 uma conversa honesta sobre como podemos ajudar.
        </p>

        <Button size="lg" asChild className="shadow-glow-lg hover:scale-105 transition-transform">
          <a href="mailto:contato@uxer.com.br">
            Iniciar Conversa
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  )
}
