"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl">
          <Badge className="mb-6 animate-in opacity-0" style={{ animationDelay: "100ms" }}>
            Consultoria em Design de Experiência
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-in opacity-0" style={{ animationDelay: "200ms" }}>
            UX não é conceito.
            <br />
            <span className="text-primary text-glow">É verbo.</span>
          </h1>

          <p className="mt-6 md:mt-8 text-lg md:text-xl text-foreground-muted max-w-2xl animate-in opacity-0" style={{ animationDelay: "300ms" }}>
            UXER é quem age. Quem entra no sistema, entende o contexto e move a
            experiência para frente. Usamos IA como alavanca para resultados reais.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 animate-in opacity-0" style={{ animationDelay: "400ms" }}>
            <Button size="lg" asChild>
              <a href="mailto:contato@uxer.com.br">
                Iniciar Conversa
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#manifesto">Ver Manifesto</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground-subtle rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-foreground-subtle rounded-full" />
        </div>
      </div>
    </section>
  )
}
