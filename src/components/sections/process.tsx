"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const processSteps = [
  {
    id: "descobrir",
    number: "01",
    title: "Descobrir",
    description:
      "Mergulhamos no contexto. Entrevistas, an\u00e1lise de dados, mapeamento de jornadas. Entendemos o problema real antes de propor solu\u00e7\u00f5es.",
    deliverables: ["Pesquisa com usu\u00e1rios", "An\u00e1lise de dados", "Mapa de oportunidades"],
  },
  {
    id: "definir",
    number: "02",
    title: "Definir",
    description:
      "Transformamos insights em dire\u00e7\u00e3o. Definimos o escopo, prioridades e m\u00e9tricas de sucesso. Alinhamento que evita retrabalho.",
    deliverables: ["Escopo definido", "M\u00e9tricas de sucesso", "Roadmap de design"],
  },
  {
    id: "desenvolver",
    number: "03",
    title: "Desenvolver",
    description:
      "Criamos solu\u00e7\u00f5es tang\u00edveis. Wireframes, prot\u00f3tipos, testes. Itera\u00e7\u00f5es r\u00e1pidas at\u00e9 encontrar o caminho certo.",
    deliverables: ["Wireframes", "Prot\u00f3tipos interativos", "Testes de usabilidade"],
  },
  {
    id: "entregar",
    number: "04",
    title: "Entregar",
    description:
      "Finalizamos com excel\u00eancia. Design final, documenta\u00e7\u00e3o, handoff para desenvolvimento. Acompanhamos at\u00e9 a implementa\u00e7\u00e3o.",
    deliverables: ["Design final", "Design system", "Documenta\u00e7\u00e3o completa"],
  },
]

export function Process() {
  return (
    <section id="processo" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Processo
            </h2>
            <p className="text-3xl md:text-4xl font-bold">
              M\u00e9todo para gerar impacto.
            </p>
            <p className="mt-4 text-lg text-foreground-muted">
              Cada etapa \u00e9 desenhada para reduzir incertezas e aumentar a
              confian\u00e7a nas decis\u00f5es.
            </p>
          </div>

          <Accordion type="single" collapsible defaultValue="descobrir">
            {processSteps.map((step) => (
              <AccordionItem key={step.id} value={step.id}>
                <AccordionTrigger>
                  <div className="flex items-center gap-4 text-left">
                    <span className="text-primary font-mono text-sm">
                      {step.number}
                    </span>
                    <span>{step.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-10">
                    <p className="mb-4">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
