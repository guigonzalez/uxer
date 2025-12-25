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
      "Entendemos usu\u00e1rios, contextos e comportamentos antes de qualquer tra\u00e7o. Pesquisa que revela oportunidades reais.",
  },
  {
    icon: Palette,
    title: "Design de Interface",
    description:
      "Interfaces que funcionam. Design visual que comunica, guia e converte com clareza e prop\u00f3sito.",
  },
  {
    icon: FlaskConical,
    title: "Prototipagem & Testes",
    description:
      "Prot\u00f3tipos para validar antes de construir. Testes com usu\u00e1rios reais para decis\u00f5es baseadas em evid\u00eancia.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    description:
      "Sistemas de design escal\u00e1veis. Componentes, padr\u00f5es e documenta\u00e7\u00e3o para times que crescem.",
  },
  {
    icon: Sparkles,
    title: "UX com IA",
    description:
      "Intelig\u00eancia artificial aplicada ao design. An\u00e1lise de dados, automa\u00e7\u00e3o de insights e experi\u00eancias adaptativas.",
  },
  {
    icon: GraduationCap,
    title: "Treinamentos",
    description:
      "Capacita\u00e7\u00e3o de times em UX, pesquisa e design. Workshops pr\u00e1ticos que transformam cultura.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Servi\u00e7os
          </h2>
          <p className="text-3xl md:text-4xl font-bold">
            Do problema ao impacto.
          </p>
          <p className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto">
            Cada projeto \u00e9 uma oportunidade de mudar comportamento.
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
