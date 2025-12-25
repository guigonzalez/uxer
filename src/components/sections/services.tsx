"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import {
  Search,
  Palette,
  FlaskConical,
  Layers,
  Sparkles,
  GraduationCap,
} from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Research & Discovery",
    description:
      "Entendemos usuários, contextos e comportamentos antes de qualquer traço. Pesquisa que revela oportunidades reais.",
  },
  {
    icon: Palette,
    title: "Design de Interface",
    description:
      "Interfaces que funcionam. Design visual que comunica, guia e converte com clareza e propósito.",
  },
  {
    icon: FlaskConical,
    title: "Prototipagem & Testes",
    description:
      "Protótipos para validar antes de construir. Testes com usuários reais para decisões baseadas em evidência.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    description:
      "Sistemas de design escaláveis. Componentes, padrões e documentação para times que crescem.",
  },
  {
    icon: Sparkles,
    title: "UX com IA",
    description:
      "Inteligência artificial aplicada ao design. Análise de dados, automação de insights e experiências adaptativas.",
  },
  {
    icon: GraduationCap,
    title: "Treinamentos",
    description:
      "Capacitação de times em UX, pesquisa e design. Workshops práticos que transformam cultura.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Serviços
          </h2>
          <p className="text-3xl md:text-4xl font-bold">
            Do problema ao impacto.
          </p>
          <p className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto">
            Cada projeto é uma oportunidade de mudar comportamento.
            Oferecemos as ferramentas certas para cada desafio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={service.title} className="group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
