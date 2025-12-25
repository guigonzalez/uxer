"use client"

import { Badge } from "@/components/ui/badge"
import { Zap, Eye, Target, TrendingUp } from "lucide-react"

const advantages = [
  {
    icon: Eye,
    title: "Enxergar padrões antes",
    description: "Análise de grandes volumes de dados de usuário para identificar oportunidades ocultas.",
  },
  {
    icon: Zap,
    title: "Testar mais rápido",
    description: "Prototipação acelerada e testes automatizados que reduzem ciclos de validação.",
  },
  {
    icon: Target,
    title: "Decidir melhor",
    description: "Insights baseados em dados reais, não em achismos. Decisões com confiança.",
  },
  {
    icon: TrendingUp,
    title: "Escalar impacto",
    description: "Automação de processos repetitivos para focar no que realmente importa.",
  },
]

export function AIAdvantage() {
  return (
    <section id="ia" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/40 via-transparent to-primary-950/40" />
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-primary/5 blur-3xl" />
      <div className="absolute top-1/2 right-0 w-1/2 h-96 bg-accent/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-6">Diferencial</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              IA como <span className="text-primary text-glow">alavanca</span>,
              <br />não substituto.
            </h2>
            <p className="text-lg text-foreground-muted mb-8">
              Enquanto outros falam sobre IA, nós usamos. Integramos inteligência
              artificial em cada etapa do processo para{" "}
              <span className="text-foreground font-medium">
                potencializar a ação humana
              </span>
              , não para substituí-la.
            </p>
            <p className="text-foreground-muted">
              O resultado? Projetos que chegam mais rápido, com mais precisão e
              impacto mensurável.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {advantages.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border-glow bg-card/50 backdrop-blur-sm hover:bg-card transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-foreground-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
